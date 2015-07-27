module Slider where

import Html
import Json.Decode exposing ((:=))
import Html.Attributes exposing (type', value, class)
import Html.Events exposing (on)

valueDecoder =
  "target" := ("valueAsNumber" := Json.Decode.float)

type alias Options =
  { min   : Float
  , max   : Float
  , step  : Maybe Float
  , value : Float
  }

stepString : Maybe Float -> String
stepString mx =
  case mx of
    Just x ->
      toString x
    Nothing -> 
      "any"

slider : Options -> (Float -> Signal.Message) -> Html.Html
slider options f =
  Html.input
  [ type' "range"
  , class "mdl-slider mdl-js-slider"
  , Html.Attributes.tabindex 10
  , value (toString options.value)
  , Html.Attributes.max (toString options.max)
  , Html.Attributes.min (toString options.min)
  , Html.Attributes.step (stepString options.step)
  , on "input" valueDecoder f
  ]
  []

