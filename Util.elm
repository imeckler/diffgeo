module Util where

import Dict
import Debug
import Array exposing (Array)
import Maybe

(!) : Array a -> Int -> a
(!) arr i =
  case Array.get i arr of
    Just x -> x
    Nothing -> Debug.crash "!: Index not in array"

sequenceMaybe : List (Maybe a) -> Maybe (List a)
sequenceMaybe xs =
  case xs of
    Nothing :: _ ->
      Nothing

    Just x :: xs' ->
      Maybe.map ((::) x) (sequenceMaybe xs')

    [] ->
      Just []


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

revMap : (a -> b) -> List a -> List b
revMap f =
  let
    go acc xs =
      case xs of
        [] -> acc
        x :: xs' -> go (f x :: acc) xs'
  in
  go []

maybeMap2 : (a -> b -> c) -> Maybe a -> Maybe b -> Maybe c
maybeMap2 f ma mb =
  case ma of
    Just a ->
      case mb of
        Just b -> Just (f a b)
        Nothing -> Nothing
    Nothing -> Nothing
