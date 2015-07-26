module ODE where

import Expression exposing (Expression(..), Environment)
import Dict exposing (Dict)
import Native.ODE
import List
import String
import Debug

type alias ODESystem =
  { function       : JSFunction
  , indices        : Dict String Int
  }

type alias Solution =
  { jsSolution : JSSolution
  , names      : List String
  }

type JSSolution = JSSolution
type JSFunction = JSFunction

type alias Spec = Dict String Expression

envName : String
envName = "__odearr"

getExn : comparable -> Dict comparable v -> v
getExn k d =
  case Dict.get k d of
    Just x -> x
    Nothing -> Debug.crash ("getExn: " ++ toString k ++ " not in " ++ toString d)

parenthesize x = "(" ++ x ++ ")"

compileExpression : Dict String Int -> Expression -> String
compileExpression indices e =
  case e of
    Var x ->
      envName ++ "[" ++ toString (getExn x indices) ++ "]"

    Constant b ->
      parenthesize (toString b)

    Mul e1 e2 ->
      parenthesize (compileExpression indices e1 ++ "*" ++ compileExpression indices e2)

    Add e1 e2 ->
      parenthesize (compileExpression indices e1 ++ "+" ++ compileExpression indices e2)

    LogBase b e1 ->
      parenthesize ("Math.log(" ++ compileExpression indices e1 ++ ") / Math.log(" ++ toString b ++ ")")

    Exp b e1 ->
      "Math.pow(" ++ toString b ++ "," ++ compileExpression indices e1 ++ ")"

    Pow e1 p ->
      "Math.pow(" ++ compileExpression indices e1 ++ "," ++ toString p ++ ")"

    Sin e1 ->
      "Math.sin(" ++ compileExpression indices e1 ++ ")"

    Cos e1 ->
      "Math.cos(" ++ compileExpression indices e1 ++ ")"

makeIndicesOne : Expression -> (Dict String Int, Int) -> (Dict String Int, Int)
makeIndicesOne =
  let
    go e (acc, i) =
      case e of
        Var x ->
          case Dict.get x acc of
            Just _ ->
              (acc, i)

            Nothing ->
              (Dict.insert x i acc, i + 1)

        Constant _ ->
          (acc, i)

        Mul e1 e2 ->
          go e2 (go e1 (acc, i))

        Add e1 e2 ->
          go e2 (go e1 (acc, i))

        LogBase _ e1 ->
          go e1 (acc, i)

        Exp _ e1 ->
          go e1 (acc, i)

        Pow e1 _ ->
          go e1 (acc, i)

        Sin e1 ->
          go e1 (acc, i)

        Cos e1 ->
          go e1 (acc, i)
  in
  go

makeIndices : Spec -> Dict String Int
makeIndices spec = fst (Dict.foldl (\var expr (acc, i) -> (Dict.insert var i acc, i + 1)) (Dict.empty, 0) spec)

compile : Spec -> ODESystem
compile spec =
  let indices =
        makeIndices spec

      exprArrayString =
        -- TODO: This code relies on the fact that Dict.values traverses spec in the same order
        -- in which indices were assigned
        "[" ++ String.join "," (List.map (compileExpression indices) (Dict.values spec)) ++ "]"
  in
  { function       = Native.ODE.evaluate ("(function(t," ++ envName ++ "){return " ++ exprArrayString ++ "})")
  , indices        = indices
  }

solve : Float -> Float -> Environment -> ODESystem -> Float -> Int -> Solution
solve lower upper initial system precision maxIterations =
  let
    _ = Debug.log "indices" system.indices

    (initialList, names) =
      let inits =
            Dict.toList initial
            |> List.map (\(x, val) -> {index=getExn x system.indices, value=val, name=x})
            |> List.sortBy .index
          _ = Debug.log "yoyo" ()
      in
      (List.map .value inits, List.map .name inits)
  in
  { jsSolution = Native.ODE.solve lower upper initialList system.function precision maxIterations
  , names = names
  }

at : Solution -> Float -> Environment
at solution t = Dict.fromList (List.map2 (,) solution.names (Native.ODE.at solution.jsSolution t))

parseExn : String -> Expression
parseExn s = case Expression.parse s of Ok e -> e

{-
test : Float -> ()
test =
  let
    spec = Dict.fromList <| List.map (\(v,e) -> (v, parseExn e))
      [ ("x1", "dx1")
      , ("x2", "dx2")
      , ("dx1", "-2 * cos(x2)/sin(x2) * dx1 * dx2")
      , ("dx2", "sin(x2) * cos(x2) * dx1 * dx1")
      ]

    init = Dict.fromList
      [ ("dx1", 1)
      , ("dx2", 1)
      , ("x1", pi)
      , ("x2", pi/2)
      ]

    soln = solve 0 1 init (compile spec) 0.00001 1000
  in
  \t -> let _ = Debug.log "test" (at soln t) in ()
-}
