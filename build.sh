if [ ! -d www ]; then
  mkdir www
fi

yes | elm-make Main.elm --output www/elm.js
