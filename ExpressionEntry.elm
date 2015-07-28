module ExpressionEntry where

import Html
import Json.Decode exposing ((:=))
import Html.Attributes exposing (type', value, style)
import Html.Events exposing (on)
import Expression

valueDecoder =
  "target" := ("value" := Json.Decode.string)

expressionEntry : String -> (String -> Signal.Message) -> Html.Html
expressionEntry content f =
  let
    color =
      case Expression.parse str of
        Ok _ ->
          "white"
        _ ->
          "#DA7F7F"
  in
  Html.input
  [ type' "text"
  , style [("width", "108px"), ("backgroundColor", color)]
  , value content
  , on "input" valueDecoder f
  ]
  []
