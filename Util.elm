module Util where

import Dict
import Debug
import Array exposing (Array)

(!) : Array a -> Int -> a
(!) arr i =
  case Array.get i arr of
    Just x -> x
    Nothing -> Debug.crash "!: Index not in array"

getExn : comparable -> Dict.Dict comparable v -> v
getExn k d =
  case Dict.get k d of
    Just x -> x
    Nothing -> Debug.crash ("getExn: " ++ toString k ++ " not in dict")

both : (a -> b) -> (a, a) -> (b, b)
both f (x, y) = (f x, f y)

takeWhile : (a -> Bool) -> List a -> List a
takeWhile f xs =
  case xs of
    [] ->
      []

    x :: xs' -> 
      if f x then x :: takeWhile f xs' else []

dropWhile : (a -> Bool) -> List a -> List a
dropWhile f xs =
  case xs of
    [] ->
      []

    x :: xs' ->
      if f x then dropWhile f xs' else xs

