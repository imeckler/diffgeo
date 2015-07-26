module Main where

import Expression exposing (Expression(..), derivative)
import ODE
import Dict
import Graphics.Collage exposing (..)
import Debug

-- we use the coordinates "x1" and "x2"

-- (a, b, c, d) is [[a, b], [c, d]]
type alias TwoForm = (Expression, Expression, Expression, Expression)

christoffelFirst1 (g11, g12, g21, g22) =
  let
    gamma121 =
      Mul (Constant 0.5)
      -- TODO: Optimize. g12 = g21
        (Add (Mul (Constant -1) (derivative "x1" g12))
          (Add (derivative "x2" g11)
            (derivative "x1" g21)))
  in
  -- \Gamma_{11,1}
  ( Mul (Constant 0.5) (derivative "x1" g11)
  -- \Gamma_{12,1}
  , gamma121
  -- \Gamma_{21,1}
  , gamma121
  -- \Gamma_{22,1}
  , Add (derivative "x2" g21)
      (Mul (Constant -0.5) (derivative "x1" g22))
  )

christoffelFirst2 (g11, g12, g21, g22) =
  let
    gamma122 = Mul (Constant 0.5) (derivative "x1" g22)
  in
  -- \Gamma_{11,2}
  ( Add (derivative "x1" g12)
      (Mul (Constant -0.5) (derivative "x2" g11))
  -- \Gamma_{12,2}
  , gamma122
  -- \Gamma_{21,2}
  , gamma122
  -- \Gamma_{22,2}
  , Mul (Constant 0.5) (derivative "x2" g22)
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
            (Add (Mul (Var "x1") (Var "x1")) (Mul (Var "x2") (Var "x2")))
        ])
        -2
  in
  (c, Constant 0, Constant 0, c)

f g =
  let
    (gamma111,gamma121,gamma211, gamma221) = christoffelSecond1 g
    (gamma112,gamma122,gamma212, gamma222) = christoffelSecond2 g

    spec = Dict.fromList
      [ ("x1", Var "dx1")
      , ("x2", Var "dx2")
      , ("dx1"
        , Mul (Constant -1) <| sum
          [ prod [ gamma111, Var "dx1", Var "dx1" ]
          , prod [ gamma121, Var "dx1", Var "dx2" ]
          , prod [ gamma211, Var "dx2", Var "dx1" ]
          , prod [ gamma221, Var "dx2", Var "dx2" ]
          ]
        )
      , ("dx1"
        , Mul (Constant -1) <| sum
          [ prod [ gamma111, Var "dx1", Var "dx1" ]
          , prod [ gamma121, Var "dx1", Var "dx2" ]
          , prod [ gamma211, Var "dx2", Var "dx1" ]
          , prod [ gamma221, Var "dx2", Var "dx2" ]
          ]
        )
      ]

    system = ODE.compile spec
  in
  system


test =
  let
    init = Dict.fromList
      [ ("dx1", 0)
      , ("dx2", 1)
      , ("x1", 0.5)
      , ("x2", 0)
      ]
    system = f poincare
    () = Debug.log "poop"
    soln = ODE.solve 0 100 init system 0.00001 1000
  in
  soln

