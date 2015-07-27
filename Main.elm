module Main where

import Expression exposing (Expression(..), derivative)
import ODE
import Dict
import Graphics.Collage exposing (..)
import Graphics.Element exposing (Element)
import Json.Decode exposing ((:=))
import Debug
import Color
import Signal
import Signal.Extra as Signal
import Mouse
import Keyboard
import Util exposing (..)
import Time
import Window
import Html exposing (div)
import Html.Events exposing (onMouseDown, onClick, on)
import Html.Attributes exposing (style, type', attribute, href, rel, src, class)
import Slider exposing (slider)

-- we use the coordinates coord1 and coord2

-- (a, b, c, d) is [[a, b], [c, d]]
type alias TwoForm = (Expression, Expression, Expression, Expression)

coord1 = "x"
coord2 = "y"
dcoord1 = "dx"
dcoord2 = "dy"

christoffelFirst1 (g11, g12, g21, g22) =
  let
    gamma121 =
      Mul (Constant 0.5)
      -- TODO: Optimize. g12 = g21
        (Add (Mul (Constant -1) (derivative coord1 g12))
          (Add (derivative coord2 g11)
            (derivative coord1 g21)))
  in
  -- \Gamma_{11,1}
  ( Mul (Constant 0.5) (derivative coord1 g11)
  -- \Gamma_{12,1}
  , gamma121
  -- \Gamma_{21,1}
  , gamma121
  -- \Gamma_{22,1}
  , Add (derivative coord2 g21)
      (Mul (Constant -0.5) (derivative coord1 g22))
  )

christoffelFirst2 (g11, g12, g21, g22) =
  let
    gamma122 = Mul (Constant 0.5) (derivative coord1 g22)
  in
  -- \Gamma_{11,2}
  ( Add (derivative coord1 g12)
      (Mul (Constant -0.5) (derivative coord2 g11))
  -- \Gamma_{12,2}
  , gamma122
  -- \Gamma_{21,2}
  , gamma122
  -- \Gamma_{22,2}
  , Mul (Constant 0.5) (derivative coord2 g22)
  )

invert (g11, g12, g21, g22) =
  let c = Pow (Add (Mul g11 g22) (Mul (Constant -1) (Mul g12 g21))) -1
  in
  ( Mul c g22
  , Mul c (Mul (Constant -1) g12)
  , Mul c (Mul (Constant -1) g21)
  , Mul c g11
  )

christoffelSecond1 ((g11,g12,g21,g22) as g) =
  let (h11, h12, h21, h22) = invert g
      (gamma111, gamma121, gamma211, gamma221) = christoffelFirst1 g
      (gamma112, gamma122, gamma212, gamma222) = christoffelFirst2 g
      gammaSecond121 =
        sum [ Mul h11 gamma121, Mul h12 gamma122 ]
  in
  -- \Gamma_{11}^1
  ( sum [ Mul h11 gamma111, Mul h12 gamma112 ]
  -- \Gamma_{12}^1
  , gammaSecond121
  -- \Gamma_{21}^1
  , gammaSecond121
  -- \Gamma_{22}^1
  , sum [ Mul h11 gamma221, Mul h12 gamma222 ]
  )

christoffelSecond2 ((g11,g12,g21,g22) as g) =
  let (h11, h12, h21, h22) = invert g
      (gamma111, gamma121, gamma211, gamma221) = christoffelFirst1 g
      (gamma112, gamma122, gamma212, gamma222) = christoffelFirst2 g
      gammaSecond122 =
        sum [ Mul h21 gamma121, Mul h22 gamma122 ]
  in
  ( sum [ Mul h21 gamma111, Mul h22 gamma112 ]
  , gammaSecond122
  , gammaSecond122
  , sum [ Mul h21 gamma221, Mul h22 gamma222 ]
  )

parseExn : String -> Expression
parseExn s = case Expression.parse s of Ok e -> e

sum (e::es) = List.foldl Add e es
prod (e::es) = List.foldl Mul e es

-- TODO: Inline to avoid repeated computation
poincare =
  let
    c =
      Pow
        (sum
        [ Constant 1
        , Mul (Constant -1)
            (Add (Mul (Var coord1) (Var coord1)) (Mul (Var coord2) (Var coord2)))
        ])
        -2
  in
  (c, Constant 0, Constant 0, c)

geodesicSystem : TwoForm -> ODE.System
geodesicSystem g =
  let
    (gamma111,gamma121,gamma211, gamma221) = christoffelSecond1 g
    (gamma112,gamma122,gamma212, gamma222) = christoffelSecond2 g

    spec = Dict.fromList
      [ (coord1, Var dcoord1)
      , (coord2, Var dcoord2)
      , (dcoord1
        , Mul (Constant -1) <| sum
          [ prod [ gamma111, Var dcoord1, Var dcoord1 ]
          , prod [ gamma121, Var dcoord1, Var dcoord2 ]
          , prod [ gamma211, Var dcoord2, Var dcoord1 ]
          , prod [ gamma221, Var dcoord2, Var dcoord2 ]
          ]
        )
      , (dcoord2
        , Mul (Constant -1) <| sum
          [ prod [ gamma112, Var dcoord1, Var dcoord1 ]
          , prod [ gamma122, Var dcoord1, Var dcoord2 ]
          , prod [ gamma212, Var dcoord2, Var dcoord1 ]
          , prod [ gamma222, Var dcoord2, Var dcoord2 ]
          ]
        )
      ]
  in
  ODE.compile spec

type alias State =
  { system       : ODE.System
  , metric       : TwoForm -- Can precompile if this is slow
  , currGeodesic : ODE.Solution
  , geodesicPos  : Float
  , scaleFactor  : Float
  , pan          : (Float, Float)
  -- If we should leave a trail, this is Just t where t is where along
  -- the current geodesic we should start the trail. Otherwise it is Nothing
  , trailStart   : Maybe Float
  , trail        : List (List (Float, Float))
  , speed        : Float
  , turningSpeed : Float
  {-
  , pos          : (Float, Float)
  , dir          : (Float, Float) -}
  }

-- Inputs
mouseDownsInSpaceDivBox : Signal.Mailbox ()
mouseDownsInSpaceDivBox = Signal.mailbox ()

toggleLeaveTrailBox : Signal.Mailbox ()
toggleLeaveTrailBox = Signal.mailbox ()

pans : Signal (Float, Float)
pans =
  let 
    mouseUps =
      Signal.filterMap (\d -> if d then Nothing else Just False) False Mouse.isDown

    dragging =
      Signal.merge mouseUps
        (Signal.map (\_ -> True) mouseDownsInSpaceDivBox.signal)
  in
  Signal.foldps (\(xi, yi) (prevX, prevY) ->
    let (x, y) = (toFloat xi, toFloat yi) in
    ((x - prevX, y - prevY), (x, y)))
    ((0, 0), (0, 0))
    Mouse.position
  |> Signal.keepWhen dragging (0, 0)

type Update
  = Keys {delta : Float, keys : { x : Int, y : Int }}
  | Pan (Float, Float)
  | ClearTrail
  | ToggleLeaveTrail
  | ToggleShowFuture
  | Zoom Float
  | SetScaleFactor Float
  | SetSpeed Float
  | SetTurningSpeed Float
  | NoOp

updateBox : Signal.Mailbox Update
updateBox = Signal.mailbox NoOp

keys : Signal { delta : Float, keys : { x : Int, y : Int } }
keys =
  let delta = Time.fps 30 in
  Signal.sampleOn delta
    (Signal.map2 (\d k -> {delta=d, keys=k}) delta Keyboard.arrows)

updates : Signal Update
updates =
  Signal.mergeMany
  [ Signal.map Pan pans
  , Signal.map Keys keys
  , updateBox.signal
  ]

futureLength = 1

currentDet : State -> Float
currentDet s =
  let
    (g11, g12, g21, g22) = s.metric
    -- I compute posAndVel just before in update. If it's slow I can cut reuse the computation.
    posAndVel = ODE.at s.currGeodesic s.geodesicPos
    {-
    x = getExn posAndVel coord1
    y = getExn posAndVel coord2 -}
    a11 = Expression.evaluateExn g11 posAndVel
    a12 = Expression.evaluateExn g12 posAndVel
    a21 = a12
    a22 = Expression.evaluateExn g22 posAndVel
  in
  a11 * a22 - a21 * a12

currentNorm : State -> (Float, Float) -> Float
currentNorm s =
  let
    (g11, g12, g21, g22) = s.metric
    -- I compute posAndVel just before in update. If it's slow I can cut reuse the computation.
    posAndVel = ODE.at s.currGeodesic s.geodesicPos
    {-
    x = getExn posAndVel coord1
    y = getExn posAndVel coord2 -}
    a11 = Expression.evaluateExn g11 posAndVel
    a12 = Expression.evaluateExn g12 posAndVel
    a21 = a12
    a22 = Expression.evaluateExn g22 posAndVel
  in
  \(x, y) -> sqrt (x * (a11 * x + a12 * y) + y * (a21 * x + a22 * y))

update : Update -> State -> State
update u s =
  case u of
    NoOp ->
      s

    Zoom z ->
      { s | scaleFactor <- s.scaleFactor * (1.01 ^ z) }

    Keys kd ->
      updateKeys kd s

    Pan (dx, dy) ->
      let (x, y) = s.pan in
      { s | pan <- (x + dx, y + dy) }

    ToggleLeaveTrail ->
      case s.trailStart of
        Nothing ->
          { s | trailStart <- Just s.geodesicPos }

        Just start ->
          let
            trail' =
              if s.geodesicPos > 0
              then 
                geodesicPathFromTill start s.geodesicPos s.currGeodesic
                :: s.trail
              else
                s.trail
          in
          { s | trail <- trail', trailStart <- Nothing }

    SetScaleFactor x ->
      { s | scaleFactor <- x }

    SetSpeed x ->
      { s | speed <- x }

    SetTurningSpeed x ->
      { s | turningSpeed <- x }

    ClearTrail ->
      let
        trailStart' = Maybe.map (\_ -> s.geodesicPos) s.trailStart
      in
      { s | trail <- [], trailStart <- trailStart' }

shouldLeaveTrail : State -> Bool
shouldLeaveTrail s =
  case s.trailStart of { Just _ -> True; _ -> False }

-- TODO change to pattern match on the record. Currently a syntax error (bug)
updateKeys : {delta : Float, keys : {x:Int, y:Int}} -> State -> State
updateKeys kd s =
  let dt           = kd.delta
      keys         = kd.keys
      rate         = 1 / 2000
      geodesicPos' = s.geodesicPos + s.speed * dt * toFloat keys.y
  in
  if keys.x == 0
  then
  -- TODO: It's a bit suspect that I only refresh geodesicPos in here. Should also
  -- in the other branch, or less wastefully just turn before moving forward in the other branch.
    if geodesicPos' >= futureLength
    then
      let trail' =
        case s.trailStart of
          Nothing ->
            s.trail
          Just start ->
            geodesicPathFromTill start geodesicPos' s.currGeodesic
            :: s.trail
      in
      { s
      | geodesicPos <- 0
      , currGeodesic <- ODE.solve 0 futureLength (ODE.at s.currGeodesic s.geodesicPos) s.system 0.000001 1000
      , trail <- trail'
      , trailStart <- Maybe.map (\_ -> 0) s.trailStart
      }
    else { s | geodesicPos <- geodesicPos' }
  else
    let
      posAndVel =
        ODE.at s.currGeodesic geodesicPos'

      (velX, velY) =
        (getExn dcoord1 posAndVel, getExn dcoord2 posAndVel)

      angle' = 
        Debug.log "angle" (atan2 velY velX) + s.turningSpeed * (-1 * toFloat keys.x)

      -- possibly have to normalize this vector wrt to the metric to get
      -- a unit speed geodesic
      posAndVel' =
        let
          velX' = cos angle'
          velY' = sin angle'
          norm = currentNorm s (velX', velY')
        in
        Dict.insert dcoord1 (velX' / norm)
          (Dict.insert dcoord2 (velY' / norm) posAndVel)

      trail' =
        case s.trailStart of
          Nothing ->
            s.trail
          Just start ->
            if geodesicPos' > 0
            then geodesicPathFromTill start geodesicPos' s.currGeodesic :: s.trail
            else s.trail
    in
    { s
    | geodesicPos <- 0
    -- If need be, can solve in a smaller interval and refresh when
    -- geodesicPos is too big
    , currGeodesic <- ODE.solve 0 futureLength posAndVel' s.system 0.000001 1000
    , trail <- trail'
    , trailStart <- Maybe.map (\_ -> 0) s.trailStart
    }

drawSpace : State -> Form
drawSpace s =
  let posAndVel = ODE.at s.currGeodesic s.geodesicPos
      xReal = getExn coord1 posAndVel
      yReal = getExn coord2 posAndVel 
      x = s.scaleFactor * xReal
      y = s.scaleFactor * yReal
      dx = s.scaleFactor * getExn dcoord1 posAndVel
      dy = s.scaleFactor * getExn dcoord2 posAndVel
      (px, py) = s.pan
  in
  group
  -- Would love to actually approximate circles by probing a fixed distance along geodesics.
  -- Instead I sort of approximate it by trying to keep its area roughly correct
  [ circle (s.scaleFactor / (3 * sqrt (currentDet s))) |> filled Color.black |> move (x, y)
  {-
  [ move (x,y) 
      (filled Color.black
        (trueCircle s.system s.scaleFactor (xReal, yReal) 0.3)) -}
  , traced (solid Color.blue) (path [(x, y), (x + dx, y + dy)])
  , case s.trailStart of
      Just start ->
        drawGeodesicFromTil
          s.scaleFactor start s.geodesicPos s.currGeodesic 
      Nothing ->
        group []
  , group
    (List.map
      (traced (solid Color.green) << path << List.map (\(x,y) -> (x*s.scaleFactor, y*s.scaleFactor)))
      s.trail)
  ]
  |> move (px, -py)

drawGeodesic : Float -> ODE.Solution -> Form
drawGeodesic scaleFactor sol =
  let
    pts =
      List.map (\e -> (scaleFactor * getExn coord1 e, scaleFactor * getExn coord2 e))
        (ODE.solutionValues sol)
  in
  traced (solid Color.red) (path pts)

drawGeodesicTil : Float -> Float -> ODE.Solution -> Form
drawGeodesicTil scaleFactor distance geodesic =
  let
    _ = Debug.log "distance" distance
    toPt e = (scaleFactor * getExn coord1 e, scaleFactor * getExn coord2 e)
    pts =
      List.map snd
        (takeWhile (\(t, pt) -> t <= distance) <| Debug.log "allpts"
          (List.map2 (\t e ->
            (t, toPt e))
            (ODE.solutionParameters geodesic)
            (ODE.solutionValues geodesic)))
        ++ [ toPt (ODE.at geodesic distance) ]
  in
  traced (solid Color.green) (path pts)

-- Pretty annoying that this is gonna get recomputed on every tick
geodesicPathFromTill : Float -> Float -> ODE.Solution -> List (Float, Float)
geodesicPathFromTill start stop geodesic =
  let
    toPt e =
      (getExn coord1 e, getExn coord2 e)
  in
  path (
  toPt (ODE.at geodesic start)
  ::
  List.map snd
    (takeWhile (\(t, _) -> t <= stop)
      (dropWhile (\(t, _) -> t <= start)
        (List.map2 (\t e ->
          (t, toPt e))
          (ODE.solutionParameters geodesic)
          (ODE.solutionValues geodesic))))
    ++ [ toPt (ODE.at geodesic stop) ])

drawGeodesicFromTil : Float -> Float -> Float -> ODE.Solution -> Form
drawGeodesicFromTil scaleFactor start stop geodesic =
  let
    toPt e = (scaleFactor * getExn coord1 e, scaleFactor * getExn coord2 e)
    pts =
      toPt (ODE.at geodesic start)
      ::
      List.map snd
        (takeWhile (\(t, _) -> t <= stop)
          (dropWhile (\(t, _) -> t <= start)
            (List.map2 (\t e ->
              (t, toPt e))
              (ODE.solutionParameters geodesic)
              (ODE.solutionValues geodesic))))
        ++ [ toPt (ODE.at geodesic stop) ]
  in
  traced (solid Color.green) (path pts)

halfPlane =
  let c = Pow (Var coord2) -2 in
  (c, Constant 0, Constant 0, c)

-- seems like everything gets you something similar
noparabola =
  let
    c =
      Pow
      (Add (Var coord2) (Mul (Constant -1) (Mul (Var coord1) (Var coord1))))
      -1
  in
  (c, Constant 0, Constant 0, c)

-- this is a nice one
curvy =
  let
    c =
      Pow
      (Add (Mul (Var coord2) (Var coord2)) (Mul (Var coord1) (Var coord1)))
      2
  in
  (c, Constant 0, Constant 0, c)

mystery =
  let
    c = Var coord2
  in
  (c, Constant 0, Constant 0, c)

px x = toString x ++ "px"

trueCircle : ODE.System -> Float -> (Float, Float) -> Float -> List (Float, Float)
trueCircle system scaleFactor (x, y) r =
  let n = 100
      dt = 2 * pi / n
      env0 = Dict.fromList [(coord1, x), (coord2, y), (dcoord1, 0), (dcoord2, 0)]
      go acc i =
        if i == n
        then polygon acc
        else
          let
            theta = (2*pi*i)/n
            vx = cos theta -- do I have to normalise...?
            vy = sin theta
            sol =
              ODE.solve 0 r
                (Dict.insert dcoord1 vx (Dict.insert dcoord2 vy env0))
                system
                0.000001
                1000
            solAtR = ODE.at sol r
          in
          go
            ((scaleFactor * getExn coord1 solAtR, scaleFactor * getExn coord2 solAtR) :: acc)
            (i + 1)
  in
  go [] 0

draw : (Int, Int) -> State -> Element
draw (w, h) s =
  let
    labelSlider label sliderElt =
      div [ style [("textAlign", "center")] ]
      [ Html.text label
      , sliderElt
      ]

    mkCheckBox id label checked upd =
      Html.label
      [ class "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
      , Html.Attributes.for id
      ]
      [ Html.input
        ((if checked then [attribute "checked" ""] else []) ++
        [ type' "checkbox"
        , class "mdl-checkbox__input"
        , Html.Attributes.id id
        , onClick updateBox.address upd
        ])
        []
      , Html.span
        [ class "mdl-checkbox__label" ]
        [ Html.text label ]
      ]

    toggleTrailCheck =
      mkCheckBox "toggleTrailCheck" "Leave trail" (shouldLeaveTrail s) ToggleLeaveTrail

    toggleShowFutureCheck =
      mkCheckBox "toggleShowFutureCheck" "Show extended line"
        s.showFuture ToggleShowFuture

    clearTrailButton =
      Html.button
      [ onClick updateBox.address ClearTrail
      , class "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
      ]
      [ Html.text "Clear trail" ]

    speedSlider =
      slider { min = 0 , max = 10/2000, value = s.speed, step = Nothing}
        (Signal.message updateBox.address << SetSpeed)

    turningSpeedSlider =
      slider { min = pi/Time.second, max = 100*pi/Time.second, value = s.turningSpeed ,step = Nothing}
        (Signal.message updateBox.address << SetTurningSpeed)

    scaleFactorSlider =
      slider
        { min = 1, max = 1000, value = s.scaleFactor, step = Nothing }
        (Signal.message updateBox.address << SetScaleFactor)

    annoyingOffsetForSliders = px 26

    sideBarWidth =
      300

    space =
      collage w h [drawSpace s]

    wrapSlider item =
      Html.li
      [ style
        [ ("paddingTop", px 10)
        , ("paddingBottom", px 10)
        ]
      ]
      [item]

    wrapNonSlider item =
      Html.li
      [ style
        [ ("paddingLeft", annoyingOffsetForSliders)
        , ("paddingTop", px 10), ("paddingBottom", px 10)
        ]
      ]
      [item]

    sideBar =
      Html.ul
      [ style
        [ ("width", px sideBarWidth) 
        , ("position", "absolute")
        , ("top", "0")
        , ("right", "0")
        , ("zIndex", "10")
        , ("listStyleType", "none")
        , ("padding", "0")
        , ("margin", "0")
        ]
      ]
      [ wrapNonSlider toggleTrailCheck
      , wrapNonSlider clearTrailButton
      , wrapSlider (labelSlider "Speed" speedSlider)
      , wrapSlider (labelSlider "Turn speed" turningSpeedSlider)
      ]
  in
  div [ style [("width", "100%")] ]
  [ Html.node "link"
    [ rel "stylesheet", href "https://storage.googleapis.com/code.getmdl.io/1.0.1/material.indigo-pink.min.css" ]
    []
  , Html.node "script"
    [ type' "text/javascript", src "https://storage.googleapis.com/code.getmdl.io/1.0.1/material.min.js" ]
    []
  , sideBar
  , div
    [ onMouseDown mouseDownsInSpaceDivBox.address () 
    , on "wheel" ("deltaY" := Json.Decode.float) (\z ->
        Signal.message updateBox.address (Zoom z))
    ]
    [ Html.fromElement space ]
  ]
  |> Html.toElement w h

main =
  let
    system =
      geodesicSystem poincare

    init = Dict.fromList
      [ (coord1, 0.5)
      , (coord2, 0.5)
      , (dcoord1, 0)
      , (dcoord2, 1)
      ]

    s0 =
      { geodesicPos = 0
      , system = system
      , metric = poincare
      , currGeodesic = ODE.solve 0 futureLength init system 0.000001 1000
      , scaleFactor = 200
      , pan = (0, 0)
      , trailStart = Just 0
      , trail = []
      , speed = 2 / 2000
      , turningSpeed = 30 * pi / Time.second
      }

    state = Signal.foldp update s0 updates
  in
  Signal.map2 (\(w,h) s ->
    let x = Debug.watch "pos" (ODE.at s.currGeodesic s.geodesicPos) in
    let _ = Debug.watch "state" s in
    draw (w,h) s)
    Window.dimensions
    state
  {-
  let
    init = Dict.fromList
      [ (dcoord1, 0)
      , (dcoord2, 1)
      , (coord1, 0.5)
      , (coord2, 0)
      ]
    system = geodesicSystem poincare
    () = Debug.log "poop"
    soln = ODE.solve 0 100 init system 0.00001 1000

    toPt env =
      (200 * getExn coord1 env, 200 * getExn coord2 env)
  in
  collage 500 500
  [ traced (solid Color.blue) (List.map toPt (ODE.solutionValues soln))
  , traced (solid Color.black) (circle 200 ++ [(200, 0)])
  ]
  -}

