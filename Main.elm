module Main where

import Expression exposing (Expression(..), derivative)
import ODE
import Dict
import Graphics.Collage exposing (..)
import Debug
import Color
import Signal
import Keyboard
import Util exposing (..)
import Time

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
  {-
  , pos          : (Float, Float)
  , dir          : (Float, Float) -}
  }

type alias Keys = { x : Int, y : Int }

input : Signal (Float, Keys)
input =
  let delta = Time.fps 30 in
  Signal.sampleOn delta (Signal.map2 (,) delta Keyboard.arrows)

futureLength = 1

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


update : (Float, Keys) -> State -> State
update (dt, keys) s =
  let rate         = 1 / 2000
      angleRate    = 20 * pi / Time.second
      geodesicPos' = s.geodesicPos + rate * dt * toFloat keys.y
  in
  if keys.x == 0
  then
  -- TODO: It's a bit suspect that I only refresh geodesicPos in here. Should also
  -- in the other branch, or less wastefully just turn before moving forward in the other branch.
    if geodesicPos' >= futureLength
    then
      { s
      | geodesicPos <- 0
      , currGeodesic <- ODE.solve 0 futureLength (ODE.at s.currGeodesic s.geodesicPos) s.system 0.000001 1000
      }
    else { s | geodesicPos <- geodesicPos' }
  else
    let
      posAndVel =
        ODE.at s.currGeodesic geodesicPos'

      (velX, velY) =
        (getExn dcoord1 posAndVel, getExn dcoord2 posAndVel)

      angle' = 
        Debug.log "angle" (atan2 velY velX) + angleRate * (-1 * toFloat keys.x)

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
    in
    { s
    | geodesicPos <- 0
    -- If need be, can solve in a smaller interval and refresh when
    -- geodesicPos is too big
    , currGeodesic <- ODE.solve 0 futureLength posAndVel' s.system 0.000001 1000
    }

draw : Float -> State -> Form
draw scaleFactor s =
  let posAndVel = ODE.at s.currGeodesic s.geodesicPos
      x = scaleFactor * getExn coord1 posAndVel
      y = scaleFactor * getExn coord2 posAndVel
      dx = scaleFactor * getExn dcoord1 posAndVel
      dy = scaleFactor * getExn dcoord2 posAndVel
  in
  group
  -- Would love to actually approximate circles by probing a fixed distance along geodesics.
  -- Instead I sort of approximate it by trying to keep its area roughly correct
  [ circle 10 |> filled Color.black |> move (x, y)
  , traced (solid Color.blue) (path [(x, y), (x + dx, y + dy)])
  ]

drawGeodesic : Float -> ODE.Solution -> Form
drawGeodesic scaleFactor sol =
  let
    pts =
      List.map (\e -> (scaleFactor * getExn coord1 e, scaleFactor * getExn coord2 e))
        (ODE.solutionValues sol)
  in
  traced (solid Color.red) (path pts)

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
mystery =
  let
    c =
      Pow
      (Add (Mul (Var coord2) (Var coord2)) (Mul (Var coord1) (Var coord1)))
      2
  in
  (c, Constant 0, Constant 0, c)

main =
  let
    system =
      geodesicSystem mystery

    init = Dict.fromList
      [ (coord1, 0)
      , (coord2, 1)
      , (dcoord1, 0)
      , (dcoord2, 1)
      ]

    s0 =
      { geodesicPos = 0
      , system = system
      , metric = mystery
      , currGeodesic = ODE.solve 0 futureLength init system 0.000001 1000
      }

    state = Signal.foldp update s0 input
  in
  Signal.map (\s -> let x = Debug.watch "pos" (ODE.at s.currGeodesic s.geodesicPos) in let _ = Debug.watch "state" s in collage 500 500 [draw 200 s, drawGeodesic 200 s.currGeodesic]) state
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

