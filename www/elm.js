var Elm = Elm || { Native: {} };
Elm.Array = Elm.Array || {};
Elm.Array.make = function (_elm) {
   "use strict";
   _elm.Array = _elm.Array || {};
   if (_elm.Array.values)
   return _elm.Array.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Array",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Array = Elm.Native.Array.make(_elm);
   var append = $Native$Array.append;
   var length = $Native$Array.length;
   var isEmpty = function (array) {
      return _U.eq(length(array),
      0);
   };
   var slice = $Native$Array.slice;
   var set = $Native$Array.set;
   var get = F2(function (i,
   array) {
      return _U.cmp(0,
      i) < 1 && _U.cmp(i,
      $Native$Array.length(array)) < 0 ? $Maybe.Just(A2($Native$Array.get,
      i,
      array)) : $Maybe.Nothing;
   });
   var push = $Native$Array.push;
   var empty = $Native$Array.empty;
   var filter = F2(function (isOkay,
   arr) {
      return function () {
         var update = F2(function (x,
         xs) {
            return isOkay(x) ? A2($Native$Array.push,
            x,
            xs) : xs;
         });
         return A3($Native$Array.foldl,
         update,
         $Native$Array.empty,
         arr);
      }();
   });
   var foldr = $Native$Array.foldr;
   var foldl = $Native$Array.foldl;
   var indexedMap = $Native$Array.indexedMap;
   var map = $Native$Array.map;
   var toIndexedList = function (array) {
      return A3($List.map2,
      F2(function (v0,v1) {
         return {ctor: "_Tuple2"
                ,_0: v0
                ,_1: v1};
      }),
      _L.range(0,
      $Native$Array.length(array) - 1),
      $Native$Array.toList(array));
   };
   var toList = $Native$Array.toList;
   var fromList = $Native$Array.fromList;
   var initialize = $Native$Array.initialize;
   var repeat = F2(function (n,e) {
      return A2(initialize,
      n,
      $Basics.always(e));
   });
   var Array = {ctor: "Array"};
   _elm.Array.values = {_op: _op
                       ,empty: empty
                       ,repeat: repeat
                       ,initialize: initialize
                       ,fromList: fromList
                       ,isEmpty: isEmpty
                       ,length: length
                       ,push: push
                       ,append: append
                       ,get: get
                       ,set: set
                       ,slice: slice
                       ,toList: toList
                       ,toIndexedList: toIndexedList
                       ,map: map
                       ,indexedMap: indexedMap
                       ,filter: filter
                       ,foldl: foldl
                       ,foldr: foldr};
   return _elm.Array.values;
};
Elm.Basics = Elm.Basics || {};
Elm.Basics.make = function (_elm) {
   "use strict";
   _elm.Basics = _elm.Basics || {};
   if (_elm.Basics.values)
   return _elm.Basics.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Basics",
   $Native$Basics = Elm.Native.Basics.make(_elm),
   $Native$Show = Elm.Native.Show.make(_elm),
   $Native$Utils = Elm.Native.Utils.make(_elm);
   var uncurry = F2(function (f,
   _v0) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2": return A2(f,
              _v0._0,
              _v0._1);}
         _U.badCase($moduleName,
         "on line 595, column 3 to 8");
      }();
   });
   var curry = F3(function (f,
   a,
   b) {
      return f({ctor: "_Tuple2"
               ,_0: a
               ,_1: b});
   });
   var flip = F3(function (f,b,a) {
      return A2(f,a,b);
   });
   var snd = function (_v4) {
      return function () {
         switch (_v4.ctor)
         {case "_Tuple2": return _v4._1;}
         _U.badCase($moduleName,
         "on line 573, column 3 to 4");
      }();
   };
   var fst = function (_v8) {
      return function () {
         switch (_v8.ctor)
         {case "_Tuple2": return _v8._0;}
         _U.badCase($moduleName,
         "on line 567, column 3 to 4");
      }();
   };
   var always = F2(function (a,
   _v12) {
      return function () {
         return a;
      }();
   });
   var identity = function (x) {
      return x;
   };
   _op["<|"] = F2(function (f,x) {
      return f(x);
   });
   _op["|>"] = F2(function (x,f) {
      return f(x);
   });
   _op[">>"] = F3(function (f,
   g,
   x) {
      return g(f(x));
   });
   _op["<<"] = F3(function (g,
   f,
   x) {
      return g(f(x));
   });
   _op["++"] = $Native$Utils.append;
   var toString = $Native$Show.toString;
   var isInfinite = $Native$Basics.isInfinite;
   var isNaN = $Native$Basics.isNaN;
   var toFloat = $Native$Basics.toFloat;
   var ceiling = $Native$Basics.ceiling;
   var floor = $Native$Basics.floor;
   var truncate = $Native$Basics.truncate;
   var round = $Native$Basics.round;
   var otherwise = true;
   var not = $Native$Basics.not;
   var xor = $Native$Basics.xor;
   _op["||"] = $Native$Basics.or;
   _op["&&"] = $Native$Basics.and;
   var max = $Native$Basics.max;
   var min = $Native$Basics.min;
   var GT = {ctor: "GT"};
   var EQ = {ctor: "EQ"};
   var LT = {ctor: "LT"};
   var compare = $Native$Basics.compare;
   _op[">="] = $Native$Basics.ge;
   _op["<="] = $Native$Basics.le;
   _op[">"] = $Native$Basics.gt;
   _op["<"] = $Native$Basics.lt;
   _op["/="] = $Native$Basics.neq;
   _op["=="] = $Native$Basics.eq;
   var e = $Native$Basics.e;
   var pi = $Native$Basics.pi;
   var clamp = $Native$Basics.clamp;
   var logBase = $Native$Basics.logBase;
   var abs = $Native$Basics.abs;
   var negate = $Native$Basics.negate;
   var sqrt = $Native$Basics.sqrt;
   var atan2 = $Native$Basics.atan2;
   var atan = $Native$Basics.atan;
   var asin = $Native$Basics.asin;
   var acos = $Native$Basics.acos;
   var tan = $Native$Basics.tan;
   var sin = $Native$Basics.sin;
   var cos = $Native$Basics.cos;
   _op["^"] = $Native$Basics.exp;
   _op["%"] = $Native$Basics.mod;
   var rem = $Native$Basics.rem;
   _op["//"] = $Native$Basics.div;
   _op["/"] = $Native$Basics.floatDiv;
   _op["*"] = $Native$Basics.mul;
   _op["-"] = $Native$Basics.sub;
   _op["+"] = $Native$Basics.add;
   var toPolar = $Native$Basics.toPolar;
   var fromPolar = $Native$Basics.fromPolar;
   var turns = $Native$Basics.turns;
   var degrees = $Native$Basics.degrees;
   var radians = function (t) {
      return t;
   };
   _elm.Basics.values = {_op: _op
                        ,max: max
                        ,min: min
                        ,compare: compare
                        ,not: not
                        ,xor: xor
                        ,otherwise: otherwise
                        ,rem: rem
                        ,negate: negate
                        ,abs: abs
                        ,sqrt: sqrt
                        ,clamp: clamp
                        ,logBase: logBase
                        ,e: e
                        ,pi: pi
                        ,cos: cos
                        ,sin: sin
                        ,tan: tan
                        ,acos: acos
                        ,asin: asin
                        ,atan: atan
                        ,atan2: atan2
                        ,round: round
                        ,floor: floor
                        ,ceiling: ceiling
                        ,truncate: truncate
                        ,toFloat: toFloat
                        ,degrees: degrees
                        ,radians: radians
                        ,turns: turns
                        ,toPolar: toPolar
                        ,fromPolar: fromPolar
                        ,isNaN: isNaN
                        ,isInfinite: isInfinite
                        ,toString: toString
                        ,fst: fst
                        ,snd: snd
                        ,identity: identity
                        ,always: always
                        ,flip: flip
                        ,curry: curry
                        ,uncurry: uncurry
                        ,LT: LT
                        ,EQ: EQ
                        ,GT: GT};
   return _elm.Basics.values;
};
Elm.Char = Elm.Char || {};
Elm.Char.make = function (_elm) {
   "use strict";
   _elm.Char = _elm.Char || {};
   if (_elm.Char.values)
   return _elm.Char.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Char",
   $Basics = Elm.Basics.make(_elm),
   $Native$Char = Elm.Native.Char.make(_elm);
   var fromCode = $Native$Char.fromCode;
   var toCode = $Native$Char.toCode;
   var toLocaleLower = $Native$Char.toLocaleLower;
   var toLocaleUpper = $Native$Char.toLocaleUpper;
   var toLower = $Native$Char.toLower;
   var toUpper = $Native$Char.toUpper;
   var isBetween = F3(function (low,
   high,
   $char) {
      return function () {
         var code = toCode($char);
         return _U.cmp(code,
         toCode(low)) > -1 && _U.cmp(code,
         toCode(high)) < 1;
      }();
   });
   var isUpper = A2(isBetween,
   _U.chr("A"),
   _U.chr("Z"));
   var isLower = A2(isBetween,
   _U.chr("a"),
   _U.chr("z"));
   var isDigit = A2(isBetween,
   _U.chr("0"),
   _U.chr("9"));
   var isOctDigit = A2(isBetween,
   _U.chr("0"),
   _U.chr("7"));
   var isHexDigit = function ($char) {
      return isDigit($char) || (A3(isBetween,
      _U.chr("a"),
      _U.chr("f"),
      $char) || A3(isBetween,
      _U.chr("A"),
      _U.chr("F"),
      $char));
   };
   _elm.Char.values = {_op: _op
                      ,isUpper: isUpper
                      ,isLower: isLower
                      ,isDigit: isDigit
                      ,isOctDigit: isOctDigit
                      ,isHexDigit: isHexDigit
                      ,toUpper: toUpper
                      ,toLower: toLower
                      ,toLocaleUpper: toLocaleUpper
                      ,toLocaleLower: toLocaleLower
                      ,toCode: toCode
                      ,fromCode: fromCode};
   return _elm.Char.values;
};
Elm.Color = Elm.Color || {};
Elm.Color.make = function (_elm) {
   "use strict";
   _elm.Color = _elm.Color || {};
   if (_elm.Color.values)
   return _elm.Color.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Color",
   $Basics = Elm.Basics.make(_elm);
   var Radial = F5(function (a,
   b,
   c,
   d,
   e) {
      return {ctor: "Radial"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d
             ,_4: e};
   });
   var radial = Radial;
   var Linear = F3(function (a,
   b,
   c) {
      return {ctor: "Linear"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var linear = Linear;
   var fmod = F2(function (f,n) {
      return function () {
         var integer = $Basics.floor(f);
         return $Basics.toFloat(A2($Basics._op["%"],
         integer,
         n)) + f - $Basics.toFloat(integer);
      }();
   });
   var rgbToHsl = F3(function (red,
   green,
   blue) {
      return function () {
         var b = $Basics.toFloat(blue) / 255;
         var g = $Basics.toFloat(green) / 255;
         var r = $Basics.toFloat(red) / 255;
         var cMax = A2($Basics.max,
         A2($Basics.max,r,g),
         b);
         var cMin = A2($Basics.min,
         A2($Basics.min,r,g),
         b);
         var c = cMax - cMin;
         var lightness = (cMax + cMin) / 2;
         var saturation = _U.eq(lightness,
         0) ? 0 : c / (1 - $Basics.abs(2 * lightness - 1));
         var hue = $Basics.degrees(60) * (_U.eq(cMax,
         r) ? A2(fmod,
         (g - b) / c,
         6) : _U.eq(cMax,
         g) ? (b - r) / c + 2 : _U.eq(cMax,
         b) ? (r - g) / c + 4 : _U.badIf($moduleName,
         "between lines 150 and 152"));
         return {ctor: "_Tuple3"
                ,_0: hue
                ,_1: saturation
                ,_2: lightness};
      }();
   });
   var hslToRgb = F3(function (hue,
   saturation,
   lightness) {
      return function () {
         var hue$ = hue / $Basics.degrees(60);
         var chroma = (1 - $Basics.abs(2 * lightness - 1)) * saturation;
         var x = chroma * (1 - $Basics.abs(A2(fmod,
         hue$,
         2) - 1));
         var $ = _U.cmp(hue$,
         0) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: 0
                  ,_2: 0} : _U.cmp(hue$,
         1) < 0 ? {ctor: "_Tuple3"
                  ,_0: chroma
                  ,_1: x
                  ,_2: 0} : _U.cmp(hue$,
         2) < 0 ? {ctor: "_Tuple3"
                  ,_0: x
                  ,_1: chroma
                  ,_2: 0} : _U.cmp(hue$,
         3) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: chroma
                  ,_2: x} : _U.cmp(hue$,
         4) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: x
                  ,_2: chroma} : _U.cmp(hue$,
         5) < 0 ? {ctor: "_Tuple3"
                  ,_0: x
                  ,_1: 0
                  ,_2: chroma} : _U.cmp(hue$,
         6) < 0 ? {ctor: "_Tuple3"
                  ,_0: chroma
                  ,_1: 0
                  ,_2: x} : {ctor: "_Tuple3"
                            ,_0: 0
                            ,_1: 0
                            ,_2: 0},
         r = $._0,
         g = $._1,
         b = $._2;
         var m = lightness - chroma / 2;
         return {ctor: "_Tuple3"
                ,_0: r + m
                ,_1: g + m
                ,_2: b + m};
      }();
   });
   var toRgb = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA":
            return function () {
                 var $ = A3(hslToRgb,
                 color._0,
                 color._1,
                 color._2),
                 r = $._0,
                 g = $._1,
                 b = $._2;
                 return {_: {}
                        ,alpha: color._3
                        ,blue: $Basics.round(255 * b)
                        ,green: $Basics.round(255 * g)
                        ,red: $Basics.round(255 * r)};
              }();
            case "RGBA": return {_: {}
                                ,alpha: color._3
                                ,blue: color._2
                                ,green: color._1
                                ,red: color._0};}
         _U.badCase($moduleName,
         "between lines 124 and 132");
      }();
   };
   var toHsl = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA": return {_: {}
                              ,alpha: color._3
                              ,hue: color._0
                              ,lightness: color._2
                              ,saturation: color._1};
            case "RGBA":
            return function () {
                 var $ = A3(rgbToHsl,
                 color._0,
                 color._1,
                 color._2),
                 h = $._0,
                 s = $._1,
                 l = $._2;
                 return {_: {}
                        ,alpha: color._3
                        ,hue: h
                        ,lightness: l
                        ,saturation: s};
              }();}
         _U.badCase($moduleName,
         "between lines 114 and 121");
      }();
   };
   var HSLA = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "HSLA"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var hsla = F4(function (hue,
   saturation,
   lightness,
   alpha) {
      return A4(HSLA,
      hue - $Basics.turns($Basics.toFloat($Basics.floor(hue / (2 * $Basics.pi)))),
      saturation,
      lightness,
      alpha);
   });
   var hsl = F3(function (hue,
   saturation,
   lightness) {
      return A4(hsla,
      hue,
      saturation,
      lightness,
      1);
   });
   var complement = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA": return A4(hsla,
              color._0 + $Basics.degrees(180),
              color._1,
              color._2,
              color._3);
            case "RGBA":
            return function () {
                 var $ = A3(rgbToHsl,
                 color._0,
                 color._1,
                 color._2),
                 h = $._0,
                 s = $._1,
                 l = $._2;
                 return A4(hsla,
                 h + $Basics.degrees(180),
                 s,
                 l,
                 color._3);
              }();}
         _U.badCase($moduleName,
         "between lines 105 and 111");
      }();
   };
   var grayscale = function (p) {
      return A4(HSLA,0,0,1 - p,1);
   };
   var greyscale = function (p) {
      return A4(HSLA,0,0,1 - p,1);
   };
   var RGBA = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "RGBA"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var rgba = RGBA;
   var rgb = F3(function (r,g,b) {
      return A4(RGBA,r,g,b,1);
   });
   var lightRed = A4(RGBA,
   239,
   41,
   41,
   1);
   var red = A4(RGBA,204,0,0,1);
   var darkRed = A4(RGBA,
   164,
   0,
   0,
   1);
   var lightOrange = A4(RGBA,
   252,
   175,
   62,
   1);
   var orange = A4(RGBA,
   245,
   121,
   0,
   1);
   var darkOrange = A4(RGBA,
   206,
   92,
   0,
   1);
   var lightYellow = A4(RGBA,
   255,
   233,
   79,
   1);
   var yellow = A4(RGBA,
   237,
   212,
   0,
   1);
   var darkYellow = A4(RGBA,
   196,
   160,
   0,
   1);
   var lightGreen = A4(RGBA,
   138,
   226,
   52,
   1);
   var green = A4(RGBA,
   115,
   210,
   22,
   1);
   var darkGreen = A4(RGBA,
   78,
   154,
   6,
   1);
   var lightBlue = A4(RGBA,
   114,
   159,
   207,
   1);
   var blue = A4(RGBA,
   52,
   101,
   164,
   1);
   var darkBlue = A4(RGBA,
   32,
   74,
   135,
   1);
   var lightPurple = A4(RGBA,
   173,
   127,
   168,
   1);
   var purple = A4(RGBA,
   117,
   80,
   123,
   1);
   var darkPurple = A4(RGBA,
   92,
   53,
   102,
   1);
   var lightBrown = A4(RGBA,
   233,
   185,
   110,
   1);
   var brown = A4(RGBA,
   193,
   125,
   17,
   1);
   var darkBrown = A4(RGBA,
   143,
   89,
   2,
   1);
   var black = A4(RGBA,0,0,0,1);
   var white = A4(RGBA,
   255,
   255,
   255,
   1);
   var lightGrey = A4(RGBA,
   238,
   238,
   236,
   1);
   var grey = A4(RGBA,
   211,
   215,
   207,
   1);
   var darkGrey = A4(RGBA,
   186,
   189,
   182,
   1);
   var lightGray = A4(RGBA,
   238,
   238,
   236,
   1);
   var gray = A4(RGBA,
   211,
   215,
   207,
   1);
   var darkGray = A4(RGBA,
   186,
   189,
   182,
   1);
   var lightCharcoal = A4(RGBA,
   136,
   138,
   133,
   1);
   var charcoal = A4(RGBA,
   85,
   87,
   83,
   1);
   var darkCharcoal = A4(RGBA,
   46,
   52,
   54,
   1);
   _elm.Color.values = {_op: _op
                       ,rgb: rgb
                       ,rgba: rgba
                       ,hsl: hsl
                       ,hsla: hsla
                       ,greyscale: greyscale
                       ,grayscale: grayscale
                       ,complement: complement
                       ,linear: linear
                       ,radial: radial
                       ,toRgb: toRgb
                       ,toHsl: toHsl
                       ,red: red
                       ,orange: orange
                       ,yellow: yellow
                       ,green: green
                       ,blue: blue
                       ,purple: purple
                       ,brown: brown
                       ,lightRed: lightRed
                       ,lightOrange: lightOrange
                       ,lightYellow: lightYellow
                       ,lightGreen: lightGreen
                       ,lightBlue: lightBlue
                       ,lightPurple: lightPurple
                       ,lightBrown: lightBrown
                       ,darkRed: darkRed
                       ,darkOrange: darkOrange
                       ,darkYellow: darkYellow
                       ,darkGreen: darkGreen
                       ,darkBlue: darkBlue
                       ,darkPurple: darkPurple
                       ,darkBrown: darkBrown
                       ,white: white
                       ,lightGrey: lightGrey
                       ,grey: grey
                       ,darkGrey: darkGrey
                       ,lightCharcoal: lightCharcoal
                       ,charcoal: charcoal
                       ,darkCharcoal: darkCharcoal
                       ,black: black
                       ,lightGray: lightGray
                       ,gray: gray
                       ,darkGray: darkGray};
   return _elm.Color.values;
};
Elm.Debug = Elm.Debug || {};
Elm.Debug.make = function (_elm) {
   "use strict";
   _elm.Debug = _elm.Debug || {};
   if (_elm.Debug.values)
   return _elm.Debug.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Debug",
   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
   $Native$Debug = Elm.Native.Debug.make(_elm);
   var trace = $Native$Debug.tracePath;
   var watchSummary = $Native$Debug.watchSummary;
   var watch = $Native$Debug.watch;
   var crash = $Native$Debug.crash;
   var log = $Native$Debug.log;
   _elm.Debug.values = {_op: _op
                       ,log: log
                       ,crash: crash
                       ,watch: watch
                       ,watchSummary: watchSummary
                       ,trace: trace};
   return _elm.Debug.values;
};
Elm.Dict = Elm.Dict || {};
Elm.Dict.make = function (_elm) {
   "use strict";
   _elm.Dict = _elm.Dict || {};
   if (_elm.Dict.values)
   return _elm.Dict.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Dict",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Debug = Elm.Native.Debug.make(_elm),
   $String = Elm.String.make(_elm);
   var foldr = F3(function (f,
   acc,
   t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            switch (t._0.ctor)
              {case "LBlack": return acc;}
              break;
            case "RBNode": return A3(foldr,
              f,
              A3(f,
              t._1,
              t._2,
              A3(foldr,f,acc,t._4)),
              t._3);}
         _U.badCase($moduleName,
         "between lines 417 and 425");
      }();
   });
   var keys = function (dict) {
      return A3(foldr,
      F3(function (key,
      value,
      keyList) {
         return A2($List._op["::"],
         key,
         keyList);
      }),
      _L.fromArray([]),
      dict);
   };
   var values = function (dict) {
      return A3(foldr,
      F3(function (key,
      value,
      valueList) {
         return A2($List._op["::"],
         value,
         valueList);
      }),
      _L.fromArray([]),
      dict);
   };
   var toList = function (dict) {
      return A3(foldr,
      F3(function (key,value,list) {
         return A2($List._op["::"],
         {ctor: "_Tuple2"
         ,_0: key
         ,_1: value},
         list);
      }),
      _L.fromArray([]),
      dict);
   };
   var foldl = F3(function (f,
   acc,
   dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack": return acc;}
              break;
            case "RBNode": return A3(foldl,
              f,
              A3(f,
              dict._1,
              dict._2,
              A3(foldl,f,acc,dict._3)),
              dict._4);}
         _U.badCase($moduleName,
         "between lines 406 and 414");
      }();
   });
   var isBBlack = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBBlack": return true;}
              break;
            case "RBNode":
            switch (dict._0.ctor)
              {case "BBlack": return true;}
              break;}
         return false;
      }();
   };
   var showFlag = function (f) {
      return function () {
         switch (f.ctor)
         {case "Insert": return "Insert";
            case "Remove": return "Remove";
            case "Same": return "Same";}
         _U.badCase($moduleName,
         "between lines 182 and 188");
      }();
   };
   var Same = {ctor: "Same"};
   var Remove = {ctor: "Remove"};
   var Insert = {ctor: "Insert"};
   var get = F2(function (targetKey,
   dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return $Maybe.Nothing;}
              break;
            case "RBNode":
            return function () {
                 var _v29 = A2($Basics.compare,
                 targetKey,
                 dict._1);
                 switch (_v29.ctor)
                 {case "EQ":
                    return $Maybe.Just(dict._2);
                    case "GT": return A2(get,
                      targetKey,
                      dict._4);
                    case "LT": return A2(get,
                      targetKey,
                      dict._3);}
                 _U.badCase($moduleName,
                 "between lines 129 and 135");
              }();}
         _U.badCase($moduleName,
         "between lines 124 and 135");
      }();
   });
   var member = F2(function (key,
   dict) {
      return function () {
         var _v30 = A2(get,key,dict);
         switch (_v30.ctor)
         {case "Just": return true;
            case "Nothing": return false;}
         _U.badCase($moduleName,
         "between lines 138 and 146");
      }();
   });
   var max = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            return $Native$Debug.crash("(max Empty) is not defined");
            case "RBNode":
            switch (dict._4.ctor)
              {case "RBEmpty":
                 return {ctor: "_Tuple2"
                        ,_0: dict._1
                        ,_1: dict._2};}
              return max(dict._4);}
         _U.badCase($moduleName,
         "between lines 100 and 121");
      }();
   };
   var min = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return $Native$Debug.crash("(min Empty) is not defined");}
              break;
            case "RBNode":
            switch (dict._3.ctor)
              {case "RBEmpty":
                 switch (dict._3._0.ctor)
                   {case "LBlack":
                      return {ctor: "_Tuple2"
                             ,_0: dict._1
                             ,_1: dict._2};}
                   break;}
              return min(dict._3);}
         _U.badCase($moduleName,
         "between lines 87 and 95");
      }();
   };
   var RBEmpty = function (a) {
      return {ctor: "RBEmpty"
             ,_0: a};
   };
   var RBNode = F5(function (a,
   b,
   c,
   d,
   e) {
      return {ctor: "RBNode"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d
             ,_4: e};
   });
   var showLColor = function (color) {
      return function () {
         switch (color.ctor)
         {case "LBBlack":
            return "LBBlack";
            case "LBlack": return "LBlack";}
         _U.badCase($moduleName,
         "between lines 70 and 72");
      }();
   };
   var LBBlack = {ctor: "LBBlack"};
   var LBlack = {ctor: "LBlack"};
   var empty = RBEmpty(LBlack);
   var isEmpty = function (dict) {
      return _U.eq(dict,empty);
   };
   var map = F2(function (f,dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return RBEmpty(LBlack);}
              break;
            case "RBNode": return A5(RBNode,
              dict._0,
              dict._1,
              A2(f,dict._1,dict._2),
              A2(map,f,dict._3),
              A2(map,f,dict._4));}
         _U.badCase($moduleName,
         "between lines 394 and 403");
      }();
   });
   var showNColor = function (c) {
      return function () {
         switch (c.ctor)
         {case "BBlack": return "BBlack";
            case "Black": return "Black";
            case "NBlack": return "NBlack";
            case "Red": return "Red";}
         _U.badCase($moduleName,
         "between lines 56 and 60");
      }();
   };
   var reportRemBug = F4(function (msg,
   c,
   lgot,
   rgot) {
      return $Native$Debug.crash($String.concat(_L.fromArray(["Internal red-black tree invariant violated, expected "
                                                             ,msg
                                                             ," and got "
                                                             ,showNColor(c)
                                                             ,"/"
                                                             ,lgot
                                                             ,"/"
                                                             ,rgot
                                                             ,"\nPlease report this bug to <https://github.com/elm-lang/Elm/issues>"])));
   });
   var NBlack = {ctor: "NBlack"};
   var BBlack = {ctor: "BBlack"};
   var Black = {ctor: "Black"};
   var ensureBlackRoot = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack": return dict;}
              break;
            case "RBNode":
            switch (dict._0.ctor)
              {case "Black": return dict;
                 case "Red": return A5(RBNode,
                   Black,
                   dict._1,
                   dict._2,
                   dict._3,
                   dict._4);}
              break;}
         _U.badCase($moduleName,
         "between lines 154 and 166");
      }();
   };
   var blackish = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty": return true;
            case "RBNode":
            return _U.eq(t._0,
              Black) || _U.eq(t._0,BBlack);}
         _U.badCase($moduleName,
         "between lines 339 and 341");
      }();
   };
   var blacken = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            return RBEmpty(LBlack);
            case "RBNode": return A5(RBNode,
              Black,
              t._1,
              t._2,
              t._3,
              t._4);}
         _U.badCase($moduleName,
         "between lines 378 and 380");
      }();
   };
   var Red = {ctor: "Red"};
   var moreBlack = function (color) {
      return function () {
         switch (color.ctor)
         {case "BBlack":
            return $Native$Debug.crash("Can\'t make a double black node more black!");
            case "Black": return BBlack;
            case "NBlack": return Red;
            case "Red": return Black;}
         _U.badCase($moduleName,
         "between lines 244 and 248");
      }();
   };
   var lessBlack = function (color) {
      return function () {
         switch (color.ctor)
         {case "BBlack": return Black;
            case "Black": return Red;
            case "NBlack":
            return $Native$Debug.crash("Can\'t make a negative black node less black!");
            case "Red": return NBlack;}
         _U.badCase($moduleName,
         "between lines 253 and 257");
      }();
   };
   var lessBlackTree = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBBlack":
                 return RBEmpty(LBlack);}
              break;
            case "RBNode": return A5(RBNode,
              lessBlack(dict._0),
              dict._1,
              dict._2,
              dict._3,
              dict._4);}
         _U.badCase($moduleName,
         "between lines 262 and 264");
      }();
   };
   var redden = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            return $Native$Debug.crash("can\'t make a Leaf red");
            case "RBNode": return A5(RBNode,
              Red,
              t._1,
              t._2,
              t._3,
              t._4);}
         _U.badCase($moduleName,
         "between lines 386 and 391");
      }();
   };
   var balance_node = function (t) {
      return function () {
         var assemble = function (col) {
            return function (xk) {
               return function (xv) {
                  return function (yk) {
                     return function (yv) {
                        return function (zk) {
                           return function (zv) {
                              return function (a) {
                                 return function (b) {
                                    return function (c) {
                                       return function (d) {
                                          return A5(RBNode,
                                          lessBlack(col),
                                          yk,
                                          yv,
                                          A5(RBNode,Black,xk,xv,a,b),
                                          A5(RBNode,Black,zk,zv,c,d));
                                       };
                                    };
                                 };
                              };
                           };
                        };
                     };
                  };
               };
            };
         };
         return blackish(t) ? function () {
            switch (t.ctor)
            {case "RBNode":
               switch (t._3.ctor)
                 {case "RBNode":
                    switch (t._3._0.ctor)
                      {case "Red":
                         switch (t._3._3.ctor)
                           {case "RBNode":
                              switch (t._3._3._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._3._3._1)(t._3._3._2)(t._3._1)(t._3._2)(t._1)(t._2)(t._3._3._3)(t._3._3._4)(t._3._4)(t._4);}
                                break;}
                           switch (t._3._4.ctor)
                           {case "RBNode":
                              switch (t._3._4._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._3._1)(t._3._2)(t._3._4._1)(t._3._4._2)(t._1)(t._2)(t._3._3)(t._3._4._3)(t._3._4._4)(t._4);}
                                break;}
                           break;}
                      break;}
                 switch (t._4.ctor)
                 {case "RBNode":
                    switch (t._4._0.ctor)
                      {case "Red":
                         switch (t._4._3.ctor)
                           {case "RBNode":
                              switch (t._4._3._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._1)(t._2)(t._4._3._1)(t._4._3._2)(t._4._1)(t._4._2)(t._3)(t._4._3._3)(t._4._3._4)(t._4._4);}
                                break;}
                           switch (t._4._4.ctor)
                           {case "RBNode":
                              switch (t._4._4._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._1)(t._2)(t._4._1)(t._4._2)(t._4._4._1)(t._4._4._2)(t._3)(t._4._3)(t._4._4._3)(t._4._4._4);}
                                break;}
                           break;}
                      break;}
                 switch (t._0.ctor)
                 {case "BBlack":
                    switch (t._4.ctor)
                      {case "RBNode":
                         switch (t._4._0.ctor)
                           {case "NBlack":
                              switch (t._4._3.ctor)
                                {case "RBNode":
                                   switch (t._4._3._0.ctor)
                                     {case "Black":
                                        return function () {
                                             switch (t._4._4.ctor)
                                             {case "RBNode":
                                                switch (t._4._4._0.ctor)
                                                  {case "Black":
                                                     return A5(RBNode,
                                                       Black,
                                                       t._4._3._1,
                                                       t._4._3._2,
                                                       A5(RBNode,
                                                       Black,
                                                       t._1,
                                                       t._2,
                                                       t._3,
                                                       t._4._3._3),
                                                       A5(balance,
                                                       Black,
                                                       t._4._1,
                                                       t._4._2,
                                                       t._4._3._4,
                                                       redden(t._4._4)));}
                                                  break;}
                                             return t;
                                          }();}
                                     break;}
                                break;}
                           break;}
                      switch (t._3.ctor)
                      {case "RBNode":
                         switch (t._3._0.ctor)
                           {case "NBlack":
                              switch (t._3._4.ctor)
                                {case "RBNode":
                                   switch (t._3._4._0.ctor)
                                     {case "Black":
                                        return function () {
                                             switch (t._3._3.ctor)
                                             {case "RBNode":
                                                switch (t._3._3._0.ctor)
                                                  {case "Black":
                                                     return A5(RBNode,
                                                       Black,
                                                       t._3._4._1,
                                                       t._3._4._2,
                                                       A5(balance,
                                                       Black,
                                                       t._3._1,
                                                       t._3._2,
                                                       redden(t._3._3),
                                                       t._3._4._3),
                                                       A5(RBNode,
                                                       Black,
                                                       t._1,
                                                       t._2,
                                                       t._3._4._4,
                                                       t._4));}
                                                  break;}
                                             return t;
                                          }();}
                                     break;}
                                break;}
                           break;}
                      break;}
                 break;}
            return t;
         }() : t;
      }();
   };
   var balance = F5(function (c,
   k,
   v,
   l,
   r) {
      return balance_node(A5(RBNode,
      c,
      k,
      v,
      l,
      r));
   });
   var bubble = F5(function (c,
   k,
   v,
   l,
   r) {
      return isBBlack(l) || isBBlack(r) ? A5(balance,
      moreBlack(c),
      k,
      v,
      lessBlackTree(l),
      lessBlackTree(r)) : A5(RBNode,
      c,
      k,
      v,
      l,
      r);
   });
   var remove_max = F5(function (c,
   k,
   v,
   l,
   r) {
      return function () {
         switch (r.ctor)
         {case "RBEmpty": return A3(rem,
              c,
              l,
              r);
            case "RBNode": return A5(bubble,
              c,
              k,
              v,
              l,
              A5(remove_max,
              r._0,
              r._1,
              r._2,
              r._3,
              r._4));}
         _U.badCase($moduleName,
         "between lines 323 and 328");
      }();
   });
   var rem = F3(function (c,l,r) {
      return function () {
         var _v169 = {ctor: "_Tuple2"
                     ,_0: l
                     ,_1: r};
         switch (_v169.ctor)
         {case "_Tuple2":
            switch (_v169._0.ctor)
              {case "RBEmpty":
                 switch (_v169._1.ctor)
                   {case "RBEmpty":
                      return function () {
                           switch (c.ctor)
                           {case "Black":
                              return RBEmpty(LBBlack);
                              case "Red":
                              return RBEmpty(LBlack);}
                           _U.badCase($moduleName,
                           "between lines 282 and 286");
                        }();
                      case "RBNode":
                      return function () {
                           var _v191 = {ctor: "_Tuple3"
                                       ,_0: c
                                       ,_1: _v169._0._0
                                       ,_2: _v169._1._0};
                           switch (_v191.ctor)
                           {case "_Tuple3":
                              switch (_v191._0.ctor)
                                {case "Black":
                                   switch (_v191._1.ctor)
                                     {case "LBlack":
                                        switch (_v191._2.ctor)
                                          {case "Red": return A5(RBNode,
                                               Black,
                                               _v169._1._1,
                                               _v169._1._2,
                                               _v169._1._3,
                                               _v169._1._4);}
                                          break;}
                                     break;}
                                break;}
                           return A4(reportRemBug,
                           "Black/LBlack/Red",
                           c,
                           showLColor(_v169._0._0),
                           showNColor(_v169._1._0));
                        }();}
                   break;
                 case "RBNode":
                 switch (_v169._1.ctor)
                   {case "RBEmpty":
                      return function () {
                           var _v195 = {ctor: "_Tuple3"
                                       ,_0: c
                                       ,_1: _v169._0._0
                                       ,_2: _v169._1._0};
                           switch (_v195.ctor)
                           {case "_Tuple3":
                              switch (_v195._0.ctor)
                                {case "Black":
                                   switch (_v195._1.ctor)
                                     {case "Red":
                                        switch (_v195._2.ctor)
                                          {case "LBlack":
                                             return A5(RBNode,
                                               Black,
                                               _v169._0._1,
                                               _v169._0._2,
                                               _v169._0._3,
                                               _v169._0._4);}
                                          break;}
                                     break;}
                                break;}
                           return A4(reportRemBug,
                           "Black/Red/LBlack",
                           c,
                           showNColor(_v169._0._0),
                           showLColor(_v169._1._0));
                        }();
                      case "RBNode":
                      return function () {
                           var l$ = A5(remove_max,
                           _v169._0._0,
                           _v169._0._1,
                           _v169._0._2,
                           _v169._0._3,
                           _v169._0._4);
                           var r = A5(RBNode,
                           _v169._1._0,
                           _v169._1._1,
                           _v169._1._2,
                           _v169._1._3,
                           _v169._1._4);
                           var l = A5(RBNode,
                           _v169._0._0,
                           _v169._0._1,
                           _v169._0._2,
                           _v169._0._3,
                           _v169._0._4);
                           var $ = max(l),
                           k = $._0,
                           v = $._1;
                           return A5(bubble,c,k,v,l$,r);
                        }();}
                   break;}
              break;}
         _U.badCase($moduleName,
         "between lines 280 and 309");
      }();
   });
   var update = F3(function (k,
   alter,
   dict) {
      return function () {
         var up = function (dict) {
            return function () {
               switch (dict.ctor)
               {case "RBEmpty":
                  switch (dict._0.ctor)
                    {case "LBlack":
                       return function () {
                            var _v206 = alter($Maybe.Nothing);
                            switch (_v206.ctor)
                            {case "Just":
                               return {ctor: "_Tuple2"
                                      ,_0: Insert
                                      ,_1: A5(RBNode,
                                      Red,
                                      k,
                                      _v206._0,
                                      empty,
                                      empty)};
                               case "Nothing":
                               return {ctor: "_Tuple2"
                                      ,_0: Same
                                      ,_1: empty};}
                            _U.badCase($moduleName,
                            "between lines 194 and 198");
                         }();}
                    break;
                  case "RBNode":
                  return function () {
                       var _v208 = A2($Basics.compare,
                       k,
                       dict._1);
                       switch (_v208.ctor)
                       {case "EQ": return function () {
                               var _v209 = alter($Maybe.Just(dict._2));
                               switch (_v209.ctor)
                               {case "Just":
                                  return {ctor: "_Tuple2"
                                         ,_0: Same
                                         ,_1: A5(RBNode,
                                         dict._0,
                                         dict._1,
                                         _v209._0,
                                         dict._3,
                                         dict._4)};
                                  case "Nothing":
                                  return {ctor: "_Tuple2"
                                         ,_0: Remove
                                         ,_1: A3(rem,
                                         dict._0,
                                         dict._3,
                                         dict._4)};}
                               _U.badCase($moduleName,
                               "between lines 201 and 206");
                            }();
                          case "GT": return function () {
                               var $ = up(dict._4),
                               flag = $._0,
                               newRight = $._1;
                               return function () {
                                  switch (flag.ctor)
                                  {case "Insert":
                                     return {ctor: "_Tuple2"
                                            ,_0: Insert
                                            ,_1: A5(balance,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};
                                     case "Remove":
                                     return {ctor: "_Tuple2"
                                            ,_0: Remove
                                            ,_1: A5(bubble,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};
                                     case "Same":
                                     return {ctor: "_Tuple2"
                                            ,_0: Same
                                            ,_1: A5(RBNode,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};}
                                  _U.badCase($moduleName,
                                  "between lines 215 and 220");
                               }();
                            }();
                          case "LT": return function () {
                               var $ = up(dict._3),
                               flag = $._0,
                               newLeft = $._1;
                               return function () {
                                  switch (flag.ctor)
                                  {case "Insert":
                                     return {ctor: "_Tuple2"
                                            ,_0: Insert
                                            ,_1: A5(balance,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};
                                     case "Remove":
                                     return {ctor: "_Tuple2"
                                            ,_0: Remove
                                            ,_1: A5(bubble,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};
                                     case "Same":
                                     return {ctor: "_Tuple2"
                                            ,_0: Same
                                            ,_1: A5(RBNode,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};}
                                  _U.badCase($moduleName,
                                  "between lines 208 and 213");
                               }();
                            }();}
                       _U.badCase($moduleName,
                       "between lines 199 and 220");
                    }();}
               _U.badCase($moduleName,
               "between lines 192 and 220");
            }();
         };
         var $ = up(dict),
         flag = $._0,
         updatedDict = $._1;
         return function () {
            switch (flag.ctor)
            {case "Insert":
               return ensureBlackRoot(updatedDict);
               case "Remove":
               return blacken(updatedDict);
               case "Same":
               return updatedDict;}
            _U.badCase($moduleName,
            "between lines 222 and 228");
         }();
      }();
   });
   var insert = F3(function (key,
   value,
   dict) {
      return A3(update,
      key,
      $Basics.always($Maybe.Just(value)),
      dict);
   });
   var singleton = F2(function (key,
   value) {
      return A3(insert,
      key,
      value,
      empty);
   });
   var union = F2(function (t1,
   t2) {
      return A3(foldl,
      insert,
      t2,
      t1);
   });
   var fromList = function (assocs) {
      return A3($List.foldl,
      F2(function (_v214,dict) {
         return function () {
            switch (_v214.ctor)
            {case "_Tuple2":
               return A3(insert,
                 _v214._0,
                 _v214._1,
                 dict);}
            _U.badCase($moduleName,
            "on line 466, column 38 to 59");
         }();
      }),
      empty,
      assocs);
   };
   var filter = F2(function (predicate,
   dictionary) {
      return function () {
         var add = F3(function (key,
         value,
         dict) {
            return A2(predicate,
            key,
            value) ? A3(insert,
            key,
            value,
            dict) : dict;
         });
         return A3(foldl,
         add,
         empty,
         dictionary);
      }();
   });
   var intersect = F2(function (t1,
   t2) {
      return A2(filter,
      F2(function (k,_v218) {
         return function () {
            return A2(member,k,t2);
         }();
      }),
      t1);
   });
   var partition = F2(function (predicate,
   dict) {
      return function () {
         var add = F3(function (key,
         value,
         _v220) {
            return function () {
               switch (_v220.ctor)
               {case "_Tuple2":
                  return A2(predicate,
                    key,
                    value) ? {ctor: "_Tuple2"
                             ,_0: A3(insert,
                             key,
                             value,
                             _v220._0)
                             ,_1: _v220._1} : {ctor: "_Tuple2"
                                              ,_0: _v220._0
                                              ,_1: A3(insert,
                                              key,
                                              value,
                                              _v220._1)};}
               _U.badCase($moduleName,
               "between lines 487 and 489");
            }();
         });
         return A3(foldl,
         add,
         {ctor: "_Tuple2"
         ,_0: empty
         ,_1: empty},
         dict);
      }();
   });
   var remove = F2(function (key,
   dict) {
      return A3(update,
      key,
      $Basics.always($Maybe.Nothing),
      dict);
   });
   var diff = F2(function (t1,t2) {
      return A3(foldl,
      F3(function (k,v,t) {
         return A2(remove,k,t);
      }),
      t1,
      t2);
   });
   _elm.Dict.values = {_op: _op
                      ,empty: empty
                      ,singleton: singleton
                      ,insert: insert
                      ,update: update
                      ,isEmpty: isEmpty
                      ,get: get
                      ,remove: remove
                      ,member: member
                      ,filter: filter
                      ,partition: partition
                      ,foldl: foldl
                      ,foldr: foldr
                      ,map: map
                      ,union: union
                      ,intersect: intersect
                      ,diff: diff
                      ,keys: keys
                      ,values: values
                      ,toList: toList
                      ,fromList: fromList};
   return _elm.Dict.values;
};
Elm.Either = Elm.Either || {};
Elm.Either.make = function (_elm) {
   "use strict";
   _elm.Either = _elm.Either || {};
   if (_elm.Either.values)
   return _elm.Either.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Either";
   var isRight = function (ex) {
      return function () {
         switch (ex.ctor)
         {case "Right": return true;}
         return false;
      }();
   };
   var isLeft = function (ex) {
      return function () {
         switch (ex.ctor)
         {case "Left": return true;}
         return false;
      }();
   };
   var elim = F3(function (f,
   g,
   ex) {
      return function () {
         switch (ex.ctor)
         {case "Left": return f(ex._0);
            case "Right": return g(ex._0);}
         _U.badCase($moduleName,
         "between lines 35 and 37");
      }();
   });
   var Right = function (a) {
      return {ctor: "Right",_0: a};
   };
   var Left = function (a) {
      return {ctor: "Left",_0: a};
   };
   var mapRight = F2(function (f,
   ex) {
      return function () {
         switch (ex.ctor)
         {case "Left":
            return Left(ex._0);
            case "Right":
            return Right(f(ex._0));}
         _U.badCase($moduleName,
         "between lines 20 and 22");
      }();
   });
   var mapLeft = F2(function (f,
   ex) {
      return function () {
         switch (ex.ctor)
         {case "Left":
            return Left(f(ex._0));
            case "Right":
            return Right(ex._0);}
         _U.badCase($moduleName,
         "between lines 25 and 27");
      }();
   });
   var mapBoth = F3(function (f,
   g,
   ex) {
      return function () {
         switch (ex.ctor)
         {case "Left":
            return Left(f(ex._0));
            case "Right":
            return Right(g(ex._0));}
         _U.badCase($moduleName,
         "between lines 30 and 32");
      }();
   });
   _elm.Either.values = {_op: _op
                        ,Left: Left
                        ,Right: Right
                        ,mapRight: mapRight
                        ,mapLeft: mapLeft
                        ,mapBoth: mapBoth
                        ,elim: elim
                        ,isLeft: isLeft
                        ,isRight: isRight};
   return _elm.Either.values;
};
Elm.Expression = Elm.Expression || {};
Elm.Expression.make = function (_elm) {
   "use strict";
   _elm.Expression = _elm.Expression || {};
   if (_elm.Expression.values)
   return _elm.Expression.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Expression",
   $Basics = Elm.Basics.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$ParseExpression = Elm.Native.ParseExpression.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Set = Elm.Set.make(_elm);
   var variables = function () {
      var go = F2(function (acc,
      expr) {
         return function () {
            switch (expr.ctor)
            {case "Add": return A2(go,
                 A2(go,acc,expr._0),
                 expr._1);
               case "Constant": return acc;
               case "Cos": return A2(go,
                 acc,
                 expr._0);
               case "Exp": return A2(go,
                 acc,
                 expr._1);
               case "LogBase": return A2(go,
                 acc,
                 expr._1);
               case "Mul": return A2(go,
                 A2(go,acc,expr._0),
                 expr._1);
               case "Pow": return A2(go,
                 acc,
                 expr._0);
               case "Sin": return A2(go,
                 acc,
                 expr._0);
               case "Var":
               return A2($Set.insert,
                 expr._0,
                 acc);}
            _U.badCase($moduleName,
            "between lines 273 and 283");
         }();
      });
      return go($Set.empty);
   }();
   var evaluateExn = F2(function (expr,
   env) {
      return function () {
         switch (expr.ctor)
         {case "Add":
            return A2(evaluateExn,
              expr._0,
              env) + A2(evaluateExn,
              expr._1,
              env);
            case "Constant": return expr._0;
            case "Cos":
            return $Basics.cos(A2(evaluateExn,
              expr._0,
              env));
            case "Exp":
            return Math.pow(expr._0,
              A2(evaluateExn,expr._1,env));
            case "LogBase":
            return A2($Basics.logBase,
              expr._0,
              A2(evaluateExn,expr._1,env));
            case "Mul":
            return A2(evaluateExn,
              expr._0,
              env) * A2(evaluateExn,
              expr._1,
              env);
            case "Pow":
            return Math.pow(A2(evaluateExn,
              expr._0,
              env),
              expr._1);
            case "Sin":
            return $Basics.sin(A2(evaluateExn,
              expr._0,
              env));
            case "Var": return function () {
                 var _v30 = A2($Dict.get,
                 expr._0,
                 env);
                 switch (_v30.ctor)
                 {case "Just": return _v30._0;}
                 _U.badCase($moduleName,
                 "on line 125, column 7 to 45");
              }();}
         _U.badCase($moduleName,
         "between lines 123 and 151");
      }();
   });
   var maybeMap2 = F3(function (f,
   ma,
   mb) {
      return function () {
         switch (ma.ctor)
         {case "Just":
            return function () {
                 switch (mb.ctor)
                 {case "Just":
                    return $Maybe.Just(A2(f,
                      ma._0,
                      mb._0));
                    case "Nothing":
                    return $Maybe.Nothing;}
                 _U.badCase($moduleName,
                 "between lines 84 and 87");
              }();
            case "Nothing":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 82 and 89");
      }();
   });
   var evaluate = F2(function (expr,
   env) {
      return function () {
         switch (expr.ctor)
         {case "Add":
            return A3(maybeMap2,
              F2(function (x,y) {
                 return x + y;
              }),
              A2(evaluate,expr._0,env),
              A2(evaluate,expr._1,env));
            case "Constant":
            return $Maybe.Just(expr._0);
            case "Cos":
            return A2($Maybe.map,
              $Basics.cos,
              A2(evaluate,expr._0,env));
            case "Exp":
            return A2($Maybe.map,
              function (x) {
                 return Math.pow(expr._0,x);
              },
              A2(evaluate,expr._1,env));
            case "LogBase":
            return A2($Maybe.map,
              $Basics.logBase(expr._0),
              A2(evaluate,expr._1,env));
            case "Mul": return A3(maybeMap2,
              F2(function (x,y) {
                 return x * y;
              }),
              A2(evaluate,expr._0,env),
              A2(evaluate,expr._1,env));
            case "Pow":
            return A2($Maybe.map,
              function (x) {
                 return Math.pow(x,expr._1);
              },
              A2(evaluate,expr._0,env));
            case "Sin":
            return A2($Maybe.map,
              $Basics.sin,
              A2(evaluate,expr._0,env));
            case "Var": return A2($Dict.get,
              expr._0,
              env);}
         _U.badCase($moduleName,
         "between lines 92 and 120");
      }();
   });
   var toString = function () {
      var parenthesize = function (x) {
         return A2($Basics._op["++"],
         "(",
         A2($Basics._op["++"],x,")"));
      };
      return function (expr) {
         return function () {
            switch (expr.ctor)
            {case "Add":
               return parenthesize(A2($Basics._op["++"],
                 toString(expr._0),
                 A2($Basics._op["++"],
                 " + ",
                 toString(expr._1))));
               case "Constant":
               return $Basics.toString(expr._0);
               case "Cos":
               return A2($Basics._op["++"],
                 "cos(",
                 A2($Basics._op["++"],
                 toString(expr._0),
                 ")"));
               case "Exp":
               return parenthesize(A2($Basics._op["++"],
                 (_U.cmp(expr._0,
                 0) < 0 ? parenthesize : $Basics.identity)($Basics.toString(expr._0)),
                 A2($Basics._op["++"],
                 "^",
                 toString(expr._1))));
               case "LogBase":
               return _U.eq(expr._0,
                 $Basics.e) ? A2($Basics._op["++"],
                 "log(",
                 A2($Basics._op["++"],
                 toString(expr._1),
                 ")")) : A2($Basics._op["++"],
                 "log(",
                 A2($Basics._op["++"],
                 $Basics.toString(expr._0),
                 A2($Basics._op["++"],
                 ",",
                 A2($Basics._op["++"],
                 toString(expr._1),
                 ")"))));
               case "Mul":
               return parenthesize(A2($Basics._op["++"],
                 toString(expr._0),
                 A2($Basics._op["++"],
                 " * ",
                 toString(expr._1))));
               case "Pow":
               return parenthesize(A2($Basics._op["++"],
                 toString(expr._0),
                 A2($Basics._op["++"],
                 "^",
                 $Basics.toString(expr._1))));
               case "Sin":
               return A2($Basics._op["++"],
                 "sin(",
                 A2($Basics._op["++"],
                 toString(expr._0),
                 ")"));
               case "Var": return expr._0;}
            _U.badCase($moduleName,
            "between lines 58 and 78");
         }();
      };
   }();
   var parse = $Native$ParseExpression.parse;
   var Cos = function (a) {
      return {ctor: "Cos",_0: a};
   };
   var Sin = function (a) {
      return {ctor: "Sin",_0: a};
   };
   var LogBase = F2(function (a,
   b) {
      return {ctor: "LogBase"
             ,_0: a
             ,_1: b};
   });
   var Pow = F2(function (a,b) {
      return {ctor: "Pow"
             ,_0: a
             ,_1: b};
   });
   var Exp = F2(function (a,b) {
      return {ctor: "Exp"
             ,_0: a
             ,_1: b};
   });
   var Add = F2(function (a,b) {
      return {ctor: "Add"
             ,_0: a
             ,_1: b};
   });
   var Mul = F2(function (a,b) {
      return {ctor: "Mul"
             ,_0: a
             ,_1: b};
   });
   var Constant = function (a) {
      return {ctor: "Constant"
             ,_0: a};
   };
   var derivative = F2(function (x,
   expr) {
      return function () {
         switch (expr.ctor)
         {case "Add": return A2(Add,
              A2(derivative,x,expr._0),
              A2(derivative,x,expr._1));
            case "Constant":
            return Constant(0);
            case "Cos": return A2(Mul,
              Constant(-1),
              A2(Mul,
              A2(derivative,x,expr._0),
              Sin(expr._0)));
            case "Exp": return function () {
                 var d = A2(derivative,
                 x,
                 expr._1);
                 return A2(Mul,
                 Constant(A2($Basics.logBase,
                 $Basics.e,
                 expr._0)),
                 A2(Mul,d,expr));
              }();
            case "LogBase":
            return function () {
                 var d = A2(derivative,
                 x,
                 expr._1);
                 return A2(Mul,
                 d,
                 A2(Pow,
                 A2(Mul,
                 Constant(A2($Basics.logBase,
                 $Basics.e,
                 expr._0)),
                 expr._1),
                 -1));
              }();
            case "Mul": return A2(Add,
              A2(Mul,
              expr._0,
              A2(derivative,x,expr._1)),
              A2(Mul,
              A2(derivative,x,expr._0),
              expr._1));
            case "Pow": return A2(Mul,
              A2(derivative,x,expr._0),
              A2(Mul,
              Constant(expr._1),
              A2(Pow,expr._0,expr._1 - 1)));
            case "Sin": return A2(Mul,
              A2(derivative,x,expr._0),
              Cos(expr._0));
            case "Var":
            return _U.eq(expr._0,
              x) ? Constant(1) : Constant(0);}
         _U.badCase($moduleName,
         "between lines 154 and 183");
      }();
   });
   var optimize = function (expr) {
      return function () {
         switch (expr.ctor)
         {case "Add":
            return function () {
                 var _v96 = {ctor: "_Tuple2"
                            ,_0: optimize(expr._0)
                            ,_1: optimize(expr._1)};
                 switch (_v96.ctor)
                 {case "_Tuple2":
                    switch (_v96._0.ctor)
                      {case "Constant":
                         switch (_v96._0._0)
                           {case 0: return _v96._1;}
                           break;}
                      switch (_v96._1.ctor)
                      {case "Constant":
                         switch (_v96._1._0)
                           {case 0: return _v96._0;}
                           break;}
                      switch (_v96._0.ctor)
                      {case "Constant":
                         switch (_v96._1.ctor)
                           {case "Constant":
                              return Constant(_v96._0._0 + _v96._1._0);}
                           break;}
                      return A2(Add,_v96._0,_v96._1);}
                 _U.badCase($moduleName,
                 "between lines 217 and 230");
              }();
            case "Constant": return expr;
            case "Cos": return function () {
                 var _v103 = optimize(expr._0);
                 switch (_v103.ctor)
                 {case "Constant":
                    return Constant($Basics.cos(_v103._0));}
                 return Cos(_v103);
              }();
            case "Exp": return function () {
                 var _v105 = optimize(expr._1);
                 switch (_v105.ctor)
                 {case "Constant":
                    return Constant(Math.pow(expr._0,
                      _v105._0));}
                 return A2(Exp,expr._0,_v105);
              }();
            case "LogBase":
            return function () {
                 var _v107 = optimize(expr._1);
                 switch (_v107.ctor)
                 {case "Constant":
                    return Constant(A2($Basics.logBase,
                      expr._0,
                      _v107._0));}
                 return A2(LogBase,
                 expr._0,
                 _v107);
              }();
            case "Mul": return function () {
                 var _v109 = {ctor: "_Tuple2"
                             ,_0: optimize(expr._0)
                             ,_1: optimize(expr._1)};
                 switch (_v109.ctor)
                 {case "_Tuple2":
                    switch (_v109._0.ctor)
                      {case "Constant":
                         switch (_v109._0._0)
                           {case 0: return Constant(0);}
                           break;}
                      switch (_v109._1.ctor)
                      {case "Constant":
                         switch (_v109._1._0)
                           {case 0: return Constant(0);}
                           break;}
                      switch (_v109._0.ctor)
                      {case "Constant":
                         switch (_v109._1.ctor)
                           {case "Constant":
                              return Constant(_v109._0._0 * _v109._1._0);}
                           switch (_v109._0._0)
                           {case 1: return _v109._1;}
                           break;}
                      switch (_v109._1.ctor)
                      {case "Constant":
                         switch (_v109._1._0)
                           {case 1: return _v109._0;}
                           break;}
                      return A2(Mul,
                      _v109._0,
                      _v109._1);}
                 _U.badCase($moduleName,
                 "between lines 197 and 216");
              }();
            case "Pow": return function () {
                 var _v117 = optimize(expr._0);
                 switch (_v117.ctor)
                 {case "Constant":
                    return Constant(Math.pow(_v117._0,
                      expr._1));}
                 return A2(Pow,_v117,expr._1);
              }();
            case "Sin": return function () {
                 var _v119 = optimize(expr._0);
                 switch (_v119.ctor)
                 {case "Constant":
                    return Constant($Basics.sin(_v119._0));}
                 return Sin(_v119);
              }();
            case "Var": return expr;}
         _U.badCase($moduleName,
         "between lines 189 and 267");
      }();
   };
   var Var = function (a) {
      return {ctor: "Var",_0: a};
   };
   _elm.Expression.values = {_op: _op
                            ,evaluate: evaluate
                            ,evaluateExn: evaluateExn
                            ,parse: parse
                            ,derivative: derivative
                            ,optimize: optimize
                            ,toString: toString
                            ,variables: variables
                            ,Var: Var
                            ,Constant: Constant
                            ,Mul: Mul
                            ,Add: Add
                            ,Exp: Exp
                            ,Pow: Pow
                            ,LogBase: LogBase
                            ,Sin: Sin
                            ,Cos: Cos};
   return _elm.Expression.values;
};
Elm.Graphics = Elm.Graphics || {};
Elm.Graphics.Collage = Elm.Graphics.Collage || {};
Elm.Graphics.Collage.make = function (_elm) {
   "use strict";
   _elm.Graphics = _elm.Graphics || {};
   _elm.Graphics.Collage = _elm.Graphics.Collage || {};
   if (_elm.Graphics.Collage.values)
   return _elm.Graphics.Collage.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Graphics.Collage",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Native$Graphics$Collage = Elm.Native.Graphics.Collage.make(_elm),
   $Text = Elm.Text.make(_elm),
   $Transform2D = Elm.Transform2D.make(_elm);
   var ngon = F2(function (n,r) {
      return function () {
         var m = $Basics.toFloat(n);
         var t = 2 * $Basics.pi / m;
         var f = function (i) {
            return {ctor: "_Tuple2"
                   ,_0: r * $Basics.cos(t * i)
                   ,_1: r * $Basics.sin(t * i)};
         };
         return A2($List.map,
         f,
         _L.range(0,m - 1));
      }();
   });
   var oval = F2(function (w,h) {
      return function () {
         var hh = h / 2;
         var hw = w / 2;
         var n = 50;
         var t = 2 * $Basics.pi / n;
         var f = function (i) {
            return {ctor: "_Tuple2"
                   ,_0: hw * $Basics.cos(t * i)
                   ,_1: hh * $Basics.sin(t * i)};
         };
         return A2($List.map,
         f,
         _L.range(0,n - 1));
      }();
   });
   var circle = function (r) {
      return A2(oval,2 * r,2 * r);
   };
   var rect = F2(function (w,h) {
      return function () {
         var hh = h / 2;
         var hw = w / 2;
         return _L.fromArray([{ctor: "_Tuple2"
                              ,_0: 0 - hw
                              ,_1: 0 - hh}
                             ,{ctor: "_Tuple2"
                              ,_0: 0 - hw
                              ,_1: hh}
                             ,{ctor: "_Tuple2",_0: hw,_1: hh}
                             ,{ctor: "_Tuple2"
                              ,_0: hw
                              ,_1: 0 - hh}]);
      }();
   });
   var square = function (n) {
      return A2(rect,n,n);
   };
   var polygon = function (points) {
      return points;
   };
   var segment = F2(function (p1,
   p2) {
      return _L.fromArray([p1,p2]);
   });
   var path = function (ps) {
      return ps;
   };
   var collage = $Native$Graphics$Collage.collage;
   var alpha = F2(function (a,f) {
      return _U.replace([["alpha"
                         ,a]],
      f);
   });
   var rotate = F2(function (t,f) {
      return _U.replace([["theta"
                         ,f.theta + t]],
      f);
   });
   var scale = F2(function (s,f) {
      return _U.replace([["scale"
                         ,f.scale * s]],
      f);
   });
   var moveY = F2(function (y,f) {
      return _U.replace([["y"
                         ,f.y + y]],
      f);
   });
   var moveX = F2(function (x,f) {
      return _U.replace([["x"
                         ,f.x + x]],
      f);
   });
   var move = F2(function (_v0,f) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return _U.replace([["x"
                               ,f.x + _v0._0]
                              ,["y",f.y + _v0._1]],
              f);}
         _U.badCase($moduleName,
         "on line 226, column 7 to 35");
      }();
   });
   var form = function (f) {
      return {_: {}
             ,alpha: 1
             ,form: f
             ,scale: 1
             ,theta: 0
             ,x: 0
             ,y: 0};
   };
   var Fill = function (a) {
      return {ctor: "Fill",_0: a};
   };
   var Line = function (a) {
      return {ctor: "Line",_0: a};
   };
   var FGroup = F2(function (a,b) {
      return {ctor: "FGroup"
             ,_0: a
             ,_1: b};
   });
   var group = function (fs) {
      return form(A2(FGroup,
      $Transform2D.identity,
      fs));
   };
   var groupTransform = F2(function (matrix,
   fs) {
      return form(A2(FGroup,
      matrix,
      fs));
   });
   var FElement = function (a) {
      return {ctor: "FElement"
             ,_0: a};
   };
   var toForm = function (e) {
      return form(FElement(e));
   };
   var FImage = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "FImage"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var sprite = F4(function (w,
   h,
   pos,
   src) {
      return form(A4(FImage,
      w,
      h,
      pos,
      src));
   });
   var FText = function (a) {
      return {ctor: "FText",_0: a};
   };
   var text = function (t) {
      return form(FText(t));
   };
   var FOutlinedText = F2(function (a,
   b) {
      return {ctor: "FOutlinedText"
             ,_0: a
             ,_1: b};
   });
   var outlinedText = F2(function (ls,
   t) {
      return form(A2(FOutlinedText,
      ls,
      t));
   });
   var FShape = F2(function (a,b) {
      return {ctor: "FShape"
             ,_0: a
             ,_1: b};
   });
   var fill = F2(function (style,
   shape) {
      return form(A2(FShape,
      Fill(style),
      shape));
   });
   var outlined = F2(function (style,
   shape) {
      return form(A2(FShape,
      Line(style),
      shape));
   });
   var FPath = F2(function (a,b) {
      return {ctor: "FPath"
             ,_0: a
             ,_1: b};
   });
   var traced = F2(function (style,
   path) {
      return form(A2(FPath,
      style,
      path));
   });
   var LineStyle = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,cap: c
             ,color: a
             ,dashOffset: f
             ,dashing: e
             ,join: d
             ,width: b};
   });
   var Clipped = {ctor: "Clipped"};
   var Sharp = function (a) {
      return {ctor: "Sharp",_0: a};
   };
   var Smooth = {ctor: "Smooth"};
   var Padded = {ctor: "Padded"};
   var Round = {ctor: "Round"};
   var Flat = {ctor: "Flat"};
   var defaultLine = {_: {}
                     ,cap: Flat
                     ,color: $Color.black
                     ,dashOffset: 0
                     ,dashing: _L.fromArray([])
                     ,join: Sharp(10)
                     ,width: 1};
   var solid = function (clr) {
      return _U.replace([["color"
                         ,clr]],
      defaultLine);
   };
   var dashed = function (clr) {
      return _U.replace([["color"
                         ,clr]
                        ,["dashing"
                         ,_L.fromArray([8,4])]],
      defaultLine);
   };
   var dotted = function (clr) {
      return _U.replace([["color"
                         ,clr]
                        ,["dashing"
                         ,_L.fromArray([3,3])]],
      defaultLine);
   };
   var Grad = function (a) {
      return {ctor: "Grad",_0: a};
   };
   var gradient = F2(function (grad,
   shape) {
      return A2(fill,
      Grad(grad),
      shape);
   });
   var Texture = function (a) {
      return {ctor: "Texture"
             ,_0: a};
   };
   var textured = F2(function (src,
   shape) {
      return A2(fill,
      Texture(src),
      shape);
   });
   var Solid = function (a) {
      return {ctor: "Solid",_0: a};
   };
   var filled = F2(function (color,
   shape) {
      return A2(fill,
      Solid(color),
      shape);
   });
   var Form = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,alpha: e
             ,form: f
             ,scale: b
             ,theta: a
             ,x: c
             ,y: d};
   });
   _elm.Graphics.Collage.values = {_op: _op
                                  ,collage: collage
                                  ,toForm: toForm
                                  ,filled: filled
                                  ,textured: textured
                                  ,gradient: gradient
                                  ,outlined: outlined
                                  ,traced: traced
                                  ,text: text
                                  ,outlinedText: outlinedText
                                  ,move: move
                                  ,moveX: moveX
                                  ,moveY: moveY
                                  ,scale: scale
                                  ,rotate: rotate
                                  ,alpha: alpha
                                  ,group: group
                                  ,groupTransform: groupTransform
                                  ,rect: rect
                                  ,oval: oval
                                  ,square: square
                                  ,circle: circle
                                  ,ngon: ngon
                                  ,polygon: polygon
                                  ,segment: segment
                                  ,path: path
                                  ,solid: solid
                                  ,dashed: dashed
                                  ,dotted: dotted
                                  ,defaultLine: defaultLine
                                  ,Form: Form
                                  ,LineStyle: LineStyle
                                  ,Flat: Flat
                                  ,Round: Round
                                  ,Padded: Padded
                                  ,Smooth: Smooth
                                  ,Sharp: Sharp
                                  ,Clipped: Clipped};
   return _elm.Graphics.Collage.values;
};
Elm.Graphics = Elm.Graphics || {};
Elm.Graphics.Element = Elm.Graphics.Element || {};
Elm.Graphics.Element.make = function (_elm) {
   "use strict";
   _elm.Graphics = _elm.Graphics || {};
   _elm.Graphics.Element = _elm.Graphics.Element || {};
   if (_elm.Graphics.Element.values)
   return _elm.Graphics.Element.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Graphics.Element",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Graphics$Element = Elm.Native.Graphics.Element.make(_elm),
   $Text = Elm.Text.make(_elm);
   var DOut = {ctor: "DOut"};
   var outward = DOut;
   var DIn = {ctor: "DIn"};
   var inward = DIn;
   var DRight = {ctor: "DRight"};
   var right = DRight;
   var DLeft = {ctor: "DLeft"};
   var left = DLeft;
   var DDown = {ctor: "DDown"};
   var down = DDown;
   var DUp = {ctor: "DUp"};
   var up = DUp;
   var Position = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,horizontal: a
             ,vertical: b
             ,x: c
             ,y: d};
   });
   var Relative = function (a) {
      return {ctor: "Relative"
             ,_0: a};
   };
   var relative = Relative;
   var Absolute = function (a) {
      return {ctor: "Absolute"
             ,_0: a};
   };
   var absolute = Absolute;
   var N = {ctor: "N"};
   var bottomLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var Z = {ctor: "Z"};
   var middle = {_: {}
                ,horizontal: Z
                ,vertical: Z
                ,x: Relative(0.5)
                ,y: Relative(0.5)};
   var midLeft = _U.replace([["horizontal"
                             ,N]
                            ,["x",Absolute(0)]],
   middle);
   var middleAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midBottomAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var P = {ctor: "P"};
   var topLeft = {_: {}
                 ,horizontal: N
                 ,vertical: P
                 ,x: Absolute(0)
                 ,y: Absolute(0)};
   var bottomLeft = _U.replace([["vertical"
                                ,N]],
   topLeft);
   var topRight = _U.replace([["horizontal"
                              ,P]],
   topLeft);
   var bottomRight = _U.replace([["horizontal"
                                 ,P]],
   bottomLeft);
   var midRight = _U.replace([["horizontal"
                              ,P]],
   midLeft);
   var midTop = _U.replace([["vertical"
                            ,P]
                           ,["y",Absolute(0)]],
   middle);
   var midBottom = _U.replace([["vertical"
                               ,N]],
   midTop);
   var topLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var topRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var bottomRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var midRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midTopAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var justified = $Native$Graphics$Element.block("justify");
   var centered = $Native$Graphics$Element.block("center");
   var rightAligned = $Native$Graphics$Element.block("right");
   var leftAligned = $Native$Graphics$Element.block("left");
   var show = function (value) {
      return leftAligned($Text.monospace($Text.fromString($Basics.toString(value))));
   };
   var Tiled = {ctor: "Tiled"};
   var Cropped = function (a) {
      return {ctor: "Cropped"
             ,_0: a};
   };
   var Fitted = {ctor: "Fitted"};
   var Plain = {ctor: "Plain"};
   var Custom = {ctor: "Custom"};
   var RawHtml = {ctor: "RawHtml"};
   var Spacer = {ctor: "Spacer"};
   var Flow = F2(function (a,b) {
      return {ctor: "Flow"
             ,_0: a
             ,_1: b};
   });
   var Container = F2(function (a,
   b) {
      return {ctor: "Container"
             ,_0: a
             ,_1: b};
   });
   var Image = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "Image"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var newElement = $Native$Graphics$Element.newElement;
   var image = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Plain,w,h,src));
   });
   var fittedImage = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Fitted,w,h,src));
   });
   var croppedImage = F4(function (pos,
   w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Cropped(pos),w,h,src));
   });
   var tiledImage = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Tiled,w,h,src));
   });
   var container = F4(function (w,
   h,
   pos,
   e) {
      return A3(newElement,
      w,
      h,
      A2(Container,pos,e));
   });
   var spacer = F2(function (w,h) {
      return A3(newElement,
      w,
      h,
      Spacer);
   });
   var link = F2(function (href,
   e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["href"
                                    ,href]],
                p)};
      }();
   });
   var tag = F2(function (name,e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["tag"
                                    ,name]],
                p)};
      }();
   });
   var color = F2(function (c,e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["color"
                                    ,$Maybe.Just(c)]],
                p)};
      }();
   });
   var opacity = F2(function (o,
   e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["opacity"
                                    ,o]],
                p)};
      }();
   });
   var height = F2(function (nh,
   e) {
      return function () {
         var p = e.props;
         var props = function () {
            var _v0 = e.element;
            switch (_v0.ctor)
            {case "Image":
               return _U.replace([["width"
                                  ,$Basics.round($Basics.toFloat(_v0._1) / $Basics.toFloat(_v0._2) * $Basics.toFloat(nh))]],
                 p);}
            return p;
         }();
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["height"
                                    ,nh]],
                p)};
      }();
   });
   var width = F2(function (nw,e) {
      return function () {
         var p = e.props;
         var props = function () {
            var _v5 = e.element;
            switch (_v5.ctor)
            {case "Image":
               return _U.replace([["height"
                                  ,$Basics.round($Basics.toFloat(_v5._2) / $Basics.toFloat(_v5._1) * $Basics.toFloat(nw))]],
                 p);
               case "RawHtml":
               return _U.replace([["height"
                                  ,$Basics.snd(A2($Native$Graphics$Element.htmlHeight,
                                  nw,
                                  e.element))]],
                 p);}
            return p;
         }();
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["width"
                                    ,nw]],
                props)};
      }();
   });
   var size = F3(function (w,h,e) {
      return A2(height,
      h,
      A2(width,w,e));
   });
   var sizeOf = function (e) {
      return {ctor: "_Tuple2"
             ,_0: e.props.width
             ,_1: e.props.height};
   };
   var heightOf = function (e) {
      return e.props.height;
   };
   var widthOf = function (e) {
      return e.props.width;
   };
   var above = F2(function (hi,
   lo) {
      return A3(newElement,
      A2($Basics.max,
      widthOf(hi),
      widthOf(lo)),
      heightOf(hi) + heightOf(lo),
      A2(Flow,
      DDown,
      _L.fromArray([hi,lo])));
   });
   var below = F2(function (lo,
   hi) {
      return A3(newElement,
      A2($Basics.max,
      widthOf(hi),
      widthOf(lo)),
      heightOf(hi) + heightOf(lo),
      A2(Flow,
      DDown,
      _L.fromArray([hi,lo])));
   });
   var beside = F2(function (lft,
   rht) {
      return A3(newElement,
      widthOf(lft) + widthOf(rht),
      A2($Basics.max,
      heightOf(lft),
      heightOf(rht)),
      A2(Flow,
      right,
      _L.fromArray([lft,rht])));
   });
   var layers = function (es) {
      return function () {
         var hs = A2($List.map,
         heightOf,
         es);
         var ws = A2($List.map,
         widthOf,
         es);
         return A3(newElement,
         A2($Maybe.withDefault,
         0,
         $List.maximum(ws)),
         A2($Maybe.withDefault,
         0,
         $List.maximum(hs)),
         A2(Flow,DOut,es));
      }();
   };
   var empty = A2(spacer,0,0);
   var flow = F2(function (dir,
   es) {
      return function () {
         var newFlow = F2(function (w,
         h) {
            return A3(newElement,
            w,
            h,
            A2(Flow,dir,es));
         });
         var maxOrZero = function (list) {
            return A2($Maybe.withDefault,
            0,
            $List.maximum(list));
         };
         var hs = A2($List.map,
         heightOf,
         es);
         var ws = A2($List.map,
         widthOf,
         es);
         return _U.eq(es,
         _L.fromArray([])) ? empty : function () {
            switch (dir.ctor)
            {case "DDown":
               return A2(newFlow,
                 maxOrZero(ws),
                 $List.sum(hs));
               case "DIn": return A2(newFlow,
                 maxOrZero(ws),
                 maxOrZero(hs));
               case "DLeft": return A2(newFlow,
                 $List.sum(ws),
                 maxOrZero(hs));
               case "DOut": return A2(newFlow,
                 maxOrZero(ws),
                 maxOrZero(hs));
               case "DRight":
               return A2(newFlow,
                 $List.sum(ws),
                 maxOrZero(hs));
               case "DUp": return A2(newFlow,
                 maxOrZero(ws),
                 $List.sum(hs));}
            _U.badCase($moduleName,
            "between lines 362 and 373");
         }();
      }();
   });
   var Properties = F9(function (a,
   b,
   c,
   d,
   e,
   f,
   g,
   h,
   i) {
      return {_: {}
             ,click: i
             ,color: e
             ,height: c
             ,hover: h
             ,href: f
             ,id: a
             ,opacity: d
             ,tag: g
             ,width: b};
   });
   var Element = F2(function (a,
   b) {
      return {_: {}
             ,element: b
             ,props: a};
   });
   _elm.Graphics.Element.values = {_op: _op
                                  ,image: image
                                  ,fittedImage: fittedImage
                                  ,croppedImage: croppedImage
                                  ,tiledImage: tiledImage
                                  ,leftAligned: leftAligned
                                  ,rightAligned: rightAligned
                                  ,centered: centered
                                  ,justified: justified
                                  ,show: show
                                  ,width: width
                                  ,height: height
                                  ,size: size
                                  ,color: color
                                  ,opacity: opacity
                                  ,link: link
                                  ,tag: tag
                                  ,widthOf: widthOf
                                  ,heightOf: heightOf
                                  ,sizeOf: sizeOf
                                  ,flow: flow
                                  ,up: up
                                  ,down: down
                                  ,left: left
                                  ,right: right
                                  ,inward: inward
                                  ,outward: outward
                                  ,layers: layers
                                  ,above: above
                                  ,below: below
                                  ,beside: beside
                                  ,empty: empty
                                  ,spacer: spacer
                                  ,container: container
                                  ,middle: middle
                                  ,midTop: midTop
                                  ,midBottom: midBottom
                                  ,midLeft: midLeft
                                  ,midRight: midRight
                                  ,topLeft: topLeft
                                  ,topRight: topRight
                                  ,bottomLeft: bottomLeft
                                  ,bottomRight: bottomRight
                                  ,absolute: absolute
                                  ,relative: relative
                                  ,middleAt: middleAt
                                  ,midTopAt: midTopAt
                                  ,midBottomAt: midBottomAt
                                  ,midLeftAt: midLeftAt
                                  ,midRightAt: midRightAt
                                  ,topLeftAt: topLeftAt
                                  ,topRightAt: topRightAt
                                  ,bottomLeftAt: bottomLeftAt
                                  ,bottomRightAt: bottomRightAt
                                  ,Element: Element
                                  ,Position: Position};
   return _elm.Graphics.Element.values;
};
Elm.Html = Elm.Html || {};
Elm.Html.make = function (_elm) {
   "use strict";
   _elm.Html = _elm.Html || {};
   if (_elm.Html.values)
   return _elm.Html.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Html",
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $VirtualDom = Elm.VirtualDom.make(_elm);
   var fromElement = $VirtualDom.fromElement;
   var toElement = $VirtualDom.toElement;
   var text = $VirtualDom.text;
   var node = $VirtualDom.node;
   var body = node("body");
   var section = node("section");
   var nav = node("nav");
   var article = node("article");
   var aside = node("aside");
   var h1 = node("h1");
   var h2 = node("h2");
   var h3 = node("h3");
   var h4 = node("h4");
   var h5 = node("h5");
   var h6 = node("h6");
   var header = node("header");
   var footer = node("footer");
   var address = node("address");
   var main$ = node("main");
   var p = node("p");
   var hr = node("hr");
   var pre = node("pre");
   var blockquote = node("blockquote");
   var ol = node("ol");
   var ul = node("ul");
   var li = node("li");
   var dl = node("dl");
   var dt = node("dt");
   var dd = node("dd");
   var figure = node("figure");
   var figcaption = node("figcaption");
   var div = node("div");
   var a = node("a");
   var em = node("em");
   var strong = node("strong");
   var small = node("small");
   var s = node("s");
   var cite = node("cite");
   var q = node("q");
   var dfn = node("dfn");
   var abbr = node("abbr");
   var time = node("time");
   var code = node("code");
   var $var = node("var");
   var samp = node("samp");
   var kbd = node("kbd");
   var sub = node("sub");
   var sup = node("sup");
   var i = node("i");
   var b = node("b");
   var u = node("u");
   var mark = node("mark");
   var ruby = node("ruby");
   var rt = node("rt");
   var rp = node("rp");
   var bdi = node("bdi");
   var bdo = node("bdo");
   var span = node("span");
   var br = node("br");
   var wbr = node("wbr");
   var ins = node("ins");
   var del = node("del");
   var img = node("img");
   var iframe = node("iframe");
   var embed = node("embed");
   var object = node("object");
   var param = node("param");
   var video = node("video");
   var audio = node("audio");
   var source = node("source");
   var track = node("track");
   var canvas = node("canvas");
   var svg = node("svg");
   var math = node("math");
   var table = node("table");
   var caption = node("caption");
   var colgroup = node("colgroup");
   var col = node("col");
   var tbody = node("tbody");
   var thead = node("thead");
   var tfoot = node("tfoot");
   var tr = node("tr");
   var td = node("td");
   var th = node("th");
   var form = node("form");
   var fieldset = node("fieldset");
   var legend = node("legend");
   var label = node("label");
   var input = node("input");
   var button = node("button");
   var select = node("select");
   var datalist = node("datalist");
   var optgroup = node("optgroup");
   var option = node("option");
   var textarea = node("textarea");
   var keygen = node("keygen");
   var output = node("output");
   var progress = node("progress");
   var meter = node("meter");
   var details = node("details");
   var summary = node("summary");
   var menuitem = node("menuitem");
   var menu = node("menu");
   _elm.Html.values = {_op: _op
                      ,node: node
                      ,text: text
                      ,toElement: toElement
                      ,fromElement: fromElement
                      ,body: body
                      ,section: section
                      ,nav: nav
                      ,article: article
                      ,aside: aside
                      ,h1: h1
                      ,h2: h2
                      ,h3: h3
                      ,h4: h4
                      ,h5: h5
                      ,h6: h6
                      ,header: header
                      ,footer: footer
                      ,address: address
                      ,main$: main$
                      ,p: p
                      ,hr: hr
                      ,pre: pre
                      ,blockquote: blockquote
                      ,ol: ol
                      ,ul: ul
                      ,li: li
                      ,dl: dl
                      ,dt: dt
                      ,dd: dd
                      ,figure: figure
                      ,figcaption: figcaption
                      ,div: div
                      ,a: a
                      ,em: em
                      ,strong: strong
                      ,small: small
                      ,s: s
                      ,cite: cite
                      ,q: q
                      ,dfn: dfn
                      ,abbr: abbr
                      ,time: time
                      ,code: code
                      ,$var: $var
                      ,samp: samp
                      ,kbd: kbd
                      ,sub: sub
                      ,sup: sup
                      ,i: i
                      ,b: b
                      ,u: u
                      ,mark: mark
                      ,ruby: ruby
                      ,rt: rt
                      ,rp: rp
                      ,bdi: bdi
                      ,bdo: bdo
                      ,span: span
                      ,br: br
                      ,wbr: wbr
                      ,ins: ins
                      ,del: del
                      ,img: img
                      ,iframe: iframe
                      ,embed: embed
                      ,object: object
                      ,param: param
                      ,video: video
                      ,audio: audio
                      ,source: source
                      ,track: track
                      ,canvas: canvas
                      ,svg: svg
                      ,math: math
                      ,table: table
                      ,caption: caption
                      ,colgroup: colgroup
                      ,col: col
                      ,tbody: tbody
                      ,thead: thead
                      ,tfoot: tfoot
                      ,tr: tr
                      ,td: td
                      ,th: th
                      ,form: form
                      ,fieldset: fieldset
                      ,legend: legend
                      ,label: label
                      ,input: input
                      ,button: button
                      ,select: select
                      ,datalist: datalist
                      ,optgroup: optgroup
                      ,option: option
                      ,textarea: textarea
                      ,keygen: keygen
                      ,output: output
                      ,progress: progress
                      ,meter: meter
                      ,details: details
                      ,summary: summary
                      ,menuitem: menuitem
                      ,menu: menu};
   return _elm.Html.values;
};
Elm.Html = Elm.Html || {};
Elm.Html.Attributes = Elm.Html.Attributes || {};
Elm.Html.Attributes.make = function (_elm) {
   "use strict";
   _elm.Html = _elm.Html || {};
   _elm.Html.Attributes = _elm.Html.Attributes || {};
   if (_elm.Html.Attributes.values)
   return _elm.Html.Attributes.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Html.Attributes",
   $Basics = Elm.Basics.make(_elm),
   $Html = Elm.Html.make(_elm),
   $Json$Encode = Elm.Json.Encode.make(_elm),
   $List = Elm.List.make(_elm),
   $String = Elm.String.make(_elm),
   $VirtualDom = Elm.VirtualDom.make(_elm);
   var attribute = $VirtualDom.attribute;
   var contextmenu = function (value) {
      return A2(attribute,
      "contextmenu",
      value);
   };
   var property = $VirtualDom.property;
   var stringProperty = F2(function (name,
   string) {
      return A2(property,
      name,
      $Json$Encode.string(string));
   });
   var $class = function (name) {
      return A2(stringProperty,
      "className",
      name);
   };
   var id = function (name) {
      return A2(stringProperty,
      "id",
      name);
   };
   var title = function (name) {
      return A2(stringProperty,
      "title",
      name);
   };
   var accesskey = function ($char) {
      return A2(stringProperty,
      "accessKey",
      $String.fromChar($char));
   };
   var dir = function (value) {
      return A2(stringProperty,
      "dir",
      value);
   };
   var draggable = function (value) {
      return A2(stringProperty,
      "draggable",
      value);
   };
   var dropzone = function (value) {
      return A2(stringProperty,
      "dropzone",
      value);
   };
   var itemprop = function (value) {
      return A2(stringProperty,
      "itemprop",
      value);
   };
   var lang = function (value) {
      return A2(stringProperty,
      "lang",
      value);
   };
   var tabindex = function (n) {
      return A2(stringProperty,
      "tabIndex",
      $Basics.toString(n));
   };
   var charset = function (value) {
      return A2(stringProperty,
      "charset",
      value);
   };
   var content = function (value) {
      return A2(stringProperty,
      "content",
      value);
   };
   var httpEquiv = function (value) {
      return A2(stringProperty,
      "httpEquiv",
      value);
   };
   var language = function (value) {
      return A2(stringProperty,
      "language",
      value);
   };
   var src = function (value) {
      return A2(stringProperty,
      "src",
      value);
   };
   var height = function (value) {
      return A2(stringProperty,
      "height",
      $Basics.toString(value));
   };
   var width = function (value) {
      return A2(stringProperty,
      "width",
      $Basics.toString(value));
   };
   var alt = function (value) {
      return A2(stringProperty,
      "alt",
      value);
   };
   var preload = function (value) {
      return A2(stringProperty,
      "preload",
      value);
   };
   var poster = function (value) {
      return A2(stringProperty,
      "poster",
      value);
   };
   var kind = function (value) {
      return A2(stringProperty,
      "kind",
      value);
   };
   var srclang = function (value) {
      return A2(stringProperty,
      "srclang",
      value);
   };
   var sandbox = function (value) {
      return A2(stringProperty,
      "sandbox",
      value);
   };
   var srcdoc = function (value) {
      return A2(stringProperty,
      "srcdoc",
      value);
   };
   var type$ = function (value) {
      return A2(stringProperty,
      "type",
      value);
   };
   var value = function (value) {
      return A2(stringProperty,
      "value",
      value);
   };
   var placeholder = function (value) {
      return A2(stringProperty,
      "placeholder",
      value);
   };
   var accept = function (value) {
      return A2(stringProperty,
      "accept",
      value);
   };
   var acceptCharset = function (value) {
      return A2(stringProperty,
      "acceptCharset",
      value);
   };
   var action = function (value) {
      return A2(stringProperty,
      "action",
      value);
   };
   var autocomplete = function (bool) {
      return A2(stringProperty,
      "autocomplete",
      bool ? "on" : "off");
   };
   var autosave = function (value) {
      return A2(stringProperty,
      "autosave",
      value);
   };
   var enctype = function (value) {
      return A2(stringProperty,
      "enctype",
      value);
   };
   var formaction = function (value) {
      return A2(stringProperty,
      "formAction",
      value);
   };
   var list = function (value) {
      return A2(stringProperty,
      "list",
      value);
   };
   var minlength = function (n) {
      return A2(stringProperty,
      "minLength",
      $Basics.toString(n));
   };
   var maxlength = function (n) {
      return A2(stringProperty,
      "maxLength",
      $Basics.toString(n));
   };
   var method = function (value) {
      return A2(stringProperty,
      "method",
      value);
   };
   var name = function (value) {
      return A2(stringProperty,
      "name",
      value);
   };
   var pattern = function (value) {
      return A2(stringProperty,
      "pattern",
      value);
   };
   var size = function (n) {
      return A2(stringProperty,
      "size",
      $Basics.toString(n));
   };
   var $for = function (value) {
      return A2(stringProperty,
      "htmlFor",
      value);
   };
   var form = function (value) {
      return A2(stringProperty,
      "form",
      value);
   };
   var max = function (value) {
      return A2(stringProperty,
      "max",
      value);
   };
   var min = function (value) {
      return A2(stringProperty,
      "min",
      value);
   };
   var step = function (n) {
      return A2(stringProperty,
      "step",
      n);
   };
   var cols = function (n) {
      return A2(stringProperty,
      "cols",
      $Basics.toString(n));
   };
   var rows = function (n) {
      return A2(stringProperty,
      "rows",
      $Basics.toString(n));
   };
   var wrap = function (value) {
      return A2(stringProperty,
      "wrap",
      value);
   };
   var usemap = function (value) {
      return A2(stringProperty,
      "useMap",
      value);
   };
   var shape = function (value) {
      return A2(stringProperty,
      "shape",
      value);
   };
   var coords = function (value) {
      return A2(stringProperty,
      "coords",
      value);
   };
   var challenge = function (value) {
      return A2(stringProperty,
      "challenge",
      value);
   };
   var keytype = function (value) {
      return A2(stringProperty,
      "keytype",
      value);
   };
   var align = function (value) {
      return A2(stringProperty,
      "align",
      value);
   };
   var cite = function (value) {
      return A2(stringProperty,
      "cite",
      value);
   };
   var href = function (value) {
      return A2(stringProperty,
      "href",
      value);
   };
   var target = function (value) {
      return A2(stringProperty,
      "target",
      value);
   };
   var downloadAs = function (value) {
      return A2(stringProperty,
      "download",
      value);
   };
   var hreflang = function (value) {
      return A2(stringProperty,
      "hreflang",
      value);
   };
   var media = function (value) {
      return A2(stringProperty,
      "media",
      value);
   };
   var ping = function (value) {
      return A2(stringProperty,
      "ping",
      value);
   };
   var rel = function (value) {
      return A2(stringProperty,
      "rel",
      value);
   };
   var datetime = function (value) {
      return A2(stringProperty,
      "datetime",
      value);
   };
   var pubdate = function (value) {
      return A2(stringProperty,
      "pubdate",
      value);
   };
   var start = function (n) {
      return A2(stringProperty,
      "start",
      $Basics.toString(n));
   };
   var colspan = function (n) {
      return A2(stringProperty,
      "colSpan",
      $Basics.toString(n));
   };
   var headers = function (value) {
      return A2(stringProperty,
      "headers",
      value);
   };
   var rowspan = function (n) {
      return A2(stringProperty,
      "rowSpan",
      $Basics.toString(n));
   };
   var scope = function (value) {
      return A2(stringProperty,
      "scope",
      value);
   };
   var manifest = function (value) {
      return A2(stringProperty,
      "manifest",
      value);
   };
   var boolProperty = F2(function (name,
   bool) {
      return A2(property,
      name,
      $Json$Encode.bool(bool));
   });
   var hidden = function (bool) {
      return A2(boolProperty,
      "hidden",
      bool);
   };
   var contenteditable = function (bool) {
      return A2(boolProperty,
      "contentEditable",
      bool);
   };
   var spellcheck = function (bool) {
      return A2(boolProperty,
      "spellcheck",
      bool);
   };
   var async = function (bool) {
      return A2(boolProperty,
      "async",
      bool);
   };
   var defer = function (bool) {
      return A2(boolProperty,
      "defer",
      bool);
   };
   var scoped = function (bool) {
      return A2(boolProperty,
      "scoped",
      bool);
   };
   var autoplay = function (bool) {
      return A2(boolProperty,
      "autoplay",
      bool);
   };
   var controls = function (bool) {
      return A2(boolProperty,
      "controls",
      bool);
   };
   var loop = function (bool) {
      return A2(boolProperty,
      "loop",
      bool);
   };
   var $default = function (bool) {
      return A2(boolProperty,
      "default",
      bool);
   };
   var seamless = function (bool) {
      return A2(boolProperty,
      "seamless",
      bool);
   };
   var checked = function (bool) {
      return A2(boolProperty,
      "checked",
      bool);
   };
   var selected = function (bool) {
      return A2(boolProperty,
      "selected",
      bool);
   };
   var autofocus = function (bool) {
      return A2(boolProperty,
      "autofocus",
      bool);
   };
   var disabled = function (bool) {
      return A2(boolProperty,
      "disabled",
      bool);
   };
   var multiple = function (bool) {
      return A2(boolProperty,
      "multiple",
      bool);
   };
   var novalidate = function (bool) {
      return A2(boolProperty,
      "noValidate",
      bool);
   };
   var readonly = function (bool) {
      return A2(boolProperty,
      "readOnly",
      bool);
   };
   var required = function (bool) {
      return A2(boolProperty,
      "required",
      bool);
   };
   var ismap = function (value) {
      return A2(boolProperty,
      "isMap",
      value);
   };
   var download = function (bool) {
      return A2(boolProperty,
      "download",
      bool);
   };
   var reversed = function (bool) {
      return A2(boolProperty,
      "reversed",
      bool);
   };
   var classList = function (list) {
      return $class($String.join(" ")($List.map($Basics.fst)($List.filter($Basics.snd)(list))));
   };
   var style = function (props) {
      return property("style")($Json$Encode.object($List.map(function (_v0) {
         return function () {
            switch (_v0.ctor)
            {case "_Tuple2":
               return {ctor: "_Tuple2"
                      ,_0: _v0._0
                      ,_1: $Json$Encode.string(_v0._1)};}
            _U.badCase($moduleName,
            "on line 156, column 35 to 57");
         }();
      })(props)));
   };
   var key = function (k) {
      return A2(stringProperty,
      "key",
      k);
   };
   _elm.Html.Attributes.values = {_op: _op
                                 ,key: key
                                 ,style: style
                                 ,$class: $class
                                 ,classList: classList
                                 ,id: id
                                 ,title: title
                                 ,hidden: hidden
                                 ,type$: type$
                                 ,value: value
                                 ,checked: checked
                                 ,placeholder: placeholder
                                 ,selected: selected
                                 ,accept: accept
                                 ,acceptCharset: acceptCharset
                                 ,action: action
                                 ,autocomplete: autocomplete
                                 ,autofocus: autofocus
                                 ,autosave: autosave
                                 ,disabled: disabled
                                 ,enctype: enctype
                                 ,formaction: formaction
                                 ,list: list
                                 ,maxlength: maxlength
                                 ,minlength: minlength
                                 ,method: method
                                 ,multiple: multiple
                                 ,name: name
                                 ,novalidate: novalidate
                                 ,pattern: pattern
                                 ,readonly: readonly
                                 ,required: required
                                 ,size: size
                                 ,$for: $for
                                 ,form: form
                                 ,max: max
                                 ,min: min
                                 ,step: step
                                 ,cols: cols
                                 ,rows: rows
                                 ,wrap: wrap
                                 ,href: href
                                 ,target: target
                                 ,download: download
                                 ,downloadAs: downloadAs
                                 ,hreflang: hreflang
                                 ,media: media
                                 ,ping: ping
                                 ,rel: rel
                                 ,ismap: ismap
                                 ,usemap: usemap
                                 ,shape: shape
                                 ,coords: coords
                                 ,src: src
                                 ,height: height
                                 ,width: width
                                 ,alt: alt
                                 ,autoplay: autoplay
                                 ,controls: controls
                                 ,loop: loop
                                 ,preload: preload
                                 ,poster: poster
                                 ,$default: $default
                                 ,kind: kind
                                 ,srclang: srclang
                                 ,sandbox: sandbox
                                 ,seamless: seamless
                                 ,srcdoc: srcdoc
                                 ,reversed: reversed
                                 ,start: start
                                 ,align: align
                                 ,colspan: colspan
                                 ,rowspan: rowspan
                                 ,headers: headers
                                 ,scope: scope
                                 ,async: async
                                 ,charset: charset
                                 ,content: content
                                 ,defer: defer
                                 ,httpEquiv: httpEquiv
                                 ,language: language
                                 ,scoped: scoped
                                 ,accesskey: accesskey
                                 ,contenteditable: contenteditable
                                 ,contextmenu: contextmenu
                                 ,dir: dir
                                 ,draggable: draggable
                                 ,dropzone: dropzone
                                 ,itemprop: itemprop
                                 ,lang: lang
                                 ,spellcheck: spellcheck
                                 ,tabindex: tabindex
                                 ,challenge: challenge
                                 ,keytype: keytype
                                 ,cite: cite
                                 ,datetime: datetime
                                 ,pubdate: pubdate
                                 ,manifest: manifest
                                 ,property: property
                                 ,attribute: attribute};
   return _elm.Html.Attributes.values;
};
Elm.Html = Elm.Html || {};
Elm.Html.Events = Elm.Html.Events || {};
Elm.Html.Events.make = function (_elm) {
   "use strict";
   _elm.Html = _elm.Html || {};
   _elm.Html.Events = _elm.Html.Events || {};
   if (_elm.Html.Events.values)
   return _elm.Html.Events.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Html.Events",
   $Html = Elm.Html.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $VirtualDom = Elm.VirtualDom.make(_elm);
   var keyCode = A2($Json$Decode._op[":="],
   "keyCode",
   $Json$Decode.$int);
   var targetChecked = A2($Json$Decode.at,
   _L.fromArray(["target"
                ,"checked"]),
   $Json$Decode.bool);
   var targetValue = A2($Json$Decode.at,
   _L.fromArray(["target"
                ,"value"]),
   $Json$Decode.string);
   var defaultOptions = $VirtualDom.defaultOptions;
   var Options = F2(function (a,
   b) {
      return {_: {}
             ,preventDefault: b
             ,stopPropagation: a};
   });
   var onWithOptions = $VirtualDom.onWithOptions;
   var on = $VirtualDom.on;
   var messageOn = F3(function (name,
   addr,
   msg) {
      return A3(on,
      name,
      $Json$Decode.value,
      function (_v0) {
         return function () {
            return A2($Signal.message,
            addr,
            msg);
         }();
      });
   });
   var onClick = messageOn("click");
   var onDoubleClick = messageOn("dblclick");
   var onMouseMove = messageOn("mousemove");
   var onMouseDown = messageOn("mousedown");
   var onMouseUp = messageOn("mouseup");
   var onMouseEnter = messageOn("mouseenter");
   var onMouseLeave = messageOn("mouseleave");
   var onMouseOver = messageOn("mouseover");
   var onMouseOut = messageOn("mouseout");
   var onBlur = messageOn("blur");
   var onFocus = messageOn("focus");
   var onSubmit = messageOn("submit");
   var onKey = F3(function (name,
   addr,
   handler) {
      return A3(on,
      name,
      keyCode,
      function (code) {
         return A2($Signal.message,
         addr,
         handler(code));
      });
   });
   var onKeyUp = onKey("keyup");
   var onKeyDown = onKey("keydown");
   var onKeyPress = onKey("keypress");
   _elm.Html.Events.values = {_op: _op
                             ,onBlur: onBlur
                             ,onFocus: onFocus
                             ,onSubmit: onSubmit
                             ,onKeyUp: onKeyUp
                             ,onKeyDown: onKeyDown
                             ,onKeyPress: onKeyPress
                             ,onClick: onClick
                             ,onDoubleClick: onDoubleClick
                             ,onMouseMove: onMouseMove
                             ,onMouseDown: onMouseDown
                             ,onMouseUp: onMouseUp
                             ,onMouseEnter: onMouseEnter
                             ,onMouseLeave: onMouseLeave
                             ,onMouseOver: onMouseOver
                             ,onMouseOut: onMouseOut
                             ,on: on
                             ,onWithOptions: onWithOptions
                             ,defaultOptions: defaultOptions
                             ,targetValue: targetValue
                             ,targetChecked: targetChecked
                             ,keyCode: keyCode
                             ,Options: Options};
   return _elm.Html.Events.values;
};
Elm.Json = Elm.Json || {};
Elm.Json.Decode = Elm.Json.Decode || {};
Elm.Json.Decode.make = function (_elm) {
   "use strict";
   _elm.Json = _elm.Json || {};
   _elm.Json.Decode = _elm.Json.Decode || {};
   if (_elm.Json.Decode.values)
   return _elm.Json.Decode.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Json.Decode",
   $Array = Elm.Array.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Json$Encode = Elm.Json.Encode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Json = Elm.Native.Json.make(_elm),
   $Result = Elm.Result.make(_elm);
   var tuple8 = $Native$Json.decodeTuple8;
   var tuple7 = $Native$Json.decodeTuple7;
   var tuple6 = $Native$Json.decodeTuple6;
   var tuple5 = $Native$Json.decodeTuple5;
   var tuple4 = $Native$Json.decodeTuple4;
   var tuple3 = $Native$Json.decodeTuple3;
   var tuple2 = $Native$Json.decodeTuple2;
   var tuple1 = $Native$Json.decodeTuple1;
   var succeed = $Native$Json.succeed;
   var fail = $Native$Json.fail;
   var andThen = $Native$Json.andThen;
   var customDecoder = $Native$Json.customDecoder;
   var decodeValue = $Native$Json.runDecoderValue;
   var value = $Native$Json.decodeValue;
   var maybe = $Native$Json.decodeMaybe;
   var $null = $Native$Json.decodeNull;
   var array = $Native$Json.decodeArray;
   var list = $Native$Json.decodeList;
   var bool = $Native$Json.decodeBool;
   var $int = $Native$Json.decodeInt;
   var $float = $Native$Json.decodeFloat;
   var string = $Native$Json.decodeString;
   var oneOf = $Native$Json.oneOf;
   var keyValuePairs = $Native$Json.decodeKeyValuePairs;
   var object8 = $Native$Json.decodeObject8;
   var object7 = $Native$Json.decodeObject7;
   var object6 = $Native$Json.decodeObject6;
   var object5 = $Native$Json.decodeObject5;
   var object4 = $Native$Json.decodeObject4;
   var object3 = $Native$Json.decodeObject3;
   var object2 = $Native$Json.decodeObject2;
   var object1 = $Native$Json.decodeObject1;
   _op[":="] = $Native$Json.decodeField;
   var at = F2(function (fields,
   decoder) {
      return A3($List.foldr,
      F2(function (x,y) {
         return A2(_op[":="],x,y);
      }),
      decoder,
      fields);
   });
   var decodeString = $Native$Json.runDecoderString;
   var map = $Native$Json.decodeObject1;
   var dict = function (decoder) {
      return A2(map,
      $Dict.fromList,
      keyValuePairs(decoder));
   };
   var Decoder = {ctor: "Decoder"};
   _elm.Json.Decode.values = {_op: _op
                             ,decodeString: decodeString
                             ,decodeValue: decodeValue
                             ,string: string
                             ,$int: $int
                             ,$float: $float
                             ,bool: bool
                             ,$null: $null
                             ,list: list
                             ,array: array
                             ,tuple1: tuple1
                             ,tuple2: tuple2
                             ,tuple3: tuple3
                             ,tuple4: tuple4
                             ,tuple5: tuple5
                             ,tuple6: tuple6
                             ,tuple7: tuple7
                             ,tuple8: tuple8
                             ,at: at
                             ,object1: object1
                             ,object2: object2
                             ,object3: object3
                             ,object4: object4
                             ,object5: object5
                             ,object6: object6
                             ,object7: object7
                             ,object8: object8
                             ,keyValuePairs: keyValuePairs
                             ,dict: dict
                             ,maybe: maybe
                             ,oneOf: oneOf
                             ,map: map
                             ,fail: fail
                             ,succeed: succeed
                             ,andThen: andThen
                             ,value: value
                             ,customDecoder: customDecoder
                             ,Decoder: Decoder};
   return _elm.Json.Decode.values;
};
Elm.Json = Elm.Json || {};
Elm.Json.Encode = Elm.Json.Encode || {};
Elm.Json.Encode.make = function (_elm) {
   "use strict";
   _elm.Json = _elm.Json || {};
   _elm.Json.Encode = _elm.Json.Encode || {};
   if (_elm.Json.Encode.values)
   return _elm.Json.Encode.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Json.Encode",
   $Array = Elm.Array.make(_elm),
   $Native$Json = Elm.Native.Json.make(_elm);
   var list = $Native$Json.encodeList;
   var array = $Native$Json.encodeArray;
   var object = $Native$Json.encodeObject;
   var $null = $Native$Json.encodeNull;
   var bool = $Native$Json.identity;
   var $float = $Native$Json.identity;
   var $int = $Native$Json.identity;
   var string = $Native$Json.identity;
   var encode = $Native$Json.encode;
   var Value = {ctor: "Value"};
   _elm.Json.Encode.values = {_op: _op
                             ,encode: encode
                             ,string: string
                             ,$int: $int
                             ,$float: $float
                             ,bool: bool
                             ,$null: $null
                             ,list: list
                             ,array: array
                             ,object: object
                             ,Value: Value};
   return _elm.Json.Encode.values;
};
Elm.Keyboard = Elm.Keyboard || {};
Elm.Keyboard.make = function (_elm) {
   "use strict";
   _elm.Keyboard = _elm.Keyboard || {};
   if (_elm.Keyboard.values)
   return _elm.Keyboard.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Keyboard",
   $Basics = Elm.Basics.make(_elm),
   $Native$Keyboard = Elm.Native.Keyboard.make(_elm),
   $Set = Elm.Set.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var presses = A2($Signal.map,
   function (_) {
      return _.keyCode;
   },
   $Native$Keyboard.presses);
   var toXY = F2(function (_v0,
   keyCodes) {
      return function () {
         return function () {
            var is = function (keyCode) {
               return A2($Set.member,
               keyCode,
               keyCodes) ? 1 : 0;
            };
            return {_: {}
                   ,x: is(_v0.right) - is(_v0.left)
                   ,y: is(_v0.up) - is(_v0.down)};
         }();
      }();
   });
   var Directions = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,down: b
             ,left: c
             ,right: d
             ,up: a};
   });
   var dropMap = F2(function (f,
   signal) {
      return $Signal.dropRepeats(A2($Signal.map,
      f,
      signal));
   });
   var EventInfo = F3(function (a,
   b,
   c) {
      return {_: {}
             ,alt: a
             ,keyCode: c
             ,meta: b};
   });
   var Blur = {ctor: "Blur"};
   var Down = function (a) {
      return {ctor: "Down",_0: a};
   };
   var Up = function (a) {
      return {ctor: "Up",_0: a};
   };
   var rawEvents = $Signal.mergeMany(_L.fromArray([A2($Signal.map,
                                                  Up,
                                                  $Native$Keyboard.ups)
                                                  ,A2($Signal.map,
                                                  Down,
                                                  $Native$Keyboard.downs)
                                                  ,A2($Signal.map,
                                                  $Basics.always(Blur),
                                                  $Native$Keyboard.blurs)]));
   var empty = {_: {}
               ,alt: false
               ,keyCodes: $Set.empty
               ,meta: false};
   var update = F2(function (event,
   model) {
      return function () {
         switch (event.ctor)
         {case "Blur": return empty;
            case "Down": return {_: {}
                                ,alt: event._0.alt
                                ,keyCodes: A2($Set.insert,
                                event._0.keyCode,
                                model.keyCodes)
                                ,meta: event._0.meta};
            case "Up": return {_: {}
                              ,alt: event._0.alt
                              ,keyCodes: A2($Set.remove,
                              event._0.keyCode,
                              model.keyCodes)
                              ,meta: event._0.meta};}
         _U.badCase($moduleName,
         "between lines 68 and 82");
      }();
   });
   var model = A3($Signal.foldp,
   update,
   empty,
   rawEvents);
   var alt = A2(dropMap,
   function (_) {
      return _.alt;
   },
   model);
   var meta = A2(dropMap,
   function (_) {
      return _.meta;
   },
   model);
   var keysDown = A2(dropMap,
   function (_) {
      return _.keyCodes;
   },
   model);
   var arrows = A2(dropMap,
   toXY({_: {}
        ,down: 40
        ,left: 37
        ,right: 39
        ,up: 38}),
   keysDown);
   var wasd = A2(dropMap,
   toXY({_: {}
        ,down: 83
        ,left: 65
        ,right: 68
        ,up: 87}),
   keysDown);
   var isDown = function (keyCode) {
      return A2(dropMap,
      $Set.member(keyCode),
      keysDown);
   };
   var ctrl = isDown(17);
   var shift = isDown(16);
   var space = isDown(32);
   var enter = isDown(13);
   var Model = F3(function (a,
   b,
   c) {
      return {_: {}
             ,alt: a
             ,keyCodes: c
             ,meta: b};
   });
   _elm.Keyboard.values = {_op: _op
                          ,arrows: arrows
                          ,wasd: wasd
                          ,enter: enter
                          ,space: space
                          ,ctrl: ctrl
                          ,shift: shift
                          ,alt: alt
                          ,meta: meta
                          ,isDown: isDown
                          ,keysDown: keysDown
                          ,presses: presses};
   return _elm.Keyboard.values;
};
Elm.List = Elm.List || {};
Elm.List.make = function (_elm) {
   "use strict";
   _elm.List = _elm.List || {};
   if (_elm.List.values)
   return _elm.List.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "List",
   $Basics = Elm.Basics.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$List = Elm.Native.List.make(_elm);
   var sortWith = $Native$List.sortWith;
   var sortBy = $Native$List.sortBy;
   var sort = function (xs) {
      return A2(sortBy,
      $Basics.identity,
      xs);
   };
   var repeat = $Native$List.repeat;
   var drop = $Native$List.drop;
   var take = $Native$List.take;
   var map5 = $Native$List.map5;
   var map4 = $Native$List.map4;
   var map3 = $Native$List.map3;
   var map2 = $Native$List.map2;
   var any = $Native$List.any;
   var all = F2(function (pred,
   xs) {
      return $Basics.not(A2(any,
      function ($) {
         return $Basics.not(pred($));
      },
      xs));
   });
   var foldr = $Native$List.foldr;
   var foldl = $Native$List.foldl;
   var length = function (xs) {
      return A3(foldl,
      F2(function (_v0,i) {
         return function () {
            return i + 1;
         }();
      }),
      0,
      xs);
   };
   var sum = function (numbers) {
      return A3(foldl,
      F2(function (x,y) {
         return x + y;
      }),
      0,
      numbers);
   };
   var product = function (numbers) {
      return A3(foldl,
      F2(function (x,y) {
         return x * y;
      }),
      1,
      numbers);
   };
   var maximum = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(A3(foldl,
              $Basics.max,
              list._0,
              list._1));}
         return $Maybe.Nothing;
      }();
   };
   var minimum = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(A3(foldl,
              $Basics.min,
              list._0,
              list._1));}
         return $Maybe.Nothing;
      }();
   };
   var indexedMap = F2(function (f,
   xs) {
      return A3(map2,
      f,
      _L.range(0,length(xs) - 1),
      xs);
   });
   var member = F2(function (x,
   xs) {
      return A2(any,
      function (a) {
         return _U.eq(a,x);
      },
      xs);
   });
   var isEmpty = function (xs) {
      return function () {
         switch (xs.ctor)
         {case "[]": return true;}
         return false;
      }();
   };
   var tail = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(list._1);
            case "[]":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 87 and 95");
      }();
   };
   var head = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(list._0);
            case "[]":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 75 and 84");
      }();
   };
   _op["::"] = $Native$List.cons;
   var map = F2(function (f,xs) {
      return A3(foldr,
      F2(function (x,acc) {
         return A2(_op["::"],
         f(x),
         acc);
      }),
      _L.fromArray([]),
      xs);
   });
   var filter = F2(function (pred,
   xs) {
      return function () {
         var conditionalCons = F2(function (x,
         xs$) {
            return pred(x) ? A2(_op["::"],
            x,
            xs$) : xs$;
         });
         return A3(foldr,
         conditionalCons,
         _L.fromArray([]),
         xs);
      }();
   });
   var maybeCons = F3(function (f,
   mx,
   xs) {
      return function () {
         var _v15 = f(mx);
         switch (_v15.ctor)
         {case "Just":
            return A2(_op["::"],_v15._0,xs);
            case "Nothing": return xs;}
         _U.badCase($moduleName,
         "between lines 179 and 186");
      }();
   });
   var filterMap = F2(function (f,
   xs) {
      return A3(foldr,
      maybeCons(f),
      _L.fromArray([]),
      xs);
   });
   var reverse = function (list) {
      return A3(foldl,
      F2(function (x,y) {
         return A2(_op["::"],x,y);
      }),
      _L.fromArray([]),
      list);
   };
   var scanl = F3(function (f,
   b,
   xs) {
      return function () {
         var scan1 = F2(function (x,
         accAcc) {
            return function () {
               switch (accAcc.ctor)
               {case "::": return A2(_op["::"],
                    A2(f,x,accAcc._0),
                    accAcc);
                  case "[]":
                  return _L.fromArray([]);}
               _U.badCase($moduleName,
               "between lines 148 and 151");
            }();
         });
         return reverse(A3(foldl,
         scan1,
         _L.fromArray([b]),
         xs));
      }();
   });
   var append = F2(function (xs,
   ys) {
      return function () {
         switch (ys.ctor)
         {case "[]": return xs;}
         return A3(foldr,
         F2(function (x,y) {
            return A2(_op["::"],x,y);
         }),
         ys,
         xs);
      }();
   });
   var concat = function (lists) {
      return A3(foldr,
      append,
      _L.fromArray([]),
      lists);
   };
   var concatMap = F2(function (f,
   list) {
      return concat(A2(map,
      f,
      list));
   });
   var partition = F2(function (pred,
   list) {
      return function () {
         var step = F2(function (x,
         _v21) {
            return function () {
               switch (_v21.ctor)
               {case "_Tuple2":
                  return pred(x) ? {ctor: "_Tuple2"
                                   ,_0: A2(_op["::"],x,_v21._0)
                                   ,_1: _v21._1} : {ctor: "_Tuple2"
                                                   ,_0: _v21._0
                                                   ,_1: A2(_op["::"],
                                                   x,
                                                   _v21._1)};}
               _U.badCase($moduleName,
               "between lines 301 and 303");
            }();
         });
         return A3(foldr,
         step,
         {ctor: "_Tuple2"
         ,_0: _L.fromArray([])
         ,_1: _L.fromArray([])},
         list);
      }();
   });
   var unzip = function (pairs) {
      return function () {
         var step = F2(function (_v25,
         _v26) {
            return function () {
               switch (_v26.ctor)
               {case "_Tuple2":
                  return function () {
                       switch (_v25.ctor)
                       {case "_Tuple2":
                          return {ctor: "_Tuple2"
                                 ,_0: A2(_op["::"],
                                 _v25._0,
                                 _v26._0)
                                 ,_1: A2(_op["::"],
                                 _v25._1,
                                 _v26._1)};}
                       _U.badCase($moduleName,
                       "on line 339, column 12 to 28");
                    }();}
               _U.badCase($moduleName,
               "on line 339, column 12 to 28");
            }();
         });
         return A3(foldr,
         step,
         {ctor: "_Tuple2"
         ,_0: _L.fromArray([])
         ,_1: _L.fromArray([])},
         pairs);
      }();
   };
   var intersperse = F2(function (sep,
   xs) {
      return function () {
         switch (xs.ctor)
         {case "::": return function () {
                 var step = F2(function (x,
                 rest) {
                    return A2(_op["::"],
                    sep,
                    A2(_op["::"],x,rest));
                 });
                 var spersed = A3(foldr,
                 step,
                 _L.fromArray([]),
                 xs._1);
                 return A2(_op["::"],
                 xs._0,
                 spersed);
              }();
            case "[]":
            return _L.fromArray([]);}
         _U.badCase($moduleName,
         "between lines 350 and 361");
      }();
   });
   _elm.List.values = {_op: _op
                      ,isEmpty: isEmpty
                      ,length: length
                      ,reverse: reverse
                      ,member: member
                      ,head: head
                      ,tail: tail
                      ,filter: filter
                      ,take: take
                      ,drop: drop
                      ,repeat: repeat
                      ,append: append
                      ,concat: concat
                      ,intersperse: intersperse
                      ,partition: partition
                      ,unzip: unzip
                      ,map: map
                      ,map2: map2
                      ,map3: map3
                      ,map4: map4
                      ,map5: map5
                      ,filterMap: filterMap
                      ,concatMap: concatMap
                      ,indexedMap: indexedMap
                      ,foldr: foldr
                      ,foldl: foldl
                      ,sum: sum
                      ,product: product
                      ,maximum: maximum
                      ,minimum: minimum
                      ,all: all
                      ,any: any
                      ,scanl: scanl
                      ,sort: sort
                      ,sortBy: sortBy
                      ,sortWith: sortWith};
   return _elm.List.values;
};
Elm.Main = Elm.Main || {};
Elm.Main.make = function (_elm) {
   "use strict";
   _elm.Main = _elm.Main || {};
   if (_elm.Main.values)
   return _elm.Main.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Main",
   $Array = Elm.Array.make(_elm),
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Either = Elm.Either.make(_elm),
   $Expression = Elm.Expression.make(_elm),
   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Html = Elm.Html.make(_elm),
   $Html$Attributes = Elm.Html.Attributes.make(_elm),
   $Html$Events = Elm.Html.Events.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm),
   $Keyboard = Elm.Keyboard.make(_elm),
   $List = Elm.List.make(_elm),
   $Markdown = Elm.Markdown.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Mouse = Elm.Mouse.make(_elm),
   $Native$Click = Elm.Native.Click.make(_elm),
   $ODE = Elm.ODE.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Set = Elm.Set.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Signal$Extra = Elm.Signal.Extra.make(_elm),
   $Slider = Elm.Slider.make(_elm),
   $Time = Elm.Time.make(_elm),
   $Util = Elm.Util.make(_elm),
   $Window = Elm.Window.make(_elm);
   var flat = {ctor: "_Tuple4"
              ,_0: $Expression.Constant(1)
              ,_1: $Expression.Constant(0)
              ,_2: $Expression.Constant(0)
              ,_3: $Expression.Constant(1)};
   var dcoord2 = "dy";
   var dcoord1 = "dx";
   var coord2 = "y";
   var sphere = {ctor: "_Tuple4"
                ,_0: A2($Expression.Pow,
                $Expression.Sin($Expression.Var(coord2)),
                2)
                ,_1: $Expression.Constant(0)
                ,_2: $Expression.Constant(0)
                ,_3: $Expression.Constant(1)};
   var halfPlane = function () {
      var c = A2($Expression.Pow,
      $Expression.Var(coord2),
      -2);
      return {ctor: "_Tuple4"
             ,_0: c
             ,_1: $Expression.Constant(0)
             ,_2: $Expression.Constant(0)
             ,_3: c};
   }();
   var coord1 = "x";
   var stereoGraphicSphere = function () {
      var y = $Expression.Var(coord2);
      var x = $Expression.Var(coord1);
      var r2 = A2($Expression.Add,
      A2($Expression.Mul,x,x),
      A2($Expression.Mul,y,y));
      var c = A2($Expression.Mul,
      $Expression.Constant(4),
      A2($Expression.Pow,
      A2($Expression.Add,
      $Expression.Constant(1),
      r2),
      -2));
      return {ctor: "_Tuple4"
             ,_0: c
             ,_1: $Expression.Constant(0)
             ,_2: $Expression.Constant(0)
             ,_3: c};
   }();
   var noparabola = function () {
      var c = A2($Expression.Pow,
      A2($Expression.Add,
      $Expression.Var(coord2),
      A2($Expression.Mul,
      $Expression.Constant(-1),
      A2($Expression.Mul,
      $Expression.Var(coord1),
      $Expression.Var(coord1)))),
      -1);
      return {ctor: "_Tuple4"
             ,_0: c
             ,_1: $Expression.Constant(0)
             ,_2: $Expression.Constant(0)
             ,_3: c};
   }();
   var curvy = function () {
      var c = A2($Expression.Pow,
      A2($Expression.Add,
      A2($Expression.Mul,
      $Expression.Var(coord2),
      $Expression.Var(coord2)),
      A2($Expression.Mul,
      $Expression.Var(coord1),
      $Expression.Var(coord1))),
      2);
      return {ctor: "_Tuple4"
             ,_0: c
             ,_1: $Expression.Constant(0)
             ,_2: $Expression.Constant(0)
             ,_3: c};
   }();
   var cylinder = function () {
      var y = $Expression.Var(coord2);
      var x = $Expression.Var(coord1);
      var c = A2($Expression.Pow,
      A2($Expression.Add,
      A2($Expression.Mul,x,x),
      A2($Expression.Mul,y,y)),
      -1);
      return {ctor: "_Tuple4"
             ,_0: c
             ,_1: $Expression.Constant(0)
             ,_2: $Expression.Constant(0)
             ,_3: c};
   }();
   var futureLength = 1;
   var closedCircle = function (r) {
      return A2($Basics._op["++"],
      $Graphics$Collage.circle(r),
      _L.fromArray([{ctor: "_Tuple2"
                    ,_0: r
                    ,_1: 0}]));
   };
   var cylinderOverlay = function (scaleFactor) {
      return function () {
         var nRays = 8;
         return $Graphics$Collage.group(_L.fromArray([$Graphics$Collage.group(A2($List.map,
                                                     function (i) {
                                                        return A2($Graphics$Collage.traced,
                                                        $Graphics$Collage.dashed($Color.black),
                                                        closedCircle(i * scaleFactor));
                                                     },
                                                     _L.range(1,10)))
                                                     ,$Graphics$Collage.group(A2($List.map,
                                                     function (i) {
                                                        return function () {
                                                           var t = i * 2 * $Basics.pi / nRays;
                                                           return A2($Graphics$Collage.traced,
                                                           $Graphics$Collage.dashed($Color.black),
                                                           A2($Graphics$Collage.segment,
                                                           {ctor: "_Tuple2"
                                                           ,_0: 0
                                                           ,_1: 0},
                                                           {ctor: "_Tuple2"
                                                           ,_0: 10 * scaleFactor * $Basics.cos(t)
                                                           ,_1: 10 * scaleFactor * $Basics.sin(t)}));
                                                        }();
                                                     },
                                                     _L.range(1,nRays)))]));
      }();
   };
   var px = function (x) {
      return A2($Basics._op["++"],
      $Basics.toString(x),
      "px");
   };
   var shouldLeaveTrail = function (s) {
      return function () {
         var _v0 = s.trailStart;
         switch (_v0.ctor)
         {case "Just": return true;}
         return false;
      }();
   };
   var setAt = F3(function (_v2,
   a,
   _v3) {
      return function () {
         switch (_v3.ctor)
         {case "_Tuple4":
            return function () {
                 switch (_v2.ctor)
                 {case "_Tuple2":
                    return function () {
                         var _v12 = {ctor: "_Tuple2"
                                    ,_0: _v2._0
                                    ,_1: _v2._1};
                         switch (_v12.ctor)
                         {case "_Tuple2":
                            switch (_v12._0.ctor)
                              {case "I": switch (_v12._1.ctor)
                                   {case "I":
                                      return {ctor: "_Tuple4"
                                             ,_0: _v3._0
                                             ,_1: _v3._1
                                             ,_2: _v3._2
                                             ,_3: a};
                                      case "O":
                                      return {ctor: "_Tuple4"
                                             ,_0: _v3._0
                                             ,_1: _v3._1
                                             ,_2: a
                                             ,_3: _v3._3};}
                                   break;
                                 case "O": switch (_v12._1.ctor)
                                   {case "I":
                                      return {ctor: "_Tuple4"
                                             ,_0: _v3._0
                                             ,_1: a
                                             ,_2: _v3._2
                                             ,_3: _v3._3};
                                      case "O":
                                      return {ctor: "_Tuple4"
                                             ,_0: a
                                             ,_1: _v3._1
                                             ,_2: _v3._2
                                             ,_3: _v3._3};}
                                   break;}
                              break;}
                         _U.badCase($moduleName,
                         "between lines 1023 and 1027");
                      }();}
                 _U.badCase($moduleName,
                 "between lines 1023 and 1027");
              }();}
         _U.badCase($moduleName,
         "between lines 1023 and 1027");
      }();
   });
   var prod = function (_v15) {
      return function () {
         switch (_v15.ctor)
         {case "::":
            return A3($List.foldl,
              $Expression.Mul,
              _v15._0,
              _v15._1);}
         _U.badCase($moduleName,
         "on line 1019, column 16 to 35");
      }();
   };
   var sum = function (_v19) {
      return function () {
         switch (_v19.ctor)
         {case "::":
            return A3($List.foldl,
              $Expression.Add,
              _v19._0,
              _v19._1);}
         _U.badCase($moduleName,
         "on line 1018, column 15 to 34");
      }();
   };
   var poincare = function () {
      var c = A2($Expression.Pow,
      sum(_L.fromArray([$Expression.Constant(1)
                       ,A2($Expression.Mul,
                       $Expression.Constant(-1),
                       A2($Expression.Add,
                       A2($Expression.Mul,
                       $Expression.Var(coord1),
                       $Expression.Var(coord1)),
                       A2($Expression.Mul,
                       $Expression.Var(coord2),
                       $Expression.Var(coord2))))])),
      -2);
      return {ctor: "_Tuple4"
             ,_0: c
             ,_1: $Expression.Constant(0)
             ,_2: $Expression.Constant(0)
             ,_3: c};
   }();
   var klein = function () {
      var $ = {ctor: "_Tuple2"
              ,_0: $Expression.Var(coord1)
              ,_1: $Expression.Var(coord2)},
      x = $._0,
      y = $._1;
      var c = sum(_L.fromArray([$Expression.Constant(1)
                               ,A2($Expression.Mul,
                               $Expression.Constant(-1),
                               A2($Expression.Add,
                               A2($Expression.Mul,x,x),
                               A2($Expression.Mul,y,y)))]));
      return {ctor: "_Tuple4"
             ,_0: A2($Expression.Add,
             A2($Expression.Pow,c,-1),
             A2($Expression.Mul,
             A2($Expression.Mul,x,x),
             A2($Expression.Pow,c,-2)))
             ,_1: A2($Expression.Mul,
             A2($Expression.Mul,x,y),
             A2($Expression.Pow,c,-2))
             ,_2: A2($Expression.Mul,
             A2($Expression.Mul,x,y),
             A2($Expression.Pow,c,-2))
             ,_3: A2($Expression.Add,
             A2($Expression.Pow,c,-1),
             A2($Expression.Mul,
             A2($Expression.Mul,y,y),
             A2($Expression.Pow,c,-2)))};
   }();
   var I = {ctor: "I"};
   var O = {ctor: "O"};
   var bodyFocused = Elm.Native.Port.make(_elm).inboundSignal("bodyFocused",
   "Bool",
   function (v) {
      return typeof v === "boolean" ? v : _U.badPort("a boolean (true or false)",
      v);
   });
   var fourFromList = function (_v23) {
      return function () {
         switch (_v23.ctor)
         {case "::":
            switch (_v23._1.ctor)
              {case "::":
                 switch (_v23._1._1.ctor)
                   {case "::":
                      switch (_v23._1._1._1.ctor)
                        {case "::":
                           switch (_v23._1._1._1._1.ctor)
                             {case "[]":
                                return {ctor: "_Tuple4"
                                       ,_0: _v23._0
                                       ,_1: _v23._1._0
                                       ,_2: _v23._1._1._0
                                       ,_3: _v23._1._1._1._0};}
                             break;}
                        break;}
                   break;}
              break;}
         _U.badCase($moduleName,
         "on line 974, column 31 to 42");
      }();
   };
   var fourToList = function (_v33) {
      return function () {
         switch (_v33.ctor)
         {case "_Tuple4":
            return _L.fromArray([_v33._0
                                ,_v33._1
                                ,_v33._2
                                ,_v33._3]);}
         _U.badCase($moduleName,
         "on line 971, column 28 to 44");
      }();
   };
   var fourMap = F2(function (f,
   _v39) {
      return function () {
         switch (_v39.ctor)
         {case "_Tuple4":
            return {ctor: "_Tuple4"
                   ,_0: f(_v39._0)
                   ,_1: f(_v39._1)
                   ,_2: f(_v39._2)
                   ,_3: f(_v39._3)};}
         _U.badCase($moduleName,
         "on line 968, column 28 to 50");
      }();
   });
   var defaultPan = {ctor: "_Tuple2"
                    ,_0: 0
                    ,_1: 0};
   var defaultScaleFactor = 200;
   var drawGeodesicFromTil = F4(function (scaleFactor,
   start,
   stop,
   geodesic) {
      return function () {
         var toPt = function (e) {
            return {ctor: "_Tuple2"
                   ,_0: scaleFactor * A2($Util.getExn,
                   coord1,
                   e)
                   ,_1: scaleFactor * A2($Util.getExn,
                   coord2,
                   e)};
         };
         var pts = A2($List._op["::"],
         toPt(A2($ODE.at,
         geodesic,
         start)),
         A2($Basics._op["++"],
         A2($List.map,
         $Basics.snd,
         A2($Util.takeWhile,
         function (_v45) {
            return function () {
               switch (_v45.ctor)
               {case "_Tuple2":
                  return _U.cmp(_v45._0,
                    stop) < 1;}
               _U.badCase($moduleName,
               "on line 659, column 32 to 41");
            }();
         },
         A2($Util.dropWhile,
         function (_v49) {
            return function () {
               switch (_v49.ctor)
               {case "_Tuple2":
                  return _U.cmp(_v49._0,
                    start) < 0;}
               _U.badCase($moduleName,
               "on line 660, column 34 to 43");
            }();
         },
         A3($List.map2,
         F2(function (t,e) {
            return {ctor: "_Tuple2"
                   ,_0: t
                   ,_1: toPt(e)};
         }),
         $ODE.solutionParameters(geodesic),
         $ODE.solutionValues(geodesic))))),
         _L.fromArray([toPt(A2($ODE.at,
         geodesic,
         stop))])));
         return A2($Graphics$Collage.traced,
         $Graphics$Collage.solid($Color.green),
         $Graphics$Collage.path(pts));
      }();
   });
   var geodesicPathFromTill = F3(function (start,
   stop,
   geodesic) {
      return function () {
         var toPt = function (e) {
            return {ctor: "_Tuple2"
                   ,_0: A2($Util.getExn,coord1,e)
                   ,_1: A2($Util.getExn,coord2,e)};
         };
         return $Graphics$Collage.path(A2($List._op["::"],
         toPt(A2($ODE.at,
         geodesic,
         start)),
         A2($Basics._op["++"],
         A2($List.map,
         $Basics.snd,
         A2($Util.takeWhile,
         function (_v53) {
            return function () {
               switch (_v53.ctor)
               {case "_Tuple2":
                  return _U.cmp(_v53._0,
                    stop) < 1;}
               _U.badCase($moduleName,
               "on line 643, column 28 to 37");
            }();
         },
         A2($Util.dropWhile,
         function (_v57) {
            return function () {
               switch (_v57.ctor)
               {case "_Tuple2":
                  return _U.cmp(_v57._0,
                    start) < 0;}
               _U.badCase($moduleName,
               "on line 644, column 30 to 39");
            }();
         },
         A3($List.map2,
         F2(function (t,e) {
            return {ctor: "_Tuple2"
                   ,_0: t
                   ,_1: toPt(e)};
         }),
         $ODE.solutionParameters(geodesic),
         $ODE.solutionValues(geodesic))))),
         _L.fromArray([toPt(A2($ODE.at,
         geodesic,
         stop))]))));
      }();
   });
   var drawGeodesicTil = F3(function (scaleFactor,
   distance,
   geodesic) {
      return function () {
         var toPt = function (e) {
            return {ctor: "_Tuple2"
                   ,_0: scaleFactor * A2($Util.getExn,
                   coord1,
                   e)
                   ,_1: scaleFactor * A2($Util.getExn,
                   coord2,
                   e)};
         };
         var pts = A2($Basics._op["++"],
         A2($List.map,
         $Basics.snd,
         A2($Util.takeWhile,
         function (_v61) {
            return function () {
               switch (_v61.ctor)
               {case "_Tuple2":
                  return _U.cmp(_v61._0,
                    distance) < 1;}
               _U.badCase($moduleName,
               "on line 623, column 33 to 46");
            }();
         },
         A3($List.map2,
         F2(function (t,e) {
            return {ctor: "_Tuple2"
                   ,_0: t
                   ,_1: toPt(e)};
         }),
         $ODE.solutionParameters(geodesic),
         $ODE.solutionValues(geodesic)))),
         _L.fromArray([toPt(A2($ODE.at,
         geodesic,
         distance))]));
         return A2($Graphics$Collage.traced,
         $Graphics$Collage.solid($Color.green),
         $Graphics$Collage.path(pts));
      }();
   });
   var drawGeodesic = F2(function (scaleFactor,
   sol) {
      return function () {
         var pts = A2($List.map,
         function (e) {
            return {ctor: "_Tuple2"
                   ,_0: scaleFactor * A2($Util.getExn,
                   coord1,
                   e)
                   ,_1: scaleFactor * A2($Util.getExn,
                   coord2,
                   e)};
         },
         $ODE.solutionValues(sol));
         return A2($Graphics$Collage.traced,
         $Graphics$Collage.solid($Color.red),
         $Graphics$Collage.path(pts));
      }();
   });
   var curvedArrow = function (s) {
      return function () {
         var offset = F3(function (d,
         sgn,
         dat) {
            return function () {
               var $ = dat,
               x = $.x,
               y = $.y,
               dx = $.dx,
               dy = $.dy;
               return {ctor: "_Tuple2"
                      ,_0: s.scaleFactor * (x + d * sgn * (0 - dy))
                      ,_1: s.scaleFactor * (y + d * sgn * dx)};
            }();
         });
         var dataFromTil = F3(function (start,
         stop,
         geo) {
            return function () {
               var toRecord = F2(function (t,
               dat) {
                  return {_: {}
                         ,dx: A2($Util.getExn,
                         dcoord1,
                         dat)
                         ,dy: A2($Util.getExn,
                         dcoord2,
                         dat)
                         ,t: t
                         ,x: A2($Util.getExn,coord1,dat)
                         ,y: A2($Util.getExn,
                         coord2,
                         dat)};
               });
               return A2($List._op["::"],
               A2(toRecord,
               start,
               A2($ODE.at,geo,start)),
               A2($Basics._op["++"],
               A2($Util.takeWhile,
               function (d) {
                  return _U.cmp(d.t,stop) < 1;
               },
               A2($Util.dropWhile,
               function (d) {
                  return _U.cmp(d.t,start) < 0;
               },
               A3($List.map2,
               toRecord,
               $ODE.solutionParameters(geo),
               $ODE.solutionValues(geo)))),
               _L.fromArray([A2(toRecord,
               stop,
               A2($ODE.at,geo,stop))])));
            }();
         });
         var headLen = 0.3;
         var arrowLen = 0.5;
         var bodyLenFromCurr = function () {
            var remainingOnCurr = futureLength - s.geodesicPos;
            return A2($Basics.min,
            remainingOnCurr,
            arrowLen);
         }();
         var headLenFromCurr = function () {
            var remainingOnCurr = futureLength - s.geodesicPos - bodyLenFromCurr;
            return A2($Basics.min,
            headLen,
            remainingOnCurr);
         }();
         var headLenFromNext = headLen - headLenFromCurr;
         var bodyLenFromNext = arrowLen - bodyLenFromCurr;
         var bodyDatas = A2($Basics._op["++"],
         A3(dataFromTil,
         s.geodesicPos,
         s.geodesicPos + bodyLenFromCurr,
         s.currGeodesic),
         _U.cmp(bodyLenFromNext,
         0) > 0 ? A3(dataFromTil,
         0,
         bodyLenFromNext,
         s.nextGeodesic) : _L.fromArray([]));
         var headPts = function () {
            var offset = F3(function (dist,
            sgn,
            d) {
               return function () {
                  var $ = d,
                  x = $.x,
                  y = $.y,
                  dx = $.dx,
                  dy = $.dy,
                  t = $.t;
                  var t$ = 1 - t / headLen;
                  return {ctor: "_Tuple2"
                         ,_0: s.scaleFactor * (x + t$ * dist * sgn * (0 - dy))
                         ,_1: s.scaleFactor * (y + t$ * dist * sgn * dx)};
               }();
            });
            var dataFromNext = _U.cmp(headLenFromNext,
            0) > 0 ? A2($List.map,
            function (d) {
               return _U.replace([["t"
                                  ,d.t + headLenFromCurr - bodyLenFromNext]],
               d);
            },
            A3(dataFromTil,
            bodyLenFromNext,
            bodyLenFromNext + headLenFromNext,
            s.nextGeodesic)) : _L.fromArray([]);
            var currStart = s.geodesicPos + bodyLenFromCurr;
            var dataFromCurr = _U.cmp(headLenFromCurr,
            0) > 0 ? A2($List.map,
            function (d) {
               return _U.replace([["t"
                                  ,d.t - currStart]],
               d);
            },
            A3(dataFromTil,
            currStart,
            currStart + headLenFromCurr,
            s.currGeodesic)) : _L.fromArray([]);
            var datas = A2($Basics._op["++"],
            dataFromCurr,
            dataFromNext);
            return A2($Basics._op["++"],
            A2($List.map,
            A2(offset,0.2,1),
            datas),
            A2($Util.revMap,
            A2(offset,0.2,-1),
            datas));
         }();
         var pts = A2($Basics._op["++"],
         A2($List.map,
         A2(offset,0.1,1),
         bodyDatas),
         A2($Basics._op["++"],
         headPts,
         A2($Util.revMap,
         A2(offset,0.1,-1),
         bodyDatas)));
         return A2($Graphics$Collage.filled,
         $Color.red,
         $Graphics$Collage.polygon(pts));
      }();
   };
   var drawSpace = function (s) {
      return function () {
         var $ = s.pan,
         px = $._0,
         py = $._1;
         var posAndVel = A2($ODE.at,
         s.currGeodesic,
         s.geodesicPos);
         var xReal = A2($Util.getExn,
         coord1,
         posAndVel);
         var x = s.scaleFactor * xReal;
         var yReal = A2($Util.getExn,
         coord2,
         posAndVel);
         var y = s.scaleFactor * yReal;
         var dx = s.scaleFactor * A2($Util.getExn,
         dcoord1,
         posAndVel);
         var dy = s.scaleFactor * A2($Util.getExn,
         dcoord2,
         posAndVel);
         return $Graphics$Collage.move({ctor: "_Tuple2"
                                       ,_0: px
                                       ,_1: 0 - py})($Graphics$Collage.group(_L.fromArray([s.overlay(s.scaleFactor)
                                                                                          ,function () {
                                                                                             var _v65 = s.trailStart;
                                                                                             switch (_v65.ctor)
                                                                                             {case "Just":
                                                                                                return A4(drawGeodesicFromTil,
                                                                                                  s.scaleFactor,
                                                                                                  _v65._0,
                                                                                                  s.geodesicPos,
                                                                                                  s.currGeodesic);
                                                                                                case "Nothing":
                                                                                                return $Graphics$Collage.group(_L.fromArray([]));}
                                                                                             _U.badCase($moduleName,
                                                                                             "between lines 594 and 600");
                                                                                          }()
                                                                                          ,$Graphics$Collage.group(A2($List.map,
                                                                                          function ($) {
                                                                                             return $Graphics$Collage.traced($Graphics$Collage.solid($Color.green))($Graphics$Collage.path($List.map(function (_v67) {
                                                                                                return function () {
                                                                                                   switch (_v67.ctor)
                                                                                                   {case "_Tuple2":
                                                                                                      return {ctor: "_Tuple2"
                                                                                                             ,_0: _v67._0 * s.scaleFactor
                                                                                                             ,_1: _v67._1 * s.scaleFactor};}
                                                                                                   _U.badCase($moduleName,
                                                                                                   "on line 602, column 67 to 99");
                                                                                                }();
                                                                                             })($)));
                                                                                          },
                                                                                          s.trail))
                                                                                          ,curvedArrow(s)])));
      }();
   };
   var currentNorm = function (s) {
      return function () {
         var posAndVel = A2($ODE.at,
         s.currGeodesic,
         s.geodesicPos);
         var $ = s.metric,
         g11 = $._0,
         g12 = $._1,
         g21 = $._2,
         g22 = $._3;
         var a11 = A2($Expression.evaluateExn,
         g11,
         posAndVel);
         var a12 = A2($Expression.evaluateExn,
         g12,
         posAndVel);
         var a21 = a12;
         var a22 = A2($Expression.evaluateExn,
         g22,
         posAndVel);
         return function (_v71) {
            return function () {
               switch (_v71.ctor)
               {case "_Tuple2":
                  return $Basics.sqrt(_v71._0 * (a11 * _v71._0 + a12 * _v71._1) + _v71._1 * (a21 * _v71._0 + a22 * _v71._1));}
               _U.badCase($moduleName,
               "on line 288, column 14 to 68");
            }();
         };
      }();
   };
   var updateKeys = F2(function (kd,
   s) {
      return function () {
         var rate = 1 / 2000;
         var keys = kd.keys;
         var dt = kd.delta;
         var geodesicPos$ = s.geodesicPos + s.speed * dt * $Basics.toFloat(A2($Basics.max,
         keys.y,
         0));
         return _U.eq(keys.x,
         0) ? _U.cmp(geodesicPos$,
         futureLength) > -1 ? function () {
            var trail$ = function () {
               var _v75 = s.trailStart;
               switch (_v75.ctor)
               {case "Just":
                  return A2($List._op["::"],
                    A3(geodesicPathFromTill,
                    _v75._0,
                    geodesicPos$,
                    s.currGeodesic),
                    s.trail);
                  case "Nothing": return s.trail;}
               _U.badCase($moduleName,
               "between lines 433 and 439");
            }();
            return _U.replace([["geodesicPos"
                               ,geodesicPos$ - futureLength]
                              ,["currGeodesic",s.nextGeodesic]
                              ,["nextGeodesic"
                               ,A6($ODE.solve,
                               0,
                               futureLength,
                               A2($ODE.at,
                               s.nextGeodesic,
                               futureLength),
                               s.system,
                               1.0e-6,
                               1000)]
                              ,["trail",trail$]
                              ,["trailStart"
                               ,A2($Maybe.map,
                               function (_v77) {
                                  return function () {
                                     return 0;
                                  }();
                               },
                               s.trailStart)]],
            s);
         }() : _U.replace([["geodesicPos"
                           ,geodesicPos$]],
         s) : function () {
            var trail$ = function () {
               var _v79 = s.trailStart;
               switch (_v79.ctor)
               {case "Just":
                  return _U.cmp(geodesicPos$,
                    0) > 0 ? A2($List._op["::"],
                    A3(geodesicPathFromTill,
                    _v79._0,
                    geodesicPos$,
                    s.currGeodesic),
                    s.trail) : s.trail;
                  case "Nothing": return s.trail;}
               _U.badCase($moduleName,
               "between lines 472 and 480");
            }();
            var posAndVel = A2($ODE.at,
            s.currGeodesic,
            geodesicPos$);
            var $ = {ctor: "_Tuple2"
                    ,_0: A2($Util.getExn,
                    dcoord1,
                    posAndVel)
                    ,_1: A2($Util.getExn,
                    dcoord2,
                    posAndVel)},
            velX = $._0,
            velY = $._1;
            var angle$ = A2($Basics.atan2,
            velY,
            velX) + s.turningSpeed * (-1 * $Basics.toFloat(keys.x));
            var posAndVel$ = function () {
               var velY$ = $Basics.sin(angle$);
               var velX$ = $Basics.cos(angle$);
               var norm = A2(currentNorm,
               s,
               {ctor: "_Tuple2"
               ,_0: velX$
               ,_1: velY$});
               return A3($Dict.insert,
               dcoord1,
               velX$ / norm,
               A3($Dict.insert,
               dcoord2,
               velY$ / norm,
               posAndVel));
            }();
            var currGeodesic$ = A6($ODE.solve,
            0,
            futureLength,
            posAndVel$,
            s.system,
            1.0e-6,
            1000);
            return _U.replace([["geodesicPos"
                               ,0]
                              ,["currGeodesic",currGeodesic$]
                              ,["nextGeodesic"
                               ,A6($ODE.solve,
                               0,
                               futureLength,
                               A2($ODE.at,
                               currGeodesic$,
                               futureLength),
                               s.system,
                               1.0e-6,
                               1000)]
                              ,["trail",trail$]
                              ,["trailStart"
                               ,A2($Maybe.map,
                               function (_v81) {
                                  return function () {
                                     return 0;
                                  }();
                               },
                               s.trailStart)]],
            s);
         }();
      }();
   });
   var normAt = F2(function (metric,
   _v83) {
      return function () {
         switch (_v83.ctor)
         {case "_Tuple2":
            return function () {
                 var posEnv = $Dict.fromList(_L.fromArray([{ctor: "_Tuple2"
                                                           ,_0: coord1
                                                           ,_1: _v83._0}
                                                          ,{ctor: "_Tuple2"
                                                           ,_0: coord2
                                                           ,_1: _v83._1}]));
                 var $ = metric,
                 g11 = $._0,
                 g12 = $._1,
                 g21 = $._2,
                 g22 = $._3;
                 var a11 = A2($Expression.evaluateExn,
                 g11,
                 posEnv);
                 var a12 = A2($Expression.evaluateExn,
                 g12,
                 posEnv);
                 var a21 = a12;
                 var a22 = A2($Expression.evaluateExn,
                 g22,
                 posEnv);
                 return function (_v87) {
                    return function () {
                       switch (_v87.ctor)
                       {case "_Tuple2":
                          return $Basics.sqrt(_v87._0 * (a11 * _v87._0 + a12 * _v87._1) + _v87._1 * (a21 * _v87._0 + a22 * _v87._1));}
                       _U.badCase($moduleName,
                       "on line 275, column 14 to 68");
                    }();
                 };
              }();}
         _U.badCase($moduleName,
         "between lines 267 and 275");
      }();
   });
   var metricList = $List.map(function (m) {
      return function () {
         var pos = {ctor: "_Tuple2"
                   ,_0: A2($Util.getExn,
                   coord1,
                   m.init)
                   ,_1: A2($Util.getExn,
                   coord2,
                   m.init)};
         var _ = {ctor: "_Tuple2"
                 ,_0: A2($Util.getExn,
                 dcoord1,
                 m.init)
                 ,_1: A2($Util.getExn,
                 dcoord2,
                 m.init)};
         var dx = function () {
            switch (_.ctor)
            {case "_Tuple2": return _._0;}
            _U.badCase($moduleName,
            "on line 1115, column 28 to 72");
         }();
         var dy = function () {
            switch (_.ctor)
            {case "_Tuple2": return _._1;}
            _U.badCase($moduleName,
            "on line 1115, column 28 to 72");
         }();
         var v = function () {
            switch (_.ctor)
            {case "_Tuple2": return _;}
            _U.badCase($moduleName,
            "on line 1115, column 28 to 72");
         }();
         var norm = A3(normAt,
         m.twoForm,
         pos,
         v);
         var init$ = A3($Dict.insert,
         dcoord1,
         dx / norm,
         A3($Dict.insert,
         dcoord2,
         dy / norm,
         m.init));
         return _U.replace([["init"
                            ,init$]],
         m);
      }();
   })(_L.fromArray([{_: {}
                    ,init: $Dict.fromList(_L.fromArray([{ctor: "_Tuple2"
                                                        ,_0: coord1
                                                        ,_1: 0}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: coord2
                                                        ,_1: 2}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: dcoord1
                                                        ,_1: 1}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: dcoord2
                                                        ,_1: 0}]))
                    ,name: "Upper half plane"
                    ,overlay: function (scaleFactor) {
                       return A2($Graphics$Collage.traced,
                       $Graphics$Collage.dashed($Color.black),
                       A2($Graphics$Collage.segment,
                       {ctor: "_Tuple2"
                       ,_0: -1000 * scaleFactor
                       ,_1: 0},
                       {ctor: "_Tuple2"
                       ,_0: 1000 * scaleFactor
                       ,_1: 0}));
                    }
                    ,pan: {ctor: "_Tuple2"
                          ,_0: 0
                          ,_1: defaultScaleFactor}
                    ,scaleFactor: defaultScaleFactor / 2
                    ,twoForm: halfPlane}
                   ,{_: {}
                    ,init: $Dict.fromList(_L.fromArray([{ctor: "_Tuple2"
                                                        ,_0: coord1
                                                        ,_1: 0.5}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: coord2
                                                        ,_1: 0}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: dcoord1
                                                        ,_1: 0}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: dcoord2
                                                        ,_1: 1}]))
                    ,name: "Poincare disk"
                    ,overlay: function (scaleFactor) {
                       return A2($Graphics$Collage.traced,
                       $Graphics$Collage.dashed($Color.black),
                       closedCircle(scaleFactor));
                    }
                    ,pan: defaultPan
                    ,scaleFactor: 2 * defaultScaleFactor
                    ,twoForm: poincare}
                   ,{_: {}
                    ,init: $Dict.fromList(_L.fromArray([{ctor: "_Tuple2"
                                                        ,_0: coord1
                                                        ,_1: 0.5}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: coord2
                                                        ,_1: 0}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: dcoord1
                                                        ,_1: 0}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: dcoord2
                                                        ,_1: 1}]))
                    ,name: "Klein disk"
                    ,overlay: function (scaleFactor) {
                       return A2($Graphics$Collage.traced,
                       $Graphics$Collage.dashed($Color.black),
                       closedCircle(scaleFactor));
                    }
                    ,pan: defaultPan
                    ,scaleFactor: 2 * defaultScaleFactor
                    ,twoForm: klein}
                   ,{_: {}
                    ,init: $Dict.fromList(_L.fromArray([{ctor: "_Tuple2"
                                                        ,_0: coord1
                                                        ,_1: $Basics.pi}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: coord2
                                                        ,_1: $Basics.pi / 2}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: dcoord1
                                                        ,_1: -4.0e-2}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: dcoord2
                                                        ,_1: 1}]))
                    ,name: "Strip sphere"
                    ,overlay: function (scaleFactor) {
                       return function () {
                          var x1 = 2 * $Basics.pi * scaleFactor;
                          var y1 = $Basics.pi * scaleFactor;
                          return A2($Graphics$Collage.traced,
                          $Graphics$Collage.dashed($Color.black),
                          $Graphics$Collage.path(_L.fromArray([{ctor: "_Tuple2"
                                                               ,_0: 0
                                                               ,_1: 0}
                                                              ,{ctor: "_Tuple2"
                                                               ,_0: x1
                                                               ,_1: 0}
                                                              ,{ctor: "_Tuple2"
                                                               ,_0: x1
                                                               ,_1: y1}
                                                              ,{ctor: "_Tuple2"
                                                               ,_0: 0
                                                               ,_1: y1}
                                                              ,{ctor: "_Tuple2"
                                                               ,_0: 0
                                                               ,_1: 0}])));
                       }();
                    }
                    ,pan: {ctor: "_Tuple2"
                          ,_0: (0 - $Basics.pi) * defaultScaleFactor
                          ,_1: $Basics.pi * defaultScaleFactor / 2}
                    ,scaleFactor: defaultScaleFactor
                    ,twoForm: sphere}
                   ,{_: {}
                    ,init: $Dict.fromList(_L.fromArray([{ctor: "_Tuple2"
                                                        ,_0: coord1
                                                        ,_1: 1.1085813794088752}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: coord2
                                                        ,_1: 0.43416503851501376}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: dcoord1
                                                        ,_1: 1.0618525452786418}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: dcoord2
                                                        ,_1: 0.3927089533282449}]))
                    ,name: "Stereographic sphere"
                    ,overlay: cylinderOverlay
                    ,pan: defaultPan
                    ,scaleFactor: 66.27618564857013
                    ,twoForm: stereoGraphicSphere}
                   ,{_: {}
                    ,init: $Dict.fromList(_L.fromArray([{ctor: "_Tuple2"
                                                        ,_0: coord1
                                                        ,_1: 0.5}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: coord2
                                                        ,_1: 0}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: dcoord1
                                                        ,_1: 0}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: dcoord2
                                                        ,_1: 1}]))
                    ,name: "Cylinder"
                    ,overlay: cylinderOverlay
                    ,pan: defaultPan
                    ,scaleFactor: defaultScaleFactor
                    ,twoForm: cylinder}
                   ,{_: {}
                    ,init: $Dict.fromList(_L.fromArray([{ctor: "_Tuple2"
                                                        ,_0: coord1
                                                        ,_1: 0}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: coord2
                                                        ,_1: 1}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: dcoord1
                                                        ,_1: 1}
                                                       ,{ctor: "_Tuple2"
                                                        ,_0: dcoord2
                                                        ,_1: 0}]))
                    ,name: "Flat"
                    ,overlay: function (_v91) {
                       return function () {
                          return $Graphics$Collage.group(_L.fromArray([]));
                       }();
                    }
                    ,pan: defaultPan
                    ,scaleFactor: defaultScaleFactor
                    ,twoForm: flat}]));
   var metricArray = $Array.fromList(metricList);
   var currentDet = function (s) {
      return function () {
         var posAndVel = A2($ODE.at,
         s.currGeodesic,
         s.geodesicPos);
         var $ = s.metric,
         g11 = $._0,
         g12 = $._1,
         g21 = $._2,
         g22 = $._3;
         var a11 = A2($Expression.evaluateExn,
         g11,
         posAndVel);
         var a12 = A2($Expression.evaluateExn,
         g12,
         posAndVel);
         var a21 = a12;
         var a22 = A2($Expression.evaluateExn,
         g22,
         posAndVel);
         return a11 * a22 - a21 * a12;
      }();
   };
   var keys = function () {
      var delta = $Time.fps(30);
      return A2($Signal.sampleOn,
      delta,
      A3($Signal.map2,
      F2(function (d,k) {
         return {_: {}
                ,delta: d
                ,keys: k};
      }),
      delta,
      $Keyboard.arrows));
   }();
   var NoOp = {ctor: "NoOp"};
   var updateBox = $Signal.mailbox(NoOp);
   var ToggleInfo = {ctor: "ToggleInfo"};
   var KeysActive = function (a) {
      return {ctor: "KeysActive"
             ,_0: a};
   };
   var EditMetric = F2(function (a,
   b) {
      return {ctor: "EditMetric"
             ,_0: a
             ,_1: b};
   });
   var SetMetric = function (a) {
      return {ctor: "SetMetric"
             ,_0: a};
   };
   var SetTurningSpeed = function (a) {
      return {ctor: "SetTurningSpeed"
             ,_0: a};
   };
   var SetSpeed = function (a) {
      return {ctor: "SetSpeed"
             ,_0: a};
   };
   var SetScaleFactor = function (a) {
      return {ctor: "SetScaleFactor"
             ,_0: a};
   };
   var Zoom = function (a) {
      return {ctor: "Zoom",_0: a};
   };
   var ToggleLeaveTrail = {ctor: "ToggleLeaveTrail"};
   var ClearTrail = {ctor: "ClearTrail"};
   var Pan = function (a) {
      return {ctor: "Pan",_0: a};
   };
   var Keys = function (a) {
      return {ctor: "Keys",_0: a};
   };
   var toggleLeaveTrailBox = $Signal.mailbox({ctor: "_Tuple0"});
   var mouseDownsInSpaceDivBox = $Signal.mailbox({ctor: "_Tuple0"});
   var pans = function () {
      var mouseUps = A3($Signal.filterMap,
      function (d) {
         return d ? $Maybe.Nothing : $Maybe.Just(false);
      },
      false,
      $Mouse.isDown);
      var dragging = A2($Signal.merge,
      mouseUps,
      A2($Signal.map,
      function (_v102) {
         return function () {
            return true;
         }();
      },
      mouseDownsInSpaceDivBox.signal));
      return A2($Signal$Extra.keepWhen,
      dragging,
      {ctor: "_Tuple2"
      ,_0: 0
      ,_1: 0})(A3($Signal$Extra.foldps,
      F2(function (_v104,_v105) {
         return function () {
            switch (_v105.ctor)
            {case "_Tuple2":
               return function () {
                    switch (_v104.ctor)
                    {case "_Tuple2":
                       return function () {
                            var $ = {ctor: "_Tuple2"
                                    ,_0: $Basics.toFloat(_v104._0)
                                    ,_1: $Basics.toFloat(_v104._1)},
                            x = $._0,
                            y = $._1;
                            return {ctor: "_Tuple2"
                                   ,_0: {ctor: "_Tuple2"
                                        ,_0: x - _v105._0
                                        ,_1: y - _v105._1}
                                   ,_1: {ctor: "_Tuple2"
                                        ,_0: x
                                        ,_1: y}};
                         }();}
                    _U.badCase($moduleName,
                    "between lines 208 and 209");
                 }();}
            _U.badCase($moduleName,
            "between lines 208 and 209");
         }();
      }),
      {ctor: "_Tuple2"
      ,_0: {ctor: "_Tuple2"
           ,_0: 0
           ,_1: 0}
      ,_1: {ctor: "_Tuple2"
           ,_0: 0
           ,_1: 0}},
      $Mouse.position));
   }();
   var updates = $Signal.mergeMany(_L.fromArray([A2($Signal.map,
                                                Pan,
                                                pans)
                                                ,A2($Signal.map,Keys,keys)
                                                ,updateBox.signal
                                                ,A2($Signal.map,
                                                KeysActive,
                                                bodyFocused)]));
   var State = function (a) {
      return function (b) {
         return function (c) {
            return function (d) {
               return function (e) {
                  return function (f) {
                     return function (g) {
                        return function (h) {
                           return function (i) {
                              return function (j) {
                                 return function (k) {
                                    return function (l) {
                                       return function (m) {
                                          return function (n) {
                                             return function (o) {
                                                return function (p) {
                                                   return {_: {}
                                                          ,currGeodesic: f
                                                          ,geodesicPos: h
                                                          ,keysActive: o
                                                          ,metric: b
                                                          ,metricIndex: e
                                                          ,metricStrings: c
                                                          ,nextGeodesic: g
                                                          ,overlay: d
                                                          ,pan: j
                                                          ,scaleFactor: i
                                                          ,showInfo: p
                                                          ,speed: m
                                                          ,system: a
                                                          ,trail: l
                                                          ,trailStart: k
                                                          ,turningSpeed: n};
                                                };
                                             };
                                          };
                                       };
                                    };
                                 };
                              };
                           };
                        };
                     };
                  };
               };
            };
         };
      };
   };
   var invert = function (_v112) {
      return function () {
         switch (_v112.ctor)
         {case "_Tuple4":
            return function () {
                 var c = A2($Expression.Pow,
                 A2($Expression.Add,
                 A2($Expression.Mul,
                 _v112._0,
                 _v112._3),
                 A2($Expression.Mul,
                 $Expression.Constant(-1),
                 A2($Expression.Mul,
                 _v112._1,
                 _v112._2))),
                 -1);
                 return {ctor: "_Tuple4"
                        ,_0: A2($Expression.Mul,
                        c,
                        _v112._3)
                        ,_1: A2($Expression.Mul,
                        c,
                        A2($Expression.Mul,
                        $Expression.Constant(-1),
                        _v112._1))
                        ,_2: A2($Expression.Mul,
                        c,
                        A2($Expression.Mul,
                        $Expression.Constant(-1),
                        _v112._2))
                        ,_3: A2($Expression.Mul,
                        c,
                        _v112._0)};
              }();}
         _U.badCase($moduleName,
         "between lines 97 and 103");
      }();
   };
   var christoffelFirst2 = function (_v118) {
      return function () {
         switch (_v118.ctor)
         {case "_Tuple4":
            return function () {
                 var gamma122 = A2($Expression.Mul,
                 $Expression.Constant(0.5),
                 A2($Expression.derivative,
                 coord1,
                 _v118._3));
                 return {ctor: "_Tuple4"
                        ,_0: A2($Expression.Add,
                        A2($Expression.derivative,
                        coord1,
                        _v118._1),
                        A2($Expression.Mul,
                        $Expression.Constant(-0.5),
                        A2($Expression.derivative,
                        coord2,
                        _v118._0)))
                        ,_1: gamma122
                        ,_2: gamma122
                        ,_3: A2($Expression.Mul,
                        $Expression.Constant(0.5),
                        A2($Expression.derivative,
                        coord2,
                        _v118._3))};
              }();}
         _U.badCase($moduleName,
         "between lines 82 and 94");
      }();
   };
   var christoffelFirst1 = function (_v124) {
      return function () {
         switch (_v124.ctor)
         {case "_Tuple4":
            return function () {
                 var gamma121 = A2($Expression.Mul,
                 $Expression.Constant(0.5),
                 A2($Expression.Add,
                 A2($Expression.Mul,
                 $Expression.Constant(-1),
                 A2($Expression.derivative,
                 coord1,
                 _v124._1)),
                 A2($Expression.Add,
                 A2($Expression.derivative,
                 coord2,
                 _v124._0),
                 A2($Expression.derivative,
                 coord1,
                 _v124._2))));
                 return {ctor: "_Tuple4"
                        ,_0: A2($Expression.Mul,
                        $Expression.Constant(0.5),
                        A2($Expression.derivative,
                        coord1,
                        _v124._0))
                        ,_1: gamma121
                        ,_2: gamma121
                        ,_3: A2($Expression.Add,
                        A2($Expression.derivative,
                        coord2,
                        _v124._2),
                        A2($Expression.Mul,
                        $Expression.Constant(-0.5),
                        A2($Expression.derivative,
                        coord1,
                        _v124._3)))};
              }();}
         _U.badCase($moduleName,
         "between lines 62 and 79");
      }();
   };
   var christoffelSecond1 = function (_v130) {
      return function () {
         switch (_v130.ctor)
         {case "_Tuple4":
            return function () {
                 var $ = christoffelFirst2(_v130),
                 gamma112 = $._0,
                 gamma122 = $._1,
                 gamma212 = $._2,
                 gamma222 = $._3;
                 var $ = christoffelFirst1(_v130),
                 gamma111 = $._0,
                 gamma121 = $._1,
                 gamma211 = $._2,
                 gamma221 = $._3;
                 var $ = invert(_v130),
                 h11 = $._0,
                 h12 = $._1,
                 h21 = $._2,
                 h22 = $._3;
                 var gammaSecond121 = sum(_L.fromArray([A2($Expression.Mul,
                                                       h11,
                                                       gamma121)
                                                       ,A2($Expression.Mul,
                                                       h12,
                                                       gamma122)]));
                 return {ctor: "_Tuple4"
                        ,_0: sum(_L.fromArray([A2($Expression.Mul,
                                              h11,
                                              gamma111)
                                              ,A2($Expression.Mul,
                                              h12,
                                              gamma112)]))
                        ,_1: gammaSecond121
                        ,_2: gammaSecond121
                        ,_3: sum(_L.fromArray([A2($Expression.Mul,
                                              h11,
                                              gamma221)
                                              ,A2($Expression.Mul,
                                              h12,
                                              gamma222)]))};
              }();}
         _U.badCase($moduleName,
         "between lines 106 and 120");
      }();
   };
   var christoffelSecond2 = function (_v136) {
      return function () {
         switch (_v136.ctor)
         {case "_Tuple4":
            return function () {
                 var $ = christoffelFirst2(_v136),
                 gamma112 = $._0,
                 gamma122 = $._1,
                 gamma212 = $._2,
                 gamma222 = $._3;
                 var $ = christoffelFirst1(_v136),
                 gamma111 = $._0,
                 gamma121 = $._1,
                 gamma211 = $._2,
                 gamma221 = $._3;
                 var $ = invert(_v136),
                 h11 = $._0,
                 h12 = $._1,
                 h21 = $._2,
                 h22 = $._3;
                 var gammaSecond122 = sum(_L.fromArray([A2($Expression.Mul,
                                                       h21,
                                                       gamma121)
                                                       ,A2($Expression.Mul,
                                                       h22,
                                                       gamma122)]));
                 return {ctor: "_Tuple4"
                        ,_0: sum(_L.fromArray([A2($Expression.Mul,
                                              h21,
                                              gamma111)
                                              ,A2($Expression.Mul,
                                              h22,
                                              gamma112)]))
                        ,_1: gammaSecond122
                        ,_2: gammaSecond122
                        ,_3: sum(_L.fromArray([A2($Expression.Mul,
                                              h21,
                                              gamma221)
                                              ,A2($Expression.Mul,
                                              h22,
                                              gamma222)]))};
              }();}
         _U.badCase($moduleName,
         "between lines 123 and 133");
      }();
   };
   var geodesicSystem = function (g) {
      return function () {
         var $ = christoffelSecond2(g),
         gamma112 = $._0,
         gamma122 = $._1,
         gamma212 = $._2,
         gamma222 = $._3;
         var $ = christoffelSecond1(g),
         gamma111 = $._0,
         gamma121 = $._1,
         gamma211 = $._2,
         gamma221 = $._3;
         var spec = $Dict.fromList(_L.fromArray([{ctor: "_Tuple2"
                                                 ,_0: coord1
                                                 ,_1: $Expression.Var(dcoord1)}
                                                ,{ctor: "_Tuple2"
                                                 ,_0: coord2
                                                 ,_1: $Expression.Var(dcoord2)}
                                                ,{ctor: "_Tuple2"
                                                 ,_0: dcoord1
                                                 ,_1: $Expression.optimize($Expression.Mul($Expression.Constant(-1))(sum(_L.fromArray([prod(_L.fromArray([gamma111
                                                                                                                                                         ,$Expression.Var(dcoord1)
                                                                                                                                                         ,$Expression.Var(dcoord1)]))
                                                                                                                                      ,prod(_L.fromArray([gamma121
                                                                                                                                                         ,$Expression.Var(dcoord1)
                                                                                                                                                         ,$Expression.Var(dcoord2)]))
                                                                                                                                      ,prod(_L.fromArray([gamma211
                                                                                                                                                         ,$Expression.Var(dcoord2)
                                                                                                                                                         ,$Expression.Var(dcoord1)]))
                                                                                                                                      ,prod(_L.fromArray([gamma221
                                                                                                                                                         ,$Expression.Var(dcoord2)
                                                                                                                                                         ,$Expression.Var(dcoord2)]))]))))}
                                                ,{ctor: "_Tuple2"
                                                 ,_0: dcoord2
                                                 ,_1: $Expression.optimize($Expression.Mul($Expression.Constant(-1))(sum(_L.fromArray([prod(_L.fromArray([gamma112
                                                                                                                                                         ,$Expression.Var(dcoord1)
                                                                                                                                                         ,$Expression.Var(dcoord1)]))
                                                                                                                                      ,prod(_L.fromArray([gamma122
                                                                                                                                                         ,$Expression.Var(dcoord1)
                                                                                                                                                         ,$Expression.Var(dcoord2)]))
                                                                                                                                      ,prod(_L.fromArray([gamma212
                                                                                                                                                         ,$Expression.Var(dcoord2)
                                                                                                                                                         ,$Expression.Var(dcoord1)]))
                                                                                                                                      ,prod(_L.fromArray([gamma222
                                                                                                                                                         ,$Expression.Var(dcoord2)
                                                                                                                                                         ,$Expression.Var(dcoord2)]))]))))}]));
         return $ODE.compile(spec);
      }();
   };
   var parseTwoFormExpression = function (str) {
      return A2($Result.andThen,
      $Expression.parse(str),
      function (expr) {
         return A2($List.all,
         function (v) {
            return _U.eq(v,
            coord1) || _U.eq(v,coord2);
         },
         $Set.toList($Expression.variables(expr))) ? $Result.Ok(expr) : $Result.Err("Unknown variable");
      });
   };
   var expressionEntry = F2(function (content,
   f) {
      return function () {
         var color = function () {
            var _v142 = parseTwoFormExpression(content);
            switch (_v142.ctor)
            {case "Ok": return "white";}
            return "#DA7F7F";
         }();
         var valueDecoder = A2($Json$Decode._op[":="],
         "target",
         A2($Json$Decode._op[":="],
         "value",
         $Json$Decode.string));
         return A2($Html.input,
         _L.fromArray([$Html$Attributes.type$("text")
                      ,$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                            ,_0: "width"
                                                            ,_1: "108px"}
                                                           ,{ctor: "_Tuple2"
                                                            ,_0: "backgroundColor"
                                                            ,_1: color}]))
                      ,$Html$Attributes.value(content)
                      ,A3($Html$Events.on,
                      "input",
                      valueDecoder,
                      f)]),
         _L.fromArray([]));
      }();
   });
   var draw = F2(function (_v144,
   s) {
      return function () {
         switch (_v144.ctor)
         {case "_Tuple2":
            return function () {
                 var $ = s.metricStrings,
                 mstr00 = $._0,
                 mstr01 = $._1,
                 mstr10 = $._2,
                 mstr11 = $._3;
                 var metricCard = A2($Html.div,
                 _L.fromArray([$Html$Attributes.$class("mdl-card mdl-shadow--2dp demo-card-square")
                              ,$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                    ,_0: "width"
                                                                    ,_1: "100%"}]))]),
                 _L.fromArray([A2($Html.div,
                              _L.fromArray([$Html$Attributes.$class("mdl-card__title")
                                           ,$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                                 ,_0: "backgroundColor"
                                                                                 ,_1: "rgb(63, 81, 181)"}
                                                                                ,{ctor: "_Tuple2"
                                                                                 ,_0: "color"
                                                                                 ,_1: "white"}]))]),
                              _L.fromArray([A2($Html.h2,
                              _L.fromArray([$Html$Attributes.$class("mdl-card__title-text")]),
                              _L.fromArray([$Html.text("Choose geometry")]))]))
                              ,A2($Html.div,
                              _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                                 ,_0: "paddingTop"
                                                                                 ,_1: px(15)}]))]),
                              _L.fromArray([A2($Html.ul,
                                           _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                                              ,_0: "listStyleType"
                                                                                              ,_1: "none"}
                                                                                             ,{ctor: "_Tuple2"
                                                                                              ,_0: "paddingLeft"
                                                                                              ,_1: px(18)}]))]),
                                           A2($Basics._op["++"],
                                           A2($List.indexedMap,
                                           F2(function (i,m) {
                                              return A2($Html.li,
                                              _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                                                 ,_0: "marginBottom"
                                                                                                 ,_1: px(5)}]))]),
                                              _L.fromArray([A2($Html.label,
                                              _L.fromArray([A2($Html$Events.onClick,
                                                           updateBox.address,
                                                           SetMetric($Either.Left(i)))
                                                           ,$Html$Attributes.$class("mdl-radio mdl-js-radio mdl-js-ripple-effect")
                                                           ,$Html$Attributes.$for(A2($Basics._op["++"],
                                                           "metric",
                                                           $Basics.toString(i)))]),
                                              _L.fromArray([A2($Html.input,
                                                           A2($Basics._op["++"],
                                                           _U.eq($Either.Left(i),
                                                           s.metricIndex) ? _L.fromArray([A2($Html$Attributes.attribute,
                                                           "checked",
                                                           "")]) : _L.fromArray([]),
                                                           _L.fromArray([$Html$Attributes.type$("radio")
                                                                        ,$Html$Attributes.id(A2($Basics._op["++"],
                                                                        "metric",
                                                                        $Basics.toString(i)))
                                                                        ,$Html$Attributes.$class("mdl-radio__button")
                                                                        ,$Html$Attributes.name("metric")])),
                                                           _L.fromArray([]))
                                                           ,A2($Html.span,
                                                           _L.fromArray([$Html$Attributes.$class("mdl-radio__label")]),
                                                           _L.fromArray([$Html.text(m.name)]))]))]));
                                           }),
                                           metricList),
                                           function () {
                                              var _ = function () {
                                                 var _v148 = s.metricIndex;
                                                 switch (_v148.ctor)
                                                 {case "Right":
                                                    return $Native$Click.clickMomentarily("metric-custom");}
                                                 return {ctor: "_Tuple0"};
                                              }();
                                              return _L.fromArray([A2($Html.li,
                                              _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                                                 ,_0: "marginBottom"
                                                                                                 ,_1: px(5)}]))]),
                                              _L.fromArray([A2($Html.label,
                                              _L.fromArray([A2($Html$Events.onClick,
                                                           updateBox.address,
                                                           SetMetric($Either.Right(s.metric)))
                                                           ,$Html$Attributes.$class("mdl-radio mdl-js-radio mdl-js-ripple-effect")
                                                           ,$Html$Attributes.$for("metric-custom")]),
                                              _L.fromArray([A2($Html.input,
                                                           _L.fromArray([$Html$Attributes.type$("radio")
                                                                        ,$Html$Attributes.id("metric-custom")
                                                                        ,$Html$Attributes.$class("mdl-radio__button")
                                                                        ,$Html$Attributes.name("metric")]),
                                                           _L.fromArray([]))
                                                           ,A2($Html.span,
                                                           _L.fromArray([$Html$Attributes.$class("mdl-radio__label")]),
                                                           _L.fromArray([$Html.text("Custom")]))]))]))]);
                                           }()))
                                           ,A2($Html.table,
                                           _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                                              ,_0: "borderTop"
                                                                                              ,_1: "1px solid #DDD"}]))]),
                                           _L.fromArray([A2($Html.tr,
                                                        _L.fromArray([]),
                                                        _L.fromArray([A2($Html.td,
                                                                     _L.fromArray([]),
                                                                     _L.fromArray([A2(expressionEntry,
                                                                     mstr00,
                                                                     function ($) {
                                                                        return $Signal.message(updateBox.address)(EditMetric({ctor: "_Tuple2"
                                                                                                                             ,_0: O
                                                                                                                             ,_1: O})($));
                                                                     })]))
                                                                     ,A2($Html.td,
                                                                     _L.fromArray([]),
                                                                     _L.fromArray([A2(expressionEntry,
                                                                     mstr01,
                                                                     function ($) {
                                                                        return $Signal.message(updateBox.address)(EditMetric({ctor: "_Tuple2"
                                                                                                                             ,_0: O
                                                                                                                             ,_1: I})($));
                                                                     })]))]))
                                                        ,A2($Html.tr,
                                                        _L.fromArray([]),
                                                        _L.fromArray([A2($Html.td,
                                                                     _L.fromArray([]),
                                                                     _L.fromArray([A2(expressionEntry,
                                                                     mstr10,
                                                                     function ($) {
                                                                        return $Signal.message(updateBox.address)(EditMetric({ctor: "_Tuple2"
                                                                                                                             ,_0: I
                                                                                                                             ,_1: O})($));
                                                                     })]))
                                                                     ,A2($Html.td,
                                                                     _L.fromArray([]),
                                                                     _L.fromArray([A2(expressionEntry,
                                                                     mstr11,
                                                                     function ($) {
                                                                        return $Signal.message(updateBox.address)(EditMetric({ctor: "_Tuple2"
                                                                                                                             ,_0: I
                                                                                                                             ,_1: I})($));
                                                                     })]))]))]))]))]));
                 var customMetricEntry = $Html.li(_L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                                                     ,_0: "marginBottom"
                                                                                                     ,_1: px(5)}]))]));
                 var wrapSlider = function (item) {
                    return A2($Html.li,
                    _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                       ,_0: "paddingTop"
                                                                       ,_1: px(10)}
                                                                      ,{ctor: "_Tuple2"
                                                                       ,_0: "paddingBottom"
                                                                       ,_1: px(10)}]))]),
                    _L.fromArray([item]));
                 };
                 var space = A3($Graphics$Collage.collage,
                 _v144._0,
                 _v144._1,
                 _L.fromArray([drawSpace(s)]));
                 var signature = A2($Html.div,
                 _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                    ,_0: "position"
                                                                    ,_1: "fixed"}
                                                                   ,{ctor: "_Tuple2"
                                                                    ,_0: "bottom"
                                                                    ,_1: px(0)}
                                                                   ,{ctor: "_Tuple2"
                                                                    ,_0: "left"
                                                                    ,_1: px(4)}]))]),
                 _L.fromArray([$Html.text("By Izzy Meckler")]));
                 var sideBarWidth = 300;
                 var helpCard = function () {
                    var helpContent = "\nHere, you can explore a variety of unusual geometries.\nRoughly speaking, a geometry is a [notion of distances][0]\nbetween points.\nThough they look curved, the paths you travel\nalong are actually \"straight lines\"\nin the sense that they are (locally) the shortest paths between points\n(with respect to an unusual notion of distance).\nSuch paths are called [geodesics](https://en.wikipedia.org/wiki/Geodesic).\n\nUse the up arrow key to go forward along the geodesic in the direction\nyou\'re facing and the left and right arrow keys to change direction.\n\nScroll to zoom, click and drag to pan.\n\nTry out all the different geometries and make your own using\nthe text entries.\n\nYou can read an extended explanation [here](http://parametricity.com/posts/2015-10-28-visualizing-geometries.html).\n\n[0]: https://en.wikipedia.org/wiki/Metric_(mathematics)\n        ";
                    return A2($Html.div,
                    _L.fromArray([$Html$Attributes.$class("mdl-card mdl-shadow--2dp demo-card-square")
                                 ,$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                       ,_0: "width"
                                                                       ,_1: px(sideBarWidth)}
                                                                      ,{ctor: "_Tuple2"
                                                                       ,_0: "position"
                                                                       ,_1: "fixed"}
                                                                      ,{ctor: "_Tuple2"
                                                                       ,_0: "minHeight"
                                                                       ,_1: px(0)}
                                                                      ,{ctor: "_Tuple2"
                                                                       ,_0: "top"
                                                                       ,_1: px(10)}
                                                                      ,{ctor: "_Tuple2"
                                                                       ,_0: "left"
                                                                       ,_1: px(10)}]))]),
                    A2($List._op["::"],
                    A2($Html.div,
                    _L.fromArray([$Html$Attributes.$class("mdl-card__title mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect")
                                 ,$Html$Attributes.id("help-card-title")
                                 ,$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                       ,_0: "backgroundColor"
                                                                       ,_1: "#46B6AC"}
                                                                      ,{ctor: "_Tuple2"
                                                                       ,_0: "color"
                                                                       ,_1: "white"}
                                                                      ,{ctor: "_Tuple2"
                                                                       ,_0: "height"
                                                                       ,_1: px(52)}]))
                                 ,A2($Html$Events.onClick,
                                 updateBox.address,
                                 ToggleInfo)]),
                    _L.fromArray([A2($Html.h2,
                    _L.fromArray([$Html$Attributes.$class("mdl-card__title-text")]),
                    _L.fromArray([$Html.text("Info")]))])),
                    s.showInfo ? _L.fromArray([A2($Html.div,
                    _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                       ,_0: "padding"
                                                                       ,_1: px(10)}]))]),
                    _L.fromArray([$Markdown.toHtml(helpContent)]))]) : _L.fromArray([])));
                 }();
                 var annoyingOffsetForSliders = px(26);
                 var wrapNonSlider = function (item) {
                    return A2($Html.li,
                    _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                       ,_0: "paddingLeft"
                                                                       ,_1: annoyingOffsetForSliders}
                                                                      ,{ctor: "_Tuple2"
                                                                       ,_0: "paddingTop"
                                                                       ,_1: px(10)}
                                                                      ,{ctor: "_Tuple2"
                                                                       ,_0: "paddingBottom"
                                                                       ,_1: px(10)}]))]),
                    _L.fromArray([item]));
                 };
                 var scaleFactorSlider = A2($Slider.slider,
                 {_: {}
                 ,max: 1000
                 ,min: 1
                 ,step: $Maybe.Nothing
                 ,value: s.scaleFactor},
                 function ($) {
                    return $Signal.message(updateBox.address)(SetScaleFactor($));
                 });
                 var turningSpeedSlider = A2($Slider.slider,
                 {_: {}
                 ,max: 100 * $Basics.pi / $Time.second
                 ,min: $Basics.pi / $Time.second
                 ,step: $Maybe.Nothing
                 ,value: s.turningSpeed},
                 function ($) {
                    return $Signal.message(updateBox.address)(SetTurningSpeed($));
                 });
                 var speedSlider = A2($Slider.slider,
                 {_: {}
                 ,max: 10 / 2000
                 ,min: 0
                 ,step: $Maybe.Nothing
                 ,value: s.speed},
                 function ($) {
                    return $Signal.message(updateBox.address)(SetSpeed($));
                 });
                 var clearTrailButton = A2($Html.button,
                 _L.fromArray([A2($Html$Events.onClick,
                              updateBox.address,
                              ClearTrail)
                              ,$Html$Attributes.$class("mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored")]),
                 _L.fromArray([$Html.text("Clear trail")]));
                 var mkCheckBox = F4(function (id,
                 label,
                 checked,
                 upd) {
                    return A2($Html.label,
                    _L.fromArray([$Html$Attributes.$class("mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect")
                                 ,$Html$Attributes.$for(id)]),
                    _L.fromArray([A2($Html.input,
                                 A2($Basics._op["++"],
                                 checked ? _L.fromArray([A2($Html$Attributes.attribute,
                                 "checked",
                                 "")]) : _L.fromArray([]),
                                 _L.fromArray([$Html$Attributes.type$("checkbox")
                                              ,$Html$Attributes.$class("mdl-checkbox__input")
                                              ,$Html$Attributes.id(id)
                                              ,A2($Html$Events.onClick,
                                              updateBox.address,
                                              upd)])),
                                 _L.fromArray([]))
                                 ,A2($Html.span,
                                 _L.fromArray([$Html$Attributes.$class("mdl-checkbox__label")]),
                                 _L.fromArray([$Html.text(label)]))]));
                 });
                 var toggleTrailCheck = A4(mkCheckBox,
                 "toggleTrailCheck",
                 "Leave trail",
                 shouldLeaveTrail(s),
                 ToggleLeaveTrail);
                 var labelSlider = F2(function (label,
                 sliderElt) {
                    return A2($Html.div,
                    _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                       ,_0: "textAlign"
                                                                       ,_1: "center"}]))]),
                    _L.fromArray([$Html.text(label)
                                 ,sliderElt]));
                 });
                 var sideBar = A2($Html.ul,
                 _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                    ,_0: "width"
                                                                    ,_1: px(sideBarWidth)}
                                                                   ,{ctor: "_Tuple2"
                                                                    ,_0: "position"
                                                                    ,_1: "fixed"}
                                                                   ,{ctor: "_Tuple2"
                                                                    ,_0: "top"
                                                                    ,_1: "10px"}
                                                                   ,{ctor: "_Tuple2"
                                                                    ,_0: "right"
                                                                    ,_1: "50px"}
                                                                   ,{ctor: "_Tuple2"
                                                                    ,_0: "zIndex"
                                                                    ,_1: "10"}
                                                                   ,{ctor: "_Tuple2"
                                                                    ,_0: "listStyleType"
                                                                    ,_1: "none"}
                                                                   ,{ctor: "_Tuple2"
                                                                    ,_0: "padding"
                                                                    ,_1: "0"}
                                                                   ,{ctor: "_Tuple2"
                                                                    ,_0: "margin"
                                                                    ,_1: "0"}]))]),
                 _L.fromArray([A2($Html.li,
                              _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                                 ,_0: "paddingLeft"
                                                                                 ,_1: annoyingOffsetForSliders}
                                                                                ,{ctor: "_Tuple2"
                                                                                 ,_0: "paddingRight"
                                                                                 ,_1: annoyingOffsetForSliders}]))]),
                              _L.fromArray([metricCard]))
                              ,wrapNonSlider(toggleTrailCheck)
                              ,wrapNonSlider(clearTrailButton)
                              ,wrapSlider(A2(labelSlider,
                              "Speed",
                              speedSlider))
                              ,wrapSlider(A2(labelSlider,
                              "Turn speed",
                              turningSpeedSlider))]));
                 return A2($Html.toElement,
                 _v144._0,
                 _v144._1)(A2($Html.div,
                 _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                    ,_0: "width"
                                                                    ,_1: "100%"}]))]),
                 _L.fromArray([A3($Html.node,
                              "link",
                              _L.fromArray([$Html$Attributes.rel("stylesheet")
                                           ,$Html$Attributes.href("https://storage.googleapis.com/code.getmdl.io/1.0.1/material.indigo-pink.min.css")]),
                              _L.fromArray([]))
                              ,A3($Html.node,
                              "script",
                              _L.fromArray([$Html$Attributes.type$("text/javascript")
                                           ,$Html$Attributes.src("https://storage.googleapis.com/code.getmdl.io/1.0.1/material.min.js")]),
                              _L.fromArray([]))
                              ,sideBar
                              ,helpCard
                              ,signature
                              ,A2($Html.div,
                              _L.fromArray([A2($Html$Events.onMouseDown,
                                           mouseDownsInSpaceDivBox.address,
                                           {ctor: "_Tuple0"})
                                           ,A3($Html$Events.on,
                                           "wheel",
                                           A2($Json$Decode._op[":="],
                                           "deltaY",
                                           $Json$Decode.$float),
                                           function (z) {
                                              return A2($Signal.message,
                                              updateBox.address,
                                              Zoom(z));
                                           })
                                           ,A3($Html$Events.on,
                                           "focusout",
                                           $Json$Decode.succeed({ctor: "_Tuple0"}),
                                           function (_v150) {
                                              return function () {
                                                 return A2($Debug.log,
                                                 "fuck your couch",
                                                 A2($Signal.message,
                                                 updateBox.address,
                                                 Zoom(0)));
                                              }();
                                           })]),
                              _L.fromArray([$Html.fromElement(space)]))])));
              }();}
         _U.badCase($moduleName,
         "between lines 671 and 962");
      }();
   });
   var update = F2(function (u,s) {
      return function () {
         switch (u.ctor)
         {case "ClearTrail":
            return function () {
                 var trailStart$ = A2($Maybe.map,
                 function (_v165) {
                    return function () {
                       return s.geodesicPos;
                    }();
                 },
                 s.trailStart);
                 return _U.replace([["trail"
                                    ,_L.fromArray([])]
                                   ,["trailStart",trailStart$]],
                 s);
              }();
            case "EditMetric":
            return function () {
                 var metricStrings$ = function () {
                    var $ = u._0,
                    i = $._0,
                    j = $._1;
                    return A3(setAt,
                    {ctor: "_Tuple2",_0: j,_1: i},
                    u._1,
                    A3(setAt,
                    u._0,
                    u._1,
                    s.metricStrings));
                 }();
                 var exprRess = A2($List.map,
                 parseTwoFormExpression,
                 fourToList(metricStrings$));
                 return function () {
                    var _v167 = $Util.sequenceResults(exprRess);
                    switch (_v167.ctor)
                    {case "Err":
                       return _U.replace([["metricStrings"
                                          ,metricStrings$]],
                         s);
                       case "Ok": return function () {
                            var init = A2($ODE.at,
                            s.currGeodesic,
                            s.geodesicPos);
                            var metric$ = fourFromList(_v167._0);
                            var system = geodesicSystem(metric$);
                            var currGeodesic = A6($ODE.solve,
                            0,
                            futureLength,
                            init,
                            system,
                            1.0e-6,
                            1000);
                            return _U.replace([["metric"
                                               ,metric$]
                                              ,["metricIndex"
                                               ,$Either.Right(metric$)]
                                              ,["metricStrings"
                                               ,metricStrings$]
                                              ,["overlay"
                                               ,function (_v170) {
                                                  return function () {
                                                     return $Graphics$Collage.group(_L.fromArray([]));
                                                  }();
                                               }]
                                              ,["system",system]
                                              ,["trail"
                                               ,A2($List._op["::"],
                                               A3(geodesicPathFromTill,
                                               0,
                                               s.geodesicPos,
                                               s.currGeodesic),
                                               s.trail)]
                                              ,["trailStart"
                                               ,A2($Maybe.map,
                                               function (_v172) {
                                                  return function () {
                                                     return 0;
                                                  }();
                                               },
                                               s.trailStart)]
                                              ,["currGeodesic",currGeodesic]
                                              ,["nextGeodesic"
                                               ,A6($ODE.solve,
                                               0,
                                               futureLength,
                                               A2($ODE.at,
                                               currGeodesic,
                                               futureLength),
                                               system,
                                               1.0e-6,
                                               1000)]
                                              ,["geodesicPos",0]],
                            s);
                         }();}
                    _U.badCase($moduleName,
                    "between lines 312 and 335");
                 }();
              }();
            case "Keys":
            return s.keysActive ? A2(updateKeys,
              u._0,
              s) : s;
            case "KeysActive":
            return _U.replace([["keysActive"
                               ,u._0]],
              s);
            case "NoOp": return s;
            case "Pan": switch (u._0.ctor)
              {case "_Tuple2":
                 return function () {
                      var $ = s.pan,
                      x = $._0,
                      y = $._1;
                      return _U.replace([["pan"
                                         ,{ctor: "_Tuple2"
                                          ,_0: x + u._0._0
                                          ,_1: y + u._0._1}]],
                      s);
                   }();}
              break;
            case "SetMetric":
            return function () {
                 var m = function () {
                    switch (u._0.ctor)
                    {case "Left":
                       return A2($Util._op["!"],
                         metricArray,
                         u._0._0);
                       case "Right": return {_: {}
                                            ,init: A2($ODE.at,
                                            s.currGeodesic,
                                            s.geodesicPos)
                                            ,name: "Custom"
                                            ,overlay: function (_v177) {
                                               return function () {
                                                  return $Graphics$Collage.group(_L.fromArray([]));
                                               }();
                                            }
                                            ,pan: defaultPan
                                            ,scaleFactor: defaultScaleFactor
                                            ,twoForm: u._0._0};}
                    _U.badCase($moduleName,
                    "between lines 338 and 351");
                 }();
                 var system = geodesicSystem(m.twoForm);
                 var currGeodesic = A6($ODE.solve,
                 0,
                 futureLength,
                 m.init,
                 system,
                 1.0e-6,
                 1000);
                 return _U.replace([["metric"
                                    ,m.twoForm]
                                   ,["metricStrings"
                                    ,A2(fourMap,
                                    $Expression.toString,
                                    m.twoForm)]
                                   ,["metricIndex",u._0]
                                   ,["overlay",m.overlay]
                                   ,["system",system]
                                   ,["trailStart"
                                    ,A2($Maybe.map,
                                    function (_v179) {
                                       return function () {
                                          return 0;
                                       }();
                                    },
                                    s.trailStart)]
                                   ,["currGeodesic",currGeodesic]
                                   ,["nextGeodesic"
                                    ,A6($ODE.solve,
                                    0,
                                    futureLength,
                                    A2($ODE.at,
                                    currGeodesic,
                                    futureLength),
                                    system,
                                    1.0e-6,
                                    1000)]
                                   ,["geodesicPos",0]
                                   ,["trail",_L.fromArray([])]
                                   ,["scaleFactor",m.scaleFactor]
                                   ,["pan",m.pan]],
                 s);
              }();
            case "SetScaleFactor":
            return _U.replace([["scaleFactor"
                               ,u._0]],
              s);
            case "SetSpeed":
            return _U.replace([["speed"
                               ,u._0]],
              s);
            case "SetTurningSpeed":
            return _U.replace([["turningSpeed"
                               ,u._0]],
              s);
            case "ToggleInfo":
            return _U.replace([["showInfo"
                               ,$Basics.not(s.showInfo)]],
              s);
            case "ToggleLeaveTrail":
            return function () {
                 var _v181 = s.trailStart;
                 switch (_v181.ctor)
                 {case "Just":
                    return function () {
                         var trail$ = _U.cmp(s.geodesicPos,
                         0) > 0 ? A2($List._op["::"],
                         A3(geodesicPathFromTill,
                         _v181._0,
                         s.geodesicPos,
                         s.currGeodesic),
                         s.trail) : s.trail;
                         return _U.replace([["trail"
                                            ,trail$]
                                           ,["trailStart",$Maybe.Nothing]],
                         s);
                      }();
                    case "Nothing":
                    return _U.replace([["trailStart"
                                       ,$Maybe.Just(s.geodesicPos)]],
                      s);}
                 _U.badCase($moduleName,
                 "between lines 387 and 403");
              }();
            case "Zoom":
            return function () {
                 var scaleFactor$ = s.scaleFactor * Math.pow(1.01,
                 0 - u._0);
                 return _U.replace([["scaleFactor"
                                    ,scaleFactor$]],
                 s);
              }();}
         _U.badCase($moduleName,
         "between lines 292 and 416");
      }();
   });
   var main = function () {
      var metric0 = A2($Util._op["!"],
      metricArray,
      1);
      var init = metric0.init;
      var system = geodesicSystem(metric0.twoForm);
      var currGeodesic = A6($ODE.solve,
      0,
      futureLength,
      init,
      system,
      1.0e-6,
      1000);
      var s0 = {_: {}
               ,currGeodesic: currGeodesic
               ,geodesicPos: 0
               ,keysActive: true
               ,metric: metric0.twoForm
               ,metricIndex: $Either.Left(1)
               ,metricStrings: A2(fourMap,
               $Expression.toString,
               metric0.twoForm)
               ,nextGeodesic: A6($ODE.solve,
               0,
               futureLength,
               A2($ODE.at,
               currGeodesic,
               futureLength),
               system,
               1.0e-6,
               1000)
               ,overlay: metric0.overlay
               ,pan: metric0.pan
               ,scaleFactor: metric0.scaleFactor
               ,showInfo: true
               ,speed: 2 / 2000
               ,system: system
               ,trail: _L.fromArray([])
               ,trailStart: $Maybe.Just(0)
               ,turningSpeed: 30 * $Basics.pi / $Time.second};
      var state = A3($Signal.foldp,
      update,
      s0,
      updates);
      return A3($Signal.map2,
      draw,
      $Window.dimensions,
      state);
   }();
   _elm.Main.values = {_op: _op
                      ,parseTwoFormExpression: parseTwoFormExpression
                      ,expressionEntry: expressionEntry
                      ,christoffelFirst1: christoffelFirst1
                      ,christoffelFirst2: christoffelFirst2
                      ,invert: invert
                      ,christoffelSecond1: christoffelSecond1
                      ,christoffelSecond2: christoffelSecond2
                      ,geodesicSystem: geodesicSystem
                      ,State: State
                      ,mouseDownsInSpaceDivBox: mouseDownsInSpaceDivBox
                      ,toggleLeaveTrailBox: toggleLeaveTrailBox
                      ,pans: pans
                      ,Keys: Keys
                      ,Pan: Pan
                      ,ClearTrail: ClearTrail
                      ,ToggleLeaveTrail: ToggleLeaveTrail
                      ,Zoom: Zoom
                      ,SetScaleFactor: SetScaleFactor
                      ,SetSpeed: SetSpeed
                      ,SetTurningSpeed: SetTurningSpeed
                      ,SetMetric: SetMetric
                      ,EditMetric: EditMetric
                      ,KeysActive: KeysActive
                      ,ToggleInfo: ToggleInfo
                      ,NoOp: NoOp
                      ,updateBox: updateBox
                      ,keys: keys
                      ,updates: updates
                      ,currentDet: currentDet
                      ,normAt: normAt
                      ,currentNorm: currentNorm
                      ,update: update
                      ,updateKeys: updateKeys
                      ,curvedArrow: curvedArrow
                      ,drawSpace: drawSpace
                      ,drawGeodesic: drawGeodesic
                      ,drawGeodesicTil: drawGeodesicTil
                      ,geodesicPathFromTill: geodesicPathFromTill
                      ,drawGeodesicFromTil: drawGeodesicFromTil
                      ,draw: draw
                      ,defaultScaleFactor: defaultScaleFactor
                      ,defaultPan: defaultPan
                      ,fourMap: fourMap
                      ,fourToList: fourToList
                      ,fourFromList: fourFromList
                      ,main: main
                      ,O: O
                      ,I: I
                      ,sum: sum
                      ,prod: prod
                      ,setAt: setAt
                      ,shouldLeaveTrail: shouldLeaveTrail
                      ,px: px
                      ,closedCircle: closedCircle
                      ,futureLength: futureLength
                      ,coord1: coord1
                      ,coord2: coord2
                      ,dcoord1: dcoord1
                      ,dcoord2: dcoord2
                      ,metricArray: metricArray
                      ,metricList: metricList
                      ,cylinderOverlay: cylinderOverlay
                      ,sphere: sphere
                      ,stereoGraphicSphere: stereoGraphicSphere
                      ,flat: flat
                      ,poincare: poincare
                      ,klein: klein
                      ,halfPlane: halfPlane
                      ,noparabola: noparabola
                      ,curvy: curvy
                      ,cylinder: cylinder};
   return _elm.Main.values;
};
Elm.Markdown = Elm.Markdown || {};
Elm.Markdown.make = function (_elm) {
   "use strict";
   _elm.Markdown = _elm.Markdown || {};
   if (_elm.Markdown.values)
   return _elm.Markdown.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Markdown",
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Html = Elm.Html.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Markdown = Elm.Native.Markdown.make(_elm);
   var toElementWith = $Native$Markdown.toElementWith;
   var toHtmlWith = $Native$Markdown.toHtmlWith;
   var defaultOptions = {_: {}
                        ,githubFlavored: $Maybe.Just({_: {}
                                                     ,breaks: false
                                                     ,tables: false})
                        ,sanitize: false
                        ,smartypants: false};
   var Options = F3(function (a,
   b,
   c) {
      return {_: {}
             ,githubFlavored: a
             ,sanitize: b
             ,smartypants: c};
   });
   var toElement = function (string) {
      return A2($Native$Markdown.toElementWith,
      defaultOptions,
      string);
   };
   var toHtml = function (string) {
      return A2($Native$Markdown.toHtmlWith,
      defaultOptions,
      string);
   };
   _elm.Markdown.values = {_op: _op
                          ,toHtml: toHtml
                          ,toElement: toElement
                          ,Options: Options
                          ,defaultOptions: defaultOptions
                          ,toHtmlWith: toHtmlWith
                          ,toElementWith: toElementWith};
   return _elm.Markdown.values;
};
Elm.Maybe = Elm.Maybe || {};
Elm.Maybe.make = function (_elm) {
   "use strict";
   _elm.Maybe = _elm.Maybe || {};
   if (_elm.Maybe.values)
   return _elm.Maybe.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Maybe";
   var withDefault = F2(function ($default,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just": return maybe._0;
            case "Nothing":
            return $default;}
         _U.badCase($moduleName,
         "between lines 45 and 56");
      }();
   });
   var Nothing = {ctor: "Nothing"};
   var oneOf = function (maybes) {
      return function () {
         switch (maybes.ctor)
         {case "::": return function () {
                 switch (maybes._0.ctor)
                 {case "Just": return maybes._0;
                    case "Nothing":
                    return oneOf(maybes._1);}
                 _U.badCase($moduleName,
                 "between lines 64 and 73");
              }();
            case "[]": return Nothing;}
         _U.badCase($moduleName,
         "between lines 59 and 73");
      }();
   };
   var andThen = F2(function (maybeValue,
   callback) {
      return function () {
         switch (maybeValue.ctor)
         {case "Just":
            return callback(maybeValue._0);
            case "Nothing": return Nothing;}
         _U.badCase($moduleName,
         "between lines 110 and 112");
      }();
   });
   var Just = function (a) {
      return {ctor: "Just",_0: a};
   };
   var map = F2(function (f,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return Just(f(maybe._0));
            case "Nothing": return Nothing;}
         _U.badCase($moduleName,
         "between lines 76 and 107");
      }();
   });
   _elm.Maybe.values = {_op: _op
                       ,andThen: andThen
                       ,map: map
                       ,withDefault: withDefault
                       ,oneOf: oneOf
                       ,Just: Just
                       ,Nothing: Nothing};
   return _elm.Maybe.values;
};
Elm.Mouse = Elm.Mouse || {};
Elm.Mouse.make = function (_elm) {
   "use strict";
   _elm.Mouse = _elm.Mouse || {};
   if (_elm.Mouse.values)
   return _elm.Mouse.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Mouse",
   $Basics = Elm.Basics.make(_elm),
   $Native$Mouse = Elm.Native.Mouse.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var clicks = $Native$Mouse.clicks;
   var isDown = $Native$Mouse.isDown;
   var position = $Native$Mouse.position;
   var x = A2($Signal.map,
   $Basics.fst,
   position);
   var y = A2($Signal.map,
   $Basics.snd,
   position);
   _elm.Mouse.values = {_op: _op
                       ,position: position
                       ,x: x
                       ,y: y
                       ,isDown: isDown
                       ,clicks: clicks};
   return _elm.Mouse.values;
};
Elm.Native.Array = {};
Elm.Native.Array.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Array = localRuntime.Native.Array || {};
	if (localRuntime.Native.Array.values)
	{
		return localRuntime.Native.Array.values;
	}
	if ('values' in Elm.Native.Array)
	{
		return localRuntime.Native.Array.values = Elm.Native.Array.values;
	}

	var List = Elm.Native.List.make(localRuntime);

	// A RRB-Tree has two distinct data types.
	// Leaf -> "height"  is always 0
	//         "table"   is an array of elements
	// Node -> "height"  is always greater than 0
	//         "table"   is an array of child nodes
	//         "lengths" is an array of accumulated lengths of the child nodes

	// M is the maximal table size. 32 seems fast. E is the allowed increase
	// of search steps when concatting to find an index. Lower values will
	// decrease balancing, but will increase search steps.
	var M = 32;
	var E = 2;

	// An empty array.
	var empty = {
		ctor: "_Array",
		height: 0,
		table: new Array()
	};


	function get(i, array)
	{
		if (i < 0 || i >= length(array))
		{
			throw new Error(
				"Index " + i + " is out of range. Check the length of " +
				"your array first or use getMaybe or getWithDefault.");
		}
		return unsafeGet(i, array);
	}


	function unsafeGet(i, array)
	{
		for (var x = array.height; x > 0; x--)
		{
			var slot = i >> (x * 5);
			while (array.lengths[slot] <= i)
			{
				slot++;
			}
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array = array.table[slot];
		}
		return array.table[i];
	}


	// Sets the value at the index i. Only the nodes leading to i will get
	// copied and updated.
	function set(i, item, array)
	{
		if (i < 0 || length(array) <= i)
		{
			return array;
		}
		return unsafeSet(i, item, array);
	}


	function unsafeSet(i, item, array)
	{
		array = nodeCopy(array);

		if (array.height == 0)
		{
			array.table[i] = item;
		}
		else
		{
			var slot = getSlot(i, array);
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array.table[slot] = unsafeSet(i, item, array.table[slot]);
		}
		return array;
	}


	function initialize(len, f)
	{
		if (len == 0)
		{
			return empty;
		}
		var h = Math.floor( Math.log(len) / Math.log(M) );
		return initialize_(f, h, 0, len);
	}

	function initialize_(f, h, from, to)
	{
		if (h == 0)
		{
			var table = new Array((to - from) % (M + 1));
			for (var i = 0; i < table.length; i++)
			{
			  table[i] = f(from + i);
			}
			return {
				ctor: "_Array",
				height: 0,
				table: table
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
		}
		return {
			ctor: "_Array",
			height: h,
			table: table,
			lengths: lengths
		};
	}

	function fromList(list)
	{
		if (list == List.Nil)
		{
			return empty;
		}

		// Allocate M sized blocks (table) and write list elements to it.
		var table = new Array(M);
		var nodes = new Array();
		var i = 0;

		while (list.ctor !== '[]')
		{
			table[i] = list._0;
			list = list._1;
			i++;

			// table is full, so we can push a leaf containing it into the
			// next node.
			if (i == M)
			{
				var leaf = {
					ctor: "_Array",
					height: 0,
					table: table
				};
				fromListPush(leaf, nodes);
				table = new Array(M);
				i = 0;
			}
		}

		// Maybe there is something left on the table.
		if (i > 0)
		{
			var leaf = {
				ctor: "_Array",
				height: 0,
				table: table.splice(0,i)
			};
			fromListPush(leaf, nodes);
		}

		// Go through all of the nodes and eventually push them into higher nodes.
		for (var h = 0; h < nodes.length - 1; h++)
		{
			if (nodes[h].table.length > 0)
			{
				fromListPush(nodes[h], nodes);
			}
		}

		var head = nodes[nodes.length - 1];
		if (head.height > 0 && head.table.length == 1)
		{
			return head.table[0];
		}
		else
		{
			return head;
		}
	}

	// Push a node into a higher node as a child.
	function fromListPush(toPush, nodes)
	{
		var h = toPush.height;

		// Maybe the node on this height does not exist.
		if (nodes.length == h)
		{
			var node = {
				ctor: "_Array",
				height: h + 1,
				table: new Array(),
				lengths: new Array()
			};
			nodes.push(node);
		}

		nodes[h].table.push(toPush);
		var len = length(toPush);
		if (nodes[h].lengths.length > 0)
		{
			len += nodes[h].lengths[nodes[h].lengths.length - 1];
		}
		nodes[h].lengths.push(len);

		if (nodes[h].table.length == M)
		{
			fromListPush(nodes[h], nodes);
			nodes[h] = {
				ctor: "_Array",
				height: h + 1,
				table: new Array(),
				lengths: new Array()
			};
		}
	}

	// Pushes an item via push_ to the bottom right of a tree.
	function push(item, a)
	{
		var pushed = push_(item, a);
		if (pushed !== null)
		{
			return pushed;
		}

		var newTree = create(item, a.height);
		return siblise(a, newTree);
	}

	// Recursively tries to push an item to the bottom-right most
	// tree possible. If there is no space left for the item,
	// null will be returned.
	function push_(item, a)
	{
		// Handle resursion stop at leaf level.
		if (a.height == 0)
		{
			if (a.table.length < M)
			{
				var newA = {
					ctor: "_Array",
					height: 0,
					table: a.table.slice()
				};
				newA.table.push(item);
				return newA;
			}
			else
			{
			  return null;
			}
		}

		// Recursively push
		var pushed = push_(item, botRight(a));

		// There was space in the bottom right tree, so the slot will
		// be updated.
		if (pushed != null)
		{
			var newA = nodeCopy(a);
			newA.table[newA.table.length - 1] = pushed;
			newA.lengths[newA.lengths.length - 1]++;
			return newA;
		}

		// When there was no space left, check if there is space left
		// for a new slot with a tree which contains only the item
		// at the bottom.
		if (a.table.length < M)
		{
			var newSlot = create(item, a.height - 1);
			var newA = nodeCopy(a);
			newA.table.push(newSlot);
			newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
			return newA;
		}
		else
		{
			return null;
		}
	}

	// Converts an array into a list of elements.
	function toList(a)
	{
		return toList_(List.Nil, a);
	}

	function toList_(list, a)
	{
		for (var i = a.table.length - 1; i >= 0; i--)
		{
			list =
				a.height == 0
					? List.Cons(a.table[i], list)
					: toList_(list, a.table[i]);
		}
		return list;
	}

	// Maps a function over the elements of an array.
	function map(f, a)
	{
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height == 0
					? f(a.table[i])
					: map(f, a.table[i]);
		}
		return newA;
	}

	// Maps a function over the elements with their index as first argument.
	function indexedMap(f, a)
	{
		return indexedMap_(f, a, 0);
	}

	function indexedMap_(f, a, from)
	{
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height == 0
					? A2(f, from + i, a.table[i])
					: indexedMap_(f, a.table[i], i == 0 ? 0 : a.lengths[i - 1]);
		}
		return newA;
	}

	function foldl(f, b, a)
	{
		if (a.height == 0)
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = foldl(f, b, a.table[i]);
			}
		}
		return b;
	}

	function foldr(f, b, a)
	{
		if (a.height == 0)
		{
			for (var i = a.table.length; i--; )
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = a.table.length; i--; )
			{
				b = foldr(f, b, a.table[i]);
			}
		}
		return b;
	}

	// TODO: currently, it slices the right, then the left. This can be
	// optimized.
	function slice(from, to, a)
	{
		if (from < 0)
		{
			from += length(a);
		}
		if (to < 0)
		{
			to += length(a);
		}
		return sliceLeft(from, sliceRight(to, a));
	}

	function sliceRight(to, a)
	{
		if (to == length(a))
		{
			return a;
		}

		// Handle leaf level.
		if (a.height == 0)
		{
			var newA = { ctor:"_Array", height:0 };
			newA.table = a.table.slice(0, to);
			return newA;
		}

		// Slice the right recursively.
		var right = getSlot(to, a);
		var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (right == 0)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: a.table.slice(0, right),
			lengths: a.lengths.slice(0, right)
		};
		if (sliced.table.length > 0)
		{
			newA.table[right] = sliced;
			newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
		}
		return newA;
	}

	function sliceLeft(from, a)
	{
		if (from == 0)
		{
			return a;
		}

		// Handle leaf level.
		if (a.height == 0)
		{
			var newA = { ctor:"_Array", height:0 };
			newA.table = a.table.slice(from, a.table.length + 1);
			return newA;
		}

		// Slice the left recursively.
		var left = getSlot(from, a);
		var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (left == a.table.length - 1)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: a.table.slice(left, a.table.length + 1),
			lengths: new Array(a.table.length - left)
		};
		newA.table[0] = sliced;
		var len = 0;
		for (var i = 0; i < newA.table.length; i++)
		{
			len += length(newA.table[i]);
			newA.lengths[i] = len;
		}

		return newA;
	}

	// Appends two trees.
	function append(a,b)
	{
		if (a.table.length === 0)
		{
			return b;
		}
		if (b.table.length === 0)
		{
			return a;
		}

		var c = append_(a, b);

		// Check if both nodes can be crunshed together.
		if (c[0].table.length + c[1].table.length <= M)
		{
			if (c[0].table.length === 0)
			{
				return c[1];
			}
			if (c[1].table.length === 0)
			{
				return c[0];
			}

			// Adjust .table and .lengths
			c[0].table = c[0].table.concat(c[1].table);
			if (c[0].height > 0)
			{
				var len = length(c[0]);
				for (var i = 0; i < c[1].lengths.length; i++)
				{
					c[1].lengths[i] += len;
				}
				c[0].lengths = c[0].lengths.concat(c[1].lengths);
			}

			return c[0];
		}

		if (c[0].height > 0)
		{
			var toRemove = calcToRemove(a, b);
			if (toRemove > E)
			{
				c = shuffle(c[0], c[1], toRemove);
			}
		}

		return siblise(c[0], c[1]);
	}

	// Returns an array of two nodes; right and left. One node _may_ be empty.
	function append_(a, b)
	{
		if (a.height === 0 && b.height === 0)
		{
			return [a, b];
		}

		if (a.height !== 1 || b.height !== 1)
		{
			if (a.height === b.height)
			{
				a = nodeCopy(a);
				b = nodeCopy(b);
				var appended = append_(botRight(a), botLeft(b));

				insertRight(a, appended[1]);
				insertLeft(b, appended[0]);
			}
			else if (a.height > b.height)
			{
				a = nodeCopy(a);
				var appended = append_(botRight(a), b);

				insertRight(a, appended[0]);
				b = parentise(appended[1], appended[1].height + 1);
			}
			else
			{
				b = nodeCopy(b);
				var appended = append_(a, botLeft(b));

				var left = appended[0].table.length === 0 ? 0 : 1;
				var right = left === 0 ? 1 : 0;
				insertLeft(b, appended[left]);
				a = parentise(appended[right], appended[right].height + 1);
			}
		}

		// Check if balancing is needed and return based on that.
		if (a.table.length === 0 || b.table.length === 0)
		{
			return [a,b];
		}

		var toRemove = calcToRemove(a, b);
		if (toRemove <= E)
		{
			return [a,b];
		}
		return shuffle(a, b, toRemove);
	}

	// Helperfunctions for append_. Replaces a child node at the side of the parent.
	function insertRight(parent, node)
	{
		var index = parent.table.length - 1;
		parent.table[index] = node;
		parent.lengths[index] = length(node)
		parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
	}

	function insertLeft(parent, node)
	{
		if (node.table.length > 0)
		{
			parent.table[0] = node;
			parent.lengths[0] = length(node);

			var len = length(parent.table[0]);
			for (var i = 1; i < parent.lengths.length; i++)
			{
				len += length(parent.table[i]);
				parent.lengths[i] = len;
			}
		}
		else
		{
			parent.table.shift();
			for (var i = 1; i < parent.lengths.length; i++)
			{
				parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
			}
			parent.lengths.shift();
		}
	}

	// Returns the extra search steps for E. Refer to the paper.
	function calcToRemove(a, b)
	{
		var subLengths = 0;
		for (var i = 0; i < a.table.length; i++)
		{
			subLengths += a.table[i].table.length;
		}
		for (var i = 0; i < b.table.length; i++)
		{
			subLengths += b.table[i].table.length;
		}

		var toRemove = a.table.length + b.table.length
		return toRemove - (Math.floor((subLengths - 1) / M) + 1);
	}

	// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
	function get2(a, b, index)
	{
		return index < a.length
			? a[index]
			: b[index - a.length];
	}

	function set2(a, b, index, value)
	{
		if (index < a.length)
		{
			a[index] = value;
		}
		else
		{
			b[index - a.length] = value;
		}
	}

	function saveSlot(a, b, index, slot)
	{
		set2(a.table, b.table, index, slot);

		var l = (index == 0 || index == a.lengths.length)
			? 0
			: get2(a.lengths, a.lengths, index - 1);

		set2(a.lengths, b.lengths, index, l + length(slot));
	}

	// Creates a node or leaf with a given length at their arrays for perfomance.
	// Is only used by shuffle.
	function createNode(h, length)
	{
		if (length < 0)
		{
			length = 0;
		}
		var a = {
			ctor: "_Array",
			height: h,
			table: new Array(length)
		};
		if (h > 0)
		{
			a.lengths = new Array(length);
		}
		return a;
	}

	// Returns an array of two balanced nodes.
	function shuffle(a, b, toRemove)
	{
		var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
		var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

		// Skip the slots with size M. More precise: copy the slot references
		// to the new node
		var read = 0;
		while (get2(a.table, b.table, read).table.length % M == 0)
		{
			set2(newA.table, newB.table, read, get2(a.table, b.table, read));
			set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
			read++;
		}

		// Pulling items from left to right, caching in a slot before writing
		// it into the new nodes.
		var write = read;
		var slot = new createNode(a.height - 1, 0);
		var from = 0;

		// If the current slot is still containing data, then there will be at
		// least one more write, so we do not break this loop yet.
		while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
		{
			// Find out the max possible items for copying.
			var source = get2(a.table, b.table, read);
			var to = Math.min(M - slot.table.length, source.table.length)

			// Copy and adjust size table.
			slot.table = slot.table.concat(source.table.slice(from, to));
			if (slot.height > 0)
			{
				var len = slot.lengths.length;
				for (var i = len; i < len + to - from; i++)
				{
					slot.lengths[i] = length(slot.table[i]);
					slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
				}
			}

			from += to;

			// Only proceed to next slots[i] if the current one was
			// fully copied.
			if (source.table.length <= to)
			{
				read++; from = 0;
			}

			// Only create a new slot if the current one is filled up.
			if (slot.table.length == M)
			{
				saveSlot(newA, newB, write, slot);
				slot = createNode(a.height - 1,0);
				write++;
			}
		}

		// Cleanup after the loop. Copy the last slot into the new nodes.
		if (slot.table.length > 0)
		{
			saveSlot(newA, newB, write, slot);
			write++;
		}

		// Shift the untouched slots to the left
		while (read < a.table.length + b.table.length )
		{
			saveSlot(newA, newB, write, get2(a.table, b.table, read));
			read++;
			write++;
		}

		return [newA, newB];
	}

	// Navigation functions
	function botRight(a)
	{
		return a.table[a.table.length - 1];
	}
	function botLeft(a)
	{
		return a.table[0];
	}

	// Copies a node for updating. Note that you should not use this if
	// only updating only one of "table" or "lengths" for performance reasons.
	function nodeCopy(a)
	{
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: a.table.slice()
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths.slice();
		}
		return newA;
	}

	// Returns how many items are in the tree.
	function length(array)
	{
		if (array.height == 0)
		{
			return array.table.length;
		}
		else
		{
			return array.lengths[array.lengths.length - 1];
		}
	}

	// Calculates in which slot of "table" the item probably is, then
	// find the exact slot via forward searching in  "lengths". Returns the index.
	function getSlot(i, a)
	{
		var slot = i >> (5 * a.height);
		while (a.lengths[slot] <= i)
		{
			slot++;
		}
		return slot;
	}

	// Recursively creates a tree with a given height containing
	// only the given item.
	function create(item, h)
	{
		if (h == 0)
		{
			return {
				ctor: "_Array",
				height: 0,
				table: [item]
			};
		}
		return {
			ctor: "_Array",
			height: h,
			table: [create(item, h - 1)],
			lengths: [1]
		};
	}

	// Recursively creates a tree that contains the given tree.
	function parentise(tree, h)
	{
		if (h == tree.height)
		{
			return tree;
		}

		return {
			ctor: "_Array",
			height: h,
			table: [parentise(tree, h - 1)],
			lengths: [length(tree)]
		};
	}

	// Emphasizes blood brotherhood beneath two trees.
	function siblise(a, b)
	{
		return {
			ctor: "_Array",
			height: a.height + 1,
			table: [a, b],
			lengths: [length(a), length(a) + length(b)]
		};
	}

	function toJSArray(a)
	{
		var jsArray = new Array(length(a));
		toJSArray_(jsArray, 0, a);
		return jsArray;
	}

	function toJSArray_(jsArray, i, a)
	{
		for (var t = 0; t < a.table.length; t++)
		{
			if (a.height == 0)
			{
				jsArray[i + t] = a.table[t];
			}
			else
			{
				var inc = t == 0 ? 0 : a.lengths[t - 1];
				toJSArray_(jsArray, i + inc, a.table[t]);
			}
		}
	}

	function fromJSArray(jsArray)
	{
		if (jsArray.length == 0)
		{
			return empty;
		}
		var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
		return fromJSArray_(jsArray, h, 0, jsArray.length);
	}

	function fromJSArray_(jsArray, h, from, to)
	{
		if (h == 0)
		{
			return {
				ctor: "_Array",
				height: 0,
				table: jsArray.slice(from, to)
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
		}
		return {
			ctor: "_Array",
			height: h,
			table: table,
			lengths: lengths
		};
	}

	Elm.Native.Array.values = {
		empty: empty,
		fromList: fromList,
		toList: toList,
		initialize: F2(initialize),
		append: F2(append),
		push: F2(push),
		slice: F3(slice),
		get: F2(get),
		set: F3(set),
		map: F2(map),
		indexedMap: F2(indexedMap),
		foldl: F3(foldl),
		foldr: F3(foldr),
		length: length,

		toJSArray:toJSArray,
		fromJSArray:fromJSArray
	};

	return localRuntime.Native.Array.values = Elm.Native.Array.values;

}

Elm.Native.Basics = {};
Elm.Native.Basics.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Basics = localRuntime.Native.Basics || {};
	if (localRuntime.Native.Basics.values)
	{
		return localRuntime.Native.Basics.values;
	}

	var Utils = Elm.Native.Utils.make(localRuntime);

	function div(a, b)
	{
		return (a/b)|0;
	}
	function rem(a, b)
	{
		return a % b;
	}
	function mod(a, b)
	{
		if (b === 0)
		{
			throw new Error("Cannot perform mod 0. Division by zero error.");
		}
		var r = a % b;
		var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r+b) : -mod(-a,-b));

		return m === b ? 0 : m;
	}
	function logBase(base, n)
	{
		return Math.log(n) / Math.log(base);
	}
	function negate(n)
	{
		return -n;
	}
	function abs(n)
	{
		return n < 0 ? -n : n;
	}

	function min(a, b)
	{
		return Utils.cmp(a,b) < 0 ? a : b;
	}
	function max(a, b)
	{
		return Utils.cmp(a,b) > 0 ? a : b;
	}
	function clamp(lo, hi, n)
	{
		return Utils.cmp(n,lo) < 0 ? lo : Utils.cmp(n,hi) > 0 ? hi : n;
	}

	function xor(a, b)
	{
		return a !== b;
	}
	function not(b)
	{
		return !b;
	}
	function isInfinite(n)
	{
		return n === Infinity || n === -Infinity
	}

	function truncate(n)
	{
		return n|0;
	}

	function degrees(d)
	{
		return d * Math.PI / 180;
	}
	function turns(t)
	{
		return 2 * Math.PI * t;
	}
	function fromPolar(point)
	{
		var r = point._0;
		var t = point._1;
		return Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
	}
	function toPolar(point)
	{
		var x = point._0;
		var y = point._1;
		return Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y,x));
	}

	return localRuntime.Native.Basics.values = {
		div: F2(div),
		rem: F2(rem),
		mod: F2(mod),

		pi: Math.PI,
		e: Math.E,
		cos: Math.cos,
		sin: Math.sin,
		tan: Math.tan,
		acos: Math.acos,
		asin: Math.asin,
		atan: Math.atan,
		atan2: F2(Math.atan2),

		degrees:  degrees,
		turns:  turns,
		fromPolar:  fromPolar,
		toPolar:  toPolar,

		sqrt: Math.sqrt,
		logBase: F2(logBase),
		negate: negate,
		abs: abs,
		min: F2(min),
		max: F2(max),
		clamp: F3(clamp),
		compare: Utils.compare,

		xor: F2(xor),
		not: not,

		truncate: truncate,
		ceiling: Math.ceil,
		floor: Math.floor,
		round: Math.round,
		toFloat: function(x) { return x; },
		isNaN: isNaN,
		isInfinite: isInfinite
	};
};

Elm.Native.Char = {};
Elm.Native.Char.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Char = localRuntime.Native.Char || {};
	if (localRuntime.Native.Char.values)
	{
		return localRuntime.Native.Char.values;
	}

	var Utils = Elm.Native.Utils.make(localRuntime);

	return localRuntime.Native.Char.values = {
		fromCode : function(c) { return Utils.chr(String.fromCharCode(c)); },
		toCode   : function(c) { return c.charCodeAt(0); },
		toUpper  : function(c) { return Utils.chr(c.toUpperCase()); },
		toLower  : function(c) { return Utils.chr(c.toLowerCase()); },
		toLocaleUpper : function(c) { return Utils.chr(c.toLocaleUpperCase()); },
		toLocaleLower : function(c) { return Utils.chr(c.toLocaleLowerCase()); },
	};
};

Elm.Native.Click = {};
Elm.Native.Click.make = function(localRuntime) {

  localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.Click = localRuntime.Native.Focused || {};

  if (localRuntime.Native.Click.values) {
    return localRuntime.Native.Click.values;
  }

  function clickMomentarily(id) {
    var x = document.getElementById(id);
    if (!x.checked) {
      setTimeout(function(){x.click();}, 20);
    }
  }

  return localRuntime.Native.Click.values = {
    clickMomentarily : clickMomentarily
  }
}

Elm.Native.Color = {};
Elm.Native.Color.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Color = localRuntime.Native.Color || {};
	if (localRuntime.Native.Color.values)
	{
		return localRuntime.Native.Color.values;
	}

	function toCss(c)
	{
		var format = '';
		var colors = '';
		if (c.ctor === 'RGBA')
		{
			format = 'rgb';
			colors = c._0 + ', ' + c._1 + ', ' + c._2;
		}
		else
		{
			format = 'hsl';
			colors = (c._0 * 180 / Math.PI) + ', ' +
					 (c._1 * 100) + '%, ' +
					 (c._2 * 100) + '%';
		}
		if (c._3 === 1)
		{
			return format + '(' + colors + ')';
		}
		else
		{
			return format + 'a(' + colors + ', ' + c._3 + ')';
		}
	}

	return localRuntime.Native.Color.values = {
		toCss: toCss
	};

};

Elm.Native.Debug = {};
Elm.Native.Debug.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Debug = localRuntime.Native.Debug || {};
	if (localRuntime.Native.Debug.values)
	{
		return localRuntime.Native.Debug.values;
	}

	var toString = Elm.Native.Show.make(localRuntime).toString;

	function log(tag, value)
	{
		var msg = tag + ': ' + toString(value);
		var process = process || {};
		if (process.stdout)
		{
			process.stdout.write(msg);
		}
		else
		{
			console.log(msg);
		}
		return value;
	}

	function crash(message)
	{
		throw new Error(message);
	}

	function tracePath(tag, form)
	{
		if (localRuntime.debug)
		{
			return localRuntime.debug.trace(tag, form);
		}
		return form;
	}

	function watch(tag, value)
	{
		if (localRuntime.debug)
		{
			localRuntime.debug.watch(tag, value);
		}
		return value;
	}

	function watchSummary(tag, summarize, value)
	{
		if (localRuntime.debug)
		{
			localRuntime.debug.watch(tag, summarize(value));
		}
		return value;
	}

	return localRuntime.Native.Debug.values = {
		crash: crash,
		tracePath: F2(tracePath),
		log: F2(log),
		watch: F2(watch),
		watchSummary:F3(watchSummary),
	};
};


// setup
Elm.Native = Elm.Native || {};
Elm.Native.Graphics = Elm.Native.Graphics || {};
Elm.Native.Graphics.Collage = Elm.Native.Graphics.Collage || {};

// definition
Elm.Native.Graphics.Collage.make = function(localRuntime) {
	'use strict';

	// attempt to short-circuit
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Graphics = localRuntime.Native.Graphics || {};
	localRuntime.Native.Graphics.Collage = localRuntime.Native.Graphics.Collage || {};
	if ('values' in localRuntime.Native.Graphics.Collage)
	{
		return localRuntime.Native.Graphics.Collage.values;
	}

	// okay, we cannot short-ciruit, so now we define everything
	var Color = Elm.Native.Color.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var NativeElement = Elm.Native.Graphics.Element.make(localRuntime);
	var Transform = Elm.Transform2D.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);

	function setStrokeStyle(ctx, style)
	{
		ctx.lineWidth = style.width;

		var cap = style.cap.ctor;
		ctx.lineCap = cap === 'Flat'
			? 'butt'
			: cap === 'Round'
				? 'round'
				: 'square';

		var join = style.join.ctor;
		ctx.lineJoin = join === 'Smooth'
			? 'round'
			: join === 'Sharp'
				? 'miter'
				: 'bevel';

		ctx.miterLimit = style.join._0 || 10;
		ctx.strokeStyle = Color.toCss(style.color);
	}

	function setFillStyle(ctx, style)
	{
		var sty = style.ctor;
		ctx.fillStyle = sty === 'Solid'
			? Color.toCss(style._0)
			: sty === 'Texture'
				? texture(redo, ctx, style._0)
				: gradient(ctx, style._0);
	}

	function trace(ctx, path)
	{
		var points = List.toArray(path);
		var i = points.length - 1;
		if (i <= 0)
		{
			return;
		}
		ctx.moveTo(points[i]._0, points[i]._1);
		while (i--)
		{
			ctx.lineTo(points[i]._0, points[i]._1);
		}
		if (path.closed)
		{
			i = points.length - 1;
			ctx.lineTo(points[i]._0, points[i]._1);
		}
	}

	function line(ctx,style,path)
	{
		(style.dashing.ctor === '[]')
			? trace(ctx, path)
			: customLineHelp(ctx, style, path);
		ctx.scale(1,-1);
		ctx.stroke();
	}

	function customLineHelp(ctx, style, path)
	{
		var points = List.toArray(path);
		if (path.closed)
		{
			points.push(points[0]);
		}
		var pattern = List.toArray(style.dashing);
		var i = points.length - 1;
		if (i <= 0)
		{
			return;
		}
		var x0 = points[i]._0, y0 = points[i]._1;
		var x1=0, y1=0, dx=0, dy=0, remaining=0, nx=0, ny=0;
		var pindex = 0, plen = pattern.length;
		var draw = true, segmentLength = pattern[0];
		ctx.moveTo(x0,y0);
		while (i--)
		{
			x1 = points[i]._0;
			y1 = points[i]._1;
			dx = x1 - x0;
			dy = y1 - y0;
			remaining = Math.sqrt(dx * dx + dy * dy);
			while (segmentLength <= remaining)
			{
				x0 += dx * segmentLength / remaining;
				y0 += dy * segmentLength / remaining;
				ctx[draw ? 'lineTo' : 'moveTo'](x0, y0);
				// update starting position
				dx = x1 - x0;
				dy = y1 - y0;
				remaining = Math.sqrt(dx * dx + dy * dy);
				// update pattern
				draw = !draw;
				pindex = (pindex + 1) % plen;
				segmentLength = pattern[pindex];
			}
			if (remaining > 0)
			{
				ctx[draw ? 'lineTo' : 'moveTo'](x1, y1);
				segmentLength -= remaining;
			}
			x0 = x1;
			y0 = y1;
		}
	}

	function drawLine(ctx, style, path)
	{
		setStrokeStyle(ctx, style);
		return line(ctx, style, path);
	}

	function texture(redo, ctx, src)
	{
		var img = new Image();
		img.src = src;
		img.onload = redo;
		return ctx.createPattern(img, 'repeat');
	}

	function gradient(ctx, grad)
	{
		var g;
		var stops = [];
		if (grad.ctor === 'Linear')
		{
			var p0 = grad._0, p1 = grad._1;
			g = ctx.createLinearGradient(p0._0, -p0._1, p1._0, -p1._1);
			stops = List.toArray(grad._2);
		}
		else
		{
			var p0 = grad._0, p2 = grad._2;
			g = ctx.createRadialGradient(p0._0, -p0._1, grad._1, p2._0, -p2._1, grad._3);
			stops = List.toArray(grad._4);
		}
		var len = stops.length;
		for (var i = 0; i < len; ++i)
		{
			var stop = stops[i];
			g.addColorStop(stop._0, Color.toCss(stop._1));
		}
		return g;
	}

	function drawShape(redo, ctx, style, path)
	{
		trace(ctx, path);
		setFillStyle(ctx, style);
		ctx.scale(1,-1);
		ctx.fill();
	}


	// TEXT RENDERING

	function fillText(redo, ctx, text)
	{
		drawText(ctx, text, ctx.fillText);
	}

	function strokeText(redo, ctx, style, text)
	{
		setStrokeStyle(ctx, style);
		// Use native canvas API for dashes only for text for now
		// Degrades to non-dashed on IE 9 + 10
		if (style.dashing.ctor !== '[]' && ctx.setLineDash)
		{
			var pattern = List.toArray(style.dashing);
			ctx.setLineDash(pattern);
		}
		drawText(ctx, text, ctx.strokeText);
	}

	function drawText(ctx, text, canvasDrawFn)
	{
		var textChunks = chunkText(defaultContext, text);

		var totalWidth = 0;
		var maxHeight = 0;
		var numChunks = textChunks.length;

		ctx.scale(1,-1);

		for (var i = numChunks; i--; )
		{
			var chunk = textChunks[i];
			ctx.font = chunk.font;
			var metrics = ctx.measureText(chunk.text);
			chunk.width = metrics.width;
			totalWidth += chunk.width;
			if (chunk.height > maxHeight)
			{
				maxHeight = chunk.height;
			}
		}

		var x = -totalWidth / 2.0;
		for (var i = 0; i < numChunks; ++i)
		{
			var chunk = textChunks[i];
			ctx.font = chunk.font;
			ctx.fillStyle = chunk.color;
			canvasDrawFn.call(ctx, chunk.text, x, maxHeight / 2);
			x += chunk.width;
		}
	}

	function toFont(props)
	{
		return [
			props['font-style'],
			props['font-variant'],
			props['font-weight'],
			props['font-size'],
			props['font-family']
		].join(' ');
	}


	// Convert the object returned by the text module
	// into something we can use for styling canvas text
	function chunkText(context, text)
	{
		var tag = text.ctor;
		if (tag === 'Text:Append')
		{
			var leftChunks = chunkText(context, text._0);
			var rightChunks = chunkText(context, text._1);
			return leftChunks.concat(rightChunks);
		}
		if (tag === 'Text:Text')
		{
			return [{
				text: text._0,
				color: context.color,
				height: context['font-size'].slice(0,-2) | 0,
				font: toFont(context)
			}];
		}
		if (tag === 'Text:Meta')
		{
			var newContext = freshContext(text._0, context);
			return chunkText(newContext, text._1);
		}
	}

	function freshContext(props, ctx)
	{
		return {
			'font-style': props['font-style'] || ctx['font-style'],
			'font-variant': props['font-variant'] || ctx['font-variant'],
			'font-weight': props['font-weight'] || ctx['font-weight'],
			'font-size': props['font-size'] || ctx['font-size'],
			'font-family': props['font-family'] || ctx['font-family'],
			'color': props['color'] || ctx['color']
		};
	}

	var defaultContext = {
		'font-style': 'normal',
		'font-variant': 'normal',
		'font-weight': 'normal',
		'font-size': '12px',
		'font-family': 'sans-serif',
		'color': 'black'
	};


	// IMAGES

	function drawImage(redo, ctx, form)
	{
		var img = new Image();
		img.onload = redo;
		img.src = form._3;
		var w = form._0,
			h = form._1,
			pos = form._2,
			srcX = pos._0,
			srcY = pos._1,
			srcW = w,
			srcH = h,
			destX = -w/2,
			destY = -h/2,
			destW = w,
			destH = h;

		ctx.scale(1,-1);
		ctx.drawImage(img, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
	}

	function renderForm(redo, ctx, form)
	{
		ctx.save();

		var x = form.x,
			y = form.y,
			theta = form.theta,
			scale = form.scale;

		if (x !== 0 || y !== 0)
		{
			ctx.translate(x, y);
		}
		if (theta !== 0)
		{
			ctx.rotate(theta);
		}
		if (scale !== 1)
		{
			ctx.scale(scale,scale);
		}
		if (form.alpha !== 1)
		{
			ctx.globalAlpha = ctx.globalAlpha * form.alpha;
		}

		ctx.beginPath();
		var f = form.form;
		switch (f.ctor)
		{
			case 'FPath':
				drawLine(ctx, f._0, f._1);
				break;

			case 'FImage':
				drawImage(redo, ctx, f);
				break;

			case 'FShape':
				if (f._0.ctor === 'Line')
				{
					f._1.closed = true;
					drawLine(ctx, f._0._0, f._1);
				}
				else
				{
					drawShape(redo, ctx, f._0._0, f._1);
				}
				break;

			case 'FText':
				fillText(redo, ctx, f._0);
				break;

			case 'FOutlinedText':
				strokeText(redo, ctx, f._0, f._1);
				break;
		}
		ctx.restore();
	}

	function formToMatrix(form)
	{
	   var scale = form.scale;
	   var matrix = A6( Transform.matrix, scale, 0, 0, scale, form.x, form.y );

	   var theta = form.theta
	   if (theta !== 0)
	   {
		   matrix = A2( Transform.multiply, matrix, Transform.rotation(theta) );
	   }

	   return matrix;
	}

	function str(n)
	{
		if (n < 0.00001 && n > -0.00001)
		{
			return 0;
		}
		return n;
	}

	function makeTransform(w, h, form, matrices)
	{
		var props = form.form._0.props;
		var m = A6( Transform.matrix, 1, 0, 0, -1,
					(w - props.width ) / 2,
					(h - props.height) / 2 );
		var len = matrices.length;
		for (var i = 0; i < len; ++i)
		{
			m = A2( Transform.multiply, m, matrices[i] );
		}
		m = A2( Transform.multiply, m, formToMatrix(form) );

		return 'matrix(' +
			str( m[0]) + ', ' + str( m[3]) + ', ' +
			str(-m[1]) + ', ' + str(-m[4]) + ', ' +
			str( m[2]) + ', ' + str( m[5]) + ')';
	}

	function stepperHelp(list)
	{
		var arr = List.toArray(list);
		var i = 0;
		function peekNext()
		{
			return i < arr.length ? arr[i].form.ctor : '';
		}
		// assumes that there is a next element
		function next()
		{
			var out = arr[i];
			++i;
			return out;
		}
		return {
			peekNext: peekNext,
			next: next
		};
	}

	function formStepper(forms)
	{
		var ps = [stepperHelp(forms)];
		var matrices = [];
		var alphas = [];
		function peekNext()
		{
			var len = ps.length;
			var formType = '';
			for (var i = 0; i < len; ++i )
			{
				if (formType = ps[i].peekNext()) return formType;
			}
			return '';
		}
		// assumes that there is a next element
		function next(ctx)
		{
			while (!ps[0].peekNext())
			{
				ps.shift();
				matrices.pop();
				alphas.shift();
				if (ctx)
				{
					ctx.restore();
				}
			}
			var out = ps[0].next();
			var f = out.form;
			if (f.ctor === 'FGroup')
			{
				ps.unshift(stepperHelp(f._1));
				var m = A2(Transform.multiply, f._0, formToMatrix(out));
				ctx.save();
				ctx.transform(m[0], m[3], m[1], m[4], m[2], m[5]);
				matrices.push(m);

				var alpha = (alphas[0] || 1) * out.alpha;
				alphas.unshift(alpha);
				ctx.globalAlpha = alpha;
			}
			return out;
		}
		function transforms()
		{
			return matrices;
		}
		function alpha()
		{
			return alphas[0] || 1;
		}
		return {
			peekNext: peekNext,
			next: next,
			transforms: transforms,
			alpha: alpha
		};
	}

	function makeCanvas(w,h)
	{
		var canvas = NativeElement.createNode('canvas');
		canvas.style.width  = w + 'px';
		canvas.style.height = h + 'px';
		canvas.style.display = "block";
		canvas.style.position = "absolute";
		var ratio = window.devicePixelRatio || 1;
		canvas.width  = w * ratio;
		canvas.height = h * ratio;
		return canvas;
	}

	function render(model)
	{
		var div = NativeElement.createNode('div');
		div.style.overflow = 'hidden';
		div.style.position = 'relative';
		update(div, model, model);
		return div;
	}

	function nodeStepper(w,h,div)
	{
		var kids = div.childNodes;
		var i = 0;
		var ratio = window.devicePixelRatio || 1;

		function transform(transforms, ctx)
		{
			ctx.translate( w / 2 * ratio, h / 2 * ratio );
			ctx.scale( ratio, -ratio );
			var len = transforms.length;
			for (var i = 0; i < len; ++i)
			{
				var m = transforms[i];
				ctx.save();
				ctx.transform(m[0], m[3], m[1], m[4], m[2], m[5]);
			}
			return ctx;
		}
		function nextContext(transforms)
		{
			while (i < kids.length)
			{
				var node = kids[i];
				if (node.getContext)
				{
					node.width = w * ratio;
					node.height = h * ratio;
					node.style.width = w + 'px';
					node.style.height = h + 'px';
					++i;
					return transform(transforms, node.getContext('2d'));
				}
				div.removeChild(node);
			}
			var canvas = makeCanvas(w,h);
			div.appendChild(canvas);
			// we have added a new node, so we must step our position
			++i;
			return transform(transforms, canvas.getContext('2d'));
		}
		function addElement(matrices, alpha, form)
		{
			var kid = kids[i];
			var elem = form.form._0;

			var node = (!kid || kid.getContext)
				? NativeElement.render(elem)
				: NativeElement.update(kid, kid.oldElement, elem);

			node.style.position = 'absolute';
			node.style.opacity = alpha * form.alpha * elem.props.opacity;
			NativeElement.addTransform(node.style, makeTransform(w, h, form, matrices));
			node.oldElement = elem;
			++i;
			if (!kid)
			{
				div.appendChild(node);
			}
			else
			{
				div.insertBefore(node, kid);
			}
		}
		function clearRest()
		{
			while (i < kids.length)
			{
				div.removeChild(kids[i]);
			}
		}
		return {
			nextContext: nextContext,
			addElement: addElement,
			clearRest: clearRest
		};
	}


	function update(div, _, model)
	{
		var w = model.w;
		var h = model.h;

		var forms = formStepper(model.forms);
		var nodes = nodeStepper(w,h,div);
		var ctx = null;
		var formType = '';

		while (formType = forms.peekNext())
		{
			// make sure we have context if we need it
			if (ctx === null && formType !== 'FElement')
			{
				ctx = nodes.nextContext(forms.transforms());
				ctx.globalAlpha = forms.alpha();
			}

			var form = forms.next(ctx);
			// if it is FGroup, all updates are made within formStepper when next is called.
			if (formType === 'FElement')
			{
				// update or insert an element, get a new context
				nodes.addElement(forms.transforms(), forms.alpha(), form);
				ctx = null;
			}
			else if (formType !== 'FGroup')
			{
				renderForm(function() { update(div, model, model); }, ctx, form);
			}
		}
		nodes.clearRest();
		return div;
	}


	function collage(w,h,forms)
	{
		return A3(NativeElement.newElement, w, h, {
			ctor: 'Custom',
			type: 'Collage',
			render: render,
			update: update,
			model: {w:w, h:h, forms:forms}
		});
	}

	return localRuntime.Native.Graphics.Collage.values = {
		collage: F3(collage)
	};

};


// setup
Elm.Native = Elm.Native || {};
Elm.Native.Graphics = Elm.Native.Graphics || {};
Elm.Native.Graphics.Element = Elm.Native.Graphics.Element || {};

// definition
Elm.Native.Graphics.Element.make = function(localRuntime) {
	'use strict';

	// attempt to short-circuit
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Graphics = localRuntime.Native.Graphics || {};
	localRuntime.Native.Graphics.Element = localRuntime.Native.Graphics.Element || {};
	if ('values' in localRuntime.Native.Graphics.Element)
	{
		return localRuntime.Native.Graphics.Element.values;
	}

	var Color = Elm.Native.Color.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);
	var Text = Elm.Native.Text.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	// CREATION

	function createNode(elementType)
	{
		var node = document.createElement(elementType);
		node.style.padding = "0";
		node.style.margin = "0";
		return node;
	}


	function newElement(width, height, elementPrim)
	{
		return {
			_: {},
			element: elementPrim,
			props: {
				_: {},
				id: Utils.guid(),
				width: width,
				height: height,
				opacity: 1,
				color: Maybe.Nothing,
				href: "",
				tag: "",
				hover: Utils.Tuple0,
				click: Utils.Tuple0
			}
		};
	}


	// PROPERTIES

	function setProps(elem, node)
	{
		var props = elem.props;

		var element = elem.element;
		var width = props.width - (element.adjustWidth || 0);
		var height = props.height - (element.adjustHeight || 0);
		node.style.width  = (width |0) + 'px';
		node.style.height = (height|0) + 'px';

		if (props.opacity !== 1)
		{
			node.style.opacity = props.opacity;
		}

		if (props.color.ctor === 'Just')
		{
			node.style.backgroundColor = Color.toCss(props.color._0);
		}

		if (props.tag !== '')
		{
			node.id = props.tag;
		}

		if (props.hover.ctor !== '_Tuple0')
		{
			addHover(node, props.hover);
		}

		if (props.click.ctor !== '_Tuple0')
		{
			addClick(node, props.click);
		}

		if (props.href !== '')
		{
			var anchor = createNode('a');
			anchor.href = props.href;
			anchor.style.display = 'block';
			anchor.style.pointerEvents = 'auto';
			anchor.appendChild(node);
			node = anchor;
		}

		return node;
	}

	function addClick(e, handler)
	{
		e.style.pointerEvents = 'auto';
		e.elm_click_handler = handler;
		function trigger(ev)
		{
			e.elm_click_handler(Utils.Tuple0);
			ev.stopPropagation();
		}
		e.elm_click_trigger = trigger;
		e.addEventListener('click', trigger);
	}

	function removeClick(e, handler)
	{
		if (e.elm_click_trigger)
		{
			e.removeEventListener('click', e.elm_click_trigger);
			e.elm_click_trigger = null;
			e.elm_click_handler = null;
		}
	}

	function addHover(e, handler)
	{
		e.style.pointerEvents = 'auto';
		e.elm_hover_handler = handler;
		e.elm_hover_count = 0;

		function over(evt)
		{
			if (e.elm_hover_count++ > 0) return;
			e.elm_hover_handler(true);
			evt.stopPropagation();
		}
		function out(evt)
		{
			if (e.contains(evt.toElement || evt.relatedTarget)) return;
			e.elm_hover_count = 0;
			e.elm_hover_handler(false);
			evt.stopPropagation();
		}
		e.elm_hover_over = over;
		e.elm_hover_out = out;
		e.addEventListener('mouseover', over);
		e.addEventListener('mouseout', out);
	}

	function removeHover(e)
	{
		e.elm_hover_handler = null;
		if (e.elm_hover_over)
		{
			e.removeEventListener('mouseover', e.elm_hover_over);
			e.elm_hover_over = null;
		}
		if (e.elm_hover_out)
		{
			e.removeEventListener('mouseout', e.elm_hover_out);
			e.elm_hover_out = null;
		}
	}


	// IMAGES

	function image(props, img)
	{
		switch (img._0.ctor)
		{
			case 'Plain':
				return plainImage(img._3);

			case 'Fitted':
				return fittedImage(props.width, props.height, img._3);

			case 'Cropped':
				return croppedImage(img,props.width,props.height,img._3);

			case 'Tiled':
				return tiledImage(img._3);
		}
	}

	function plainImage(src)
	{
		var img = createNode('img');
		img.src = src;
		img.name = src;
		img.style.display = "block";
		return img;
	}

	function tiledImage(src)
	{
		var div = createNode('div');
		div.style.backgroundImage = 'url(' + src + ')';
		return div;
	}

	function fittedImage(w, h, src)
	{
		var div = createNode('div');
		div.style.background = 'url(' + src + ') no-repeat center';
		div.style.webkitBackgroundSize = 'cover';
		div.style.MozBackgroundSize = 'cover';
		div.style.OBackgroundSize = 'cover';
		div.style.backgroundSize = 'cover';
		return div;
	}

	function croppedImage(elem, w, h, src)
	{
		var pos = elem._0._0;
		var e = createNode('div');
		e.style.overflow = "hidden";

		var img = createNode('img');
		img.onload = function() {
			var sw = w / elem._1, sh = h / elem._2;
			img.style.width = ((this.width * sw)|0) + 'px';
			img.style.height = ((this.height * sh)|0) + 'px';
			img.style.marginLeft = ((- pos._0 * sw)|0) + 'px';
			img.style.marginTop = ((- pos._1 * sh)|0) + 'px';
		};
		img.src = src;
		img.name = src;
		e.appendChild(img);
		return e;
	}


	// FLOW

	function goOut(node)
	{
		node.style.position = 'absolute';
		return node;
	}
	function goDown(node)
	{
		return node;
	}
	function goRight(node)
	{
		node.style.styleFloat = 'left';
		node.style.cssFloat = 'left';
		return node;
	}

	var directionTable = {
		DUp    : goDown,
		DDown  : goDown,
		DLeft  : goRight,
		DRight : goRight,
		DIn    : goOut,
		DOut   : goOut
	};
	function needsReversal(dir)
	{
		return dir == 'DUp' || dir == 'DLeft' || dir == 'DIn';
	}

	function flow(dir,elist)
	{
		var array = List.toArray(elist);
		var container = createNode('div');
		var goDir = directionTable[dir];
		if (goDir == goOut)
		{
			container.style.pointerEvents = 'none';
		}
		if (needsReversal(dir))
		{
			array.reverse();
		}
		var len = array.length;
		for (var i = 0; i < len; ++i)
		{
			container.appendChild(goDir(render(array[i])));
		}
		return container;
	}


	// CONTAINER

	function toPos(pos)
	{
		return pos.ctor === "Absolute"
			? pos._0 + "px"
			: (pos._0 * 100) + "%";
	}

	// must clear right, left, top, bottom, and transform
	// before calling this function
	function setPos(pos,elem,e)
	{
		var element = elem.element;
		var props = elem.props;
		var w = props.width + (element.adjustWidth ? element.adjustWidth : 0);
		var h = props.height + (element.adjustHeight ? element.adjustHeight : 0);

		e.style.position = 'absolute';
		e.style.margin = 'auto';
		var transform = '';

		switch (pos.horizontal.ctor)
		{
			case 'P':
				e.style.right = toPos(pos.x);
				e.style.removeProperty('left');
				break;

			case 'Z':
				transform = 'translateX(' + ((-w/2)|0) + 'px) ';

			case 'N':
				e.style.left = toPos(pos.x);
				e.style.removeProperty('right');
				break;
		}
		switch (pos.vertical.ctor)
		{
			case 'N':
				e.style.bottom = toPos(pos.y);
				e.style.removeProperty('top');
				break;

			case 'Z':
				transform += 'translateY(' + ((-h/2)|0) + 'px)';

			case 'P':
				e.style.top = toPos(pos.y);
				e.style.removeProperty('bottom');
				break;
		}
		if (transform !== '')
		{
			addTransform(e.style, transform);
		}
		return e;
	}

	function addTransform(style, transform)
	{
		style.transform       = transform;
		style.msTransform     = transform;
		style.MozTransform    = transform;
		style.webkitTransform = transform;
		style.OTransform      = transform;
	}

	function container(pos,elem)
	{
		var e = render(elem);
		setPos(pos, elem, e);
		var div = createNode('div');
		div.style.position = 'relative';
		div.style.overflow = 'hidden';
		div.appendChild(e);
		return div;
	}


	function rawHtml(elem)
	{
		var html = elem.html;
		var guid = elem.guid;
		var align = elem.align;

		var div = createNode('div');
		div.innerHTML = html;
		div.style.visibility = "hidden";
		if (align)
		{
			div.style.textAlign = align;
		}
		div.style.visibility = 'visible';
		div.style.pointerEvents = 'auto';
		return div;
	}


	// RENDER

	function render(elem)
	{
		return setProps(elem, makeElement(elem));
	}
	function makeElement(e)
	{
		var elem = e.element;
		switch(elem.ctor)
		{
			case 'Image':
				return image(e.props, elem);

			case 'Flow':
				return flow(elem._0.ctor, elem._1);

			case 'Container':
				return container(elem._0, elem._1);

			case 'Spacer':
				return createNode('div');

			case 'RawHtml':
				return rawHtml(elem);

			case 'Custom':
				return elem.render(elem.model);
		}
	}

	function updateAndReplace(node, curr, next)
	{
		var newNode = update(node, curr, next);
		if (newNode !== node)
		{
			node.parentNode.replaceChild(newNode, node);
		}
		return newNode;
	}


	// UPDATE

	function update(node, curr, next)
	{
		var rootNode = node;
		if (node.tagName === 'A')
		{
			node = node.firstChild;
		}
		if (curr.props.id === next.props.id)
		{
			updateProps(node, curr, next);
			return rootNode;
		}
		if (curr.element.ctor !== next.element.ctor)
		{
			return render(next);
		}
		var nextE = next.element;
		var currE = curr.element;
		switch(nextE.ctor)
		{
			case "Spacer":
				updateProps(node, curr, next);
				return rootNode;

			case "RawHtml":
				if(currE.html.valueOf() !== nextE.html.valueOf())
				{
					node.innerHTML = nextE.html;
				}
				updateProps(node, curr, next);
				return rootNode;

			case "Image":
				if (nextE._0.ctor === 'Plain')
				{
					if (nextE._3 !== currE._3)
					{
						node.src = nextE._3;
					}
				}
				else if (!Utils.eq(nextE,currE)
					|| next.props.width !== curr.props.width
					|| next.props.height !== curr.props.height)
				{
					return render(next);
				}
				updateProps(node, curr, next);
				return rootNode;

			case "Flow":
				var arr = List.toArray(nextE._1);
				for (var i = arr.length; i--; )
				{
					arr[i] = arr[i].element.ctor;
				}
				if (nextE._0.ctor !== currE._0.ctor)
				{
					return render(next);
				}
				var nexts = List.toArray(nextE._1);
				var kids = node.childNodes;
				if (nexts.length !== kids.length)
				{
					return render(next);
				}
				var currs = List.toArray(currE._1);
				var dir = nextE._0.ctor;
				var goDir = directionTable[dir];
				var toReverse = needsReversal(dir);
				var len = kids.length;
				for (var i = len; i-- ;)
				{
					var subNode = kids[toReverse ? len - i - 1 : i];
					goDir(updateAndReplace(subNode, currs[i], nexts[i]));
				}
				updateProps(node, curr, next);
				return rootNode;

			case "Container":
				var subNode = node.firstChild;
				var newSubNode = updateAndReplace(subNode, currE._1, nextE._1);
				setPos(nextE._0, nextE._1, newSubNode);
				updateProps(node, curr, next);
				return rootNode;

			case "Custom":
				if (currE.type === nextE.type)
				{
					var updatedNode = nextE.update(node, currE.model, nextE.model);
					updateProps(updatedNode, curr, next);
					return updatedNode;
				}
				return render(next);
		}
	}

	function updateProps(node, curr, next)
	{
		var nextProps = next.props;
		var currProps = curr.props;

		var element = next.element;
		var width = nextProps.width - (element.adjustWidth || 0);
		var height = nextProps.height - (element.adjustHeight || 0);
		if (width !== currProps.width)
		{
			node.style.width = (width|0) + 'px';
		}
		if (height !== currProps.height)
		{
			node.style.height = (height|0) + 'px';
		}

		if (nextProps.opacity !== currProps.opacity)
		{
			node.style.opacity = nextProps.opacity;
		}

		var nextColor = nextProps.color.ctor === 'Just'
			? Color.toCss(nextProps.color._0)
			: '';
		if (node.style.backgroundColor !== nextColor)
		{
			node.style.backgroundColor = nextColor;
		}

		if (nextProps.tag !== currProps.tag)
		{
			node.id = nextProps.tag;
		}

		if (nextProps.href !== currProps.href)
		{
			if (currProps.href === '')
			{
				// add a surrounding href
				var anchor = createNode('a');
				anchor.href = nextProps.href;
				anchor.style.display = 'block';
				anchor.style.pointerEvents = 'auto';

				node.parentNode.replaceChild(anchor, node);
				anchor.appendChild(node);
			}
			else if (nextProps.href === '')
			{
				// remove the surrounding href
				var anchor = node.parentNode;
				anchor.parentNode.replaceChild(node, anchor);
			}
			else
			{
				// just update the link
				node.parentNode.href = nextProps.href;
			}
		}

		// update click and hover handlers
		var removed = false;

		// update hover handlers
		if (currProps.hover.ctor === '_Tuple0')
		{
			if (nextProps.hover.ctor !== '_Tuple0')
			{
				addHover(node, nextProps.hover);
			}
		}
		else
		{
			if (nextProps.hover.ctor === '_Tuple0')
			{
				removed = true;
				removeHover(node);
			}
			else
			{
				node.elm_hover_handler = nextProps.hover;
			}
		}

		// update click handlers
		if (currProps.click.ctor === '_Tuple0')
		{
			if (nextProps.click.ctor !== '_Tuple0')
			{
				addClick(node, nextProps.click);
			}
		}
		else
		{
			if (nextProps.click.ctor === '_Tuple0')
			{
				removed = true;
				removeClick(node);
			}
			else
			{
				node.elm_click_handler = nextProps.click;
			}
		}

		// stop capturing clicks if
		if (removed
			&& nextProps.hover.ctor === '_Tuple0'
			&& nextProps.click.ctor === '_Tuple0')
		{
			node.style.pointerEvents = 'none';
		}
	}


	// TEXT

	function block(align)
	{
		return function(text)
		{
			var raw = {
				ctor :'RawHtml',
				html : Text.renderHtml(text),
				align: align
			};
			var pos = htmlHeight(0, raw);
			return newElement(pos._0, pos._1, raw);
		}
	}

	function markdown(text)
	{
		var raw = {
			ctor:'RawHtml',
			html: text,
			align: null
		};
		var pos = htmlHeight(0, raw);
		return newElement(pos._0, pos._1, raw);
	}

	function htmlHeight(width, rawHtml)
	{
		// create dummy node
		var temp = document.createElement('div');
		temp.innerHTML = rawHtml.html;
		if (width > 0)
		{
			temp.style.width = width + "px";
		}
		temp.style.visibility = "hidden";
		temp.style.styleFloat = "left";
		temp.style.cssFloat   = "left";

		document.body.appendChild(temp);

		// get dimensions
		var style = window.getComputedStyle(temp, null);
		var w = Math.ceil(style.getPropertyValue("width").slice(0,-2) - 0);
		var h = Math.ceil(style.getPropertyValue("height").slice(0,-2) - 0);
		document.body.removeChild(temp);
		return Utils.Tuple2(w,h);
	}


	return localRuntime.Native.Graphics.Element.values = {
		render: render,
		update: update,
		updateAndReplace: updateAndReplace,

		createNode: createNode,
		newElement: F3(newElement),
		addTransform: addTransform,
		htmlHeight: F2(htmlHeight),
		guid: Utils.guid,

		block: block,
		markdown: markdown
	};

};

Elm.Native.Json = {};
Elm.Native.Json.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Json = localRuntime.Native.Json || {};
	if (localRuntime.Native.Json.values) {
		return localRuntime.Native.Json.values;
	}

	var ElmArray = Elm.Native.Array.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);
	var Result = Elm.Result.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	function crash(expected, actual) {
		throw new Error(
			'expecting ' + expected + ' but got ' + JSON.stringify(actual)
		);
	}


	// PRIMITIVE VALUES

	function decodeNull(successValue) {
		return function(value) {
			if (value === null) {
				return successValue;
			}
			crash('null', value);
		};
	}


	function decodeString(value) {
		if (typeof value === 'string' || value instanceof String) {
			return value;
		}
		crash('a String', value);
	}


	function decodeFloat(value) {
		if (typeof value === 'number') {
			return value;
		}
		crash('a Float', value);
	}


	function decodeInt(value) {
		if (typeof value === 'number' && (value|0) === value) {
			return value;
		}
		crash('an Int', value);
	}


	function decodeBool(value) {
		if (typeof value === 'boolean') {
			return value;
		}
		crash('a Bool', value);
	}


	// ARRAY

	function decodeArray(decoder) {
		return function(value) {
			if (value instanceof Array) {
				var len = value.length;
				var array = new Array(len);
				for (var i = len; i-- ; ) {
					array[i] = decoder(value[i]);
				}
				return ElmArray.fromJSArray(array);
			}
			crash('an Array', value);
		};
	}


	// LIST

	function decodeList(decoder) {
		return function(value) {
			if (value instanceof Array) {
				var len = value.length;
				var list = List.Nil;
				for (var i = len; i-- ; ) {
					list = List.Cons( decoder(value[i]), list );
				}
				return list;
			}
			crash('a List', value);
		};
	}


	// MAYBE

	function decodeMaybe(decoder) {
		return function(value) {
			try {
				return Maybe.Just(decoder(value));
			} catch(e) {
				return Maybe.Nothing;
			}
		};
	}


	// FIELDS

	function decodeField(field, decoder) {
		return function(value) {
			var subValue = value[field];
			if (subValue !== undefined) {
				return decoder(subValue);
			}
			crash("an object with field '" + field + "'", value);
		};
	}


	// OBJECTS

	function decodeKeyValuePairs(decoder) {
		return function(value) {
			var isObject =
				typeof value === 'object'
					&& value !== null
					&& !(value instanceof Array);

			if (isObject) {
				var keyValuePairs = List.Nil;
				for (var key in value) {
					var elmValue = decoder(value[key]);
					var pair = Utils.Tuple2(key, elmValue);
					keyValuePairs = List.Cons(pair, keyValuePairs);
				}
				return keyValuePairs;
			}

			crash("an object", value);
		};
	}

	function decodeObject1(f, d1) {
		return function(value) {
			return f(d1(value));
		};
	}

	function decodeObject2(f, d1, d2) {
		return function(value) {
			return A2( f, d1(value), d2(value) );
		};
	}

	function decodeObject3(f, d1, d2, d3) {
		return function(value) {
			return A3( f, d1(value), d2(value), d3(value) );
		};
	}

	function decodeObject4(f, d1, d2, d3, d4) {
		return function(value) {
			return A4( f, d1(value), d2(value), d3(value), d4(value) );
		};
	}

	function decodeObject5(f, d1, d2, d3, d4, d5) {
		return function(value) {
			return A5( f, d1(value), d2(value), d3(value), d4(value), d5(value) );
		};
	}

	function decodeObject6(f, d1, d2, d3, d4, d5, d6) {
		return function(value) {
			return A6( f,
				d1(value),
				d2(value),
				d3(value),
				d4(value),
				d5(value),
				d6(value)
			);
		};
	}

	function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7) {
		return function(value) {
			return A7( f,
				d1(value),
				d2(value),
				d3(value),
				d4(value),
				d5(value),
				d6(value),
				d7(value)
			);
		};
	}

	function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8) {
		return function(value) {
			return A8( f,
				d1(value),
				d2(value),
				d3(value),
				d4(value),
				d5(value),
				d6(value),
				d7(value),
				d8(value)
			);
		};
	}


	// TUPLES

	function decodeTuple1(f, d1) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 1 ) {
				crash('a Tuple of length 1', value);
			}
			return f( d1(value[0]) );
		};
	}

	function decodeTuple2(f, d1, d2) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 2 ) {
				crash('a Tuple of length 2', value);
			}
			return A2( f, d1(value[0]), d2(value[1]) );
		};
	}

	function decodeTuple3(f, d1, d2, d3) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 3 ) {
				crash('a Tuple of length 3', value);
			}
			return A3( f, d1(value[0]), d2(value[1]), d3(value[2]) );
		};
	}


	function decodeTuple4(f, d1, d2, d3, d4) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 4 ) {
				crash('a Tuple of length 4', value);
			}
			return A4( f, d1(value[0]), d2(value[1]), d3(value[2]), d4(value[3]) );
		};
	}


	function decodeTuple5(f, d1, d2, d3, d4, d5) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 5 ) {
				crash('a Tuple of length 5', value);
			}
			return A5( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4])
			);
		};
	}


	function decodeTuple6(f, d1, d2, d3, d4, d5, d6) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 6 ) {
				crash('a Tuple of length 6', value);
			}
			return A6( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4]),
				d6(value[5])
			);
		};
	}

	function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 7 ) {
				crash('a Tuple of length 7', value);
			}
			return A7( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4]),
				d6(value[5]),
				d7(value[6])
			);
		};
	}


	function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 8 ) {
				crash('a Tuple of length 8', value);
			}
			return A8( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4]),
				d6(value[5]),
				d7(value[6]),
				d8(value[7])
			);
		};
	}


	// CUSTOM DECODERS

	function decodeValue(value) {
		return value;
	}

	function runDecoderValue(decoder, value) {
		try {
			return Result.Ok(decoder(value));
		} catch(e) {
			return Result.Err(e.message);
		}
	}

	function customDecoder(decoder, callback) {
		return function(value) {
			var result = callback(decoder(value));
			if (result.ctor === 'Err') {
				throw new Error('custom decoder failed: ' + result._0);
			}
			return result._0;
		}
	}

	function andThen(decode, callback) {
		return function(value) {
			var result = decode(value);
			return callback(result)(value);
		}
	}

	function fail(msg) {
		return function(value) {
			throw new Error(msg);
		}
	}

	function succeed(successValue) {
		return function(value) {
			return successValue;
		}
	}


	// ONE OF MANY

	function oneOf(decoders) {
		return function(value) {
			var errors = [];
			var temp = decoders;
			while (temp.ctor !== '[]') {
				try {
					return temp._0(value);
				} catch(e) {
					errors.push(e.message);
				}
				temp = temp._1;
			}
			throw new Error('expecting one of the following:\n    ' + errors.join('\n    '));
		}
	}

	function get(decoder, value) {
		try {
			return Result.Ok(decoder(value));
		} catch(e) {
			return Result.Err(e.message);
		}
	}


	// ENCODE / DECODE

	function runDecoderString(decoder, string) {
		try {
			return Result.Ok(decoder(JSON.parse(string)));
		} catch(e) {
			return Result.Err(e.message);
		}
	}

	function encode(indentLevel, value) {
		return JSON.stringify(value, null, indentLevel);
	}

	function identity(value) {
		return value;
	}

	function encodeObject(keyValuePairs) {
		var obj = {};
		while (keyValuePairs.ctor !== '[]') {
			var pair = keyValuePairs._0;
			obj[pair._0] = pair._1;
			keyValuePairs = keyValuePairs._1;
		}
		return obj;
	}

	return localRuntime.Native.Json.values = {
		encode: F2(encode),
		runDecoderString: F2(runDecoderString),
		runDecoderValue: F2(runDecoderValue),

		get: F2(get),
		oneOf: oneOf,

		decodeNull: decodeNull,
		decodeInt: decodeInt,
		decodeFloat: decodeFloat,
		decodeString: decodeString,
		decodeBool: decodeBool,

		decodeMaybe: decodeMaybe,

		decodeList: decodeList,
		decodeArray: decodeArray,

		decodeField: F2(decodeField),

		decodeObject1: F2(decodeObject1),
		decodeObject2: F3(decodeObject2),
		decodeObject3: F4(decodeObject3),
		decodeObject4: F5(decodeObject4),
		decodeObject5: F6(decodeObject5),
		decodeObject6: F7(decodeObject6),
		decodeObject7: F8(decodeObject7),
		decodeObject8: F9(decodeObject8),
		decodeKeyValuePairs: decodeKeyValuePairs,

		decodeTuple1: F2(decodeTuple1),
		decodeTuple2: F3(decodeTuple2),
		decodeTuple3: F4(decodeTuple3),
		decodeTuple4: F5(decodeTuple4),
		decodeTuple5: F6(decodeTuple5),
		decodeTuple6: F7(decodeTuple6),
		decodeTuple7: F8(decodeTuple7),
		decodeTuple8: F9(decodeTuple8),

		andThen: F2(andThen),
		decodeValue: decodeValue,
		customDecoder: F2(customDecoder),
		fail: fail,
		succeed: succeed,

		identity: identity,
		encodeNull: null,
		encodeArray: ElmArray.toJSArray,
		encodeList: List.toArray,
		encodeObject: encodeObject

	};

};

Elm.Native.Keyboard = {};
Elm.Native.Keyboard.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Keyboard = localRuntime.Native.Keyboard || {};
	if (localRuntime.Native.Keyboard.values)
	{
		return localRuntime.Native.Keyboard.values;
	}

	var NS = Elm.Native.Signal.make(localRuntime);


	function keyEvent(event)
	{
		return {
			_: {},
			alt: event.altKey,
			meta: event.metaKey,
			keyCode: event.keyCode
		};
	}


	function keyStream(node, eventName, handler)
	{
		var stream = NS.input(eventName, '\0');

		localRuntime.addListener([stream.id], node, eventName, function(e) {
			localRuntime.notify(stream.id, handler(e));
		});

		return stream;
	}

	var downs = keyStream(document, 'keydown', keyEvent);
	var ups = keyStream(document, 'keyup', keyEvent);
	var presses = keyStream(document, 'keypress', keyEvent);
	var blurs = keyStream(window, 'blur', function() { return null; });


	return localRuntime.Native.Keyboard.values = {
		downs: downs,
		ups: ups,
		blurs: blurs,
		presses: presses
	};

};

Elm.Native.List = {};
Elm.Native.List.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.List = localRuntime.Native.List || {};
	if (localRuntime.Native.List.values)
	{
		return localRuntime.Native.List.values;
	}
	if ('values' in Elm.Native.List)
	{
		return localRuntime.Native.List.values = Elm.Native.List.values;
	}

	var Utils = Elm.Native.Utils.make(localRuntime);

	var Nil = Utils.Nil;
	var Cons = Utils.Cons;

	function toArray(xs)
	{
		var out = [];
		while (xs.ctor !== '[]')
		{
			out.push(xs._0);
			xs = xs._1;
		}
		return out;
	}

	function fromArray(arr)
	{
		var out = Nil;
		for (var i = arr.length; i--; )
		{
			out = Cons(arr[i], out);
		}
		return out;
	}

	function range(lo,hi)
	{
		var lst = Nil;
		if (lo <= hi)
		{
			do { lst = Cons(hi,lst) } while (hi-->lo);
		}
		return lst
	}

	// f defined similarly for both foldl and foldr (NB: different from Haskell)
	// ie, foldl : (a -> b -> b) -> b -> [a] -> b
	function foldl(f, b, xs)
	{
		var acc = b;
		while (xs.ctor !== '[]')
		{
			acc = A2(f, xs._0, acc);
			xs = xs._1;
		}
		return acc;
	}

	function foldr(f, b, xs)
	{
		var arr = toArray(xs);
		var acc = b;
		for (var i = arr.length; i--; )
		{
			acc = A2(f, arr[i], acc);
		}
		return acc;
	}

	function any(pred, xs)
	{
		while (xs.ctor !== '[]')
		{
			if (pred(xs._0))
			{
				return true;
			}
			xs = xs._1;
		}
		return false;
	}

	function map2(f, xs, ys)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]')
		{
			arr.push(A2(f, xs._0, ys._0));
			xs = xs._1;
			ys = ys._1;
		}
		return fromArray(arr);
	}

	function map3(f, xs, ys, zs)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
		{
			arr.push(A3(f, xs._0, ys._0, zs._0));
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map4(f, ws, xs, ys, zs)
	{
		var arr = [];
		while (   ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map5(f, vs, ws, xs, ys, zs)
	{
		var arr = [];
		while (   vs.ctor !== '[]'
			   && ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
			vs = vs._1;
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function sortBy(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a,b){
			return Utils.cmp(f(a), f(b));
		}));
	}

	function sortWith(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a,b){
			var ord = f(a)(b).ctor;
			return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
		}));
	}

	function take(n, xs)
	{
		var arr = [];
		while (xs.ctor !== '[]' && n > 0)
		{
			arr.push(xs._0);
			xs = xs._1;
			--n;
		}
		return fromArray(arr);
	}

	function drop(n, xs)
	{
		while (xs.ctor !== '[]' && n > 0)
		{
			xs = xs._1;
			--n;
		}
		return xs;
	}

	function repeat(n, x)
	{
		var arr = [];
		var pattern = [x];
		while (n > 0)
		{
			if (n & 1)
			{
				arr = arr.concat(pattern);
			}
			n >>= 1, pattern = pattern.concat(pattern);
		}
		return fromArray(arr);
	}


	Elm.Native.List.values = {
		Nil:Nil,
		Cons:Cons,
		cons:F2(Cons),
		toArray:toArray,
		fromArray:fromArray,
		range:range,

		foldl:F3(foldl),
		foldr:F3(foldr),

		any:F2(any),
		map2:F3(map2),
		map3:F4(map3),
		map4:F5(map4),
		map5:F6(map5),
		sortBy:F2(sortBy),
		sortWith:F2(sortWith),
		take:F2(take),
		drop:F2(drop),
		repeat:F2(repeat)
	};
	return localRuntime.Native.List.values = Elm.Native.List.values;

};


// setup
Elm.Native = Elm.Native || {};
Elm.Native.Markdown = Elm.Native.Markdown || {};

// definition
Elm.Native.Markdown.make = function(localRuntime) {
	'use strict';

	// attempt to short-circuit
	if ('values' in Elm.Native.Markdown)
	{
		return Elm.Native.Markdown.values;
	}

	var Element = Elm.Native.Graphics.Element.make(localRuntime);

	/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */
	(function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+block.def.source+")")();block.blockquote=replace(block.blockquote)("def",block.def)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|"+block.list.source.replace("\\1","\\3")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top,true);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:"list_start",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false,bq);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:cap[1]==="pre"||cap[1]==="script"||cap[1]==="style",text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1].charAt(6)===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=escape(this.smartypants(cap[0]));continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=="!"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/--/g,"—").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};InlineLexer.prototype.mangle=function(text){var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return"<pre><code>"+(escaped?code:escape(code,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+"\n</code></pre>\n"};Renderer.prototype.blockquote=function(quote){return"<blockquote>\n"+quote+"</blockquote>\n"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return"<h"+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,"-")+'">'+text+"</h"+level+">\n"};Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};Renderer.prototype.list=function(body,ordered){var type=ordered?"ol":"ul";return"<"+type+">\n"+body+"</"+type+">\n"};Renderer.prototype.listitem=function(text){return"<li>"+text+"</li>\n"};Renderer.prototype.paragraph=function(text){return"<p>"+text+"</p>\n"};Renderer.prototype.table=function(header,body){return"<table>\n"+"<thead>\n"+header+"</thead>\n"+"<tbody>\n"+body+"</tbody>\n"+"</table>\n"};Renderer.prototype.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' style="text-align:'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n"};Renderer.prototype.strong=function(text){return"<strong>"+text+"</strong>"};Renderer.prototype.em=function(text){return"<em>"+text+"</em>"};Renderer.prototype.codespan=function(text){return"<code>"+text+"</code>"};Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};Renderer.prototype.del=function(text){return"<del>"+text+"</del>"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(prot.indexOf("javascript:")===0){return""}}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"'}out+=">"+text+"</a>";return out};Renderer.prototype.image=function(href,title,text){var out='<img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":">";return out};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var header="",body="",i,row,cell,flags,j;cell="";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell="";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return this.renderer.blockquote(body)}case"list_start":{var body="",ordered=this.token.ordered;while(this.next().type!=="list_end"){body+=this.tok()}return this.renderer.list(body,ordered)}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(body)}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return this.renderer.listitem(body)}case"html":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function unescape(html){return html.replace(/&([#\w]+);/g,function(_,n){n=n.toLowerCase();if(n==="colon")return":";if(n.charAt(0)==="#"){return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return""})}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt==="function"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=="code"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());

	marked.setOptions({
		highlight: function (code, lang) {
			if (typeof hljs !== 'undefined'
				&& lang
				&& hljs.listLanguages().indexOf(lang) >= 0)
			{
				return hljs.highlight(lang, code, true).value;
			}
			return code;
		}
	});

	function formatOptions(options) {
		var gfm = options.githubFlavored;
		if (gfm.ctor === 'Just')
		{
			return {
				gfm: true,
				tables: gfm.tables,
				breaks: gfm.breaks,
				sanitize: options.sanitize,
				smartypants: options.smartypants
			};
		}
		else
		{
			return {
				gfm: false,
				tables: false,
				breaks: false,
				sanitize: options.sanitize,
				smartypants: options.smartypants
			};
		}
	}

	function toHtmlWith(options, rawMarkdown)
	{
		return new MarkdownWidget(options, rawMarkdown);
	}

	function MarkdownWidget(options, rawMarkdown)
	{
		this.options = options;
		this.markdown = rawMarkdown;
	}

	MarkdownWidget.prototype.type = "Widget";

	MarkdownWidget.prototype.init = function init()
	{
		var html = marked(this.markdown, formatOptions(this.options));
		var div = document.createElement('div');
		div.innerHTML = html;
		return div;
	};

	MarkdownWidget.prototype.update = function update(previous, node)
	{
		if (this.markdown !== previous.markdown || this.options != previous.options)
		{
			var html = marked(this.markdown, formatOptions(this.options));
			node.innerHTML = html;
		}
		return node;
	};


	function toElementWith(options, rawMarkdown)
	{
		return Element.markdown(marked(rawMarkdown, formatOptions(options)));
	}

	return Elm.Native.Markdown.values = {
		toHtmlWith: F2(toHtmlWith),
		toElementWith: F2(toElementWith)
	};
};
Elm.Native = Elm.Native || {};
Elm.Native.Mouse = {};
Elm.Native.Mouse.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Mouse = localRuntime.Native.Mouse || {};
	if (localRuntime.Native.Mouse.values)
	{
		return localRuntime.Native.Mouse.values;
	}

	var NS = Elm.Native.Signal.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);

	var position = NS.input('Mouse.position', Utils.Tuple2(0,0));

	var isDown = NS.input('Mouse.isDown', false);

	var clicks = NS.input('Mouse.clicks', Utils.Tuple0);

	var node = localRuntime.isFullscreen()
		? document
		: localRuntime.node;

	localRuntime.addListener([clicks.id], node, 'click', function click() {
		localRuntime.notify(clicks.id, Utils.Tuple0);
	});
	localRuntime.addListener([isDown.id], node, 'mousedown', function down() {
		localRuntime.notify(isDown.id, true);
	});
	localRuntime.addListener([isDown.id], node, 'mouseup', function up() {
		localRuntime.notify(isDown.id, false);
	});
	localRuntime.addListener([position.id], node, 'mousemove', function move(e) {
		localRuntime.notify(position.id, Utils.getXY(e));
	});

	return localRuntime.Native.Mouse.values = {
		position: position,
		isDown: isDown,
		clicks: clicks
	};
};

"use strict";var numeric=typeof exports=="undefined"?function(){}:exports;typeof global!="undefined"&&(global.numeric=numeric),numeric.version="1.2.6",numeric.bench=function(t,n){var r,i,s,o;typeof n=="undefined"&&(n=15),s=.5,r=new Date;for(;;){s*=2;for(o=s;o>3;o-=4)t(),t(),t(),t();while(o>0)t(),o--;i=new Date;if(i-r>n)break}for(o=s;o>3;o-=4)t(),t(),t(),t();while(o>0)t(),o--;return i=new Date,1e3*(3*s-1)/(i-r)},numeric._myIndexOf=function(t){var n=this.length,r;for(r=0;r<n;++r)if(this[r]===t)return r;return-1},numeric.myIndexOf=Array.prototype.indexOf?Array.prototype.indexOf:numeric._myIndexOf,numeric.Function=Function,numeric.precision=4,numeric.largeArray=50,numeric.prettyPrint=function(t){function n(e){if(e===0)return"0";if(isNaN(e))return"NaN";if(e<0)return"-"+n(-e);if(isFinite(e)){var t=Math.floor(Math.log(e)/Math.log(10)),r=e/Math.pow(10,t),i=r.toPrecision(numeric.precision);return parseFloat(i)===10&&(t++,r=1,i=r.toPrecision(numeric.precision)),parseFloat(i).toString()+"e"+t.toString()}return"Infinity"}function i(e){var t;if(typeof e=="undefined")return r.push(Array(numeric.precision+8).join(" ")),!1;if(typeof e=="string")return r.push('"'+e+'"'),!1;if(typeof e=="boolean")return r.push(e.toString()),!1;if(typeof e=="number"){var s=n(e),o=e.toPrecision(numeric.precision),u=parseFloat(e.toString()).toString(),a=[s,o,u,parseFloat(o).toString(),parseFloat(u).toString()];for(t=1;t<a.length;t++)a[t].length<s.length&&(s=a[t]);return r.push(Array(numeric.precision+8-s.length).join(" ")+s),!1}if(e===null)return r.push("null"),!1;if(typeof e=="function"){r.push(e.toString());var f=!1;for(t in e)e.hasOwnProperty(t)&&(f?r.push(",\n"):r.push("\n{"),f=!0,r.push(t),r.push(": \n"),i(e[t]));return f&&r.push("}\n"),!0}if(e instanceof Array){if(e.length>numeric.largeArray)return r.push("...Large Array..."),!0;var f=!1;r.push("[");for(t=0;t<e.length;t++)t>0&&(r.push(","),f&&r.push("\n ")),f=i(e[t]);return r.push("]"),!0}r.push("{");var f=!1;for(t in e)e.hasOwnProperty(t)&&(f&&r.push(",\n"),f=!0,r.push(t),r.push(": \n"),i(e[t]));return r.push("}"),!0}var r=[];return i(t),r.join("")},numeric.parseDate=function(t){function n(e){if(typeof e=="string")return Date.parse(e.replace(/-/g,"/"));if(e instanceof Array){var t=[],r;for(r=0;r<e.length;r++)t[r]=n(e[r]);return t}throw new Error("parseDate: parameter must be arrays of strings")}return n(t)},numeric.parseFloat=function(t){function n(e){if(typeof e=="string")return parseFloat(e);if(e instanceof Array){var t=[],r;for(r=0;r<e.length;r++)t[r]=n(e[r]);return t}throw new Error("parseFloat: parameter must be arrays of strings")}return n(t)},numeric.parseCSV=function(t){var n=t.split("\n"),r,i,s=[],o=/(([^'",]*)|('[^']*')|("[^"]*")),/g,u=/^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/,a=function(e){return e.substr(0,e.length-1)},f=0;for(i=0;i<n.length;i++){var l=(n[i]+",").match(o),c;if(l.length>0){s[f]=[];for(r=0;r<l.length;r++)c=a(l[r]),u.test(c)?s[f][r]=parseFloat(c):s[f][r]=c;f++}}return s},numeric.toCSV=function(t){var n=numeric.dim(t),r,i,s,o,u,a;s=n[0],o=n[1],a=[];for(r=0;r<s;r++){u=[];for(i=0;i<s;i++)u[i]=t[r][i].toString();a[r]=u.join(", ")}return a.join("\n")+"\n"},numeric.getURL=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.send(),n},numeric.imageURL=function(t){function n(e){var t=e.length,n,r,i,s,o,u,a,f,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="";for(n=0;n<t;n+=3)r=e[n],i=e[n+1],s=e[n+2],o=r>>2,u=((r&3)<<4)+(i>>4),a=((i&15)<<2)+(s>>6),f=s&63,n+1>=t?a=f=64:n+2>=t&&(f=64),c+=l.charAt(o)+l.charAt(u)+l.charAt(a)+l.charAt(f);return c}function r(e,t,n){typeof t=="undefined"&&(t=0),typeof n=="undefined"&&(n=e.length);var r=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],i=-1,s=0,o=e.length,u;for(u=t;u<n;u++)s=(i^e[u])&255,i=i>>>8^r[s];return i^-1}var i=t[0].length,s=t[0][0].length,o,u,a,f,l,c,h,p,d,v,m,g=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,s>>24&255,s>>16&255,s>>8&255,s&255,i>>24&255,i>>16&255,i>>8&255,i&255,8,2,0,0,0,-1,-2,-3,-4,-5,-6,-7,-8,73,68,65,84,8,29];m=r(g,12,29),g[29]=m>>24&255,g[30]=m>>16&255,g[31]=m>>8&255,g[32]=m&255,o=1,u=0;for(p=0;p<i;p++){p<i-1?g.push(0):g.push(1),c=3*s+1+(p===0)&255,h=3*s+1+(p===0)>>8&255,g.push(c),g.push(h),g.push(~c&255),g.push(~h&255),p===0&&g.push(0);for(d=0;d<s;d++)for(f=0;f<3;f++)c=t[f][p][d],c>255?c=255:c<0?c=0:c=Math.round(c),o=(o+c)%65521,u=(u+o)%65521,g.push(c);g.push(0)}return v=(u<<16)+o,g.push(v>>24&255),g.push(v>>16&255),g.push(v>>8&255),g.push(v&255),l=g.length-41,g[33]=l>>24&255,g[34]=l>>16&255,g[35]=l>>8&255,g[36]=l&255,m=r(g,37),g.push(m>>24&255),g.push(m>>16&255),g.push(m>>8&255),g.push(m&255),g.push(0),g.push(0),g.push(0),g.push(0),g.push(73),g.push(69),g.push(78),g.push(68),g.push(174),g.push(66),g.push(96),g.push(130),"data:image/png;base64,"+n(g)},numeric._dim=function(t){var n=[];while(typeof t=="object")n.push(t.length),t=t[0];return n},numeric.dim=function(t){var n,r;if(typeof t=="object")return n=t[0],typeof n=="object"?(r=n[0],typeof r=="object"?numeric._dim(t):[t.length,n.length]):[t.length];return[]},numeric.mapreduce=function(t,n){return Function("x","accum","_s","_k",'if(typeof accum === "undefined") accum = '+n+";\n"+'if(typeof x === "number") { var xi = x; '+t+"; return accum; }\n"+'if(typeof _s === "undefined") _s = numeric.dim(x);\n'+'if(typeof _k === "undefined") _k = 0;\n'+"var _n = _s[_k];\n"+"var i,xi;\n"+"if(_k < _s.length-1) {\n"+"    for(i=_n-1;i>=0;i--) {\n"+"        accum = arguments.callee(x[i],accum,_s,_k+1);\n"+"    }"+"    return accum;\n"+"}\n"+"for(i=_n-1;i>=1;i-=2) { \n"+"    xi = x[i];\n"+"    "+t+";\n"+"    xi = x[i-1];\n"+"    "+t+";\n"+"}\n"+"if(i === 0) {\n"+"    xi = x[i];\n"+"    "+t+"\n"+"}\n"+"return accum;")},numeric.mapreduce2=function(t,n){return Function("x","var n = x.length;\nvar i,xi;\n"+n+";\n"+"for(i=n-1;i!==-1;--i) { \n"+"    xi = x[i];\n"+"    "+t+";\n"+"}\n"+"return accum;")},numeric.same=function same(e,t){var n,r;if(e instanceof Array&&t instanceof Array){r=e.length;if(r!==t.length)return!1;for(n=0;n<r;n++){if(e[n]===t[n])continue;if(typeof e[n]!="object")return!1;if(!same(e[n],t[n]))return!1}return!0}return!1},numeric.rep=function(t,n,r){typeof r=="undefined"&&(r=0);var i=t[r],s=Array(i),o;if(r===t.length-1){for(o=i-2;o>=0;o-=2)s[o+1]=n,s[o]=n;return o===-1&&(s[0]=n),s}for(o=i-1;o>=0;o--)s[o]=numeric.rep(t,n,r+1);return s},numeric.dotMMsmall=function(t,n){var r,i,s,o,u,a,f,l,c,h,p,d,v,m;o=t.length,u=n.length,a=n[0].length,f=Array(o);for(r=o-1;r>=0;r--){l=Array(a),c=t[r];for(s=a-1;s>=0;s--){h=c[u-1]*n[u-1][s];for(i=u-2;i>=1;i-=2)p=i-1,h+=c[i]*n[i][s]+c[p]*n[p][s];i===0&&(h+=c[0]*n[0][s]),l[s]=h}f[r]=l}return f},numeric._getCol=function(t,n,r){var i=t.length,s;for(s=i-1;s>0;--s)r[s]=t[s][n],--s,r[s]=t[s][n];s===0&&(r[0]=t[0][n])},numeric.dotMMbig=function(t,n){var r=numeric._getCol,i=n.length,s=Array(i),o=t.length,u=n[0].length,a=new Array(o),f,l=numeric.dotVV,c,h,p,d;--i,--o;for(c=o;c!==-1;--c)a[c]=Array(u);--u;for(c=u;c!==-1;--c){r(n,c,s);for(h=o;h!==-1;--h)d=0,f=t[h],a[h][c]=l(f,s)}return a},numeric.dotMV=function(t,n){var r=t.length,i=n.length,s,o=Array(r),u=numeric.dotVV;for(s=r-1;s>=0;s--)o[s]=u(t[s],n);return o},numeric.dotVM=function(t,n){var r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E;o=t.length,u=n[0].length,f=Array(u);for(s=u-1;s>=0;s--){h=t[o-1]*n[o-1][s];for(i=o-2;i>=1;i-=2)p=i-1,h+=t[i]*n[i][s]+t[p]*n[p][s];i===0&&(h+=t[0]*n[0][s]),f[s]=h}return f},numeric.dotVV=function(t,n){var r,i=t.length,s,o=t[i-1]*n[i-1];for(r=i-2;r>=1;r-=2)s=r-1,o+=t[r]*n[r]+t[s]*n[s];return r===0&&(o+=t[0]*n[0]),o},numeric.dot=function(t,n){var r=numeric.dim;switch(r(t).length*1e3+r(n).length){case 2002:return n.length<10?numeric.dotMMsmall(t,n):numeric.dotMMbig(t,n);case 2001:return numeric.dotMV(t,n);case 1002:return numeric.dotVM(t,n);case 1001:return numeric.dotVV(t,n);case 1e3:return numeric.mulVS(t,n);case 1:return numeric.mulSV(t,n);case 0:return t*n;default:throw new Error("numeric.dot only works on vectors and matrices")}},numeric.diag=function(t){var n,r,i,s=t.length,o=Array(s),u;for(n=s-1;n>=0;n--){u=Array(s),r=n+2;for(i=s-1;i>=r;i-=2)u[i]=0,u[i-1]=0;i>n&&(u[i]=0),u[n]=t[n];for(i=n-1;i>=1;i-=2)u[i]=0,u[i-1]=0;i===0&&(u[0]=0),o[n]=u}return o},numeric.getDiag=function(e){var t=Math.min(e.length,e[0].length),n,r=Array(t);for(n=t-1;n>=1;--n)r[n]=e[n][n],--n,r[n]=e[n][n];return n===0&&(r[0]=e[0][0]),r},numeric.identity=function(t){return numeric.diag(numeric.rep([t],1))},numeric.pointwise=function(t,n,r){typeof r=="undefined"&&(r="");var i=[],s,o=/\[i\]$/,u,a="",f=!1;for(s=0;s<t.length;s++)o.test(t[s])?(u=t[s].substring(0,t[s].length-3),a=u):u=t[s],u==="ret"&&(f=!0),i.push(u);return i[t.length]="_s",i[t.length+1]="_k",i[t.length+2]='if(typeof _s === "undefined") _s = numeric.dim('+a+");\n"+'if(typeof _k === "undefined") _k = 0;\n'+"var _n = _s[_k];\n"+"var i"+(f?"":", ret = Array(_n)")+";\n"+"if(_k < _s.length-1) {\n"+"    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee("+t.join(",")+",_s,_k+1);\n"+"    return ret;\n"+"}\n"+r+"\n"+"for(i=_n-1;i!==-1;--i) {\n"+"    "+n+"\n"+"}\n"+"return ret;",Function.apply(null,i)},numeric.pointwise2=function(t,n,r){typeof r=="undefined"&&(r="");var i=[],s,o=/\[i\]$/,u,a="",f=!1;for(s=0;s<t.length;s++)o.test(t[s])?(u=t[s].substring(0,t[s].length-3),a=u):u=t[s],u==="ret"&&(f=!0),i.push(u);return i[t.length]="var _n = "+a+".length;\n"+"var i"+(f?"":", ret = Array(_n)")+";\n"+r+"\n"+"for(i=_n-1;i!==-1;--i) {\n"+n+"\n"+"}\n"+"return ret;",Function.apply(null,i)},numeric._biforeach=function _biforeach(e,t,n,r,i){if(r===n.length-1){i(e,t);return}var s,o=n[r];for(s=o-1;s>=0;s--)_biforeach(typeof e=="object"?e[s]:e,typeof t=="object"?t[s]:t,n,r+1,i)},numeric._biforeach2=function _biforeach2(e,t,n,r,i){if(r===n.length-1)return i(e,t);var s,o=n[r],u=Array(o);for(s=o-1;s>=0;--s)u[s]=_biforeach2(typeof e=="object"?e[s]:e,typeof t=="object"?t[s]:t,n,r+1,i);return u},numeric._foreach=function _foreach(e,t,n,r){if(n===t.length-1){r(e);return}var i,s=t[n];for(i=s-1;i>=0;i--)_foreach(e[i],t,n+1,r)},numeric._foreach2=function _foreach2(e,t,n,r){if(n===t.length-1)return r(e);var i,s=t[n],o=Array(s);for(i=s-1;i>=0;i--)o[i]=_foreach2(e[i],t,n+1,r);return o},numeric.ops2={add:"+",sub:"-",mul:"*",div:"/",mod:"%",and:"&&",or:"||",eq:"===",neq:"!==",lt:"<",gt:">",leq:"<=",geq:">=",band:"&",bor:"|",bxor:"^",lshift:"<<",rshift:">>",rrshift:">>>"},numeric.opseq={addeq:"+=",subeq:"-=",muleq:"*=",diveq:"/=",modeq:"%=",lshifteq:"<<=",rshifteq:">>=",rrshifteq:">>>=",bandeq:"&=",boreq:"|=",bxoreq:"^="},numeric.mathfuns=["abs","acos","asin","atan","ceil","cos","exp","floor","log","round","sin","sqrt","tan","isNaN","isFinite"],numeric.mathfuns2=["atan2","pow","max","min"],numeric.ops1={neg:"-",not:"!",bnot:"~",clone:""},numeric.mapreducers={any:["if(xi) return true;","var accum = false;"],all:["if(!xi) return false;","var accum = true;"],sum:["accum += xi;","var accum = 0;"],prod:["accum *= xi;","var accum = 1;"],norm2Squared:["accum += xi*xi;","var accum = 0;"],norminf:["accum = max(accum,abs(xi));","var accum = 0, max = Math.max, abs = Math.abs;"],norm1:["accum += abs(xi)","var accum = 0, abs = Math.abs;"],sup:["accum = max(accum,xi);","var accum = -Infinity, max = Math.max;"],inf:["accum = min(accum,xi);","var accum = Infinity, min = Math.min;"]},function(){var e,t;for(e=0;e<numeric.mathfuns2.length;++e)t=numeric.mathfuns2[e],numeric.ops2[t]=t;for(e in numeric.ops2)if(numeric.ops2.hasOwnProperty(e)){t=numeric.ops2[e];var n,r,i="";numeric.myIndexOf.call(numeric.mathfuns2,e)!==-1?(i="var "+t+" = Math."+t+";\n",n=function(e,n,r){return e+" = "+t+"("+n+","+r+")"},r=function(e,n){return e+" = "+t+"("+e+","+n+")"}):(n=function(e,n,r){return e+" = "+n+" "+t+" "+r},numeric.opseq.hasOwnProperty(e+"eq")?r=function(e,n){return e+" "+t+"= "+n}:r=function(e,n){return e+" = "+e+" "+t+" "+n}),numeric[e+"VV"]=numeric.pointwise2(["x[i]","y[i]"],n("ret[i]","x[i]","y[i]"),i),numeric[e+"SV"]=numeric.pointwise2(["x","y[i]"],n("ret[i]","x","y[i]"),i),numeric[e+"VS"]=numeric.pointwise2(["x[i]","y"],n("ret[i]","x[i]","y"),i),numeric[e]=Function("var n = arguments.length, i, x = arguments[0], y;\nvar VV = numeric."+e+"VV, VS = numeric."+e+"VS, SV = numeric."+e+"SV;\n"+"var dim = numeric.dim;\n"+"for(i=1;i!==n;++i) { \n"+"  y = arguments[i];\n"+'  if(typeof x === "object") {\n'+'      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n'+"      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n"+'  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n'+"  else "+r("x","y")+"\n"+"}\nreturn x;\n"),numeric[t]=numeric[e],numeric[e+"eqV"]=numeric.pointwise2(["ret[i]","x[i]"],r("ret[i]","x[i]"),i),numeric[e+"eqS"]=numeric.pointwise2(["ret[i]","x"],r("ret[i]","x"),i),numeric[e+"eq"]=Function("var n = arguments.length, i, x = arguments[0], y;\nvar V = numeric."+e+"eqV, S = numeric."+e+"eqS\n"+"var s = numeric.dim(x);\n"+"for(i=1;i!==n;++i) { \n"+"  y = arguments[i];\n"+'  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n'+"  else numeric._biforeach(x,y,s,0,S);\n"+"}\nreturn x;\n")}for(e=0;e<numeric.mathfuns2.length;++e)t=numeric.mathfuns2[e],delete numeric.ops2[t];for(e=0;e<numeric.mathfuns.length;++e)t=numeric.mathfuns[e],numeric.ops1[t]=t;for(e in numeric.ops1)numeric.ops1.hasOwnProperty(e)&&(i="",t=numeric.ops1[e],numeric.myIndexOf.call(numeric.mathfuns,e)!==-1&&Math.hasOwnProperty(t)&&(i="var "+t+" = Math."+t+";\n"),numeric[e+"eqV"]=numeric.pointwise2(["ret[i]"],"ret[i] = "+t+"(ret[i]);",i),numeric[e+"eq"]=Function("x",'if(typeof x !== "object") return '+t+"x\n"+"var i;\n"+"var V = numeric."+e+"eqV;\n"+"var s = numeric.dim(x);\n"+"numeric._foreach(x,s,0,V);\n"+"return x;\n"),numeric[e+"V"]=numeric.pointwise2(["x[i]"],"ret[i] = "+t+"(x[i]);",i),numeric[e]=Function("x",'if(typeof x !== "object") return '+t+"(x)\n"+"var i;\n"+"var V = numeric."+e+"V;\n"+"var s = numeric.dim(x);\n"+"return numeric._foreach2(x,s,0,V);\n"));for(e=0;e<numeric.mathfuns.length;++e)t=numeric.mathfuns[e],delete numeric.ops1[t];for(e in numeric.mapreducers)numeric.mapreducers.hasOwnProperty(e)&&(t=numeric.mapreducers[e],numeric[e+"V"]=numeric.mapreduce2(t[0],t[1]),numeric[e]=Function("x","s","k",t[1]+'if(typeof x !== "object") {'+"    xi = x;\n"+t[0]+";\n"+"    return accum;\n"+"}"+'if(typeof s === "undefined") s = numeric.dim(x);\n'+'if(typeof k === "undefined") k = 0;\n'+"if(k === s.length-1) return numeric."+e+"V(x);\n"+"var xi;\n"+"var n = x.length, i;\n"+"for(i=n-1;i!==-1;--i) {\n"+"   xi = arguments.callee(x[i]);\n"+t[0]+";\n"+"}\n"+"return accum;\n"))}(),numeric.truncVV=numeric.pointwise(["x[i]","y[i]"],"ret[i] = round(x[i]/y[i])*y[i];","var round = Math.round;"),numeric.truncVS=numeric.pointwise(["x[i]","y"],"ret[i] = round(x[i]/y)*y;","var round = Math.round;"),numeric.truncSV=numeric.pointwise(["x","y[i]"],"ret[i] = round(x/y[i])*y[i];","var round = Math.round;"),numeric.trunc=function(t,n){return typeof t=="object"?typeof n=="object"?numeric.truncVV(t,n):numeric.truncVS(t,n):typeof n=="object"?numeric.truncSV(t,n):Math.round(t/n)*n},numeric.inv=function(t){var n=numeric.dim(t),r=Math.abs,i=n[0],s=n[1],o=numeric.clone(t),u,a,f=numeric.identity(i),l,c,h,p,d,t;for(p=0;p<s;++p){var v=-1,m=-1;for(h=p;h!==i;++h)d=r(o[h][p]),d>m&&(v=h,m=d);a=o[v],o[v]=o[p],o[p]=a,c=f[v],f[v]=f[p],f[p]=c,t=a[p];for(d=p;d!==s;++d)a[d]/=t;for(d=s-1;d!==-1;--d)c[d]/=t;for(h=i-1;h!==-1;--h)if(h!==p){u=o[h],l=f[h],t=u[p];for(d=p+1;d!==s;++d)u[d]-=a[d]*t;for(d=s-1;d>0;--d)l[d]-=c[d]*t,--d,l[d]-=c[d]*t;d===0&&(l[0]-=c[0]*t)}}return f},numeric.det=function(t){var n=numeric.dim(t);if(n.length!==2||n[0]!==n[1])throw new Error("numeric: det() only works on square matrices");var r=n[0],i=1,s,o,u,a=numeric.clone(t),f,l,c,h,p,d,v;for(o=0;o<r-1;o++){u=o;for(s=o+1;s<r;s++)Math.abs(a[s][o])>Math.abs(a[u][o])&&(u=s);u!==o&&(h=a[u],a[u]=a[o],a[o]=h,i*=-1),f=a[o];for(s=o+1;s<r;s++){l=a[s],c=l[o]/f[o];for(u=o+1;u<r-1;u+=2)p=u+1,l[u]-=f[u]*c,l[p]-=f[p]*c;u!==r&&(l[u]-=f[u]*c)}if(f[o]===0)return 0;i*=f[o]}return i*a[o][o]},numeric.transpose=function(t){var n,r,i=t.length,s=t[0].length,o=Array(s),u,a,f;for(r=0;r<s;r++)o[r]=Array(i);for(n=i-1;n>=1;n-=2){a=t[n],u=t[n-1];for(r=s-1;r>=1;--r)f=o[r],f[n]=a[r],f[n-1]=u[r],--r,f=o[r],f[n]=a[r],f[n-1]=u[r];r===0&&(f=o[0],f[n]=a[0],f[n-1]=u[0])}if(n===0){u=t[0];for(r=s-1;r>=1;--r)o[r][0]=u[r],--r,o[r][0]=u[r];r===0&&(o[0][0]=u[0])}return o},numeric.negtranspose=function(t){var n,r,i=t.length,s=t[0].length,o=Array(s),u,a,f;for(r=0;r<s;r++)o[r]=Array(i);for(n=i-1;n>=1;n-=2){a=t[n],u=t[n-1];for(r=s-1;r>=1;--r)f=o[r],f[n]=-a[r],f[n-1]=-u[r],--r,f=o[r],f[n]=-a[r],f[n-1]=-u[r];r===0&&(f=o[0],f[n]=-a[0],f[n-1]=-u[0])}if(n===0){u=t[0];for(r=s-1;r>=1;--r)o[r][0]=-u[r],--r,o[r][0]=-u[r];r===0&&(o[0][0]=-u[0])}return o},numeric._random=function _random(e,t){var n,r=e[t],i=Array(r),s;if(t===e.length-1){s=Math.random;for(n=r-1;n>=1;n-=2)i[n]=s(),i[n-1]=s();return n===0&&(i[0]=s()),i}for(n=r-1;n>=0;n--)i[n]=_random(e,t+1);return i},numeric.random=function(t){return numeric._random(t,0)},numeric.norm2=function(t){return Math.sqrt(numeric.norm2Squared(t))},numeric.linspace=function(t,n,r){typeof r=="undefined"&&(r=Math.max(Math.round(n-t)+1,1));if(r<2)return r===1?[t]:[];var i,s=Array(r);r--;for(i=r;i>=0;i--)s[i]=(i*n+(r-i)*t)/r;return s},numeric.getBlock=function(t,n,r){function s(e,t){var o,u=n[t],a=r[t]-u,f=Array(a);if(t===i.length-1){for(o=a;o>=0;o--)f[o]=e[o+u];return f}for(o=a;o>=0;o--)f[o]=s(e[o+u],t+1);return f}var i=numeric.dim(t);return s(t,0)},numeric.setBlock=function(t,n,r,i){function o(e,t,i){var u,a=n[i],f=r[i]-a;if(i===s.length-1)for(u=f;u>=0;u--)e[u+a]=t[u];for(u=f;u>=0;u--)o(e[u+a],t[u],i+1)}var s=numeric.dim(t);return o(t,i,0),t},numeric.getRange=function(t,n,r){var i=n.length,s=r.length,o,u,a=Array(i),f,l;for(o=i-1;o!==-1;--o){a[o]=Array(s),f=a[o],l=t[n[o]];for(u=s-1;u!==-1;--u)f[u]=l[r[u]]}return a},numeric.blockMatrix=function(t){var n=numeric.dim(t);if(n.length<4)return numeric.blockMatrix([t]);var r=n[0],i=n[1],s,o,u,a,f;s=0,o=0;for(u=0;u<r;++u)s+=t[u][0].length;for(a=0;a<i;++a)o+=t[0][a][0].length;var l=Array(s);for(u=0;u<s;++u)l[u]=Array(o);var c=0,h,p,d,v,m;for(u=0;u<r;++u){h=o;for(a=i-1;a!==-1;--a){f=t[u][a],h-=f[0].length;for(d=f.length-1;d!==-1;--d){m=f[d],p=l[c+d];for(v=m.length-1;v!==-1;--v)p[h+v]=m[v]}}c+=t[u][0].length}return l},numeric.tensor=function(t,n){if(typeof t=="number"||typeof n=="number")return numeric.mul(t,n);var r=numeric.dim(t),i=numeric.dim(n);if(r.length!==1||i.length!==1)throw new Error("numeric: tensor product is only defined for vectors");var s=r[0],o=i[0],u=Array(s),a,f,l,c;for(f=s-1;f>=0;f--){a=Array(o),c=t[f];for(l=o-1;l>=3;--l)a[l]=c*n[l],--l,a[l]=c*n[l],--l,a[l]=c*n[l],--l,a[l]=c*n[l];while(l>=0)a[l]=c*n[l],--l;u[f]=a}return u},numeric.T=function(t,n){this.x=t,this.y=n},numeric.t=function(t,n){return new numeric.T(t,n)},numeric.Tbinop=function(t,n,r,i,s){var o=numeric.indexOf;if(typeof s!="string"){var u;s="";for(u in numeric)numeric.hasOwnProperty(u)&&(t.indexOf(u)>=0||n.indexOf(u)>=0||r.indexOf(u)>=0||i.indexOf(u)>=0)&&u.length>1&&(s+="var "+u+" = numeric."+u+";\n")}return Function(["y"],"var x = this;\nif(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n"+s+"\n"+"if(x.y) {"+"  if(y.y) {"+"    return new numeric.T("+i+");\n"+"  }\n"+"  return new numeric.T("+r+");\n"+"}\n"+"if(y.y) {\n"+"  return new numeric.T("+n+");\n"+"}\n"+"return new numeric.T("+t+");\n")},numeric.T.prototype.add=numeric.Tbinop("add(x.x,y.x)","add(x.x,y.x),y.y","add(x.x,y.x),x.y","add(x.x,y.x),add(x.y,y.y)"),numeric.T.prototype.sub=numeric.Tbinop("sub(x.x,y.x)","sub(x.x,y.x),neg(y.y)","sub(x.x,y.x),x.y","sub(x.x,y.x),sub(x.y,y.y)"),numeric.T.prototype.mul=numeric.Tbinop("mul(x.x,y.x)","mul(x.x,y.x),mul(x.x,y.y)","mul(x.x,y.x),mul(x.y,y.x)","sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))"),numeric.T.prototype.reciprocal=function(){var t=numeric.mul,n=numeric.div;if(this.y){var r=numeric.add(t(this.x,this.x),t(this.y,this.y));return new numeric.T(n(this.x,r),n(numeric.neg(this.y),r))}return new T(n(1,this.x))},numeric.T.prototype.div=function div(e){e instanceof numeric.T||(e=new numeric.T(e));if(e.y)return this.mul(e.reciprocal());var div=numeric.div;return this.y?new numeric.T(div(this.x,e.x),div(this.y,e.x)):new numeric.T(div(this.x,e.x))},numeric.T.prototype.dot=numeric.Tbinop("dot(x.x,y.x)","dot(x.x,y.x),dot(x.x,y.y)","dot(x.x,y.x),dot(x.y,y.x)","sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))"),numeric.T.prototype.transpose=function(){var t=numeric.transpose,n=this.x,r=this.y;return r?new numeric.T(t(n),t(r)):new numeric.T(t(n))},numeric.T.prototype.transjugate=function(){var t=numeric.transpose,n=this.x,r=this.y;return r?new numeric.T(t(n),numeric.negtranspose(r)):new numeric.T(t(n))},numeric.Tunop=function(t,n,r){return typeof r!="string"&&(r=""),Function("var x = this;\n"+r+"\n"+"if(x.y) {"+"  "+n+";\n"+"}\n"+t+";\n")},numeric.T.prototype.exp=numeric.Tunop("return new numeric.T(ex)","return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))","var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;"),numeric.T.prototype.conj=numeric.Tunop("return new numeric.T(x.x);","return new numeric.T(x.x,numeric.neg(x.y));"),numeric.T.prototype.neg=numeric.Tunop("return new numeric.T(neg(x.x));","return new numeric.T(neg(x.x),neg(x.y));","var neg = numeric.neg;"),numeric.T.prototype.sin=numeric.Tunop("return new numeric.T(numeric.sin(x.x))","return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));"),numeric.T.prototype.cos=numeric.Tunop("return new numeric.T(numeric.cos(x.x))","return x.exp().add(x.neg().exp()).div(2);"),numeric.T.prototype.abs=numeric.Tunop("return new numeric.T(numeric.abs(x.x));","return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));","var mul = numeric.mul;"),numeric.T.prototype.log=numeric.Tunop("return new numeric.T(numeric.log(x.x));","var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\nreturn new numeric.T(numeric.log(r.x),theta.x);"),numeric.T.prototype.norm2=numeric.Tunop("return numeric.norm2(x.x);","var f = numeric.norm2Squared;\nreturn Math.sqrt(f(x.x)+f(x.y));"),numeric.T.prototype.inv=function(){var t=this;if(typeof t.y=="undefined")return new numeric.T(numeric.inv(t.x));var n=t.x.length,r,i,s,o=numeric.identity(n),u=numeric.rep([n,n],0),a=numeric.clone(t.x),f=numeric.clone(t.y),l,c,h,p,d,v,m,g,r,i,s,y,b,w,E,S,x,T;for(r=0;r<n;r++){w=a[r][r],E=f[r][r],y=w*w+E*E,s=r;for(i=r+1;i<n;i++)w=a[i][r],E=f[i][r],b=w*w+E*E,b>y&&(s=i,y=b);s!==r&&(T=a[r],a[r]=a[s],a[s]=T,T=f[r],f[r]=f[s],f[s]=T,T=o[r],o[r]=o[s],o[s]=T,T=u[r],u[r]=u[s],u[s]=T),l=a[r],c=f[r],d=o[r],v=u[r],w=l[r],E=c[r];for(i=r+1;i<n;i++)S=l[i],x=c[i],l[i]=(S*w+x*E)/y,c[i]=(x*w-S*E)/y;for(i=0;i<n;i++)S=d[i],x=v[i],d[i]=(S*w+x*E)/y,v[i]=(x*w-S*E)/y;for(i=r+1;i<n;i++){h=a[i],p=f[i],m=o[i],g=u[i],w=h[r],E=p[r];for(s=r+1;s<n;s++)S=l[s],x=c[s],h[s]-=S*w-x*E,p[s]-=x*w+S*E;for(s=0;s<n;s++)S=d[s],x=v[s],m[s]-=S*w-x*E,g[s]-=x*w+S*E}}for(r=n-1;r>0;r--){d=o[r],v=u[r];for(i=r-1;i>=0;i--){m=o[i],g=u[i],w=a[i][r],E=f[i][r];for(s=n-1;s>=0;s--)S=d[s],x=v[s],m[s]-=w*S-E*x,g[s]-=w*x+E*S}}return new numeric.T(o,u)},numeric.T.prototype.get=function(t){var n=this.x,r=this.y,i=0,s,o=t.length;if(r){while(i<o)s=t[i],n=n[s],r=r[s],i++;return new numeric.T(n,r)}while(i<o)s=t[i],n=n[s],i++;return new numeric.T(n)},numeric.T.prototype.set=function(t,n){var r=this.x,i=this.y,s=0,o,u=t.length,a=n.x,f=n.y;if(u===0)return f?this.y=f:i&&(this.y=undefined),this.x=r,this;if(f){i||(i=numeric.rep(numeric.dim(r),0),this.y=i);while(s<u-1)o=t[s],r=r[o],i=i[o],s++;return o=t[s],r[o]=a,i[o]=f,this}if(i){while(s<u-1)o=t[s],r=r[o],i=i[o],s++;return o=t[s],r[o]=a,a instanceof Array?i[o]=numeric.rep(numeric.dim(a),0):i[o]=0,this}while(s<u-1)o=t[s],r=r[o],s++;return o=t[s],r[o]=a,this},numeric.T.prototype.getRows=function(t,n){var r=n-t+1,i,s=Array(r),o,u=this.x,a=this.y;for(i=t;i<=n;i++)s[i-t]=u[i];if(a){o=Array(r);for(i=t;i<=n;i++)o[i-t]=a[i];return new numeric.T(s,o)}return new numeric.T(s)},numeric.T.prototype.setRows=function(t,n,r){var i,s=this.x,o=this.y,u=r.x,a=r.y;for(i=t;i<=n;i++)s[i]=u[i-t];if(a){o||(o=numeric.rep(numeric.dim(s),0),this.y=o);for(i=t;i<=n;i++)o[i]=a[i-t]}else if(o)for(i=t;i<=n;i++)o[i]=numeric.rep([u[i-t].length],0);return this},numeric.T.prototype.getRow=function(t){var n=this.x,r=this.y;return r?new numeric.T(n[t],r[t]):new numeric.T(n[t])},numeric.T.prototype.setRow=function(t,n){var r=this.x,i=this.y,s=n.x,o=n.y;return r[t]=s,o?(i||(i=numeric.rep(numeric.dim(r),0),this.y=i),i[t]=o):i&&(i=numeric.rep([s.length],0)),this},numeric.T.prototype.getBlock=function(t,n){var r=this.x,i=this.y,s=numeric.getBlock;return i?new numeric.T(s(r,t,n),s(i,t,n)):new numeric.T(s(r,t,n))},numeric.T.prototype.setBlock=function(t,n,r){r instanceof numeric.T||(r=new numeric.T(r));var i=this.x,s=this.y,o=numeric.setBlock,u=r.x,a=r.y;if(a)return s||(this.y=numeric.rep(numeric.dim(this),0),s=this.y),o(i,t,n,u),o(s,t,n,a),this;o(i,t,n,u),s&&o(s,t,n,numeric.rep(numeric.dim(u),0))},numeric.T.rep=function(t,n){var r=numeric.T;n instanceof r||(n=new r(n));var i=n.x,s=n.y,o=numeric.rep;return s?new r(o(t,i),o(t,s)):new r(o(t,i))},numeric.T.diag=function diag(e){e instanceof numeric.T||(e=new numeric.T(e));var t=e.x,n=e.y,diag=numeric.diag;return n?new numeric.T(diag(t),diag(n)):new numeric.T(diag(t))},numeric.T.eig=function(){if(this.y)throw new Error("eig: not implemented for complex matrices.");return numeric.eig(this.x)},numeric.T.identity=function(t){return new numeric.T(numeric.identity(t))},numeric.T.prototype.getDiag=function(){var t=numeric,n=this.x,r=this.y;return r?new t.T(t.getDiag(n),t.getDiag(r)):new t.T(t.getDiag(n))},numeric.house=function(t){var n=numeric.clone(t),r=t[0]>=0?1:-1,i=r*numeric.norm2(t);n[0]+=i;var s=numeric.norm2(n);if(s===0)throw new Error("eig: internal error");return numeric.div(n,s)},numeric.toUpperHessenberg=function(t){var n=numeric.dim(t);if(n.length!==2||n[0]!==n[1])throw new Error("numeric: toUpperHessenberg() only works on square matrices");var r=n[0],i,s,o,u,a,f=numeric.clone(t),l,c,h,p,d=numeric.identity(r),v;for(s=0;s<r-2;s++){u=Array(r-s-1);for(i=s+1;i<r;i++)u[i-s-1]=f[i][s];if(numeric.norm2(u)>0){a=numeric.house(u),l=numeric.getBlock(f,[s+1,s],[r-1,r-1]),c=numeric.tensor(a,numeric.dot(a,l));for(i=s+1;i<r;i++){h=f[i],p=c[i-s-1];for(o=s;o<r;o++)h[o]-=2*p[o-s]}l=numeric.getBlock(f,[0,s+1],[r-1,r-1]),c=numeric.tensor(numeric.dot(l,a),a);for(i=0;i<r;i++){h=f[i],p=c[i];for(o=s+1;o<r;o++)h[o]-=2*p[o-s-1]}l=Array(r-s-1);for(i=s+1;i<r;i++)l[i-s-1]=d[i];c=numeric.tensor(a,numeric.dot(a,l));for(i=s+1;i<r;i++){v=d[i],p=c[i-s-1];for(o=0;o<r;o++)v[o]-=2*p[o]}}}return{H:f,Q:d}},numeric.epsilon=2.220446049250313e-16,numeric.QRFrancis=function(e,t){typeof t=="undefined"&&(t=1e4),e=numeric.clone(e);var n=numeric.clone(e),r=numeric.dim(e),i=r[0],s,o,u,a,f,l,c,h,p,d=numeric.identity(i),v,m,g,y,b,w,E,S,x;if(i<3)return{Q:d,B:[[0,i-1]]};var T=numeric.epsilon;for(x=0;x<t;x++){for(E=0;E<i-1;E++)if(Math.abs(e[E+1][E])<T*(Math.abs(e[E][E])+Math.abs(e[E+1][E+1]))){var N=numeric.QRFrancis(numeric.getBlock(e,[0,0],[E,E]),t),C=numeric.QRFrancis(numeric.getBlock(e,[E+1,E+1],[i-1,i-1]),t);g=Array(E+1);for(w=0;w<=E;w++)g[w]=d[w];y=numeric.dot(N.Q,g);for(w=0;w<=E;w++)d[w]=y[w];g=Array(i-E-1);for(w=E+1;w<i;w++)g[w-E-1]=d[w];y=numeric.dot(C.Q,g);for(w=E+1;w<i;w++)d[w]=y[w-E-1];return{Q:d,B:N.B.concat(numeric.add(C.B,E+1))}}u=e[i-2][i-2],a=e[i-2][i-1],f=e[i-1][i-2],l=e[i-1][i-1],h=u+l,c=u*l-a*f,p=numeric.getBlock(e,[0,0],[2,2]);if(h*h>=4*c){var k,L;k=.5*(h+Math.sqrt(h*h-4*c)),L=.5*(h-Math.sqrt(h*h-4*c)),p=numeric.add(numeric.sub(numeric.dot(p,p),numeric.mul(p,k+L)),numeric.diag(numeric.rep([3],k*L)))}else p=numeric.add(numeric.sub(numeric.dot(p,p),numeric.mul(p,h)),numeric.diag(numeric.rep([3],c)));s=[p[0][0],p[1][0],p[2][0]],o=numeric.house(s),g=[e[0],e[1],e[2]],y=numeric.tensor(o,numeric.dot(o,g));for(w=0;w<3;w++){m=e[w],b=y[w];for(S=0;S<i;S++)m[S]-=2*b[S]}g=numeric.getBlock(e,[0,0],[i-1,2]),y=numeric.tensor(numeric.dot(g,o),o);for(w=0;w<i;w++){m=e[w],b=y[w];for(S=0;S<3;S++)m[S]-=2*b[S]}g=[d[0],d[1],d[2]],y=numeric.tensor(o,numeric.dot(o,g));for(w=0;w<3;w++){v=d[w],b=y[w];for(S=0;S<i;S++)v[S]-=2*b[S]}var A;for(E=0;E<i-2;E++){for(S=E;S<=E+1;S++)if(Math.abs(e[S+1][S])<T*(Math.abs(e[S][S])+Math.abs(e[S+1][S+1]))){var N=numeric.QRFrancis(numeric.getBlock(e,[0,0],[S,S]),t),C=numeric.QRFrancis(numeric.getBlock(e,[S+1,S+1],[i-1,i-1]),t);g=Array(S+1);for(w=0;w<=S;w++)g[w]=d[w];y=numeric.dot(N.Q,g);for(w=0;w<=S;w++)d[w]=y[w];g=Array(i-S-1);for(w=S+1;w<i;w++)g[w-S-1]=d[w];y=numeric.dot(C.Q,g);for(w=S+1;w<i;w++)d[w]=y[w-S-1];return{Q:d,B:N.B.concat(numeric.add(C.B,S+1))}}A=Math.min(i-1,E+3),s=Array(A-E);for(w=E+1;w<=A;w++)s[w-E-1]=e[w][E];o=numeric.house(s),g=numeric.getBlock(e,[E+1,E],[A,i-1]),y=numeric.tensor(o,numeric.dot(o,g));for(w=E+1;w<=A;w++){m=e[w],b=y[w-E-1];for(S=E;S<i;S++)m[S]-=2*b[S-E]}g=numeric.getBlock(e,[0,E+1],[i-1,A]),y=numeric.tensor(numeric.dot(g,o),o);for(w=0;w<i;w++){m=e[w],b=y[w];for(S=E+1;S<=A;S++)m[S]-=2*b[S-E-1]}g=Array(A-E);for(w=E+1;w<=A;w++)g[w-E-1]=d[w];y=numeric.tensor(o,numeric.dot(o,g));for(w=E+1;w<=A;w++){v=d[w],b=y[w-E-1];for(S=0;S<i;S++)v[S]-=2*b[S]}}}throw new Error("numeric: eigenvalue iteration does not converge -- increase maxiter?")},numeric.eig=function(t,n){var r=numeric.toUpperHessenberg(t),i=numeric.QRFrancis(r.H,n),s=numeric.T,o=t.length,u,a,f=!1,l=i.B,c=numeric.dot(i.Q,numeric.dot(r.H,numeric.transpose(i.Q))),h=new s(numeric.dot(i.Q,r.Q)),p,d=l.length,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A=Math.sqrt;for(a=0;a<d;a++){u=l[a][0];if(u!==l[a][1]){v=u+1,m=c[u][u],g=c[u][v],y=c[v][u],b=c[v][v];if(g===0&&y===0)continue;w=-m-b,E=m*b-g*y,S=w*w-4*E,S>=0?(w<0?x=-0.5*(w-A(S)):x=-0.5*(w+A(S)),k=(m-x)*(m-x)+g*g,L=y*y+(b-x)*(b-x),k>L?(k=A(k),N=(m-x)/k,C=g/k):(L=A(L),N=y/L,C=(b-x)/L),p=new s([[C,-N],[N,C]]),h.setRows(u,v,p.dot(h.getRows(u,v)))):(x=-0.5*w,T=.5*A(-S),k=(m-x)*(m-x)+g*g,L=y*y+(b-x)*(b-x),k>L?(k=A(k+T*T),N=(m-x)/k,C=g/k,x=0,T/=k):(L=A(L+T*T),N=y/L,C=(b-x)/L,x=T/L,T=0),p=new s([[C,-N],[N,C]],[[x,
T],[T,-x]]),h.setRows(u,v,p.dot(h.getRows(u,v))))}}var O=h.dot(t).dot(h.transjugate()),o=t.length,M=numeric.T.identity(o);for(v=0;v<o;v++)if(v>0)for(a=v-1;a>=0;a--){var _=O.get([a,a]),D=O.get([v,v]);if(!numeric.neq(_.x,D.x)&&!numeric.neq(_.y,D.y)){M.setRow(v,M.getRow(a));continue}x=O.getRow(a).getBlock([a],[v-1]),T=M.getRow(v).getBlock([a],[v-1]),M.set([v,a],O.get([a,v]).neg().sub(x.dot(T)).div(_.sub(D)))}for(v=0;v<o;v++)x=M.getRow(v),M.setRow(v,x.div(x.norm2()));return M=M.transpose(),M=h.transjugate().dot(M),{lambda:O.getDiag(),E:M}},numeric.ccsSparse=function(t){var n=t.length,r,i,s,o,u=[];for(s=n-1;s!==-1;--s){i=t[s];for(o in i){o=parseInt(o);while(o>=u.length)u[u.length]=0;i[o]!==0&&u[o]++}}var r=u.length,a=Array(r+1);a[0]=0;for(s=0;s<r;++s)a[s+1]=a[s]+u[s];var f=Array(a[r]),l=Array(a[r]);for(s=n-1;s!==-1;--s){i=t[s];for(o in i)i[o]!==0&&(u[o]--,f[a[o]+u[o]]=s,l[a[o]+u[o]]=i[o])}return[a,f,l]},numeric.ccsFull=function(t){var n=t[0],r=t[1],i=t[2],s=numeric.ccsDim(t),o=s[0],u=s[1],a,f,l,c,h,p=numeric.rep([o,u],0);for(a=0;a<u;a++){l=n[a],c=n[a+1];for(f=l;f<c;++f)p[r[f]][a]=i[f]}return p},numeric.ccsTSolve=function(t,n,r,i,s){function h(e){var t;if(r[e]!==0)return;r[e]=1;for(t=o[e];t<o[e+1];++t)h(u[t]);s[c]=e,++c}var o=t[0],u=t[1],a=t[2],f=o.length-1,l=Math.max,c=0;typeof i=="undefined"&&(r=numeric.rep([f],0)),typeof i=="undefined"&&(i=numeric.linspace(0,r.length-1)),typeof s=="undefined"&&(s=[]);var p,d,v,m,g,y,b,w,E;for(p=i.length-1;p!==-1;--p)h(i[p]);s.length=c;for(p=s.length-1;p!==-1;--p)r[s[p]]=0;for(p=i.length-1;p!==-1;--p)d=i[p],r[d]=n[d];for(p=s.length-1;p!==-1;--p){d=s[p],v=o[d],m=l(o[d+1],v);for(g=v;g!==m;++g)if(u[g]===d){r[d]/=a[g];break}E=r[d];for(g=v;g!==m;++g)y=u[g],y!==d&&(r[y]-=E*a[g])}return r},numeric.ccsDFS=function(t){this.k=Array(t),this.k1=Array(t),this.j=Array(t)},numeric.ccsDFS.prototype.dfs=function(t,n,r,i,s,o){var u=0,a,f=s.length,l=this.k,c=this.k1,h=this.j,p,d;if(i[t]!==0)return;i[t]=1,h[0]=t,l[0]=p=n[t],c[0]=d=n[t+1];for(;;)if(p>=d){s[f]=h[u];if(u===0)return;++f,--u,p=l[u],d=c[u]}else a=o[r[p]],i[a]===0?(i[a]=1,l[u]=p,++u,h[u]=a,p=n[a],c[u]=d=n[a+1]):++p},numeric.ccsLPSolve=function(t,n,r,i,s,o,u){var a=t[0],f=t[1],l=t[2],c=a.length-1,h=0,p=n[0],d=n[1],v=n[2],m,g,y,b,w,E,S,x,T,N,C,k;g=p[s],y=p[s+1],i.length=0;for(m=g;m<y;++m)u.dfs(o[d[m]],a,f,r,i,o);for(m=i.length-1;m!==-1;--m)r[i[m]]=0;for(m=g;m!==y;++m)b=o[d[m]],r[b]=v[m];for(m=i.length-1;m!==-1;--m){b=i[m],E=a[b],S=a[b+1];for(x=E;x<S;++x)if(o[f[x]]===b){r[b]/=l[x];break}k=r[b];for(x=E;x<S;++x)T=o[f[x]],T!==b&&(r[T]-=k*l[x])}return r},numeric.ccsLUP1=function(t,n){var r=t[0].length-1,i=[numeric.rep([r+1],0),[],[]],s=[numeric.rep([r+1],0),[],[]],o=i[0],u=i[1],a=i[2],f=s[0],l=s[1],c=s[2],h=numeric.rep([r],0),p=numeric.rep([r],0),d,v,m,g,y,b,w,E,S,x,T=numeric.ccsLPSolve,N=Math.max,C=Math.abs,k=numeric.linspace(0,r-1),L=numeric.linspace(0,r-1),A=new numeric.ccsDFS(r);typeof n=="undefined"&&(n=1);for(d=0;d<r;++d){T(i,t,h,p,d,L,A),b=-1,w=-1;for(v=p.length-1;v!==-1;--v){m=p[v];if(m<=d)continue;E=C(h[m]),E>b&&(w=m,b=E)}C(h[d])<n*b&&(v=k[d],b=k[w],k[d]=b,L[b]=d,k[w]=v,L[v]=w,b=h[d],h[d]=h[w],h[w]=b),b=o[d],w=f[d],S=h[d],u[b]=k[d],a[b]=1,++b;for(v=p.length-1;v!==-1;--v)m=p[v],E=h[m],p[v]=0,h[m]=0,m<=d?(l[w]=m,c[w]=E,++w):(u[b]=k[m],a[b]=E/S,++b);o[d+1]=b,f[d+1]=w}for(v=u.length-1;v!==-1;--v)u[v]=L[u[v]];return{L:i,U:s,P:k,Pinv:L}},numeric.ccsDFS0=function(t){this.k=Array(t),this.k1=Array(t),this.j=Array(t)},numeric.ccsDFS0.prototype.dfs=function(t,n,r,i,s,o,u){var a=0,f,l=s.length,c=this.k,h=this.k1,p=this.j,d,v;if(i[t]!==0)return;i[t]=1,p[0]=t,c[0]=d=n[o[t]],h[0]=v=n[o[t]+1];for(;;){if(isNaN(d))throw new Error("Ow!");if(d>=v){s[l]=o[p[a]];if(a===0)return;++l,--a,d=c[a],v=h[a]}else f=r[d],i[f]===0?(i[f]=1,c[a]=d,++a,p[a]=f,f=o[f],d=n[f],h[a]=v=n[f+1]):++d}},numeric.ccsLPSolve0=function(t,n,r,i,s,o,u,a){var f=t[0],l=t[1],c=t[2],h=f.length-1,p=0,d=n[0],v=n[1],m=n[2],g,y,b,w,E,S,x,T,N,C,k,L;y=d[s],b=d[s+1],i.length=0;for(g=y;g<b;++g)a.dfs(v[g],f,l,r,i,o,u);for(g=i.length-1;g!==-1;--g)w=i[g],r[u[w]]=0;for(g=y;g!==b;++g)w=v[g],r[w]=m[g];for(g=i.length-1;g!==-1;--g){w=i[g],N=u[w],S=f[w],x=f[w+1];for(T=S;T<x;++T)if(l[T]===N){r[N]/=c[T];break}L=r[N];for(T=S;T<x;++T)r[l[T]]-=L*c[T];r[N]=L}},numeric.ccsLUP0=function(t,n){var r=t[0].length-1,i=[numeric.rep([r+1],0),[],[]],s=[numeric.rep([r+1],0),[],[]],o=i[0],u=i[1],a=i[2],f=s[0],l=s[1],c=s[2],h=numeric.rep([r],0),p=numeric.rep([r],0),d,v,m,g,y,b,w,E,S,x,T=numeric.ccsLPSolve0,N=Math.max,C=Math.abs,k=numeric.linspace(0,r-1),L=numeric.linspace(0,r-1),A=new numeric.ccsDFS0(r);typeof n=="undefined"&&(n=1);for(d=0;d<r;++d){T(i,t,h,p,d,L,k,A),b=-1,w=-1;for(v=p.length-1;v!==-1;--v){m=p[v];if(m<=d)continue;E=C(h[k[m]]),E>b&&(w=m,b=E)}C(h[k[d]])<n*b&&(v=k[d],b=k[w],k[d]=b,L[b]=d,k[w]=v,L[v]=w),b=o[d],w=f[d],S=h[k[d]],u[b]=k[d],a[b]=1,++b;for(v=p.length-1;v!==-1;--v)m=p[v],E=h[k[m]],p[v]=0,h[k[m]]=0,m<=d?(l[w]=m,c[w]=E,++w):(u[b]=k[m],a[b]=E/S,++b);o[d+1]=b,f[d+1]=w}for(v=u.length-1;v!==-1;--v)u[v]=L[u[v]];return{L:i,U:s,P:k,Pinv:L}},numeric.ccsLUP=numeric.ccsLUP0,numeric.ccsDim=function(t){return[numeric.sup(t[1])+1,t[0].length-1]},numeric.ccsGetBlock=function(t,n,r){var i=numeric.ccsDim(t),s=i[0],o=i[1];typeof n=="undefined"?n=numeric.linspace(0,s-1):typeof n=="number"&&(n=[n]),typeof r=="undefined"?r=numeric.linspace(0,o-1):typeof r=="number"&&(r=[r]);var u,a,f,l=n.length,c,h=r.length,p,d,v,m=numeric.rep([o],0),g=[],y=[],b=[m,g,y],w=t[0],E=t[1],S=t[2],x=numeric.rep([s],0),T=0,N=numeric.rep([s],0);for(c=0;c<h;++c){d=r[c];var C=w[d],k=w[d+1];for(u=C;u<k;++u)p=E[u],N[p]=1,x[p]=S[u];for(u=0;u<l;++u)v=n[u],N[v]&&(g[T]=u,y[T]=x[n[u]],++T);for(u=C;u<k;++u)p=E[u],N[p]=0;m[c+1]=T}return b},numeric.ccsDot=function(t,n){var r=t[0],i=t[1],s=t[2],o=n[0],u=n[1],a=n[2],f=numeric.ccsDim(t),l=numeric.ccsDim(n),c=f[0],h=f[1],p=l[1],d=numeric.rep([c],0),v=numeric.rep([c],0),m=Array(c),g=numeric.rep([p],0),y=[],b=[],w=[g,y,b],E,S,x,T,N,C,k,L,A,O,M;for(x=0;x!==p;++x){T=o[x],N=o[x+1],A=0;for(S=T;S<N;++S){O=u[S],M=a[S],C=r[O],k=r[O+1];for(E=C;E<k;++E)L=i[E],v[L]===0&&(m[A]=L,v[L]=1,A+=1),d[L]=d[L]+s[E]*M}T=g[x],N=T+A,g[x+1]=N;for(S=A-1;S!==-1;--S)M=T+S,E=m[S],y[M]=E,b[M]=d[E],v[E]=0,d[E]=0;g[x+1]=g[x]+A}return w},numeric.ccsLUPSolve=function(t,n){var r=t.L,i=t.U,s=t.P,o=n[0],u=!1;typeof o!="object"&&(n=[[0,n.length],numeric.linspace(0,n.length-1),n],o=n[0],u=!0);var a=n[1],f=n[2],l=r[0].length-1,c=o.length-1,h=numeric.rep([l],0),p=Array(l),d=numeric.rep([l],0),v=Array(l),m=numeric.rep([c+1],0),g=[],y=[],b=numeric.ccsTSolve,w,E,S,x,T,N,C=0;for(w=0;w<c;++w){T=0,S=o[w],x=o[w+1];for(E=S;E<x;++E)N=t.Pinv[a[E]],v[T]=N,d[N]=f[E],++T;v.length=T,b(r,d,h,v,p);for(E=v.length-1;E!==-1;--E)d[v[E]]=0;b(i,h,d,p,v);if(u)return d;for(E=p.length-1;E!==-1;--E)h[p[E]]=0;for(E=v.length-1;E!==-1;--E)N=v[E],g[C]=N,y[C]=d[N],d[N]=0,++C;m[w+1]=C}return[m,g,y]},numeric.ccsbinop=function(t,n){return typeof n=="undefined"&&(n=""),Function("X","Y","var Xi = X[0], Xj = X[1], Xv = X[2];\nvar Yi = Y[0], Yj = Y[1], Yv = Y[2];\nvar n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;\nvar Zi = numeric.rep([n+1],0), Zj = [], Zv = [];\nvar x = numeric.rep([m],0),y = numeric.rep([m],0);\nvar xk,yk,zk;\nvar i,j,j0,j1,k,p=0;\n"+n+"for(i=0;i<n;++i) {\n"+"  j0 = Xi[i]; j1 = Xi[i+1];\n"+"  for(j=j0;j!==j1;++j) {\n"+"    k = Xj[j];\n"+"    x[k] = 1;\n"+"    Zj[p] = k;\n"+"    ++p;\n"+"  }\n"+"  j0 = Yi[i]; j1 = Yi[i+1];\n"+"  for(j=j0;j!==j1;++j) {\n"+"    k = Yj[j];\n"+"    y[k] = Yv[j];\n"+"    if(x[k] === 0) {\n"+"      Zj[p] = k;\n"+"      ++p;\n"+"    }\n"+"  }\n"+"  Zi[i+1] = p;\n"+"  j0 = Xi[i]; j1 = Xi[i+1];\n"+"  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];\n"+"  j0 = Zi[i]; j1 = Zi[i+1];\n"+"  for(j=j0;j!==j1;++j) {\n"+"    k = Zj[j];\n"+"    xk = x[k];\n"+"    yk = y[k];\n"+t+"\n"+"    Zv[j] = zk;\n"+"  }\n"+"  j0 = Xi[i]; j1 = Xi[i+1];\n"+"  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;\n"+"  j0 = Yi[i]; j1 = Yi[i+1];\n"+"  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;\n"+"}\n"+"return [Zi,Zj,Zv];")},function(){var k,A,B,C;for(k in numeric.ops2)isFinite(eval("1"+numeric.ops2[k]+"0"))?A="[Y[0],Y[1],numeric."+k+"(X,Y[2])]":A="NaN",isFinite(eval("0"+numeric.ops2[k]+"1"))?B="[X[0],X[1],numeric."+k+"(X[2],Y)]":B="NaN",isFinite(eval("1"+numeric.ops2[k]+"0"))&&isFinite(eval("0"+numeric.ops2[k]+"1"))?C="numeric.ccs"+k+"MM(X,Y)":C="NaN",numeric["ccs"+k+"MM"]=numeric.ccsbinop("zk = xk "+numeric.ops2[k]+"yk;"),numeric["ccs"+k]=Function("X","Y",'if(typeof X === "number") return '+A+";\n"+'if(typeof Y === "number") return '+B+";\n"+"return "+C+";\n")}(),numeric.ccsScatter=function(t){var n=t[0],r=t[1],i=t[2],s=numeric.sup(r)+1,o=n.length,u=numeric.rep([s],0),a=Array(o),f=Array(o),l=numeric.rep([s],0),c;for(c=0;c<o;++c)l[r[c]]++;for(c=0;c<s;++c)u[c+1]=u[c]+l[c];var h=u.slice(0),p,d;for(c=0;c<o;++c)d=r[c],p=h[d],a[p]=n[c],f[p]=i[c],h[d]=h[d]+1;return[u,a,f]},numeric.ccsGather=function(t){var n=t[0],r=t[1],i=t[2],s=n.length-1,o=r.length,u=Array(o),a=Array(o),f=Array(o),l,c,h,p,d;d=0;for(l=0;l<s;++l){h=n[l],p=n[l+1];for(c=h;c!==p;++c)a[d]=l,u[d]=r[c],f[d]=i[c],++d}return[u,a,f]},numeric.sdim=function dim(e,t,n){typeof t=="undefined"&&(t=[]);if(typeof e!="object")return t;typeof n=="undefined"&&(n=0),n in t||(t[n]=0),e.length>t[n]&&(t[n]=e.length);var r;for(r in e)e.hasOwnProperty(r)&&dim(e[r],t,n+1);return t},numeric.sclone=function clone(e,t,n){typeof t=="undefined"&&(t=0),typeof n=="undefined"&&(n=numeric.sdim(e).length);var r,i=Array(e.length);if(t===n-1){for(r in e)e.hasOwnProperty(r)&&(i[r]=e[r]);return i}for(r in e)e.hasOwnProperty(r)&&(i[r]=clone(e[r],t+1,n));return i},numeric.sdiag=function(t){var n=t.length,r,i=Array(n),s,o,u;for(r=n-1;r>=1;r-=2)s=r-1,i[r]=[],i[r][r]=t[r],i[s]=[],i[s][s]=t[s];return r===0&&(i[0]=[],i[0][0]=t[r]),i},numeric.sidentity=function(t){return numeric.sdiag(numeric.rep([t],1))},numeric.stranspose=function(t){var n=[],r=t.length,i,s,o;for(i in t){if(!t.hasOwnProperty(i))continue;o=t[i];for(s in o){if(!o.hasOwnProperty(s))continue;typeof n[s]!="object"&&(n[s]=[]),n[s][i]=o[s]}}return n},numeric.sLUP=function(t,n){throw new Error("The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.")},numeric.sdotMM=function(t,n){var r=t.length,i=n.length,s=numeric.stranspose(n),o=s.length,u,a,f,l,c,h,p=Array(r),d;for(f=r-1;f>=0;f--){d=[],u=t[f];for(c=o-1;c>=0;c--){h=0,a=s[c];for(l in u){if(!u.hasOwnProperty(l))continue;l in a&&(h+=u[l]*a[l])}h&&(d[c]=h)}p[f]=d}return p},numeric.sdotMV=function(t,n){var r=t.length,i,s,o,u=Array(r),a;for(s=r-1;s>=0;s--){i=t[s],a=0;for(o in i){if(!i.hasOwnProperty(o))continue;n[o]&&(a+=i[o]*n[o])}a&&(u[s]=a)}return u},numeric.sdotVM=function(t,n){var r,i,s,o,u=[],a;for(r in t){if(!t.hasOwnProperty(r))continue;s=n[r],o=t[r];for(i in s){if(!s.hasOwnProperty(i))continue;u[i]||(u[i]=0),u[i]+=o*s[i]}}return u},numeric.sdotVV=function(t,n){var r,i=0;for(r in t)t[r]&&n[r]&&(i+=t[r]*n[r]);return i},numeric.sdot=function(t,n){var r=numeric.sdim(t).length,i=numeric.sdim(n).length,s=r*1e3+i;switch(s){case 0:return t*n;case 1001:return numeric.sdotVV(t,n);case 2001:return numeric.sdotMV(t,n);case 1002:return numeric.sdotVM(t,n);case 2002:return numeric.sdotMM(t,n);default:throw new Error("numeric.sdot not implemented for tensors of order "+r+" and "+i)}},numeric.sscatter=function(t){var n=t[0].length,r,i,s,o=t.length,u=[],a;for(i=n-1;i>=0;--i){if(!t[o-1][i])continue;a=u;for(s=0;s<o-2;s++)r=t[s][i],a[r]||(a[r]=[]),a=a[r];a[t[s][i]]=t[s+1][i]}return u},numeric.sgather=function gather(e,t,n){typeof t=="undefined"&&(t=[]),typeof n=="undefined"&&(n=[]);var r,i,s;r=n.length;for(i in e)if(e.hasOwnProperty(i)){n[r]=parseInt(i),s=e[i];if(typeof s=="number"){if(s){if(t.length===0)for(i=r+1;i>=0;--i)t[i]=[];for(i=r;i>=0;--i)t[i].push(n[i]);t[r+1].push(s)}}else gather(s,t,n)}return n.length>r&&n.pop(),t},numeric.cLU=function(t){var n=t[0],r=t[1],i=t[2],s=n.length,o=0,u,a,f,l,c,h;for(u=0;u<s;u++)n[u]>o&&(o=n[u]);o++;var p=Array(o),d=Array(o),v=numeric.rep([o],Infinity),m=numeric.rep([o],-Infinity),g,y,b;for(f=0;f<s;f++)u=n[f],a=r[f],a<v[u]&&(v[u]=a),a>m[u]&&(m[u]=a);for(u=0;u<o-1;u++)m[u]>m[u+1]&&(m[u+1]=m[u]);for(u=o-1;u>=1;u--)v[u]<v[u-1]&&(v[u-1]=v[u]);var w=0,E=0;for(u=0;u<o;u++)d[u]=numeric.rep([m[u]-v[u]+1],0),p[u]=numeric.rep([u-v[u]],0),w+=u-v[u]+1,E+=m[u]-u+1;for(f=0;f<s;f++)u=n[f],d[u][r[f]-v[u]]=i[f];for(u=0;u<o-1;u++){l=u-v[u],g=d[u];for(a=u+1;v[a]<=u&&a<o;a++){c=u-v[a],h=m[u]-u,y=d[a],b=y[c]/g[l];if(b){for(f=1;f<=h;f++)y[f+c]-=b*g[f+l];p[a][u-v[a]]=b}}}var g=[],y=[],S=[],x=[],T=[],N=[],s,C,k;s=0,C=0;for(u=0;u<o;u++){l=v[u],c=m[u],k=d[u];for(a=u;a<=c;a++)k[a-l]&&(g[s]=u,y[s]=a,S[s]=k[a-l],s++);k=p[u];for(a=l;a<u;a++)k[a-l]&&(x[C]=u,T[C]=a,N[C]=k[a-l],C++);x[C]=u,T[C]=u,N[C]=1,C++}return{U:[g,y,S],L:[x,T,N]}},numeric.cLUsolve=function(t,n){var r=t.L,i=t.U,s=numeric.clone(n),o=r[0],u=r[1],a=r[2],f=i[0],l=i[1],c=i[2],h=f.length,p=o.length,d=s.length,v,m,g;g=0;for(v=0;v<d;v++){while(u[g]<v)s[v]-=a[g]*s[u[g]],g++;g++}g=h-1;for(v=d-1;v>=0;v--){while(l[g]>v)s[v]-=c[g]*s[l[g]],g--;s[v]/=c[g],g--}return s},numeric.cgrid=function(t,n){typeof t=="number"&&(t=[t,t]);var r=numeric.rep(t,-1),i,s,o;if(typeof n!="function")switch(n){case"L":n=function(e,n){return e>=t[0]/2||n<t[1]/2};break;default:n=function(e,t){return!0}}o=0;for(i=1;i<t[0]-1;i++)for(s=1;s<t[1]-1;s++)n(i,s)&&(r[i][s]=o,o++);return r},numeric.cdelsq=function(t){var n=[[-1,0],[0,-1],[0,1],[1,0]],r=numeric.dim(t),i=r[0],s=r[1],o,u,a,f,l,c=[],h=[],p=[];for(o=1;o<i-1;o++)for(u=1;u<s-1;u++){if(t[o][u]<0)continue;for(a=0;a<4;a++){f=o+n[a][0],l=u+n[a][1];if(t[f][l]<0)continue;c.push(t[o][u]),h.push(t[f][l]),p.push(-1)}c.push(t[o][u]),h.push(t[o][u]),p.push(4)}return[c,h,p]},numeric.cdotMV=function(t,n){var r,i=t[0],s=t[1],o=t[2],u,a=i.length,f;f=0;for(u=0;u<a;u++)i[u]>f&&(f=i[u]);f++,r=numeric.rep([f],0);for(u=0;u<a;u++)r[i[u]]+=o[u]*n[s[u]];return r},numeric.Spline=function(t,n,r,i,s){this.x=t,this.yl=n,this.yr=r,this.kl=i,this.kr=s},numeric.Spline.prototype._at=function(t,n){var r=this.x,i=this.yl,s=this.yr,o=this.kl,u=this.kr,t,a,f,l,c=numeric.add,h=numeric.sub,p=numeric.mul;a=h(p(o[n],r[n+1]-r[n]),h(s[n+1],i[n])),f=c(p(u[n+1],r[n]-r[n+1]),h(s[n+1],i[n])),l=(t-r[n])/(r[n+1]-r[n]);var d=l*(1-l);return c(c(c(p(1-l,i[n]),p(l,s[n+1])),p(a,d*(1-l))),p(f,d*l))},numeric.Spline.prototype.at=function(t){if(typeof t=="number"){var n=this.x,r=n.length,i,s,o,u=Math.floor,a,f,l;i=0,s=r-1;while(s-i>1)o=u((i+s)/2),n[o]<=t?i=o:s=o;return this._at(t,i)}var r=t.length,c,h=Array(r);for(c=r-1;c!==-1;--c)h[c]=this.at(t[c]);return h},numeric.Spline.prototype.diff=function(){var t=this.x,n=this.yl,r=this.yr,i=this.kl,s=this.kr,o=n.length,u,a,f,l=i,c=s,h=Array(o),p=Array(o),d=numeric.add,v=numeric.mul,m=numeric.div,g=numeric.sub;for(u=o-1;u!==-1;--u)a=t[u+1]-t[u],f=g(r[u+1],n[u]),h[u]=m(d(v(f,6),v(i[u],-4*a),v(s[u+1],-2*a)),a*a),p[u+1]=m(d(v(f,-6),v(i[u],2*a),v(s[u+1],4*a)),a*a);return new numeric.Spline(t,l,c,h,p)},numeric.Spline.prototype.roots=function(){function t(e){return e*e}function n(e,t,n,r,i){var s=n*2-(t-e),o=-r*2+(t-e),u=(i+1)*.5,a=u*(1-u);return(1-u)*e+u*t+s*a*(1-u)+o*a*u}var r=[],i=this.x,s=this.yl,o=this.yr,u=this.kl,a=this.kr;typeof s[0]=="number"&&(s=[s],o=[o],u=[u],a=[a]);var f=s.length,l=i.length-1,c,h,p,d,v,m,g,y,b,w,r=Array(f),E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F=Math.sqrt;for(c=0;c!==f;++c){g=s[c],y=o[c],b=u[c],w=a[c],E=[];for(h=0;h!==l;h++){h>0&&y[h]*g[h]<0&&E.push(i[h]),A=i[h+1]-i[h],O=i[h],T=g[h],N=y[h+1],S=b[h]/A,x=w[h+1]/A,L=t(S-x+3*(T-N))+12*x*T,C=x+3*T+2*S-3*N,k=3*(x+S+2*(T-N)),L<=0?(_=C/k,_>i[h]&&_<i[h+1]?M=[i[h],_,i[h+1]]:M=[i[h],i[h+1]]):(_=(C-F(L))/k,D=(C+F(L))/k,M=[i[h]],_>i[h]&&_<i[h+1]&&M.push(_),D>i[h]&&D<i[h+1]&&M.push(D),M.push(i[h+1])),H=M[0],_=this._at(H,h);for(p=0;p<M.length-1;p++){B=M[p+1],D=this._at(B,h);if(_===0){E.push(H),H=B,_=D;continue}if(D===0||_*D>0){H=B,_=D;continue}var I=0;for(;;){j=(_*B-D*H)/(_-D);if(j<=H||j>=B)break;P=this._at(j,h);if(P*D>0)B=j,D=P,I===-1&&(_*=.5),I=-1;else{if(!(P*_>0))break;H=j,_=P,I===1&&(D*=.5),I=1}}E.push(j),H=M[p+1],_=this._at(H,h)}D===0&&E.push(B)}r[c]=E}return typeof this.yl[0]=="number"?r[0]:r},numeric.spline=function(t,n,r,i){var s=t.length,o=[],u=[],a=[],f,l=numeric.sub,c=numeric.mul,h=numeric.add;for(f=s-2;f>=0;f--)u[f]=t[f+1]-t[f],a[f]=l(n[f+1],n[f]);if(typeof r=="string"||typeof i=="string")r=i="periodic";var p=[[],[],[]];switch(typeof r){case"undefined":o[0]=c(3/(u[0]*u[0]),a[0]),p[0].push(0,0),p[1].push(0,1),p[2].push(2/u[0],1/u[0]);break;case"string":o[0]=h(c(3/(u[s-2]*u[s-2]),a[s-2]),c(3/(u[0]*u[0]),a[0])),p[0].push(0,0,0),p[1].push(s-2,0,1),p[2].push(1/u[s-2],2/u[s-2]+2/u[0],1/u[0]);break;default:o[0]=r,p[0].push(0),p[1].push(0),p[2].push(1)}for(f=1;f<s-1;f++)o[f]=h(c(3/(u[f-1]*u[f-1]),a[f-1]),c(3/(u[f]*u[f]),a[f])),p[0].push(f,f,f),p[1].push(f-1,f,f+1),p[2].push(1/u[f-1],2/u[f-1]+2/u[f],1/u[f]);switch(typeof i){case"undefined":o[s-1]=c(3/(u[s-2]*u[s-2]),a[s-2]),p[0].push(s-1,s-1),p[1].push(s-2,s-1),p[2].push(1/u[s-2],2/u[s-2]);break;case"string":p[1][p[1].length-1]=0;break;default:o[s-1]=i,p[0].push(s-1),p[1].push(s-1),p[2].push(1)}typeof o[0]!="number"?o=numeric.transpose(o):o=[o];var d=Array(o.length);if(typeof r=="string")for(f=d.length-1;f!==-1;--f)d[f]=numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(p)),o[f]),d[f][s-1]=d[f][0];else for(f=d.length-1;f!==-1;--f)d[f]=numeric.cLUsolve(numeric.cLU(p),o[f]);return typeof n[0]=="number"?d=d[0]:d=numeric.transpose(d),new numeric.Spline(t,n,n,d,d)},numeric.fftpow2=function fftpow2(e,t){var n=e.length;if(n===1)return;var r=Math.cos,i=Math.sin,s,o,u=Array(n/2),a=Array(n/2),f=Array(n/2),l=Array(n/2);o=n/2;for(s=n-1;s!==-1;--s)--o,f[o]=e[s],l[o]=t[s],--s,u[o]=e[s],a[o]=t[s];fftpow2(u,a),fftpow2(f,l),o=n/2;var c,h=-6.283185307179586/n,p,d;for(s=n-1;s!==-1;--s)--o,o===-1&&(o=n/2-1),c=h*s,p=r(c),d=i(c),e[s]=u[o]+p*f[o]-d*l[o],t[s]=a[o]+p*l[o]+d*f[o]},numeric._ifftpow2=function _ifftpow2(e,t){var n=e.length;if(n===1)return;var r=Math.cos,i=Math.sin,s,o,u=Array(n/2),a=Array(n/2),f=Array(n/2),l=Array(n/2);o=n/2;for(s=n-1;s!==-1;--s)--o,f[o]=e[s],l[o]=t[s],--s,u[o]=e[s],a[o]=t[s];_ifftpow2(u,a),_ifftpow2(f,l),o=n/2;var c,h=6.283185307179586/n,p,d;for(s=n-1;s!==-1;--s)--o,o===-1&&(o=n/2-1),c=h*s,p=r(c),d=i(c),e[s]=u[o]+p*f[o]-d*l[o],t[s]=a[o]+p*l[o]+d*f[o]},numeric.ifftpow2=function(t,n){numeric._ifftpow2(t,n),numeric.diveq(t,t.length),numeric.diveq(n,n.length)},numeric.convpow2=function(t,n,r,i){numeric.fftpow2(t,n),numeric.fftpow2(r,i);var s,o=t.length,u,a,f,l;for(s=o-1;s!==-1;--s)u=t[s],f=n[s],a=r[s],l=i[s],t[s]=u*a-f*l,n[s]=u*l+f*a;numeric.ifftpow2(t,n)},numeric.T.prototype.fft=function(){var t=this.x,n=this.y,r=t.length,i=Math.log,s=i(2),o=Math.ceil(i(2*r-1)/s),u=Math.pow(2,o),a=numeric.rep([u],0),f=numeric.rep([u],0),l=Math.cos,c=Math.sin,h,p=-3.141592653589793/r,d,v=numeric.rep([u],0),m=numeric.rep([u],0),g=Math.floor(r/2);for(h=0;h<r;h++)v[h]=t[h];if(typeof n!="undefined")for(h=0;h<r;h++)m[h]=n[h];a[0]=1;for(h=1;h<=u/2;h++)d=p*h*h,a[h]=l(d),f[h]=c(d),a[u-h]=l(d),f[u-h]=c(d);var y=new numeric.T(v,m),b=new numeric.T(a,f);return y=y.mul(b),numeric.convpow2(y.x,y.y,numeric.clone(b.x),numeric.neg(b.y)),y=y.mul(b),y.x.length=r,y.y.length=r,y},numeric.T.prototype.ifft=function(){var t=this.x,n=this.y,r=t.length,i=Math.log,s=i(2),o=Math.ceil(i(2*r-1)/s),u=Math.pow(2,o),a=numeric.rep([u],0),f=numeric.rep([u],0),l=Math.cos,c=Math.sin,h,p=3.141592653589793/r,d,v=numeric.rep([u],0),m=numeric.rep([u],0),g=Math.floor(r/2);for(h=0;h<r;h++)v[h]=t[h];if(typeof n!="undefined")for(h=0;h<r;h++)m[h]=n[h];a[0]=1;for(h=1;h<=u/2;h++)d=p*h*h,a[h]=l(d),f[h]=c(d),a[u-h]=l(d),f[u-h]=c(d);var y=new numeric.T(v,m),b=new numeric.T(a,f);return y=y.mul(b),numeric.convpow2(y.x,y.y,numeric.clone(b.x),numeric.neg(b.y)),y=y.mul(b),y.x.length=r,y.y.length=r,y.div(r)},numeric.gradient=function(t,n){var r=n.length,i=t(n);if(isNaN(i))throw new Error("gradient: f(x) is a NaN!");var s=Math.max,o,u=numeric.clone(n),a,f,l=Array(r),c=numeric.div,h=numeric.sub,p,d,s=Math.max,v=.001,m=Math.abs,g=Math.min,y,b,w,E=0,S,x,T;for(o=0;o<r;o++){var N=s(1e-6*i,1e-8);for(;;){++E;if(E>20)throw new Error("Numerical gradient fails");u[o]=n[o]+N,a=t(u),u[o]=n[o]-N,f=t(u),u[o]=n[o];if(isNaN(a)||isNaN(f)){N/=16;continue}l[o]=(a-f)/(2*N),y=n[o]-N,b=n[o],w=n[o]+N,S=(a-i)/N,x=(i-f)/N,T=s(m(l[o]),m(i),m(a),m(f),m(y),m(b),m(w),1e-8),p=g(s(m(S-l[o]),m(x-l[o]),m(S-x))/T,N/T);if(!(p>v))break;N/=16}}return l},numeric.uncmin=function(t,n,r,i,s,o,u){var a=numeric.gradient;typeof u=="undefined"&&(u={}),typeof r=="undefined"&&(r=1e-8),typeof i=="undefined"&&(i=function(e){return a(t,e)}),typeof s=="undefined"&&(s=1e3),n=numeric.clone(n);var f=n.length,l=t(n),c,h;if(isNaN(l))throw new Error("uncmin: f(x0) is a NaN!");var p=Math.max,d=numeric.norm2;r=p(r,numeric.epsilon);var v,m,g,y=u.Hinv||numeric.identity(f),b=numeric.dot,w=numeric.inv,E=numeric.sub,S=numeric.add,x=numeric.tensor,T=numeric.div,N=numeric.mul,C=numeric.all,k=numeric.isFinite,L=numeric.neg,A=0,O,M,_,D,P,H,B,j,F,I,q,R,U="";m=i(n);while(A<s){if(typeof o=="function"&&o(A,n,l,m,y)){U="Callback returned true";break}if(!C(k(m))){U="Gradient has Infinity or NaN";break}v=L(b(y,m));if(!C(k(v))){U="Search direction has Infinity or NaN";break}I=d(v);if(I<r){U="Newton step smaller than tol";break}F=1,h=b(m,v),_=n;while(A<s){if(F*I<r)break;M=N(v,F),_=S(n,M),c=t(_);if(c-l>=.1*F*h||isNaN(c)){F*=.5,++A;continue}break}if(F*I<r){U="Line search step size smaller than tol";break}if(A===s){U="maxit reached during line search";break}g=i(_),D=E(g,m),B=b(D,M),P=b(y,D),y=E(S(y,N((B+b(D,P))/(B*B),x(M,M))),T(S(x(P,M),x(M,P)),B)),n=_,l=c,m=g,++A}return{solution:n,f:l,gradient:m,invHessian:y,iterations:A,message:U}},numeric.Dopri=function(t,n,r,i,s,o,u){this.x=t,this.y=n,this.f=r,this.ymid=i,this.iterations=s,this.events=u,this.message=o},numeric.Dopri.prototype._at=function(t,n){function r(e){return e*e}var i=this,s=i.x,o=i.y,u=i.f,a=i.ymid,f=s.length,l,c,h,p,d,v,t,m=Math.floor,g,y=.5,b=numeric.add,w=numeric.mul,E=numeric.sub,S,x,T;return l=s[n],c=s[n+1],p=o[n],d=o[n+1],g=c-l,h=l+y*g,v=a[n],S=E(u[n],w(p,1/(l-h)+2/(l-c))),x=E(u[n+1],w(d,1/(c-h)+2/(c-l))),T=[r(t-c)*(t-h)/r(l-c)/(l-h),r(t-l)*r(t-c)/r(l-h)/r(c-h),r(t-l)*(t-h)/r(c-l)/(c-h),(t-l)*r(t-c)*(t-h)/r(l-c)/(l-h),(t-c)*r(t-l)*(t-h)/r(l-c)/(c-h)],b(b(b(b(w(p,T[0]),w(v,T[1])),w(d,T[2])),w(S,T[3])),w(x,T[4]))},numeric.Dopri.prototype.at=function(t){var n,r,i,s=Math.floor;if(typeof t!="number"){var o=t.length,u=Array(o);for(n=o-1;n!==-1;--n)u[n]=this.at(t[n]);return u}var a=this.x;n=0,r=a.length-1;while(r-n>1)i=s(.5*(n+r)),a[i]<=t?n=i:r=i;return this._at(t,n)},numeric.dopri=function(t,n,r,i,s,o,u){typeof s=="undefined"&&(s=1e-6),typeof o=="undefined"&&(o=1e3);var a=[t],f=[r],l=[i(t,r)],c,h,p,d,v,m,g=[],y=.2,b=[.075,.225],w=[44/45,-56/15,32/9],E=[19372/6561,-25360/2187,64448/6561,-212/729],S=[9017/3168,-355/33,46732/5247,49/176,-5103/18656],x=[35/384,0,500/1113,125/192,-2187/6784,11/84],T=[.10013431883002395,0,.3918321794184259,-0.02982460176594817,.05893268337240795,-0.04497888809104361,.023904308236133973],N=[.2,.3,.8,8/9,1,1],C=[-71/57600,0,71/16695,-71/1920,17253/339200,-22/525,.025],k=0,L,A,O=(n-t)/10,M=0,_=numeric.add,D=numeric.mul,P,H,B=Math.max,j=Math.min,F=Math.abs,I=numeric.norminf,q=Math.pow,R=numeric.any,U=numeric.lt,z=numeric.and,W=numeric.sub,X,V,$,J=new numeric.Dopri(a,f,l,g,-1,"");typeof u=="function"&&(X=u(t,r));while(t<n&&M<o){++M,t+O>n&&(O=n-t),c=i(t+N[0]*O,_(r,D(y*O,l[k]))),h=i(t+N[1]*O,_(_(r,D(b[0]*O,l[k])),D(b[1]*O,c))),p=i(t+N[2]*O,_(_(_(r,D(w[0]*O,l[k])),D(w[1]*O,c)),D(w[2]*O,h))),d=i(t+N[3]*O,_(_(_(_(r,D(E[0]*O,l[k])),D(E[1]*O,c)),D(E[2]*O,h)),D(E[3]*O,p))),v=i(t+N[4]*O,_(_(_(_(_(r,D(S[0]*O,l[k])),D(S[1]*O,c)),D(S[2]*O,h)),D(S[3]*O,p)),D(S[4]*O,d))),P=_(_(_(_(_(r,D(l[k],O*x[0])),D(h,O*x[2])),D(p,O*x[3])),D(d,O*x[4])),D(v,O*x[5])),m=i(t+O,P),L=_(_(_(_(_(D(l[k],O*C[0]),D(h,O*C[2])),D(p,O*C[3])),D(d,O*C[4])),D(v,O*C[5])),D(m,O*C[6])),typeof L=="number"?H=F(L):H=I(L);if(H>s){O=.2*O*q(s/H,.25);if(t+O===t){J.msg="Step size became too small";break}continue}g[k]=_(_(_(_(_(_(r,D(l[k],O*T[0])),D(h,O*T[2])),D(p,O*T[3])),D(d,O*T[4])),D(v,O*T[5])),D(m,O*T[6])),++k,a[k]=t+O,f[k]=P,l[k]=m;if(typeof u=="function"){var K,Q=t,G=t+.5*O,Y;V=u(G,g[k-1]),$=z(U(X,0),U(0,V)),R($)||(Q=G,G=t+O,X=V,V=u(G,P),$=z(U(X,0),U(0,V)));if(R($)){var Z,et,tt,nt,rt=0,it=1,st=1;for(;;){if(typeof X=="number")Y=(st*V*Q-it*X*G)/(st*V-it*X);else{Y=G;for(A=X.length-1;A!==-1;--A)X[A]<0&&V[A]>0&&(Y=j(Y,(st*V[A]*Q-it*X[A]*G)/(st*V[A]-it*X[A])))}if(Y<=Q||Y>=G)break;K=J._at(Y,k-1),nt=u(Y,K),tt=z(U(X,0),U(0,nt)),R(tt)?(G=Y,V=nt,$=tt,st=1,rt===-1?it*=.5:it=1,rt=-1):(Q=Y,X=nt,it=1,rt===1?st*=.5:st=1,rt=1)}return P=J._at(.5*(t+Y),k-1),J.f[k]=i(Y,K),J.x[k]=Y,J.y[k]=K,J.ymid[k-1]=P,J.events=$,J.iterations=M,J}}t+=O,r=P,X=V,O=j(.8*O*q(s/H,.25),4*O)}return J.iterations=M,J},numeric.LU=function(e,t){t=t||!1;var n=Math.abs,r,i,s,o,u,a,f,l,c,h=e.length,p=h-1,d=new Array(h);t||(e=numeric.clone(e));for(s=0;s<h;++s){f=s,a=e[s],c=n(a[s]);for(i=s+1;i<h;++i)o=n(e[i][s]),c<o&&(c=o,f=i);d[s]=f,f!=s&&(e[s]=e[f],e[f]=a,a=e[s]),u=a[s];for(r=s+1;r<h;++r)e[r][s]/=u;for(r=s+1;r<h;++r){l=e[r];for(i=s+1;i<p;++i)l[i]-=l[s]*a[i],++i,l[i]-=l[s]*a[i];i===p&&(l[i]-=l[s]*a[i])}}return{LU:e,P:d}},numeric.LUsolve=function(t,n){var r,i,s=t.LU,o=s.length,u=numeric.clone(n),a=t.P,f,l,c,h;for(r=o-1;r!==-1;--r)u[r]=n[r];for(r=0;r<o;++r){f=a[r],a[r]!==r&&(h=u[r],u[r]=u[f],u[f]=h),l=s[r];for(i=0;i<r;++i)u[r]-=u[i]*l[i]}for(r=o-1;r>=0;--r){l=s[r];for(i=r+1;i<o;++i)u[r]-=u[i]*l[i];u[r]/=l[r]}return u},numeric.solve=function(t,n,r){return numeric.LUsolve(numeric.LU(t,r),n)},numeric.echelonize=function(t){var n=numeric.dim(t),r=n[0],i=n[1],s=numeric.identity(r),o=Array(r),u,a,f,l,c,h,p,d,v=Math.abs,m=numeric.diveq;t=numeric.clone(t);for(u=0;u<r;++u){f=0,c=t[u],h=s[u];for(a=1;a<i;++a)v(c[f])<v(c[a])&&(f=a);o[u]=f,m(h,c[f]),m(c,c[f]);for(a=0;a<r;++a)if(a!==u){p=t[a],d=p[f];for(l=i-1;l!==-1;--l)p[l]-=c[l]*d;p=s[a];for(l=r-1;l!==-1;--l)p[l]-=h[l]*d}}return{I:s,A:t,P:o}},numeric.__solveLP=function(t,n,r,i,s,o,u){var a=numeric.sum,f=numeric.log,l=numeric.mul,c=numeric.sub,h=numeric.dot,p=numeric.div,d=numeric.add,v=t.length,m=r.length,g,y=!1,b,w=0,E=1,S,x,T=numeric.transpose(n),N=numeric.svd,C=numeric.transpose,k=numeric.leq,L=Math.sqrt,A=Math.abs,O=numeric.muleq,M=numeric.norminf,_=numeric.any,D=Math.min,P=numeric.all,H=numeric.gt,B=Array(v),j=Array(m),F=numeric.rep([m],1),I,q=numeric.solve,R=c(r,h(n,o)),U,z=h(t,t),W;for(U=w;U<s;++U){var X,V,$;for(X=m-1;X!==-1;--X)j[X]=p(n[X],R[X]);var J=C(j);for(X=v-1;X!==-1;--X)B[X]=a(J[X]);E=.25*A(z/h(t,B));var K=100*L(z/h(B,B));if(!isFinite(E)||E>K)E=K;W=d(t,l(E,B)),I=h(J,j);for(X=v-1;X!==-1;--X)I[X][X]+=1;$=q(I,p(W,E),!0);var Q=p(R,h(n,$)),G=1;for(X=m-1;X!==-1;--X)Q[X]<0&&(G=D(G,-0.999*Q[X]));g=c(o,l($,G)),R=c(r,h(n,g));if(!P(H(R,0)))return{solution:o,message:"",iterations:U};o=g;if(E<i)return{solution:g,message:"",iterations:U};if(u){var Y=h(t,W),Z=h(n,W);y=!0;for(X=m-1;X!==-1;--X)if(Y*Z[X]<0){y=!1;break}}else o[v-1]>=0?y=!1:y=!0;if(y)return{solution:g,message:"Unbounded",iterations:U}}return{solution:o,message:"maximum iteration count exceeded",iterations:U}},numeric._solveLP=function(t,n,r,i,s){var o=t.length,u=r.length,a,f=numeric.sum,l=numeric.log,c=numeric.mul,h=numeric.sub,p=numeric.dot,d=numeric.div,v=numeric.add,m=numeric.rep([o],0).concat([1]),g=numeric.rep([u,1],-1),y=numeric.blockMatrix([[n,g]]),b=r,a=numeric.rep([o],0).concat(Math.max(0,numeric.sup(numeric.neg(r)))+1),w=numeric.__solveLP(m,y,b,i,s,a,!1),E=numeric.clone(w.solution);E.length=o;var S=numeric.inf(h(r,p(n,E)));if(S<0)return{solution:NaN,message:"Infeasible",iterations:w.iterations};var x=numeric.__solveLP(t,n,r,i,s-w.iterations,E,!0);return x.iterations+=w.iterations,x},numeric.solveLP=function(t,n,r,i,s,o,u){typeof u=="undefined"&&(u=1e3),typeof o=="undefined"&&(o=numeric.epsilon);if(typeof i=="undefined")return numeric._solveLP(t,n,r,o,u);var a=i.length,f=i[0].length,l=n.length,c=numeric.echelonize(i),h=numeric.rep([f],0),p=c.P,d=[],v;for(v=p.length-1;v!==-1;--v)h[p[v]]=1;for(v=f-1;v!==-1;--v)h[v]===0&&d.push(v);var m=numeric.getRange,g=numeric.linspace(0,a-1),y=numeric.linspace(0,l-1),b=m(i,g,d),w=m(n,y,p),E=m(n,y,d),S=numeric.dot,x=numeric.sub,T=S(w,c.I),N=x(E,S(T,b)),C=x(r,S(T,s)),k=Array(p.length),L=Array(d.length);for(v=p.length-1;v!==-1;--v)k[v]=t[p[v]];for(v=d.length-1;v!==-1;--v)L[v]=t[d[v]];var A=x(L,S(k,S(c.I,b))),O=numeric._solveLP(A,N,C,o,u),M=O.solution;if(M!==M)return O;var _=S(c.I,x(s,S(b,M))),D=Array(t.length);for(v=p.length-1;v!==-1;--v)D[p[v]]=_[v];for(v=d.length-1;v!==-1;--v)D[d[v]]=M[v];return{solution:D,message:O.message,iterations:O.iterations}},numeric.MPStoLP=function(t){function y(e){throw new Error("MPStoLP: "+e+"\nLine "+s+": "+t[s]+"\nCurrent state: "+r[n]+"\n")}t instanceof String&&t.split("\n");var n=0,r=["Initial state","NAME","ROWS","COLUMNS","RHS","BOUNDS","ENDATA"],i=t.length,s,o,u,a=0,f={},l=[],c=0,h={},p=0,d,v=[],m=[],g=[];for(s=0;s<i;++s){u=t[s];var b=u.match(/\S*/g),w=[];for(o=0;o<b.length;++o)b[o]!==""&&w.push(b[o]);if(w.length===0)continue;for(o=0;o<r.length;++o)if(u.substr(0,r[o].length)===r[o])break;if(o<r.length){n=o,o===1&&(d=w[1]);if(o===6)return{name:d,c:v,A:numeric.transpose(m),b:g,rows:f,vars:h};continue}switch(n){case 0:case 1:y("Unexpected line");case 2:switch(w[0]){case"N":a===0?a=w[1]:y("Two or more N rows");break;case"L":f[w[1]]=c,l[c]=1,g[c]=0,++c;break;case"G":f[w[1]]=c,l[c]=-1,g[c]=0,++c;break;case"E":f[w[1]]=c,l[c]=0,g[c]=0,++c;break;default:y("Parse error "+numeric.prettyPrint(w))}break;case 3:h.hasOwnProperty(w[0])||(h[w[0]]=p,v[p]=0,m[p]=numeric.rep([c],0),++p);var E=h[w[0]];for(o=1;o<w.length;o+=2){if(w[o]===a){v[E]=parseFloat(w[o+1]);continue}var S=f[w[o]];m[E][S]=(l[S]<0?-1:1)*parseFloat(w[o+1])}break;case 4:for(o=1;o<w.length;o+=2)g[f[w[o]]]=(l[f[w[o]]]<0?-1:1)*parseFloat(w[o+1]);break;case 5:break;case 6:y("Internal error")}}y("Reached end of file without ENDATA")},numeric.seedrandom={pow:Math.pow,random:Math.random},function(e,t,n,r,i,s,o){function u(e){var t,r,i=this,s=e.length,o=0,u=i.i=i.j=i.m=0;i.S=[],i.c=[],s||(e=[s++]);while(o<n)i.S[o]=o++;for(o=0;o<n;o++)t=i.S[o],u=l(u+t+e[o%s]),r=i.S[u],i.S[o]=r,i.S[u]=t;i.g=function(t){var r=i.S,s=l(i.i+1),o=r[s],u=l(i.j+o),a=r[u];r[s]=a,r[u]=o;var f=r[l(o+a)];while(--t)s=l(s+1),o=r[s],u=l(u+o),a=r[u],r[s]=a,r[u]=o,f=f*n+r[l(o+a)];return i.i=s,i.j=u,f},i.g(n)}function a(e,t,n,r,i){n=[],i=typeof e;if(t&&i=="object")for(r in e)if(r.indexOf("S")<5)try{n.push(a(e[r],t-1))}catch(s){}return n.length?n:e+(i!="string"?"\0":"")}function f(e,t,n,r){e+="",n=0;for(r=0;r<e.length;r++)t[l(r)]=l((n^=t[l(r)]*19)+e.charCodeAt(r));e="";for(r in t)e+=String.fromCharCode(t[r]);return e}function l(e){return e&n-1}t.seedrandom=function(c,h){var p=[],d;return c=f(a(h?[c,e]:arguments.length?c:[(new Date).getTime(),e,window],3),p),d=new u(p),f(d.S,e),t.random=function(){var t=d.g(r),u=o,a=0;while(t<i)t=(t+a)*n,u*=n,a=d.g(1);while(t>=s)t/=2,u/=2,a>>>=1;return(t+a)/u},c},o=t.pow(n,r),i=t.pow(2,i),s=i*2,f(t.random(),e)}([],numeric.seedrandom,256,6,52),function(e){function t(e){if(typeof e!="object")return e;var n=[],r,i=e.length;for(r=0;r<i;r++)n[r+1]=t(e[r]);return n}function n(e){if(typeof e!="object")return e;var t=[],r,i=e.length;for(r=1;r<i;r++)t[r-1]=n(e[r]);return t}function r(e,t,n){var r,i,s,o,u;for(s=1;s<=n;s+=1){e[s][s]=1/e[s][s],u=-e[s][s];for(r=1;r<s;r+=1)e[r][s]=u*e[r][s];o=s+1;if(n<o)break;for(i=o;i<=n;i+=1){u=e[s][i],e[s][i]=0;for(r=1;r<=s;r+=1)e[r][i]=e[r][i]+u*e[r][s]}}}function i(e,t,n,r){var i,s,o,u;for(s=1;s<=n;s+=1){u=0;for(i=1;i<s;i+=1)u+=e[i][s]*r[i];r[s]=(r[s]-u)/e[s][s]}for(o=1;o<=n;o+=1){s=n+1-o,r[s]=r[s]/e[s][s],u=-r[s];for(i=1;i<s;i+=1)r[i]=r[i]+u*e[i][s]}}function s(e,t,n,r){var i,s,o,u,a,f;for(s=1;s<=n;s+=1){r[1]=s,f=0,o=s-1;if(o<1){f=e[s][s]-f;if(f<=0)break;e[s][s]=Math.sqrt(f)}else{for(u=1;u<=o;u+=1){a=e[u][s];for(i=1;i<u;i+=1)a-=e[i][s]*e[i][u];a/=e[u][u],e[u][s]=a,f+=a*a}f=e[s][s]-f;if(f<=0)break;e[s][s]=Math.sqrt(f)}r[1]=0}}function o(e,t,n,o,u,a,f,l,c,h,p,d,v,m,g,y){function V(){m[1]=m[1]+1,E=L;for(b=1;b<=h;b+=1){E+=1,P=-l[b];for(w=1;w<=o;w+=1)P+=f[w][b]*u[w];Math.abs(P)<U&&(P=0);if(b>p)g[E]=P;else{g[E]=-Math.abs(P);if(P>0){for(w=1;w<=o;w+=1)f[w][b]=-f[w][b];l[b]=-l[b]}}}for(b=1;b<=v;b+=1)g[L+d[b]]=0;O=0,D=0;for(b=1;b<=h;b+=1)g[L+b]<D*g[_+b]&&(O=b,D=g[L+b]/g[_+b]);return O===0?999:0}function $(){for(b=1;b<=o;b+=1){P=0;for(w=1;w<=o;w+=1)P+=e[w][b]*f[w][O];g[b]=P}S=N;for(b=1;b<=o;b+=1)g[S+b]=0;for(w=v+1;w<=o;w+=1)for(b=1;b<=o;b+=1)g[S+b]=g[S+b]+e[b][w]*g[w];q=!0;for(b=v;b>=1;b-=1){P=g[b],E=k+b*(b+3)/2,S=E-b;for(w=b+1;w<=v;w+=1)P-=g[E]*g[C+w],E+=w;P/=g[S],g[C+b]=P;if(d[b]<p)break;if(P<0)break;q=!1,T=b}if(!q){H=g[A+T]/g[C+T];for(b=1;b<=v;b+=1){if(d[b]<p)break;if(g[C+b]<0)break;D=g[A+b]/g[C+b],D<
H&&(H=D,T=b)}}P=0;for(b=N+1;b<=N+o;b+=1)P+=g[b]*g[b];if(Math.abs(P)<=U){if(q)return y[1]=1,999;for(b=1;b<=v;b+=1)g[A+b]=g[A+b]-H*g[C+b];return g[A+v+1]=g[A+v+1]+H,700}P=0;for(b=1;b<=o;b+=1)P+=g[N+b]*f[b][O];B=-g[L+O]/P,R=!0,q||H<B&&(B=H,R=!1);for(b=1;b<=o;b+=1)u[b]=u[b]+B*g[N+b],Math.abs(u[b])<U&&(u[b]=0);a[1]=a[1]+B*P*(B/2+g[A+v+1]);for(b=1;b<=v;b+=1)g[A+b]=g[A+b]-B*g[C+b];g[A+v+1]=g[A+v+1]+B;if(!R){P=-l[O];for(w=1;w<=o;w+=1)P+=u[w]*f[w][O];if(O>p)g[L+O]=P;else{g[L+O]=-Math.abs(P);if(P>0){for(w=1;w<=o;w+=1)f[w][O]=-f[w][O];l[O]=-l[O]}}return 700}v+=1,d[v]=O,E=k+(v-1)*v/2+1;for(b=1;b<=v-1;b+=1)g[E]=g[b],E+=1;if(v===o)g[E]=g[o];else{for(b=o;b>=v+1;b-=1){if(g[b]===0)break;j=Math.max(Math.abs(g[b-1]),Math.abs(g[b])),F=Math.min(Math.abs(g[b-1]),Math.abs(g[b])),g[b-1]>=0?D=Math.abs(j*Math.sqrt(1+F*F/(j*j))):D=-Math.abs(j*Math.sqrt(1+F*F/(j*j))),j=g[b-1]/D,F=g[b]/D;if(j===1)break;if(j===0){g[b-1]=F*D;for(w=1;w<=o;w+=1)D=e[w][b-1],e[w][b-1]=e[w][b],e[w][b]=D}else{g[b-1]=D,I=F/(1+j);for(w=1;w<=o;w+=1)D=j*e[w][b-1]+F*e[w][b],e[w][b]=I*(e[w][b-1]+D)-e[w][b],e[w][b-1]=D}}g[E]=g[v]}return 0}function J(){E=k+T*(T+1)/2+1,S=E+T;if(g[S]===0)return 798;j=Math.max(Math.abs(g[S-1]),Math.abs(g[S])),F=Math.min(Math.abs(g[S-1]),Math.abs(g[S])),g[S-1]>=0?D=Math.abs(j*Math.sqrt(1+F*F/(j*j))):D=-Math.abs(j*Math.sqrt(1+F*F/(j*j))),j=g[S-1]/D,F=g[S]/D;if(j===1)return 798;if(j===0){for(b=T+1;b<=v;b+=1)D=g[S-1],g[S-1]=g[S],g[S]=D,S+=b;for(b=1;b<=o;b+=1)D=e[b][T],e[b][T]=e[b][T+1],e[b][T+1]=D}else{I=F/(1+j);for(b=T+1;b<=v;b+=1)D=j*g[S-1]+F*g[S],g[S]=I*(g[S-1]+D)-g[S],g[S-1]=D,S+=b;for(b=1;b<=o;b+=1)D=j*e[b][T]+F*e[b][T+1],e[b][T+1]=I*(e[b][T]+D)-e[b][T+1],e[b][T]=D}return 0}function K(){S=E-T;for(b=1;b<=T;b+=1)g[S]=g[E],E+=1,S+=1;return g[A+T]=g[A+T+1],d[T]=d[T+1],T+=1,T<v?797:0}function Q(){return g[A+v]=g[A+v+1],g[A+v+1]=0,d[v]=0,v-=1,m[2]=m[2]+1,0}var b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X;M=Math.min(o,h),E=2*o+M*(M+5)/2+2*h+1,U=1e-60;do U+=U,z=1+.1*U,W=1+.2*U;while(z<=1||W<=1);for(b=1;b<=o;b+=1)g[b]=t[b];for(b=o+1;b<=E;b+=1)g[b]=0;for(b=1;b<=h;b+=1)d[b]=0;x=[];if(y[1]===0){s(e,n,o,x);if(x[1]!==0){y[1]=2;return}i(e,n,o,t),r(e,n,o)}else{for(w=1;w<=o;w+=1){u[w]=0;for(b=1;b<=w;b+=1)u[w]=u[w]+e[b][w]*t[b]}for(w=1;w<=o;w+=1){t[w]=0;for(b=w;b<=o;b+=1)t[w]=t[w]+e[w][b]*u[b]}}a[1]=0;for(w=1;w<=o;w+=1){u[w]=t[w],a[1]=a[1]+g[w]*u[w],g[w]=0;for(b=w+1;b<=o;b+=1)e[b][w]=0}a[1]=-a[1]/2,y[1]=0,N=o,C=N+o,A=C+M,k=A+M+1,L=k+M*(M+1)/2,_=L+h;for(b=1;b<=h;b+=1){P=0;for(w=1;w<=o;w+=1)P+=f[w][b]*f[w][b];g[_+b]=Math.sqrt(P)}v=0,m[1]=0,m[2]=0,X=0;for(;;){X=V();if(X===999)return;for(;;){X=$();if(X===0)break;if(X===999)return;if(X===700)if(T===v)Q();else{for(;;){J(),X=K();if(X!==797)break}Q()}}}}function u(e,r,i,s,u,a){e=t(e),r=t(r),i=t(i);var f,l,c,h,p,d=[],v=[],m=[],g=[],y=[],b;u=u||0,a=a?t(a):[undefined,0],s=s?t(s):[],l=e.length-1,c=i[1].length-1;if(!s)for(f=1;f<=c;f+=1)s[f]=0;for(f=1;f<=c;f+=1)v[f]=0;h=0,p=Math.min(l,c);for(f=1;f<=l;f+=1)m[f]=0;d[1]=0;for(f=1;f<=2*l+p*(p+5)/2+2*c+1;f+=1)g[f]=0;for(f=1;f<=2;f+=1)y[f]=0;return o(e,r,l,l,m,d,i,s,l,c,u,v,h,y,g,a),b="",a[1]===1&&(b="constraints are inconsistent, no solution!"),a[1]===2&&(b="matrix D in quadratic function is not positive definite!"),{solution:n(m),value:n(d),unconstrained_solution:n(r),iterations:n(y),iact:n(v),message:b}}e.solveQP=u}(numeric),numeric.svd=function(t){function g(e,t){return e=Math.abs(e),t=Math.abs(t),e>t?e*Math.sqrt(1+t*t/e/e):t==0?e:t*Math.sqrt(1+e*e/t/t)}var n,r=numeric.epsilon,i=1e-64/r,s=50,o=0,u=0,a=0,f=0,l=0,c=numeric.clone(t),h=c.length,p=c[0].length;if(h<p)throw"Need more rows than columns";var d=new Array(p),v=new Array(p);for(u=0;u<p;u++)d[u]=v[u]=0;var m=numeric.rep([p,p],0),y=0,b=0,w=0,E=0,S=0,x=0,T=0;for(u=0;u<p;u++){d[u]=b,T=0,l=u+1;for(a=u;a<h;a++)T+=c[a][u]*c[a][u];if(T<=i)b=0;else{y=c[u][u],b=Math.sqrt(T),y>=0&&(b=-b),w=y*b-T,c[u][u]=y-b;for(a=l;a<p;a++){T=0;for(f=u;f<h;f++)T+=c[f][u]*c[f][a];y=T/w;for(f=u;f<h;f++)c[f][a]+=y*c[f][u]}}v[u]=b,T=0;for(a=l;a<p;a++)T+=c[u][a]*c[u][a];if(T<=i)b=0;else{y=c[u][u+1],b=Math.sqrt(T),y>=0&&(b=-b),w=y*b-T,c[u][u+1]=y-b;for(a=l;a<p;a++)d[a]=c[u][a]/w;for(a=l;a<h;a++){T=0;for(f=l;f<p;f++)T+=c[a][f]*c[u][f];for(f=l;f<p;f++)c[a][f]+=T*d[f]}}S=Math.abs(v[u])+Math.abs(d[u]),S>E&&(E=S)}for(u=p-1;u!=-1;u+=-1){if(b!=0){w=b*c[u][u+1];for(a=l;a<p;a++)m[a][u]=c[u][a]/w;for(a=l;a<p;a++){T=0;for(f=l;f<p;f++)T+=c[u][f]*m[f][a];for(f=l;f<p;f++)m[f][a]+=T*m[f][u]}}for(a=l;a<p;a++)m[u][a]=0,m[a][u]=0;m[u][u]=1,b=d[u],l=u}for(u=p-1;u!=-1;u+=-1){l=u+1,b=v[u];for(a=l;a<p;a++)c[u][a]=0;if(b!=0){w=c[u][u]*b;for(a=l;a<p;a++){T=0;for(f=l;f<h;f++)T+=c[f][u]*c[f][a];y=T/w;for(f=u;f<h;f++)c[f][a]+=y*c[f][u]}for(a=u;a<h;a++)c[a][u]=c[a][u]/b}else for(a=u;a<h;a++)c[a][u]=0;c[u][u]+=1}r*=E;for(f=p-1;f!=-1;f+=-1)for(var N=0;N<s;N++){var C=!1;for(l=f;l!=-1;l+=-1){if(Math.abs(d[l])<=r){C=!0;break}if(Math.abs(v[l-1])<=r)break}if(!C){o=0,T=1;var k=l-1;for(u=l;u<f+1;u++){y=T*d[u],d[u]=o*d[u];if(Math.abs(y)<=r)break;b=v[u],w=g(y,b),v[u]=w,o=b/w,T=-y/w;for(a=0;a<h;a++)S=c[a][k],x=c[a][u],c[a][k]=S*o+x*T,c[a][u]=-S*T+x*o}}x=v[f];if(l==f){if(x<0){v[f]=-x;for(a=0;a<p;a++)m[a][f]=-m[a][f]}break}if(N>=s-1)throw"Error: no convergence.";E=v[l],S=v[f-1],b=d[f-1],w=d[f],y=((S-x)*(S+x)+(b-w)*(b+w))/(2*w*S),b=g(y,1),y<0?y=((E-x)*(E+x)+w*(S/(y-b)-w))/E:y=((E-x)*(E+x)+w*(S/(y+b)-w))/E,o=1,T=1;for(u=l+1;u<f+1;u++){b=d[u],S=v[u],w=T*b,b=o*b,x=g(y,w),d[u-1]=x,o=y/x,T=w/x,y=E*o+b*T,b=-E*T+b*o,w=S*T,S*=o;for(a=0;a<p;a++)E=m[a][u-1],x=m[a][u],m[a][u-1]=E*o+x*T,m[a][u]=-E*T+x*o;x=g(y,w),v[u-1]=x,o=y/x,T=w/x,y=o*b+T*S,E=-T*b+o*S;for(a=0;a<h;a++)S=c[a][u-1],x=c[a][u],c[a][u-1]=S*o+x*T,c[a][u]=-S*T+x*o}d[l]=0,d[f]=y,v[f]=E}for(u=0;u<v.length;u++)v[u]<r&&(v[u]=0);for(u=0;u<p;u++)for(a=u-1;a>=0;a--)if(v[a]<v[u]){o=v[a],v[a]=v[u],v[u]=o;for(f=0;f<c.length;f++)n=c[f][u],c[f][u]=c[f][a],c[f][a]=n;for(f=0;f<m.length;f++)n=m[f][u],m[f][u]=m[f][a],m[f][a]=n;u=a}return{U:c,S:v,V:m}};

Elm.Native.ODE = {};
Elm.Native.ODE.make = function(localRuntime) {

  localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.ODE = localRuntime.Native.ODE || {};

  if (localRuntime.Native.ODE.values) {
    return localRuntime.Native.ODE.values;
  }

  var List = Elm.Native.List.make(localRuntime);

  function solve(lower, upper, initialList, f, precision, maxIterations) {
    var initial = List.toArray(initialList);
    return numeric.dopri(lower, upper, initial, f, precision, maxIterations);
  }

  function at(solution, t) {
    return List.fromArray(solution.at(t));
  }

  function evaluate(x) {
    return eval(x);
  }

  function solutionValues(solution) {
    return List.fromArray(solution.y.map(List.fromArray));
  }

  function solutionParameters(solution) {
    return List.fromArray(solution.x);
  }

  /*
  function solutionValuesUpto(t, solution) {
    var res = [];
    var t 
    for (var i = 0; i < 
  }
  */

  return localRuntime.Native.ODE.values = {
    evaluate : evaluate,
    solve : F6(solve),
    solutionValues : solutionValues,
    solutionParameters : solutionParameters,
    at : F2(at)
  }
}

/* jsep v0.3.0 (http://jsep.from.so/) */
!function(a){"use strict";var b="Compound",c="Identifier",d="MemberExpression",e="Literal",f="ThisExpression",g="CallExpression",h="UnaryExpression",i="BinaryExpression",j="LogicalExpression",k="ConditionalExpression",l="ArrayExpression",m=46,n=44,o=39,p=34,q=40,r=41,s=91,t=93,u=63,v=59,w=58,x=function(a,b){var c=new Error(a+" at character "+b);throw c.index=b,c.description=a,c},y=!0,z={"-":y,"!":y,"~":y,"+":y},A={"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},B=function(a){var b,c=0;for(var d in a)(b=d.length)>c&&a.hasOwnProperty(d)&&(c=b);return c},C=B(z),D=B(A),E={"true":!0,"false":!1,"null":null},F="this",G=function(a){return A[a]||0},H=function(a,b,c){var d="||"===a||"&&"===a?j:i;return{type:d,operator:a,left:b,right:c}},I=function(a){return a>=48&&57>=a},J=function(a){return 36===a||95===a||a>=65&&90>=a||a>=97&&122>=a},K=function(a){return 36===a||95===a||a>=65&&90>=a||a>=97&&122>=a||a>=48&&57>=a},L=function(a){for(var i,j,y=0,B=a.charAt,L=a.charCodeAt,M=function(b){return B.call(a,b)},N=function(b){return L.call(a,b)},O=a.length,P=function(){for(var a=N(y);32===a||9===a;)a=N(++y)},Q=function(){var a,b,c=S();return P(),N(y)!==u?c:(y++,a=Q(),a||x("Expected expression",y),P(),N(y)===w?(y++,b=Q(),b||x("Expected expression",y),{type:k,test:c,consequent:a,alternate:b}):void x("Expected :",y))},R=function(){P();for(var b=a.substr(y,D),c=b.length;c>0;){if(A.hasOwnProperty(b))return y+=c,b;b=b.substr(0,--c)}return!1},S=function(){var a,b,c,d,e,f,g,h;if(f=T(),b=R(),!b)return f;for(e={value:b,prec:G(b)},g=T(),g||x("Expected expression after "+b,y),d=[f,e,g];(b=R())&&(c=G(b),0!==c);){for(e={value:b,prec:c};d.length>2&&c<=d[d.length-2].prec;)g=d.pop(),b=d.pop().value,f=d.pop(),a=H(b,f,g),d.push(a);a=T(),a||x("Expected expression after "+b,y),d.push(e,a)}for(h=d.length-1,a=d[h];h>1;)a=H(d[h-1].value,d[h-2],a),h-=2;return a},T=function(){var b,c,d;if(P(),b=N(y),I(b)||b===m)return U();if(b===o||b===p)return V();if(J(b)||b===q)return Y();if(b===s)return $();for(c=a.substr(y,C),d=c.length;d>0;){if(z.hasOwnProperty(c))return y+=d,{type:h,operator:c,argument:T(),prefix:!0};c=c.substr(0,--d)}return!1},U=function(){for(var a,b,c="";I(N(y));)c+=M(y++);if(N(y)===m)for(c+=M(y++);I(N(y));)c+=M(y++);if(a=M(y),"e"===a||"E"===a){for(c+=M(y++),a=M(y),("+"===a||"-"===a)&&(c+=M(y++));I(N(y));)c+=M(y++);I(N(y-1))||x("Expected exponent ("+c+M(y)+")",y)}return b=N(y),J(b)?x("Variable names cannot start with a number ("+c+M(y)+")",y):b===m&&x("Unexpected period",y),{type:e,value:parseFloat(c),raw:c}},V=function(){for(var a,b="",c=M(y++),d=!1;O>y;){if(a=M(y++),a===c){d=!0;break}if("\\"===a)switch(a=M(y++)){case"n":b+="\n";break;case"r":b+="\r";break;case"t":b+="	";break;case"b":b+="\b";break;case"f":b+="\f";break;case"v":b+=""}else b+=a}return d||x('Unclosed quote after "'+b+'"',y),{type:e,value:b,raw:c+b+c}},W=function(){var b,d=N(y),g=y;for(J(d)?y++:x("Unexpected "+M(y),y);O>y&&(d=N(y),K(d));)y++;return b=a.slice(g,y),E.hasOwnProperty(b)?{type:e,value:E[b],raw:b}:b===F?{type:f}:{type:c,name:b}},X=function(a){for(var c,d,e=[];O>y;){if(P(),c=N(y),c===a){y++;break}c===n?y++:(d=Q(),d&&d.type!==b||x("Expected comma",y),e.push(d))}return e},Y=function(){var a,b;for(a=N(y),b=a===q?Z():W(),P(),a=N(y);a===m||a===s||a===q;)y++,a===m?(P(),b={type:d,computed:!1,object:b,property:W()}):a===s?(b={type:d,computed:!0,object:b,property:Q()},P(),a=N(y),a!==t&&x("Unclosed [",y),y++):a===q&&(b={type:g,arguments:X(r),callee:b}),P(),a=N(y);return b},Z=function(){y++;var a=Q();return P(),N(y)===r?(y++,a):void x("Unclosed (",y)},$=function(){return y++,{type:l,elements:X(t)}},_=[];O>y;)i=N(y),i===v||i===n?y++:(j=Q())?_.push(j):O>y&&x('Unexpected "'+M(y)+'"',y);return 1===_.length?_[0]:{type:b,body:_}};if(L.version="0.3.0",L.toString=function(){return"JavaScript Expression Parser (JSEP) v"+L.version},L.addUnaryOp=function(a){return z[a]=y,this},L.addBinaryOp=function(a,b){return D=Math.max(a.length,D),A[a]=b,this},L.removeUnaryOp=function(a){return delete z[a],a.length===C&&(C=B(z)),this},L.removeBinaryOp=function(a){return delete A[a],a.length===D&&(D=B(A)),this},"undefined"==typeof exports){var M=a.jsep;a.jsep=L,L.noConflict=function(){return a.jsep===L&&(a.jsep=M),L}}else"undefined"!=typeof module&&module.exports?exports=module.exports=L:exports.parse=L}(this);

Elm.Native.ParseExpression = {};
Elm.Native.ParseExpression.make = function(localRuntime) {

  localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.ParseExpression = localRuntime.Native.ParseExpression || {};

  if (localRuntime.Native.ParseExpression.values) {
    return localRuntime.Native.ParseExpression.values;
  }

  function Add(e1,e2) {
    return { ctor : 'Add', '_0' : e1, '_1' : e2 };
  }

  function Mul(e1,e2) {
    return { ctor : 'Mul', '_0' : e1, '_1' : e2 };
  }

  function Constant(x) {
    return { ctor: 'Constant', '_0' : x };
  }

  function Var(s) {
    return { ctor : 'Var', '_0' : s };
  }

  function Sub(e1, e2) {
    return Add(e1, Mul(Constant(-1), e2));
  }

  function Exp(b, e1) {
    return { ctor : 'Exp', _0: b, _1: e1 };
  }

  function Pow(e1, p) {
    return { ctor : 'Pow', _0 : e1, _1 : p };
  }

  function LogBase(b, e1) {
    return { ctor : 'LogBase', _0 : b, _1: e1 };
  }

  function Sin(e1) {
    return { ctor : 'Sin', _0 : e1 }
  }

  function Cos(e1) {
    return { ctor : 'Cos', _0 : e1 }
  }

  function Div(e1, e2) {
    return Mul(e1, Pow(e2, -1));
  }

  // Returns a float corresponding to the node's value if the node is a numeric literal.
  // Otherwise throws an error
  function evalAsNumericLiteral(node) {
    switch (node.type) {
      case 'UnaryExpression':
        if (node.operator === '-') {
          return -evalAsNumericLiteral(node.argument);
        } else {
          throw { description : 'Unknown unary operator' }
        }
        break;

      case 'Literal':
        if (typeof(node.value) === 'number') {
          return node.value;
        } else {
          throw { description : 'Got non-numeric literal' };
        }
        break;

      default:
        throw { description : 'Could not evaluate as number.' };
    }
  }

  function convert(node) {
    var literal;
    try { literal = evalAsNumericLiteral(node); }
    catch (err) { }

    if (typeof(literal) === 'number') {
      return Constant(literal);
    }

    switch (node.type) {
      case 'Identifier':
        return Var(node.name);
        break;

      case 'CallExpression':
        if (node.callee.type === 'Identifier' && node.callee.name == 'log') {
          if (node.arguments.length === 1) {
            return LogBase(Math.E, convert(node.arguments[0]));
          } else if (node.arguments.length === 2) {
            // The first argument is the base.
            return LogBase(evalAsNumericLiteral(node.arguments[0]), convert(node.arguments[1]));
          } else {
            throw { description : 'log got too many arguments' };
          }
        } else if (node.callee.type === 'Identifier' && node.callee.name == 'sin') {
          if (node.arguments.length === 1) {
            return Sin(convert(node.arguments[0]));
          } else {
            throw { description : 'sin got too many arguments' }
          }
        } else if (node.callee.type === 'Identifier' && node.callee.name == 'cos') {
          if (node.arguments.length === 1) {
            return Cos(convert(node.arguments[0]));
          } else {
            throw { description : 'cos got too many arguments' }
          }
        } else {
          throw { description : 'Unknown function' }
        }
        break;

      case 'BinaryExpression':
        switch (node.operator) {
          case '+':
            return Add(convert(node.left), convert(node.right));
            break;

          case '*':
            return Mul(convert(node.left), convert(node.right));
            break;

          case '-':
            return Sub(convert(node.left), convert(node.right));
            break;

          case '/':
            return Div(convert(node.left), convert(node.right));
            break;

          case '^':
            try {
              var base = evalAsNumericLiteral(node.left);
              return Exp(base, convert(node.right));
            } catch (err1) {
              try {
                var power = evalAsNumericLiteral(node.right);
                return Pow(convert(node.left), power);
              } catch (err2) {
                throw { description : 'One argument to ^ must be a constant' };
              }
            }
            break;

          default:
            throw { description : 'Unknown operator ' + node.operator };
        }
        break;

      default:
        throw { description : 'Unknown node type' }
    }
  }

  function parse(s) {
    try {
      var expr = convert(jsep(s));
      return { ctor : 'Ok', '_0': expr }
    } catch (e) {
      var desc = typeof(e.description) === 'string' ? e.description : 'Unknown error';
      return { ctor : 'Err', '_0': desc }
    }
  }

  window.parse = parse;

  return localRuntime.Native.ParseExpression.values = {
    parse : parse
  }
}

Elm.Native.Port = {};
Elm.Native.Port.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Port = localRuntime.Native.Port || {};
	if (localRuntime.Native.Port.values)
	{
		return localRuntime.Native.Port.values;
	}

	var NS;
	var Utils = Elm.Native.Utils.make(localRuntime);


	// INBOUND

	function inbound(name, type, converter)
	{
		if (!localRuntime.argsTracker[name])
		{
			throw new Error(
				"Port Error:\n" +
				"No argument was given for the port named '" + name + "' with type:\n\n" +
				"    " + type.split('\n').join('\n        ') + "\n\n" +
				"You need to provide an initial value!\n\n" +
				"Find out more about ports here <http://elm-lang.org/learn/Ports.elm>"
			);
		}
		var arg = localRuntime.argsTracker[name];
		arg.used = true;

		return jsToElm(name, type, converter, arg.value);
	}


	function inboundSignal(name, type, converter)
	{
		var initialValue = inbound(name, type, converter);

		if (!NS)
		{
			NS = Elm.Native.Signal.make(localRuntime);
		}
		var signal = NS.input('inbound-port-' + name, initialValue);

		function send(jsValue)
		{
			var elmValue = jsToElm(name, type, converter, jsValue);
			setTimeout(function() {
				localRuntime.notify(signal.id, elmValue);
			}, 0);
		}

		localRuntime.ports[name] = { send: send };

		return signal;
	}


	function jsToElm(name, type, converter, value)
	{
		try
		{
			return converter(value);
		}
		catch(e)
		{
			throw new Error(
				"Port Error:\n" +
				"Regarding the port named '" + name + "' with type:\n\n" +
				"    " + type.split('\n').join('\n        ') + "\n\n" +
				"You just sent the value:\n\n" +
				"    " + JSON.stringify(value) + "\n\n" +
				"but it cannot be converted to the necessary type.\n" +
				e.message
			);
		}
	}


	// OUTBOUND

	function outbound(name, converter, elmValue)
	{
		localRuntime.ports[name] = converter(elmValue);
	}


	function outboundSignal(name, converter, signal)
	{
		var subscribers = [];

		function subscribe(handler)
		{
			subscribers.push(handler);
		}
		function unsubscribe(handler)
		{
			subscribers.pop(subscribers.indexOf(handler));
		}

		function notify(elmValue)
		{
			var jsValue = converter(elmValue);
			var len = subscribers.length;
			for (var i = 0; i < len; ++i)
			{
				subscribers[i](jsValue);
			}
		}

		if (!NS)
		{
			NS = Elm.Native.Signal.make(localRuntime);
		}
		NS.output('outbound-port-' + name, notify, signal);

		localRuntime.ports[name] = {
			subscribe: subscribe,
			unsubscribe: unsubscribe
		};

		return signal;
	}


	return localRuntime.Native.Port.values = {
		inbound: inbound,
		outbound: outbound,
		inboundSignal: inboundSignal,
		outboundSignal: outboundSignal
	};
};


if (!Elm.fullscreen) {

	(function() {
		'use strict';

		var Display = {
			FULLSCREEN: 0,
			COMPONENT: 1,
			NONE: 2
		};

		Elm.fullscreen = function(module, args)
		{
			var container = document.createElement('div');
			document.body.appendChild(container);
			return init(Display.FULLSCREEN, container, module, args || {});
		};

		Elm.embed = function(module, container, args)
		{
			var tag = container.tagName;
			if (tag !== 'DIV')
			{
				throw new Error('Elm.node must be given a DIV, not a ' + tag + '.');
			}
			return init(Display.COMPONENT, container, module, args || {});
		};

		Elm.worker = function(module, args)
		{
			return init(Display.NONE, {}, module, args || {});
		};

		function init(display, container, module, args, moduleToReplace)
		{
			// defining state needed for an instance of the Elm RTS
			var inputs = [];

			/* OFFSET
			 * Elm's time traveling debugger lets you pause time. This means
			 * "now" may be shifted a bit into the past. By wrapping Date.now()
			 * we can manage this.
			 */
			var timer = {
				programStart: Date.now(),
				now: function()
				{
					return Date.now();
				}
			};

			var updateInProgress = false;
			function notify(id, v)
			{
				if (updateInProgress)
				{
					throw new Error(
						'The notify function has been called synchronously!\n' +
						'This can lead to frames being dropped.\n' +
						'Definitely report this to <https://github.com/elm-lang/Elm/issues>\n');
				}
				updateInProgress = true;
				var timestep = timer.now();
				for (var i = inputs.length; i--; )
				{
					inputs[i].notify(timestep, id, v);
				}
				updateInProgress = false;
			}
			function setTimeout(func, delay)
			{
				return window.setTimeout(func, delay);
			}

			var listeners = [];
			function addListener(relevantInputs, domNode, eventName, func)
			{
				domNode.addEventListener(eventName, func);
				var listener = {
					relevantInputs: relevantInputs,
					domNode: domNode,
					eventName: eventName,
					func: func
				};
				listeners.push(listener);
			}

			var argsTracker = {};
			for (var name in args)
			{
				argsTracker[name] = {
					value: args[name],
					used: false
				};
			}

			// create the actual RTS. Any impure modules will attach themselves to this
			// object. This permits many Elm programs to be embedded per document.
			var elm = {
				notify: notify,
				setTimeout: setTimeout,
				node: container,
				addListener: addListener,
				inputs: inputs,
				timer: timer,
				argsTracker: argsTracker,
				ports: {},

				isFullscreen: function() { return display === Display.FULLSCREEN; },
				isEmbed: function() { return display === Display.COMPONENT; },
				isWorker: function() { return display === Display.NONE; }
			};

			function swap(newModule)
			{
				removeListeners(listeners);
				var div = document.createElement('div');
				var newElm = init(display, div, newModule, args, elm);
				inputs = [];
				// elm.swap = newElm.swap;
				return newElm;
			}

			function dispose()
			{
				removeListeners(listeners);
				inputs = [];
			}

			var Module = {};
			try
			{
				Module = module.make(elm);
				checkInputs(elm);
			}
			catch (error)
			{
				if (typeof container.appendChild == 'undefined')
				{
					console.log(error.message);
				}
				else
				{
					container.appendChild(errorNode(error.message));
				}
				throw error;
			}

			if (display !== Display.NONE)
			{
				var graphicsNode = initGraphics(elm, Module);
			}

			var rootNode = { kids: inputs };
			trimDeadNodes(rootNode);
			inputs = rootNode.kids;
			filterListeners(inputs, listeners);

			addReceivers(elm.ports);

			if (typeof moduleToReplace !== 'undefined')
			{
				hotSwap(moduleToReplace, elm);

				// rerender scene if graphics are enabled.
				if (typeof graphicsNode !== 'undefined')
				{
					graphicsNode.notify(0, true, 0);
				}
			}

			return {
				swap: swap,
				ports: elm.ports,
				dispose: dispose
			};
		};

		function checkInputs(elm)
		{
			var argsTracker = elm.argsTracker;
			for (var name in argsTracker)
			{
				if (!argsTracker[name].used)
				{
					throw new Error(
						"Port Error:\nYou provided an argument named '" + name +
						"' but there is no corresponding port!\n\n" +
						"Maybe add a port '" + name + "' to your Elm module?\n" +
						"Maybe remove the '" + name + "' argument from your initialization code in JS?"
					);
				}
			}
		}

		function errorNode(message)
		{
			var code = document.createElement('code');

			var lines = message.split('\n');
			code.appendChild(document.createTextNode(lines[0]));
			code.appendChild(document.createElement('br'));
			code.appendChild(document.createElement('br'));
			for (var i = 1; i < lines.length; ++i)
			{
				code.appendChild(document.createTextNode('\u00A0 \u00A0 ' + lines[i].replace(/  /g, '\u00A0 ')));
				code.appendChild(document.createElement('br'));
			}
			code.appendChild(document.createElement('br'));
			code.appendChild(document.createTextNode("Open the developer console for more details."));
			return code;
		}


		//// FILTER SIGNALS ////

		// TODO: move this code into the signal module and create a function
		// Signal.initializeGraph that actually instantiates everything.

		function filterListeners(inputs, listeners)
		{
			loop:
			for (var i = listeners.length; i--; )
			{
				var listener = listeners[i];
				for (var j = inputs.length; j--; )
				{
					if (listener.relevantInputs.indexOf(inputs[j].id) >= 0)
					{
						continue loop;
					}
				}
				listener.domNode.removeEventListener(listener.eventName, listener.func);
			}
		}

		function removeListeners(listeners)
		{
			for (var i = listeners.length; i--; )
			{
				var listener = listeners[i];
				listener.domNode.removeEventListener(listener.eventName, listener.func);
			}
		}

		// add receivers for built-in ports if they are defined
		function addReceivers(ports)
		{
			if ('title' in ports)
			{
				if (typeof ports.title === 'string')
				{
					document.title = ports.title;
				}
				else
				{
					ports.title.subscribe(function(v) { document.title = v; });
				}
			}
			if ('redirect' in ports)
			{
				ports.redirect.subscribe(function(v) {
					if (v.length > 0)
					{
						window.location = v;
					}
				});
			}
		}


		// returns a boolean representing whether the node is alive or not.
		function trimDeadNodes(node)
		{
			if (node.isOutput)
			{
				return true;
			}

			var liveKids = [];
			for (var i = node.kids.length; i--; )
			{
				var kid = node.kids[i];
				if (trimDeadNodes(kid))
				{
					liveKids.push(kid);
				}
			}
			node.kids = liveKids;

			return liveKids.length > 0;
		}


		////  RENDERING  ////

		function initGraphics(elm, Module)
		{
			if (!('main' in Module))
			{
				throw new Error("'main' is missing! What do I display?!");
			}

			var signalGraph = Module.main;

			// make sure the signal graph is actually a signal & extract the visual model
			if (!('notify' in signalGraph))
			{
				signalGraph = Elm.Signal.make(elm).constant(signalGraph);
			}
			var initialScene = signalGraph.value;

			// Figure out what the render functions should be
			var render;
			var update;
			if (initialScene.props)
			{
				var Element = Elm.Native.Graphics.Element.make(elm);
				render = Element.render;
				update = Element.updateAndReplace;
			}
			else
			{
				var VirtualDom = Elm.Native.VirtualDom.make(elm);
				render = VirtualDom.render;
				update = VirtualDom.updateAndReplace;
			}

			// Add the initialScene to the DOM
			var container = elm.node;
			var node = render(initialScene);
			while (container.firstChild)
			{
				container.removeChild(container.firstChild);
			}
			container.appendChild(node);

			var _requestAnimationFrame =
				typeof requestAnimationFrame !== 'undefined'
					? requestAnimationFrame
					: function(cb) { setTimeout(cb, 1000/60); }
					;

			// domUpdate is called whenever the main Signal changes.
			//
			// domUpdate and drawCallback implement a small state machine in order
			// to schedule only 1 draw per animation frame. This enforces that
			// once draw has been called, it will not be called again until the
			// next frame.
			//
			// drawCallback is scheduled whenever
			// 1. The state transitions from PENDING_REQUEST to EXTRA_REQUEST, or
			// 2. The state transitions from NO_REQUEST to PENDING_REQUEST
			//
			// Invariants:
			// 1. In the NO_REQUEST state, there is never a scheduled drawCallback.
			// 2. In the PENDING_REQUEST and EXTRA_REQUEST states, there is always exactly 1
			//    scheduled drawCallback.
			var NO_REQUEST = 0;
			var PENDING_REQUEST = 1;
			var EXTRA_REQUEST = 2;
			var state = NO_REQUEST;
			var savedScene = initialScene;
			var scheduledScene = initialScene;

			function domUpdate(newScene)
			{
				scheduledScene = newScene;

				switch (state)
				{
					case NO_REQUEST:
						_requestAnimationFrame(drawCallback);
						state = PENDING_REQUEST;
						return;
					case PENDING_REQUEST:
						state = PENDING_REQUEST;
						return;
					case EXTRA_REQUEST:
						state = PENDING_REQUEST;
						return;
				}
			}

			function drawCallback()
			{
				switch (state)
				{
					case NO_REQUEST:
						// This state should not be possible. How can there be no
						// request, yet somehow we are actively fulfilling a
						// request?
						throw new Error(
							"Unexpected draw callback.\n" +
							"Please report this to <https://github.com/elm-lang/core/issues>."
						);

					case PENDING_REQUEST:
						// At this point, we do not *know* that another frame is
						// needed, but we make an extra request to rAF just in
						// case. It's possible to drop a frame if rAF is called
						// too late, so we just do it preemptively.
						_requestAnimationFrame(drawCallback);
						state = EXTRA_REQUEST;

						// There's also stuff we definitely need to draw.
						draw();
						return;

					case EXTRA_REQUEST:
						// Turns out the extra request was not needed, so we will
						// stop calling rAF. No reason to call it all the time if
						// no one needs it.
						state = NO_REQUEST;
						return;
				}
			}

			function draw()
			{
				update(elm.node.firstChild, savedScene, scheduledScene);
				if (elm.Native.Window)
				{
					elm.Native.Window.values.resizeIfNeeded();
				}
				savedScene = scheduledScene;
			}

			var renderer = Elm.Native.Signal.make(elm).output('main', domUpdate, signalGraph);

			// must check for resize after 'renderer' is created so
			// that changes show up.
			if (elm.Native.Window)
			{
				elm.Native.Window.values.resizeIfNeeded();
			}

			return renderer;
		}

		//// HOT SWAPPING ////

		// Returns boolean indicating if the swap was successful.
		// Requires that the two signal graphs have exactly the same
		// structure.
		function hotSwap(from, to)
		{
			function similar(nodeOld,nodeNew)
			{
				if (nodeOld.id !== nodeNew.id)
				{
					return false;
				}
				if (nodeOld.isOutput)
				{
					return nodeNew.isOutput;
				}
				return nodeOld.kids.length === nodeNew.kids.length;
			}
			function swap(nodeOld,nodeNew)
			{
				nodeNew.value = nodeOld.value;
				return true;
			}
			var canSwap = depthFirstTraversals(similar, from.inputs, to.inputs);
			if (canSwap)
			{
				depthFirstTraversals(swap, from.inputs, to.inputs);
			}
			from.node.parentNode.replaceChild(to.node, from.node);

			return canSwap;
		}

		// Returns false if the node operation f ever fails.
		function depthFirstTraversals(f, queueOld, queueNew)
		{
			if (queueOld.length !== queueNew.length)
			{
				return false;
			}
			queueOld = queueOld.slice(0);
			queueNew = queueNew.slice(0);

			var seen = [];
			while (queueOld.length > 0 && queueNew.length > 0)
			{
				var nodeOld = queueOld.pop();
				var nodeNew = queueNew.pop();
				if (seen.indexOf(nodeOld.id) < 0)
				{
					if (!f(nodeOld, nodeNew))
					{
						return false;
					}
					queueOld = queueOld.concat(nodeOld.kids || []);
					queueNew = queueNew.concat(nodeNew.kids || []);
					seen.push(nodeOld.id);
				}
			}
			return true;
		}
	}());

	function F2(fun)
	{
		function wrapper(a) { return function(b) { return fun(a,b) } }
		wrapper.arity = 2;
		wrapper.func = fun;
		return wrapper;
	}

	function F3(fun)
	{
		function wrapper(a) {
			return function(b) { return function(c) { return fun(a,b,c) }}
		}
		wrapper.arity = 3;
		wrapper.func = fun;
		return wrapper;
	}

	function F4(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return fun(a,b,c,d) }}}
		}
		wrapper.arity = 4;
		wrapper.func = fun;
		return wrapper;
	}

	function F5(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return fun(a,b,c,d,e) }}}}
		}
		wrapper.arity = 5;
		wrapper.func = fun;
		return wrapper;
	}

	function F6(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return fun(a,b,c,d,e,f) }}}}}
		}
		wrapper.arity = 6;
		wrapper.func = fun;
		return wrapper;
	}

	function F7(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return function(g) { return fun(a,b,c,d,e,f,g) }}}}}}
		}
		wrapper.arity = 7;
		wrapper.func = fun;
		return wrapper;
	}

	function F8(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return function(g) { return function(h) {
			return fun(a,b,c,d,e,f,g,h)}}}}}}}
		}
		wrapper.arity = 8;
		wrapper.func = fun;
		return wrapper;
	}

	function F9(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return function(g) { return function(h) { return function(i) {
			return fun(a,b,c,d,e,f,g,h,i) }}}}}}}}
		}
		wrapper.arity = 9;
		wrapper.func = fun;
		return wrapper;
	}

	function A2(fun,a,b)
	{
		return fun.arity === 2
			? fun.func(a,b)
			: fun(a)(b);
	}
	function A3(fun,a,b,c)
	{
		return fun.arity === 3
			? fun.func(a,b,c)
			: fun(a)(b)(c);
	}
	function A4(fun,a,b,c,d)
	{
		return fun.arity === 4
			? fun.func(a,b,c,d)
			: fun(a)(b)(c)(d);
	}
	function A5(fun,a,b,c,d,e)
	{
		return fun.arity === 5
			? fun.func(a,b,c,d,e)
			: fun(a)(b)(c)(d)(e);
	}
	function A6(fun,a,b,c,d,e,f)
	{
		return fun.arity === 6
			? fun.func(a,b,c,d,e,f)
			: fun(a)(b)(c)(d)(e)(f);
	}
	function A7(fun,a,b,c,d,e,f,g)
	{
		return fun.arity === 7
			? fun.func(a,b,c,d,e,f,g)
			: fun(a)(b)(c)(d)(e)(f)(g);
	}
	function A8(fun,a,b,c,d,e,f,g,h)
	{
		return fun.arity === 8
			? fun.func(a,b,c,d,e,f,g,h)
			: fun(a)(b)(c)(d)(e)(f)(g)(h);
	}
	function A9(fun,a,b,c,d,e,f,g,h,i)
	{
		return fun.arity === 9
			? fun.func(a,b,c,d,e,f,g,h,i)
			: fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
	}
}

Elm.Native.Show = {};
Elm.Native.Show.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Show = localRuntime.Native.Show || {};
	if (localRuntime.Native.Show.values)
	{
		return localRuntime.Native.Show.values;
	}

	var _Array;
	var Dict;
	var List;
	var Utils = Elm.Native.Utils.make(localRuntime);

	var toString = function(v)
	{
		var type = typeof v;
		if (type === "function")
		{
			var name = v.func ? v.func.name : v.name;
			return '<function' + (name === '' ? '' : ': ') + name + '>';
		}
		else if (type === "boolean")
		{
			return v ? "True" : "False";
		}
		else if (type === "number")
		{
			return v + "";
		}
		else if ((v instanceof String) && v.isChar)
		{
			return "'" + addSlashes(v, true) + "'";
		}
		else if (type === "string")
		{
			return '"' + addSlashes(v, false) + '"';
		}
		else if (type === "object" && '_' in v && probablyPublic(v))
		{
			var output = [];
			for (var k in v._)
			{
				for (var i = v._[k].length; i--; )
				{
					output.push(k + " = " + toString(v._[k][i]));
				}
			}
			for (var k in v)
			{
				if (k === '_') continue;
				output.push(k + " = " + toString(v[k]));
			}
			if (output.length === 0)
			{
				return "{}";
			}
			return "{ " + output.join(", ") + " }";
		}
		else if (type === "object" && 'ctor' in v)
		{
			if (v.ctor.substring(0,6) === "_Tuple")
			{
				var output = [];
				for (var k in v)
				{
					if (k === 'ctor') continue;
					output.push(toString(v[k]));
				}
				return "(" + output.join(",") + ")";
			}
			else if (v.ctor === "_Array")
			{
				if (!_Array)
				{
					_Array = Elm.Array.make(localRuntime);
				}
				var list = _Array.toList(v);
				return "Array.fromList " + toString(list);
			}
			else if (v.ctor === "::")
			{
				var output = '[' + toString(v._0);
				v = v._1;
				while (v.ctor === "::")
				{
					output += "," + toString(v._0);
					v = v._1;
				}
				return output + ']';
			}
			else if (v.ctor === "[]")
			{
				return "[]";
			}
			else if (v.ctor === "RBNode" || v.ctor === "RBEmpty")
			{
				if (!Dict)
				{
					Dict = Elm.Dict.make(localRuntime);
				}
				if (!List)
				{
					List = Elm.List.make(localRuntime);
				}
				var list = Dict.toList(v);
				var name = "Dict";
				if (list.ctor === "::" && list._0._1.ctor === "_Tuple0")
				{
					name = "Set";
					list = A2(List.map, function(x){return x._0}, list);
				}
				return name + ".fromList " + toString(list);
			}
			else if (v.ctor.slice(0,5) === "Text:")
			{
				return '<text>'
			}
			else
			{
				var output = "";
				for (var i in v)
				{
					if (i === 'ctor') continue;
					var str = toString(v[i]);
					var parenless = str[0] === '{' || str[0] === '<' || str.indexOf(' ') < 0;
					output += ' ' + (parenless ? str : '(' + str + ')');
				}
				return v.ctor + output;
			}
		}
		if (type === 'object' && 'notify' in v && 'id' in v)
		{
			return '<Signal>';
		}
		return "<internal structure>";
	};

	function addSlashes(str, isChar)
	{
		var s = str.replace(/\\/g, '\\\\')
				  .replace(/\n/g, '\\n')
				  .replace(/\t/g, '\\t')
				  .replace(/\r/g, '\\r')
				  .replace(/\v/g, '\\v')
				  .replace(/\0/g, '\\0');
		if (isChar)
		{
			return s.replace(/\'/g, "\\'")
		}
		else
		{
			return s.replace(/\"/g, '\\"');
		}
	}

	function probablyPublic(v)
	{
		var keys = Object.keys(v);
		var len = keys.length;
		if (len === 3
			&& 'props' in v
			&& 'element' in v)
		{
			return false;
		}
		else if (len === 5
			&& 'horizontal' in v
			&& 'vertical' in v
			&& 'x' in v
			&& 'y' in v)
		{
			return false;
		}
		else if (len === 7
			&& 'theta' in v
			&& 'scale' in v
			&& 'x' in v
			&& 'y' in v
			&& 'alpha' in v
			&& 'form' in v)
		{
			return false;
		}
		return true;
	}

	return localRuntime.Native.Show.values = {
		toString: toString
	};
};

Elm.Native.Signal = {};
Elm.Native.Signal.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Signal = localRuntime.Native.Signal || {};
	if (localRuntime.Native.Signal.values)
	{
		return localRuntime.Native.Signal.values;
	}


	var Task = Elm.Native.Task.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	function broadcastToKids(node, timestamp, update)
	{
		var kids = node.kids;
		for (var i = kids.length; i--; )
		{
			kids[i].notify(timestamp, update, node.id);
		}
	}


	// INPUT

	function input(name, base)
	{
		var node = {
			id: Utils.guid(),
			name: 'input-' + name,
			value: base,
			parents: [],
			kids: []
		};

		node.notify = function(timestamp, targetId, value) {
			var update = targetId === node.id;
			if (update)
			{
				node.value = value;
			}
			broadcastToKids(node, timestamp, update);
			return update;
		};

		localRuntime.inputs.push(node);

		return node;
	}

	function constant(value)
	{
		return input('constant', value);
	}


	// MAILBOX

	function mailbox(base)
	{
		var signal = input('mailbox', base);

		function send(value) {
			return Task.asyncFunction(function(callback) {
				localRuntime.setTimeout(function() {
					localRuntime.notify(signal.id, value);
				}, 0);
				callback(Task.succeed(Utils.Tuple0));
			});
		}

		return {
			_: {},
			signal: signal,
			address: {
				ctor: 'Address',
				_0: send
			}
		};
	}

	function sendMessage(message)
	{
		Task.perform(message._0);
	}


	// OUTPUT

	function output(name, handler, parent)
	{
		var node = {
			id: Utils.guid(),
			name: 'output-' + name,
			parents: [parent],
			isOutput: true
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentUpdate)
			{
				handler(parent.value);
			}
		};

		parent.kids.push(node);

		return node;
	}


	// MAP

	function mapMany(refreshValue, args)
	{
		var node = {
			id: Utils.guid(),
			name: 'map' + args.length,
			value: refreshValue(),
			parents: args,
			kids: []
		};

		var numberOfParents = args.length;
		var count = 0;
		var update = false;

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			++count;

			update = update || parentUpdate;

			if (count === numberOfParents)
			{
				if (update)
				{
					node.value = refreshValue();
				}
				broadcastToKids(node, timestamp, update);
				update = false;
				count = 0;
			}
		};

		for (var i = numberOfParents; i--; )
		{
			args[i].kids.push(node);
		}

		return node;
	}


	function map(func, a)
	{
		function refreshValue()
		{
			return func(a.value);
		}
		return mapMany(refreshValue, [a]);
	}


	function map2(func, a, b)
	{
		function refreshValue()
		{
			return A2( func, a.value, b.value );
		}
		return mapMany(refreshValue, [a,b]);
	}


	function map3(func, a, b, c)
	{
		function refreshValue()
		{
			return A3( func, a.value, b.value, c.value );
		}
		return mapMany(refreshValue, [a,b,c]);
	}


	function map4(func, a, b, c, d)
	{
		function refreshValue()
		{
			return A4( func, a.value, b.value, c.value, d.value );
		}
		return mapMany(refreshValue, [a,b,c,d]);
	}


	function map5(func, a, b, c, d, e)
	{
		function refreshValue()
		{
			return A5( func, a.value, b.value, c.value, d.value, e.value );
		}
		return mapMany(refreshValue, [a,b,c,d,e]);
	}



	// FOLD

	function foldp(update, state, signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'foldp',
			parents: [signal],
			kids: [],
			value: state
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentUpdate)
			{
				node.value = A2( update, signal.value, node.value );
			}
			broadcastToKids(node, timestamp, parentUpdate);
		};

		signal.kids.push(node);

		return node;
	}


	// TIME

	function timestamp(signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'timestamp',
			value: Utils.Tuple2(localRuntime.timer.programStart, signal.value),
			parents: [signal],
			kids: []
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentUpdate)
			{
				node.value = Utils.Tuple2(timestamp, signal.value);
			}
			broadcastToKids(node, timestamp, parentUpdate);
		};

		signal.kids.push(node);

		return node;
	}


	function delay(time, signal)
	{
		var delayed = input('delay-input-' + time, signal.value);

		function handler(value)
		{
			setTimeout(function() {
				localRuntime.notify(delayed.id, value);
			}, time);
		}

		output('delay-output-' + time, handler, signal);

		return delayed;
	}


	// MERGING

	function genericMerge(tieBreaker, leftStream, rightStream)
	{
		var node = {
			id: Utils.guid(),
			name: 'merge',
			value: A2(tieBreaker, leftStream.value, rightStream.value),
			parents: [leftStream, rightStream],
			kids: []
		};

		var left = { touched: false, update: false, value: null };
		var right = { touched: false, update: false, value: null };

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentID === leftStream.id)
			{
				left.touched = true;
				left.update = parentUpdate;
				left.value = leftStream.value;
			}
			if (parentID === rightStream.id)
			{
				right.touched = true;
				right.update = parentUpdate;
				right.value = rightStream.value;
			}

			if (left.touched && right.touched)
			{
				var update = false;
				if (left.update && right.update)
				{
					node.value = A2(tieBreaker, left.value, right.value);
					update = true;
				}
				else if (left.update)
				{
					node.value = left.value;
					update = true;
				}
				else if (right.update)
				{
					node.value = right.value;
					update = true;
				}
				left.touched = false;
				right.touched = false;

				broadcastToKids(node, timestamp, update);
			}
		};

		leftStream.kids.push(node);
		rightStream.kids.push(node);

		return node;
	}


	// FILTERING

	function filterMap(toMaybe, base, signal)
	{
		var maybe = toMaybe(signal.value);
		var node = {
			id: Utils.guid(),
			name: 'filterMap',
			value: maybe.ctor === 'Nothing' ? base : maybe._0,
			parents: [signal],
			kids: []
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			var update = false;
			if (parentUpdate)
			{
				var maybe = toMaybe(signal.value);
				if (maybe.ctor === 'Just')
				{
					update = true;
					node.value = maybe._0;
				}
			}
			broadcastToKids(node, timestamp, update);
		};

		signal.kids.push(node);

		return node;
	}


	// SAMPLING

	function sampleOn(ticker, signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'sampleOn',
			value: signal.value,
			parents: [ticker, signal],
			kids: []
		};

		var signalTouch = false;
		var tickerTouch = false;
		var tickerUpdate = false;

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentID === ticker.id)
			{
				tickerTouch = true;
				tickerUpdate = parentUpdate;
			}
			if (parentID === signal.id)
			{
				signalTouch = true;
			}

			if (tickerTouch && signalTouch)
			{
				if (tickerUpdate)
				{
					node.value = signal.value;
				}
				tickerTouch = false;
				signalTouch = false;

				broadcastToKids(node, timestamp, tickerUpdate);
			}
		};

		ticker.kids.push(node);
		signal.kids.push(node);

		return node;
	}


	// DROP REPEATS

	function dropRepeats(signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'dropRepeats',
			value: signal.value,
			parents: [signal],
			kids: []
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			var update = false;
			if (parentUpdate && !Utils.eq(node.value, signal.value))
			{
				node.value = signal.value;
				update = true;
			}
			broadcastToKids(node, timestamp, update);
		};

		signal.kids.push(node);

		return node;
	}


	return localRuntime.Native.Signal.values = {
		input: input,
		constant: constant,
		mailbox: mailbox,
		sendMessage: sendMessage,
		output: output,
		map: F2(map),
		map2: F3(map2),
		map3: F4(map3),
		map4: F5(map4),
		map5: F6(map5),
		foldp: F3(foldp),
		genericMerge: F3(genericMerge),
		filterMap: F3(filterMap),
		sampleOn: F2(sampleOn),
		dropRepeats: dropRepeats,
		timestamp: timestamp,
		delay: F2(delay)
	};
};

Elm.Native.String = {};
Elm.Native.String.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.String = localRuntime.Native.String || {};
	if (localRuntime.Native.String.values)
	{
		return localRuntime.Native.String.values;
	}
	if ('values' in Elm.Native.String)
	{
		return localRuntime.Native.String.values = Elm.Native.String.values;
	}


	var Char = Elm.Char.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);
	var Result = Elm.Result.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);

	function isEmpty(str)
	{
		return str.length === 0;
	}
	function cons(chr,str)
	{
		return chr + str;
	}
	function uncons(str)
	{
		var hd;
		return (hd = str[0])
			? Maybe.Just(Utils.Tuple2(Utils.chr(hd), str.slice(1)))
			: Maybe.Nothing;
	}
	function append(a,b)
	{
		return a + b;
	}
	function concat(strs)
	{
		return List.toArray(strs).join('');
	}
	function length(str)
	{
		return str.length;
	}
	function map(f,str)
	{
		var out = str.split('');
		for (var i = out.length; i--; )
		{
			out[i] = f(Utils.chr(out[i]));
		}
		return out.join('');
	}
	function filter(pred,str)
	{
		return str.split('').map(Utils.chr).filter(pred).join('');
	}
	function reverse(str)
	{
		return str.split('').reverse().join('');
	}
	function foldl(f,b,str)
	{
		var len = str.length;
		for (var i = 0; i < len; ++i)
		{
			b = A2(f, Utils.chr(str[i]), b);
		}
		return b;
	}
	function foldr(f,b,str)
	{
		for (var i = str.length; i--; )
		{
			b = A2(f, Utils.chr(str[i]), b);
		}
		return b;
	}

	function split(sep, str)
	{
		return List.fromArray(str.split(sep));
	}
	function join(sep, strs)
	{
		return List.toArray(strs).join(sep);
	}
	function repeat(n, str)
	{
		var result = '';
		while (n > 0)
		{
			if (n & 1)
			{
				result += str;
			}
			n >>= 1, str += str;
		}
		return result;
	}

	function slice(start, end, str)
	{
		return str.slice(start,end);
	}
	function left(n, str)
	{
		return n < 1 ? "" : str.slice(0,n);
	}
	function right(n, str)
	{
		return n < 1 ? "" : str.slice(-n);
	}
	function dropLeft(n, str)
	{
		return n < 1 ? str : str.slice(n);
	}
	function dropRight(n, str)
	{
		return n < 1 ? str : str.slice(0,-n);
	}

	function pad(n,chr,str)
	{
		var half = (n - str.length) / 2;
		return repeat(Math.ceil(half),chr) + str + repeat(half|0,chr);
	}
	function padRight(n,chr,str)
	{
		return str + repeat(n - str.length, chr);
	}
	function padLeft(n,chr,str)
	{
		return repeat(n - str.length, chr) + str;
	}

	function trim(str)
	{
		return str.trim();
	}
	function trimLeft(str)
	{
		return str.trimLeft();
	}
	function trimRight(str)
	{
		return str.trimRight();
	}

	function words(str)
	{
		return List.fromArray(str.trim().split(/\s+/g));
	}
	function lines(str)
	{
		return List.fromArray(str.split(/\r\n|\r|\n/g));
	}

	function toUpper(str)
	{
		return str.toUpperCase();
	}
	function toLower(str)
	{
		return str.toLowerCase();
	}

	function any(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (pred(Utils.chr(str[i])))
			{
				return true;
			}
		}
		return false;
	}
	function all(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (!pred(Utils.chr(str[i])))
			{
				return false;
			}
		}
		return true;
	}

	function contains(sub, str)
	{
		return str.indexOf(sub) > -1;
	}
	function startsWith(sub, str)
	{
		return str.indexOf(sub) === 0;
	}
	function endsWith(sub, str)
	{
		return str.length >= sub.length &&
			str.lastIndexOf(sub) === str.length - sub.length;
	}
	function indexes(sub, str)
	{
		var subLen = sub.length;
		var i = 0;
		var is = [];
		while ((i = str.indexOf(sub, i)) > -1)
		{
			is.push(i);
			i = i + subLen;
		}
		return List.fromArray(is);
	}

	function toInt(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return Result.Err("could not convert string '" + s + "' to an Int" );
		}
		var start = 0;
		if (s[0] == '-')
		{
			if (len === 1)
			{
				return Result.Err("could not convert string '" + s + "' to an Int" );
			}
			start = 1;
		}
		for (var i = start; i < len; ++i)
		{
			if (!Char.isDigit(s[i]))
			{
				return Result.Err("could not convert string '" + s + "' to an Int" );
			}
		}
		return Result.Ok(parseInt(s, 10));
	}

	function toFloat(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return Result.Err("could not convert string '" + s + "' to a Float" );
		}
		var start = 0;
		if (s[0] == '-')
		{
			if (len === 1)
			{
				return Result.Err("could not convert string '" + s + "' to a Float" );
			}
			start = 1;
		}
		var dotCount = 0;
		for (var i = start; i < len; ++i)
		{
			if (Char.isDigit(s[i]))
			{
				continue;
			}
			if (s[i] === '.')
			{
				dotCount += 1;
				if (dotCount <= 1)
				{
					continue;
				}
			}
			return Result.Err("could not convert string '" + s + "' to a Float" );
		}
		return Result.Ok(parseFloat(s));
	}

	function toList(str)
	{
		return List.fromArray(str.split('').map(Utils.chr));
	}
	function fromList(chars)
	{
		return List.toArray(chars).join('');
	}

	return Elm.Native.String.values = {
		isEmpty: isEmpty,
		cons: F2(cons),
		uncons: uncons,
		append: F2(append),
		concat: concat,
		length: length,
		map: F2(map),
		filter: F2(filter),
		reverse: reverse,
		foldl: F3(foldl),
		foldr: F3(foldr),

		split: F2(split),
		join: F2(join),
		repeat: F2(repeat),

		slice: F3(slice),
		left: F2(left),
		right: F2(right),
		dropLeft: F2(dropLeft),
		dropRight: F2(dropRight),

		pad: F3(pad),
		padLeft: F3(padLeft),
		padRight: F3(padRight),

		trim: trim,
		trimLeft: trimLeft,
		trimRight: trimRight,

		words: words,
		lines: lines,

		toUpper: toUpper,
		toLower: toLower,

		any: F2(any),
		all: F2(all),

		contains: F2(contains),
		startsWith: F2(startsWith),
		endsWith: F2(endsWith),
		indexes: F2(indexes),

		toInt: toInt,
		toFloat: toFloat,
		toList: toList,
		fromList: fromList
	};
};

Elm.Native.Task = {};
Elm.Native.Task.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Task = localRuntime.Native.Task || {};
	if (localRuntime.Native.Task.values)
	{
		return localRuntime.Native.Task.values;
	}

	var Result = Elm.Result.make(localRuntime);
	var Signal;
	var Utils = Elm.Native.Utils.make(localRuntime);


	// CONSTRUCTORS

	function succeed(value)
	{
		return {
			tag: 'Succeed',
			value: value
		};
	}

	function fail(error)
	{
		return {
			tag: 'Fail',
			value: error
		};
	}

	function asyncFunction(func)
	{
		return {
			tag: 'Async',
			asyncFunction: func
		};
	}

	function andThen(task, callback)
	{
		return {
			tag: 'AndThen',
			task: task,
			callback: callback
		};
	}

	function catch_(task, callback)
	{
		return {
			tag: 'Catch',
			task: task,
			callback: callback
		};
	}


	// RUNNER

	function perform(task) {
		runTask({ task: task }, function() {});
	}

	function performSignal(name, signal)
	{
		var workQueue = [];

		function onComplete()
		{
			workQueue.shift();

			setTimeout(function() {
				if (workQueue.length > 0)
				{
					runTask(workQueue[0], onComplete);
				}
			}, 0);
		}

		function register(task)
		{
			var root = { task: task };
			workQueue.push(root);
			if (workQueue.length === 1)
			{
				runTask(root, onComplete);
			}
		}

		if (!Signal)
		{
			Signal = Elm.Native.Signal.make(localRuntime);
		}
		Signal.output('perform-tasks-' + name, register, signal);

		register(signal.value);

		return signal;
	}

	function mark(status, task)
	{
		return { status: status, task: task };
	}

	function runTask(root, onComplete)
	{
		var result = mark('runnable', root.task);
		while (result.status === 'runnable')
		{
			result = stepTask(onComplete, root, result.task);
		}

		if (result.status === 'done')
		{
			root.task = result.task;
			onComplete();
		}

		if (result.status === 'blocked')
		{
			root.task = result.task;
		}
	}

	function stepTask(onComplete, root, task)
	{
		var tag = task.tag;

		if (tag === 'Succeed' || tag === 'Fail')
		{
			return mark('done', task);
		}

		if (tag === 'Async')
		{
			var placeHolder = {};
			var couldBeSync = true;
			var wasSync = false;

			task.asyncFunction(function(result) {
				placeHolder.tag = result.tag;
				placeHolder.value = result.value;
				if (couldBeSync)
				{
					wasSync = true;
				}
				else
				{
					runTask(root, onComplete);
				}
			});
			couldBeSync = false;
			return mark(wasSync ? 'done' : 'blocked', placeHolder);
		}

		if (tag === 'AndThen' || tag === 'Catch')
		{
			var result = mark('runnable', task.task);
			while (result.status === 'runnable')
			{
				result = stepTask(onComplete, root, result.task);
			}

			if (result.status === 'done')
			{
				var activeTask = result.task;
				var activeTag = activeTask.tag;

				var succeedChain = activeTag === 'Succeed' && tag === 'AndThen';
				var failChain = activeTag === 'Fail' && tag === 'Catch';

				return (succeedChain || failChain)
					? mark('runnable', task.callback(activeTask.value))
					: mark('runnable', activeTask);
			}
			if (result.status === 'blocked')
			{
				return mark('blocked', {
					tag: tag,
					task: result.task,
					callback: task.callback
				});
			}
		}
	}


	// THREADS

	function sleep(time) {
		return asyncFunction(function(callback) {
			setTimeout(function() {
				callback(succeed(Utils.Tuple0));
			}, time);
		});
	}

	function spawn(task) {
		return asyncFunction(function(callback) {
			var id = setTimeout(function() {
				perform(task);
			}, 0);
			callback(succeed(id));
		});
	}


	return localRuntime.Native.Task.values = {
		succeed: succeed,
		fail: fail,
		asyncFunction: asyncFunction,
		andThen: F2(andThen),
		catch_: F2(catch_),
		perform: perform,
		performSignal: performSignal,
		spawn: spawn,
		sleep: sleep
	};
};

Elm.Native.Text = {};
Elm.Native.Text.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Text = localRuntime.Native.Text || {};
	if (localRuntime.Native.Text.values)
	{
		return localRuntime.Native.Text.values;
	}

	var toCss = Elm.Native.Color.make(localRuntime).toCss;
	var List = Elm.Native.List.make(localRuntime);


	// CONSTRUCTORS

	function fromString(str)
	{
		return {
			ctor: 'Text:Text',
			_0: str
		};
	}

	function append(a, b)
	{
		return {
			ctor: 'Text:Append',
			_0: a,
			_1: b
		};
	}

	function addMeta(field, value, text)
	{
		var newProps = {};
		var newText = {
			ctor: 'Text:Meta',
			_0: newProps,
			_1: text
		};

		if (text.ctor === 'Text:Meta')
		{
			newText._1 = text._1;
			var props = text._0;
			for (var i = metaKeys.length; i--; )
			{
				var key = metaKeys[i];
				var val = props[key];
				if (val)
				{
					newProps[key] = val;
				}
			}
		}
		newProps[field] = value;
		return newText;
	}

	var metaKeys = [
		'font-size',
		'font-family',
		'font-style',
		'font-weight',
		'href',
		'text-decoration',
		'color'
	];


	// conversions from Elm values to CSS

	function toTypefaces(list)
	{
		var typefaces = List.toArray(list);
		for (var i = typefaces.length; i--; )
		{
			var typeface = typefaces[i];
			if (typeface.indexOf(' ') > -1)
			{
				typefaces[i] = "'" + typeface + "'";
			}
		}
		return typefaces.join(',');
	}

	function toLine(line)
	{
		var ctor = line.ctor;
		return ctor === 'Under'
			? 'underline'
			: ctor === 'Over'
				? 'overline'
				: 'line-through';
	}

	// setting styles of Text

	function style(style, text)
	{
		var newText = addMeta('color', toCss(style.color), text);
		var props = newText._0;

		if (style.typeface.ctor !== '[]')
		{
			props['font-family'] = toTypefaces(style.typeface);
		}
		if (style.height.ctor !== "Nothing")
		{
			props['font-size'] = style.height._0 + 'px';
		}
		if (style.bold)
		{
			props['font-weight'] = 'bold';
		}
		if (style.italic)
		{
			props['font-style'] = 'italic';
		}
		if (style.line.ctor !== 'Nothing')
		{
			props['text-decoration'] = toLine(style.line._0);
		}
		return newText;
	}

	function height(px, text)
	{
		return addMeta('font-size', px + 'px', text);
	}

	function typeface(names, text)
	{
		return addMeta('font-family', toTypefaces(names), text);
	}

	function monospace(text)
	{
		return addMeta('font-family', 'monospace', text);
	}

	function italic(text)
	{
		return addMeta('font-style', 'italic', text);
	}

	function bold(text)
	{
		return addMeta('font-weight', 'bold', text);
	}

	function link(href, text)
	{
		return addMeta('href', href, text);
	}

	function line(line, text)
	{
		return addMeta('text-decoration', toLine(line), text);
	}

	function color(color, text)
	{
		return addMeta('color', toCss(color), text);;
	}


	// RENDER

	function renderHtml(text)
	{
		var tag = text.ctor;
		if (tag === 'Text:Append')
		{
			return renderHtml(text._0) + renderHtml(text._1);
		}
		if (tag === 'Text:Text')
		{
			return properEscape(text._0);
		}
		if (tag === 'Text:Meta')
		{
			return renderMeta(text._0, renderHtml(text._1));
		}
	}

	function renderMeta(metas, string)
	{
		var href = metas['href'];
		if (href)
		{
			string = '<a href="' + href + '">' + string + '</a>';
		}
		var styles = '';
		for (var key in metas)
		{
			if (key === 'href')
			{
				continue;
			}
			styles += key + ':' + metas[key] + ';';
		}
		if (styles)
		{
			string = '<span style="' + styles + '">' + string + '</span>';
		}
		return string;
	}

	function properEscape(str)
	{
		if (str.length == 0)
		{
			return str;
		}
		str = str //.replace(/&/g,  "&#38;")
			.replace(/"/g,  '&#34;')
			.replace(/'/g,  "&#39;")
			.replace(/</g,  "&#60;")
			.replace(/>/g,  "&#62;");
		var arr = str.split('\n');
		for (var i = arr.length; i--; )
		{
			arr[i] = makeSpaces(arr[i]);
		}
		return arr.join('<br/>');
	}

	function makeSpaces(s)
	{
		if (s.length == 0)
		{
			return s;
		}
		var arr = s.split('');
		if (arr[0] == ' ')
		{
			arr[0] = "&nbsp;"
		}
		for (var i = arr.length; --i; )
		{
			if (arr[i][0] == ' ' && arr[i-1] == ' ')
			{
				arr[i-1] = arr[i-1] + arr[i];
				arr[i] = '';
			}
		}
		for (var i = arr.length; i--; )
		{
			if (arr[i].length > 1 && arr[i][0] == ' ')
			{
				var spaces = arr[i].split('');
				for (var j = spaces.length - 2; j >= 0; j -= 2)
				{
					spaces[j] = '&nbsp;';
				}
				arr[i] = spaces.join('');
			}
		}
		arr = arr.join('');
		if (arr[arr.length-1] === " ")
		{
			return arr.slice(0,-1) + '&nbsp;';
		}
		return arr;
	}


	return localRuntime.Native.Text.values = {
		fromString: fromString,
		append: F2(append),

		height: F2(height),
		italic: italic,
		bold: bold,
		line: F2(line),
		monospace: monospace,
		typeface: F2(typeface),
		color: F2(color),
		link: F2(link),
		style: F2(style),

		toTypefaces: toTypefaces,
		toLine: toLine,
		renderHtml: renderHtml
	};
};

Elm.Native.Time = {};
Elm.Native.Time.make = function(localRuntime)
{

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Time = localRuntime.Native.Time || {};
	if (localRuntime.Native.Time.values)
	{
		return localRuntime.Native.Time.values;
	}

	var NS = Elm.Native.Signal.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);


	// FRAMES PER SECOND

	function fpsWhen(desiredFPS, isOn)
	{
		var msPerFrame = 1000 / desiredFPS;
		var ticker = NS.input('fps-' + desiredFPS, null);

		function notifyTicker()
		{
			localRuntime.notify(ticker.id, null);
		}

		function firstArg(x, y)
		{
			return x;
		}

		// input fires either when isOn changes, or when ticker fires.
		// Its value is a tuple with the current timestamp, and the state of isOn
		var input = NS.timestamp(A3(NS.map2, F2(firstArg), NS.dropRepeats(isOn), ticker));

		var initialState = {
			isOn: false,
			time: localRuntime.timer.programStart,
			delta: 0
		};

		var timeoutId;

		function update(input,state)
		{
			var currentTime = input._0;
			var isOn = input._1;
			var wasOn = state.isOn;
			var previousTime = state.time;

			if (isOn)
			{
				timeoutId = localRuntime.setTimeout(notifyTicker, msPerFrame);
			}
			else if (wasOn)
			{
				clearTimeout(timeoutId);
			}

			return {
				isOn: isOn,
				time: currentTime,
				delta: (isOn && !wasOn) ? 0 : currentTime - previousTime
			};
		}

		return A2(
			NS.map,
			function(state) { return state.delta; },
			A3(NS.foldp, F2(update), update(input.value,initialState), input)
		);
	}


	// EVERY

	function every(t)
	{
		var ticker = NS.input('every-' + t, null);
		function tellTime()
		{
			localRuntime.notify(ticker.id, null);
		}
		var clock = A2( NS.map, fst, NS.timestamp(ticker) );
		setInterval(tellTime, t);
		return clock;
	}


	function fst(pair)
	{
		return pair._0;
	}


	function read(s)
	{
		var t = Date.parse(s);
		return isNaN(t) ? Maybe.Nothing : Maybe.Just(t);
	}

	return localRuntime.Native.Time.values = {
		fpsWhen: F2(fpsWhen),
		every: every,
		toDate: function(t) { return new window.Date(t); },
		read: read
	};

};

Elm.Native.Transform2D = {};
Elm.Native.Transform2D.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Transform2D = localRuntime.Native.Transform2D || {};
	if (localRuntime.Native.Transform2D.values)
	{
		return localRuntime.Native.Transform2D.values;
	}

	var A;
	if (typeof Float32Array === 'undefined')
	{
		A = function(arr)
		{
			this.length = arr.length;
			this[0] = arr[0];
			this[1] = arr[1];
			this[2] = arr[2];
			this[3] = arr[3];
			this[4] = arr[4];
			this[5] = arr[5];
		};
	}
	else
	{
		A = Float32Array;
	}

	// layout of matrix in an array is
	//
	//   | m11 m12 dx |
	//   | m21 m22 dy |
	//   |  0   0   1 |
	//
	//  new A([ m11, m12, dx, m21, m22, dy ])

	var identity = new A([1,0,0,0,1,0]);
	function matrix(m11, m12, m21, m22, dx, dy)
	{
		return new A([m11, m12, dx, m21, m22, dy]);
	}

	function rotation(t)
	{
		var c = Math.cos(t);
		var s = Math.sin(t);
		return new A([c, -s, 0, s, c, 0]);
	}

	function rotate(t,m)
	{
		var c = Math.cos(t);
		var s = Math.sin(t);
		var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4];
		return new A([m11*c + m12*s, -m11*s + m12*c, m[2],
					  m21*c + m22*s, -m21*s + m22*c, m[5]]);
	}
	/*
	function move(xy,m) {
		var x = xy._0;
		var y = xy._1;
		var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4];
		return new A([m11, m12, m11*x + m12*y + m[2],
					  m21, m22, m21*x + m22*y + m[5]]);
	}
	function scale(s,m) { return new A([m[0]*s, m[1]*s, m[2], m[3]*s, m[4]*s, m[5]]); }
	function scaleX(x,m) { return new A([m[0]*x, m[1], m[2], m[3]*x, m[4], m[5]]); }
	function scaleY(y,m) { return new A([m[0], m[1]*y, m[2], m[3], m[4]*y, m[5]]); }
	function reflectX(m) { return new A([-m[0], m[1], m[2], -m[3], m[4], m[5]]); }
	function reflectY(m) { return new A([m[0], -m[1], m[2], m[3], -m[4], m[5]]); }

	function transform(m11, m21, m12, m22, mdx, mdy, n) {
		var n11 = n[0], n12 = n[1], n21 = n[3], n22 = n[4], ndx = n[2], ndy = n[5];
		return new A([m11*n11 + m12*n21,
					  m11*n12 + m12*n22,
					  m11*ndx + m12*ndy + mdx,
					  m21*n11 + m22*n21,
					  m21*n12 + m22*n22,
					  m21*ndx + m22*ndy + mdy]);
	}
	*/
	function multiply(m, n)
	{
		var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4], mdx = m[2], mdy = m[5];
		var n11 = n[0], n12 = n[1], n21 = n[3], n22 = n[4], ndx = n[2], ndy = n[5];
		return new A([m11*n11 + m12*n21,
					  m11*n12 + m12*n22,
					  m11*ndx + m12*ndy + mdx,
					  m21*n11 + m22*n21,
					  m21*n12 + m22*n22,
					  m21*ndx + m22*ndy + mdy]);
	}

	return localRuntime.Native.Transform2D.values = {
		identity:identity,
		matrix:F6(matrix),
		rotation:rotation,
		multiply:F2(multiply)
		/*
		transform:F7(transform),
		rotate:F2(rotate),
		move:F2(move),
		scale:F2(scale),
		scaleX:F2(scaleX),
		scaleY:F2(scaleY),
		reflectX:reflectX,
		reflectY:reflectY
		*/
	};

};

Elm.Native = Elm.Native || {};
Elm.Native.Utils = {};
Elm.Native.Utils.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Utils = localRuntime.Native.Utils || {};
	if (localRuntime.Native.Utils.values)
	{
		return localRuntime.Native.Utils.values;
	}

	function eq(l,r)
	{
		var stack = [{'x': l, 'y': r}]
		while (stack.length > 0)
		{
			var front = stack.pop();
			var x = front.x;
			var y = front.y;
			if (x === y)
			{
				continue;
			}
			if (typeof x === "object")
			{
				var c = 0;
				for (var i in x)
				{
					++c;
					if (i in y)
					{
						if (i !== 'ctor')
						{
							stack.push({ 'x': x[i], 'y': y[i] });
						}
					}
					else
					{
						return false;
					}
				}
				if ('ctor' in x)
				{
					stack.push({'x': x.ctor, 'y': y.ctor});
				}
				if (c !== Object.keys(y).length)
				{
					return false;
				}
			}
			else if (typeof x === 'function')
			{
				throw new Error('Equality error: general function equality is ' +
								'undecidable, and therefore, unsupported');
			}
			else
			{
				return false;
			}
		}
		return true;
	}

	// code in Generate/JavaScript.hs depends on the particular
	// integer values assigned to LT, EQ, and GT
	var LT = -1, EQ = 0, GT = 1, ord = ['LT','EQ','GT'];

	function compare(x,y)
	{
		return {
			ctor: ord[cmp(x,y)+1]
		};
	}

	function cmp(x,y) {
		var ord;
		if (typeof x !== 'object')
		{
			return x === y ? EQ : x < y ? LT : GT;
		}
		else if (x.isChar)
		{
			var a = x.toString();
			var b = y.toString();
			return a === b
				? EQ
				: a < b
					? LT
					: GT;
		}
		else if (x.ctor === "::" || x.ctor === "[]")
		{
			while (true)
			{
				if (x.ctor === "[]" && y.ctor === "[]")
				{
					return EQ;
				}
				if (x.ctor !== y.ctor)
				{
					return x.ctor === '[]' ? LT : GT;
				}
				ord = cmp(x._0, y._0);
				if (ord !== EQ)
				{
					return ord;
				}
				x = x._1;
				y = y._1;
			}
		}
		else if (x.ctor.slice(0,6) === '_Tuple')
		{
			var n = x.ctor.slice(6) - 0;
			var err = 'cannot compare tuples with more than 6 elements.';
			if (n === 0) return EQ;
			if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
			if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
			if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
			if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
			if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
			if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
			if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
			return EQ;
		}
		else
		{
			throw new Error('Comparison error: comparison is only defined on ints, ' +
							'floats, times, chars, strings, lists of comparable values, ' +
							'and tuples of comparable values.');
		}
	}


	var Tuple0 = {
		ctor: "_Tuple0"
	};

	function Tuple2(x,y)
	{
		return {
			ctor: "_Tuple2",
			_0: x,
			_1: y
		};
	}

	function chr(c)
	{
		var x = new String(c);
		x.isChar = true;
		return x;
	}

	function txt(str)
	{
		var t = new String(str);
		t.text = true;
		return t;
	}

	var count = 0;
	function guid(_)
	{
		return count++
	}

	function copy(oldRecord)
	{
		var newRecord = {};
		for (var key in oldRecord)
		{
			var value = key === '_'
				? copy(oldRecord._)
				: oldRecord[key];
			newRecord[key] = value;
		}
		return newRecord;
	}

	function remove(key, oldRecord)
	{
		var record = copy(oldRecord);
		if (key in record._)
		{
			record[key] = record._[key][0];
			record._[key] = record._[key].slice(1);
			if (record._[key].length === 0)
			{
				delete record._[key];
			}
		}
		else
		{
			delete record[key];
		}
		return record;
	}

	function replace(keyValuePairs, oldRecord)
	{
		var record = copy(oldRecord);
		for (var i = keyValuePairs.length; i--; )
		{
			var pair = keyValuePairs[i];
			record[pair[0]] = pair[1];
		}
		return record;
	}

	function insert(key, value, oldRecord)
	{
		var newRecord = copy(oldRecord);
		if (key in newRecord)
		{
			var values = newRecord._[key];
			var copiedValues = values ? values.slice(0) : [];
			newRecord._[key] = [newRecord[key]].concat(copiedValues);
		}
		newRecord[key] = value;
		return newRecord;
	}

	function getXY(e)
	{
		var posx = 0;
		var posy = 0;
		if (e.pageX || e.pageY)
		{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY)
		{
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}

		if (localRuntime.isEmbed())
		{
			var rect = localRuntime.node.getBoundingClientRect();
			var relx = rect.left + document.body.scrollLeft + document.documentElement.scrollLeft;
			var rely = rect.top + document.body.scrollTop + document.documentElement.scrollTop;
			// TODO: figure out if there is a way to avoid rounding here
			posx = posx - Math.round(relx) - localRuntime.node.clientLeft;
			posy = posy - Math.round(rely) - localRuntime.node.clientTop;
		}
		return Tuple2(posx, posy);
	}


	//// LIST STUFF ////

	var Nil = { ctor:'[]' };

	function Cons(hd,tl)
	{
		return {
			ctor: "::",
			_0: hd,
			_1: tl
		};
	}

	function append(xs,ys)
	{
		// append Strings
		if (typeof xs === "string")
		{
			return xs + ys;
		}

		// append Text
		if (xs.ctor.slice(0,5) === 'Text:')
		{
			return {
				ctor: 'Text:Append',
				_0: xs,
				_1: ys
			};
		}



		// append Lists
		if (xs.ctor === '[]')
		{
			return ys;
		}
		var root = Cons(xs._0, Nil);
		var curr = root;
		xs = xs._1;
		while (xs.ctor !== '[]')
		{
			curr._1 = Cons(xs._0, Nil);
			xs = xs._1;
			curr = curr._1;
		}
		curr._1 = ys;
		return root;
	}

	//// RUNTIME ERRORS ////

	function indent(lines)
	{
		return '\n' + lines.join('\n');
	}

	function badCase(moduleName, span)
	{
		var msg = indent([
			'Non-exhaustive pattern match in case-expression.',
			'Make sure your patterns cover every case!'
		]);
		throw new Error('Runtime error in module ' + moduleName + ' (' + span + ')' + msg);
	}

	function badIf(moduleName, span)
	{
		var msg = indent([
			'Non-exhaustive pattern match in multi-way-if expression.',
			'It is best to use \'otherwise\' as the last branch of multi-way-if.'
		]);
		throw new Error('Runtime error in module ' + moduleName + ' (' + span + ')' + msg);
	}


	function badPort(expected, received)
	{
		var msg = indent([
			'Expecting ' + expected + ' but was given ',
			JSON.stringify(received)
		]);
		throw new Error('Runtime error when sending values through a port.' + msg);
	}


	return localRuntime.Native.Utils.values = {
		eq: eq,
		cmp: cmp,
		compare: F2(compare),
		Tuple0: Tuple0,
		Tuple2: Tuple2,
		chr: chr,
		txt: txt,
		copy: copy,
		remove: remove,
		replace: replace,
		insert: insert,
		guid: guid,
		getXY: getXY,

		Nil: Nil,
		Cons: Cons,
		append: F2(append),

		badCase: badCase,
		badIf: badIf,
		badPort: badPort
	};
};

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":1}],3:[function(require,module,exports){
"use strict";

module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};

},{}],4:[function(require,module,exports){
var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}

},{}],5:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook.js")

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous);
        } else if (isHook(propValue)) {
            removeProperty(node, propName, propValue, previous)
            if (propValue.hook) {
                propValue.hook(node,
                    propName,
                    previous ? previous[propName] : undefined)
            }
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else {
                node[propName] = propValue
            }
        }
    }
}

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName]

        if (!isHook(previousValue)) {
            if (propName === "attributes") {
                for (var attrName in previousValue) {
                    node.removeAttribute(attrName)
                }
            } else if (propName === "style") {
                for (var i in previousValue) {
                    node.style[i] = ""
                }
            } else if (typeof previousValue === "string") {
                node[propName] = ""
            } else {
                node[propName] = null
            }
        } else if (previousValue.unhook) {
            previousValue.unhook(node, propName, propValue)
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
    }
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}

},{"../vnode/is-vhook.js":13,"is-object":3}],6:[function(require,module,exports){
var document = require("global/document")

var applyProperties = require("./apply-properties")

var isVNode = require("../vnode/is-vnode.js")
var isVText = require("../vnode/is-vtext.js")
var isWidget = require("../vnode/is-widget.js")
var handleThunk = require("../vnode/handle-thunk.js")

module.exports = createElement

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document
    var warn = opts ? opts.warn : null

    vnode = handleThunk(vnode).a

    if (isWidget(vnode)) {
        return vnode.init()
    } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text)
    } else if (!isVNode(vnode)) {
        if (warn) {
            warn("Item is not a valid virtual dom node", vnode)
        }
        return null
    }

    var node = (vnode.namespace === null) ?
        doc.createElement(vnode.tagName) :
        doc.createElementNS(vnode.namespace, vnode.tagName)

    var props = vnode.properties
    applyProperties(node, props)

    var children = vnode.children

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts)
        if (childNode) {
            node.appendChild(childNode)
        }
    }

    return node
}

},{"../vnode/handle-thunk.js":11,"../vnode/is-vnode.js":14,"../vnode/is-vtext.js":15,"../vnode/is-widget.js":16,"./apply-properties":5,"global/document":2}],7:[function(require,module,exports){
// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
// We don't want to read all of the DOM nodes in the tree so we use
// the in-order tree indexing to eliminate recursion down certain branches.
// We only recurse into a DOM node if we know that it contains a child of
// interest.

var noChild = {}

module.exports = domIndex

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {}
    } else {
        indices.sort(ascending)
        return recurse(rootNode, tree, indices, nodes, 0)
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {}


    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode
        }

        var vChildren = tree.children

        if (vChildren) {

            var childNodes = rootNode.childNodes

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1

                var vChild = vChildren[i] || noChild
                var nextIndex = rootIndex + (vChild.count || 0)

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                }

                rootIndex = nextIndex
            }
        }
    }

    return nodes
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false
    }

    var minIndex = 0
    var maxIndex = indices.length - 1
    var currentIndex
    var currentItem

    while (minIndex <= maxIndex) {
        currentIndex = ((maxIndex + minIndex) / 2) >> 0
        currentItem = indices[currentIndex]

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right
        } else if (currentItem < left) {
            minIndex = currentIndex + 1
        } else  if (currentItem > right) {
            maxIndex = currentIndex - 1
        } else {
            return true
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1
}

},{}],8:[function(require,module,exports){
var applyProperties = require("./apply-properties")

var isWidget = require("../vnode/is-widget.js")
var VPatch = require("../vnode/vpatch.js")

var render = require("./create-element")
var updateWidget = require("./update-widget")

module.exports = applyPatch

function applyPatch(vpatch, domNode, renderOptions) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode)
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions)
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions)
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions)
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions)
        case VPatch.ORDER:
            reorderChildren(domNode, patch)
            return domNode
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties)
            return domNode
        case VPatch.THUNK:
            return replaceRoot(domNode,
                renderOptions.patch(domNode, patch, renderOptions))
        default:
            return domNode
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode

    if (parentNode) {
        parentNode.removeChild(domNode)
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = render(vNode, renderOptions)

    if (parentNode) {
        parentNode.appendChild(newNode)
    }

    return parentNode
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text)
        newNode = domNode
    } else {
        var parentNode = domNode.parentNode
        newNode = render(vText, renderOptions)

        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode)
        }
    }

    return newNode
}

function widgetPatch(domNode, leftVNode, widget, renderOptions) {
    var updating = updateWidget(leftVNode, widget)
    var newNode

    if (updating) {
        newNode = widget.update(leftVNode, domNode) || domNode
    } else {
        newNode = render(widget, renderOptions)
    }

    var parentNode = domNode.parentNode

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    if (!updating) {
        destroyWidget(domNode, leftVNode)
    }

    return newNode
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode
    var newNode = render(vNode, renderOptions)

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, moves) {
    var childNodes = domNode.childNodes
    var keyMap = {}
    var node
    var remove
    var insert

    for (var i = 0; i < moves.removes.length; i++) {
        remove = moves.removes[i]
        node = childNodes[remove.from]
        if (remove.key) {
            keyMap[remove.key] = node
        }
        domNode.removeChild(node)
    }

    var length = childNodes.length
    for (var j = 0; j < moves.inserts.length; j++) {
        insert = moves.inserts[j]
        node = keyMap[insert.key]
        // this is the weirdest bug i've ever seen in webkit
        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
    }
}

function replaceRoot(oldRoot, newRoot) {
    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
    }

    return newRoot;
}

},{"../vnode/is-widget.js":16,"../vnode/vpatch.js":19,"./apply-properties":5,"./create-element":6,"./update-widget":10}],9:[function(require,module,exports){
var document = require("global/document")
var isArray = require("x-is-array")

var domIndex = require("./dom-index")
var patchOp = require("./patch-op")
module.exports = patch

function patch(rootNode, patches) {
    return patchRecursive(rootNode, patches)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions) {
        renderOptions = { patch: patchRecursive }
        if (ownerDocument !== document) {
            renderOptions.document = ownerDocument
        }
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}

},{"./dom-index":7,"./patch-op":8,"global/document":2,"x-is-array":4}],10:[function(require,module,exports){
var isWidget = require("../vnode/is-widget.js")

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a.init === b.init
        }
    }

    return false
}

},{"../vnode/is-widget.js":16}],11:[function(require,module,exports){
var isVNode = require("./is-vnode")
var isVText = require("./is-vtext")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")

module.exports = handleThunk

function handleThunk(a, b) {
    var renderedA = a
    var renderedB = b

    if (isThunk(b)) {
        renderedB = renderThunk(b, a)
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null)
    }

    return {
        a: renderedA,
        b: renderedB
    }
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode

    if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous)
    }

    if (!(isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
    }

    return renderedThunk
}

},{"./is-thunk":12,"./is-vnode":14,"./is-vtext":15,"./is-widget":16}],12:[function(require,module,exports){
module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}

},{}],13:[function(require,module,exports){
module.exports = isHook

function isHook(hook) {
    return hook &&
      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
}

},{}],14:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}

},{"./version":17}],15:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}

},{"./version":17}],16:[function(require,module,exports){
module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}

},{}],17:[function(require,module,exports){
module.exports = "2"

},{}],18:[function(require,module,exports){
var version = require("./version")
var isVNode = require("./is-vnode")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")
var isVHook = require("./is-vhook")

module.exports = VirtualNode

var noProperties = {}
var noChildren = []

function VirtualNode(tagName, properties, children, key, namespace) {
    this.tagName = tagName
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined
    this.namespace = (typeof namespace === "string") ? namespace : null

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var hasThunks = false
    var descendantHooks = false
    var hooks

    for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
            var property = properties[propName]
            if (isVHook(property) && property.unhook) {
                if (!hooks) {
                    hooks = {}
                }

                hooks[propName] = property
            }
        }
    }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!hasThunks && child.hasThunks) {
                hasThunks = true
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                descendantHooks = true
            }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        } else if (!hasThunks && isThunk(child)) {
            hasThunks = true;
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hasThunks = hasThunks
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"

},{"./is-thunk":12,"./is-vhook":13,"./is-vnode":14,"./is-widget":16,"./version":17}],19:[function(require,module,exports){
var version = require("./version")

VirtualPatch.NONE = 0
VirtualPatch.VTEXT = 1
VirtualPatch.VNODE = 2
VirtualPatch.WIDGET = 3
VirtualPatch.PROPS = 4
VirtualPatch.ORDER = 5
VirtualPatch.INSERT = 6
VirtualPatch.REMOVE = 7
VirtualPatch.THUNK = 8

module.exports = VirtualPatch

function VirtualPatch(type, vNode, patch) {
    this.type = Number(type)
    this.vNode = vNode
    this.patch = patch
}

VirtualPatch.prototype.version = version
VirtualPatch.prototype.type = "VirtualPatch"

},{"./version":17}],20:[function(require,module,exports){
var version = require("./version")

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"

},{"./version":17}],21:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook")

module.exports = diffProps

function diffProps(a, b) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (aValue === bValue) {
            continue
        } else if (isObject(aValue) && isObject(bValue)) {
            if (getPrototype(bValue) !== getPrototype(aValue)) {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (isHook(bValue)) {
                 diff = diff || {}
                 diff[aKey] = bValue
            } else {
                var objectDiff = diffProps(aValue, bValue)
                if (objectDiff) {
                    diff = diff || {}
                    diff[aKey] = objectDiff
                }
            }
        } else {
            diff = diff || {}
            diff[aKey] = bValue
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function getPrototype(value) {
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(value)
  } else if (value.__proto__) {
    return value.__proto__
  } else if (value.constructor) {
    return value.constructor.prototype
  }
}

},{"../vnode/is-vhook":13,"is-object":3}],22:[function(require,module,exports){
var isArray = require("x-is-array")

var VPatch = require("../vnode/vpatch")
var isVNode = require("../vnode/is-vnode")
var isVText = require("../vnode/is-vtext")
var isWidget = require("../vnode/is-widget")
var isThunk = require("../vnode/is-thunk")
var handleThunk = require("../vnode/handle-thunk")

var diffProps = require("./diff-props")

module.exports = diff

function diff(a, b) {
    var patch = { a: a }
    walk(a, b, patch, 0)
    return patch
}

function walk(a, b, patch, index) {
    if (a === b) {
        return
    }

    var apply = patch[index]
    var applyClear = false

    if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch, index)
    } else if (b == null) {

        // If a is a widget we will add a remove patch for it
        // Otherwise any child widgets/hooks must be destroyed.
        // This prevents adding two remove patches for a widget.
        if (!isWidget(a)) {
            clearState(a, patch, index)
            apply = patch[index]
        }

        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
    } else if (isVNode(b)) {
        if (isVNode(a)) {
            if (a.tagName === b.tagName &&
                a.namespace === b.namespace &&
                a.key === b.key) {
                var propsPatch = diffProps(a.properties, b.properties)
                if (propsPatch) {
                    apply = appendPatch(apply,
                        new VPatch(VPatch.PROPS, a, propsPatch))
                }
                apply = diffChildren(a, b, patch, apply, index)
            } else {
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                applyClear = true
            }
        } else {
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
            applyClear = true
        }
    } else if (isVText(b)) {
        if (!isVText(a)) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
            applyClear = true
        } else if (a.text !== b.text) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        }
    } else if (isWidget(b)) {
        if (!isWidget(a)) {
            applyClear = true
        }

        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
    }

    if (apply) {
        patch[index] = apply
    }

    if (applyClear) {
        clearState(a, patch, index)
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children
    var orderedSet = reorder(aChildren, b.children)
    var bChildren = orderedSet.children

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i]
        var rightNode = bChildren[i]
        index += 1

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added
                apply = appendPatch(apply,
                    new VPatch(VPatch.INSERT, null, rightNode))
            }
        } else {
            walk(leftNode, rightNode, patch, index)
        }

        if (isVNode(leftNode) && leftNode.count) {
            index += leftNode.count
        }
    }

    if (orderedSet.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, new VPatch(
            VPatch.ORDER,
            a,
            orderedSet.moves
        ))
    }

    return apply
}

function clearState(vNode, patch, index) {
    // TODO: Make this a single walk, not two
    unhook(vNode, patch, index)
    destroyWidgets(vNode, patch, index)
}

// Patch records for all destroyed widgets must be added because we need
// a DOM node reference for the destroy function
function destroyWidgets(vNode, patch, index) {
    if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(VPatch.REMOVE, vNode, null)
            )
        }
    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
        var children = vNode.children
        var len = children.length
        for (var i = 0; i < len; i++) {
            var child = children[i]
            index += 1

            destroyWidgets(child, patch, index)

            if (isVNode(child) && child.count) {
                index += child.count
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

// Create a sub-patch for thunks
function thunks(a, b, patch, index) {
    var nodes = handleThunk(a, b)
    var thunkPatch = diff(nodes.a, nodes.b)
    if (hasPatches(thunkPatch)) {
        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
    }
}

function hasPatches(patch) {
    for (var index in patch) {
        if (index !== "a") {
            return true
        }
    }

    return false
}

// Execute hooks when two nodes are identical
function unhook(vNode, patch, index) {
    if (isVNode(vNode)) {
        if (vNode.hooks) {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(
                    VPatch.PROPS,
                    vNode,
                    undefinedKeys(vNode.hooks)
                )
            )
        }

        if (vNode.descendantHooks || vNode.hasThunks) {
            var children = vNode.children
            var len = children.length
            for (var i = 0; i < len; i++) {
                var child = children[i]
                index += 1

                unhook(child, patch, index)

                if (isVNode(child) && child.count) {
                    index += child.count
                }
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

function undefinedKeys(obj) {
    var result = {}

    for (var key in obj) {
        result[key] = undefined
    }

    return result
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {
    // O(M) time, O(M) memory
    var bChildIndex = keyIndex(bChildren)
    var bKeys = bChildIndex.keys
    var bFree = bChildIndex.free

    if (bFree.length === bChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(N) time, O(N) memory
    var aChildIndex = keyIndex(aChildren)
    var aKeys = aChildIndex.keys
    var aFree = aChildIndex.free

    if (aFree.length === aChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(MAX(N, M)) memory
    var newChildren = []

    var freeIndex = 0
    var freeCount = bFree.length
    var deletedItems = 0

    // Iterate through a and match a node in b
    // O(N) time,
    for (var i = 0 ; i < aChildren.length; i++) {
        var aItem = aChildren[i]
        var itemIndex

        if (aItem.key) {
            if (bKeys.hasOwnProperty(aItem.key)) {
                // Match up the old keys
                itemIndex = bKeys[aItem.key]
                newChildren.push(bChildren[itemIndex])

            } else {
                // Remove old keyed items
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        } else {
            // Match the item in a with the next free item in b
            if (freeIndex < freeCount) {
                itemIndex = bFree[freeIndex++]
                newChildren.push(bChildren[itemIndex])
            } else {
                // There are no free items in b to match with
                // the free items in a, so the extra free nodes
                // are deleted.
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        }
    }

    var lastFreeIndex = freeIndex >= bFree.length ?
        bChildren.length :
        bFree[freeIndex]

    // Iterate through b and append any new keys
    // O(M) time
    for (var j = 0; j < bChildren.length; j++) {
        var newItem = bChildren[j]

        if (newItem.key) {
            if (!aKeys.hasOwnProperty(newItem.key)) {
                // Add any new keyed items
                // We are adding new items to the end and then sorting them
                // in place. In future we should insert new items in place.
                newChildren.push(newItem)
            }
        } else if (j >= lastFreeIndex) {
            // Add any leftover non-keyed items
            newChildren.push(newItem)
        }
    }

    var simulate = newChildren.slice()
    var simulateIndex = 0
    var removes = []
    var inserts = []
    var simulateItem

    for (var k = 0; k < bChildren.length;) {
        var wantedItem = bChildren[k]
        simulateItem = simulate[simulateIndex]

        // remove items
        while (simulateItem === null && simulate.length) {
            removes.push(remove(simulate, simulateIndex, null))
            simulateItem = simulate[simulateIndex]
        }

        if (!simulateItem || simulateItem.key !== wantedItem.key) {
            // if we need a key in this position...
            if (wantedItem.key) {
                if (simulateItem && simulateItem.key) {
                    // if an insert doesn't put this key in place, it needs to move
                    if (bKeys[simulateItem.key] !== k + 1) {
                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
                        simulateItem = simulate[simulateIndex]
                        // if the remove didn't put the wanted item in place, we need to insert it
                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
                            inserts.push({key: wantedItem.key, to: k})
                        }
                        // items are matching, so skip ahead
                        else {
                            simulateIndex++
                        }
                    }
                    else {
                        inserts.push({key: wantedItem.key, to: k})
                    }
                }
                else {
                    inserts.push({key: wantedItem.key, to: k})
                }
                k++
            }
            // a key in simulate has no matching wanted key, remove it
            else if (simulateItem && simulateItem.key) {
                removes.push(remove(simulate, simulateIndex, simulateItem.key))
            }
        }
        else {
            simulateIndex++
            k++
        }
    }

    // remove all the remaining nodes from simulate
    while(simulateIndex < simulate.length) {
        simulateItem = simulate[simulateIndex]
        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
    }

    // If the only moves we have are deletes then we can just
    // let the delete patch remove these items.
    if (removes.length === deletedItems && !inserts.length) {
        return {
            children: newChildren,
            moves: null
        }
    }

    return {
        children: newChildren,
        moves: {
            removes: removes,
            inserts: inserts
        }
    }
}

function remove(arr, index, key) {
    arr.splice(index, 1)

    return {
        from: index,
        key: key
    }
}

function keyIndex(children) {
    var keys = {}
    var free = []
    var length = children.length

    for (var i = 0; i < length; i++) {
        var child = children[i]

        if (child.key) {
            keys[child.key] = i
        } else {
            free.push(i)
        }
    }

    return {
        keys: keys,     // A hash of key name to index
        free: free,     // An array of unkeyed item indices
    }
}

function appendPatch(apply, patch) {
    if (apply) {
        if (isArray(apply)) {
            apply.push(patch)
        } else {
            apply = [apply, patch]
        }

        return apply
    } else {
        return patch
    }
}

},{"../vnode/handle-thunk":11,"../vnode/is-thunk":12,"../vnode/is-vnode":14,"../vnode/is-vtext":15,"../vnode/is-widget":16,"../vnode/vpatch":19,"./diff-props":21,"x-is-array":4}],23:[function(require,module,exports){
var VNode = require('virtual-dom/vnode/vnode');
var VText = require('virtual-dom/vnode/vtext');
var diff = require('virtual-dom/vtree/diff');
var patch = require('virtual-dom/vdom/patch');
var createElement = require('virtual-dom/vdom/create-element');
var isHook = require("virtual-dom/vnode/is-vhook");


Elm.Native.VirtualDom = {};
Elm.Native.VirtualDom.make = function(elm)
{
	elm.Native = elm.Native || {};
	elm.Native.VirtualDom = elm.Native.VirtualDom || {};
	if (elm.Native.VirtualDom.values)
	{
		return elm.Native.VirtualDom.values;
	}

	var Element = Elm.Native.Graphics.Element.make(elm);
	var Json = Elm.Native.Json.make(elm);
	var List = Elm.Native.List.make(elm);
	var Signal = Elm.Native.Signal.make(elm);
	var Utils = Elm.Native.Utils.make(elm);

	var ATTRIBUTE_KEY = 'UniqueNameThatOthersAreVeryUnlikelyToUse';



	// VIRTUAL DOM NODES


	function text(string)
	{
		return new VText(string);
	}

	function node(name)
	{
		return F2(function(propertyList, contents) {
			return makeNode(name, propertyList, contents);
		});
	}


	// BUILD VIRTUAL DOME NODES


	function makeNode(name, propertyList, contents)
	{
		var props = listToProperties(propertyList);

		var key, namespace;
		// support keys
		if (props.key !== undefined)
		{
			key = props.key;
			props.key = undefined;
		}

		// support namespace
		if (props.namespace !== undefined)
		{
			namespace = props.namespace;
			props.namespace = undefined;
		}

		// ensure that setting text of an input does not move the cursor
		var useSoftSet =
			(name === 'input' || name === 'textarea')
			&& props.value !== undefined
			&& !isHook(props.value);

		if (useSoftSet)
		{
			props.value = SoftSetHook(props.value);
		}

		return new VNode(name, props, List.toArray(contents), key, namespace);
	}

	function listToProperties(list)
	{
		var object = {};
		while (list.ctor !== '[]')
		{
			var entry = list._0;
			if (entry.key === ATTRIBUTE_KEY)
			{
				object.attributes = object.attributes || {};
				object.attributes[entry.value.attrKey] = entry.value.attrValue;
			}
			else
			{
				object[entry.key] = entry.value;
			}
			list = list._1;
		}
		return object;
	}



	// PROPERTIES AND ATTRIBUTES


	function property(key, value)
	{
		return {
			key: key,
			value: value
		};
	}

	function attribute(key, value)
	{
		return {
			key: ATTRIBUTE_KEY,
			value: {
				attrKey: key,
				attrValue: value
			}
		};
	}



	// NAMESPACED ATTRIBUTES


	function attributeNS(namespace, key, value)
	{
		return {
			key: key,
			value: new AttributeHook(namespace, key, value)
		};
	}

	function AttributeHook(namespace, key, value)
	{
		if (!(this instanceof AttributeHook))
		{
			return new AttributeHook(namespace, key, value);
		}

		this.namespace = namespace;
		this.key = key;
		this.value = value;
	}

	AttributeHook.prototype.hook = function (node, prop, prev)
	{
		if (prev
			&& prev.type === 'AttributeHook'
			&& prev.value === this.value
			&& prev.namespace === this.namespace)
		{
			return;
		}

		node.setAttributeNS(this.namespace, prop, this.value);
	};

	AttributeHook.prototype.unhook = function (node, prop, next)
	{
		if (next
			&& next.type === 'AttributeHook'
			&& next.namespace === this.namespace)
		{
			return;
		}

		node.removeAttributeNS(this.namespace, this.key);
	};

	AttributeHook.prototype.type = 'AttributeHook';



	// EVENTS


	function on(name, options, decoder, createMessage)
	{
		function eventHandler(event)
		{
			var value = A2(Json.runDecoderValue, decoder, event);
			if (value.ctor === 'Ok')
			{
				if (options.stopPropagation)
				{
					event.stopPropagation();
				}
				if (options.preventDefault)
				{
					event.preventDefault();
				}
				Signal.sendMessage(createMessage(value._0));
			}
		}
		return property('on' + name, eventHandler);
	}

	function SoftSetHook(value)
	{
		if (!(this instanceof SoftSetHook))
		{
			return new SoftSetHook(value);
		}

		this.value = value;
	}

	SoftSetHook.prototype.hook = function (node, propertyName)
	{
		if (node[propertyName] !== this.value)
		{
			node[propertyName] = this.value;
		}
	};



	// INTEGRATION WITH ELEMENTS


	function ElementWidget(element)
	{
		this.element = element;
	}

	ElementWidget.prototype.type = "Widget";

	ElementWidget.prototype.init = function init()
	{
		return Element.render(this.element);
	};

	ElementWidget.prototype.update = function update(previous, node)
	{
		return Element.update(node, previous.element, this.element);
	};

	function fromElement(element)
	{
		return new ElementWidget(element);
	}

	function toElement(width, height, html)
	{
		return A3(Element.newElement, width, height, {
			ctor: 'Custom',
			type: 'evancz/elm-html',
			render: render,
			update: update,
			model: html
		});
	}



	// RENDER AND UPDATE


	function render(model)
	{
		var element = Element.createNode('div');
		element.appendChild(createElement(model));
		return element;
	}

	function update(node, oldModel, newModel)
	{
		updateAndReplace(node.firstChild, oldModel, newModel);
		return node;
	}

	function updateAndReplace(node, oldModel, newModel)
	{
		var patches = diff(oldModel, newModel);
		var newNode = patch(node, patches);
		return newNode;
	}



	// LAZINESS


	function lazyRef(fn, a)
	{
		function thunk()
		{
			return fn(a);
		}
		return new Thunk(fn, [a], thunk);
	}

	function lazyRef2(fn, a, b)
	{
		function thunk()
		{
			return A2(fn, a, b);
		}
		return new Thunk(fn, [a,b], thunk);
	}

	function lazyRef3(fn, a, b, c)
	{
		function thunk()
		{
			return A3(fn, a, b, c);
		}
		return new Thunk(fn, [a,b,c], thunk);
	}

	function Thunk(fn, args, thunk)
	{
		/* public (used by VirtualDom.js) */
		this.vnode = null;
		this.key = undefined;

		/* private */
		this.fn = fn;
		this.args = args;
		this.thunk = thunk;
	}

	Thunk.prototype.type = "Thunk";
	Thunk.prototype.render = renderThunk;

	function shouldUpdate(current, previous)
	{
		if (current.fn !== previous.fn)
		{
			return true;
		}

		// if it's the same function, we know the number of args must match
		var cargs = current.args;
		var pargs = previous.args;

		for (var i = cargs.length; i--; )
		{
			if (cargs[i] !== pargs[i])
			{
				return true;
			}
		}

		return false;
	}

	function renderThunk(previous)
	{
		if (previous == null || shouldUpdate(this, previous))
		{
			return this.thunk();
		}
		else
		{
			return previous.vnode;
		}
	}


	return elm.Native.VirtualDom.values = Elm.Native.VirtualDom.values = {
		node: node,
		text: text,
		on: F4(on),

		property: F2(property),
		attribute: F2(attribute),
		attributeNS: F3(attributeNS),

		lazy: F2(lazyRef),
		lazy2: F3(lazyRef2),
		lazy3: F4(lazyRef3),

		toElement: F3(toElement),
		fromElement: fromElement,

		render: createElement,
		updateAndReplace: updateAndReplace
	};
};

},{"virtual-dom/vdom/create-element":6,"virtual-dom/vdom/patch":9,"virtual-dom/vnode/is-vhook":13,"virtual-dom/vnode/vnode":18,"virtual-dom/vnode/vtext":20,"virtual-dom/vtree/diff":22}]},{},[23]);

Elm.Native = Elm.Native || {};
Elm.Native.Window = {};
Elm.Native.Window.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Window = localRuntime.Native.Window || {};
	if (localRuntime.Native.Window.values)
	{
		return localRuntime.Native.Window.values;
	}

	var NS = Elm.Native.Signal.make(localRuntime);
	var Tuple2 = Elm.Native.Utils.make(localRuntime).Tuple2;


	function getWidth()
	{
		return localRuntime.node.clientWidth;
	}


	function getHeight()
	{
		if (localRuntime.isFullscreen())
		{
			return window.innerHeight;
		}
		return localRuntime.node.clientHeight;
	}


	var dimensions = NS.input('Window.dimensions', Tuple2(getWidth(), getHeight()));


	function resizeIfNeeded()
	{
		// Do not trigger event if the dimensions have not changed.
		// This should be most of the time.
		var w = getWidth();
		var h = getHeight();
		if (dimensions.value._0 === w && dimensions.value._1 === h)
		{
			return;
		}

		setTimeout(function () {
			// Check again to see if the dimensions have changed.
			// It is conceivable that the dimensions have changed
			// again while some other event was being processed.
			var w = getWidth();
			var h = getHeight();
			if (dimensions.value._0 === w && dimensions.value._1 === h)
			{
				return;
			}
			localRuntime.notify(dimensions.id, Tuple2(w,h));
		}, 0);
	}


	localRuntime.addListener([dimensions.id], window, 'resize', resizeIfNeeded);


	return localRuntime.Native.Window.values = {
		dimensions: dimensions,
		resizeIfNeeded: resizeIfNeeded
	};
};

Elm.ODE = Elm.ODE || {};
Elm.ODE.make = function (_elm) {
   "use strict";
   _elm.ODE = _elm.ODE || {};
   if (_elm.ODE.values)
   return _elm.ODE.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "ODE",
   $Basics = Elm.Basics.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Expression = Elm.Expression.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$ODE = Elm.Native.ODE.make(_elm),
   $Result = Elm.Result.make(_elm),
   $String = Elm.String.make(_elm),
   $Util = Elm.Util.make(_elm);
   var parseExn = function (s) {
      return function () {
         var _v0 = $Expression.parse(s);
         switch (_v0.ctor)
         {case "Ok": return _v0._0;}
         _U.badCase($moduleName,
         "between lines 146 and 169");
      }();
   };
   var solutionParameters = function (sol) {
      return $Native$ODE.solutionParameters(sol.jsSolution);
   };
   var solutionValues = function (sol) {
      return A2($List.map,
      function ($) {
         return $Dict.fromList(A2($List.map2,
         F2(function (v0,v1) {
            return {ctor: "_Tuple2"
                   ,_0: v0
                   ,_1: v1};
         }),
         sol.names)($));
      },
      $Native$ODE.solutionValues(sol.jsSolution));
   };
   var at = F2(function (solution,
   t) {
      return $Dict.fromList(A3($List.map2,
      F2(function (v0,v1) {
         return {ctor: "_Tuple2"
                ,_0: v0
                ,_1: v1};
      }),
      solution.names,
      A2($Native$ODE.at,
      solution.jsSolution,
      t)));
   });
   var solve = F6(function (lower,
   upper,
   initial,
   system,
   precision,
   maxIterations) {
      return function () {
         var $ = function () {
            var inits = $List.sortBy(function (_) {
               return _.index;
            })($List.map(function (_v2) {
               return function () {
                  switch (_v2.ctor)
                  {case "_Tuple2": return {_: {}
                                          ,index: A2($Util.getExn,
                                          _v2._0,
                                          system.indices)
                                          ,name: _v2._0
                                          ,value: _v2._1};}
                  _U.badCase($moduleName,
                  "on line 124, column 40 to 88");
               }();
            })($Dict.toList(initial)));
            return {ctor: "_Tuple2"
                   ,_0: A2($List.map,
                   function (_) {
                      return _.value;
                   },
                   inits)
                   ,_1: A2($List.map,
                   function (_) {
                      return _.name;
                   },
                   inits)};
         }(),
         initialList = $._0,
         names = $._1;
         return {_: {}
                ,jsSolution: A6($Native$ODE.solve,
                lower,
                upper,
                initialList,
                system.$function,
                precision,
                maxIterations)
                ,names: names};
      }();
   });
   var makeIndices = function (spec) {
      return $Basics.fst(A3($Dict.foldl,
      F3(function ($var,expr,_v6) {
         return function () {
            switch (_v6.ctor)
            {case "_Tuple2":
               return {ctor: "_Tuple2"
                      ,_0: A3($Dict.insert,
                      $var,
                      _v6._1,
                      _v6._0)
                      ,_1: _v6._1 + 1};}
            _U.badCase($moduleName,
            "on line 101, column 60 to 88");
         }();
      }),
      {ctor: "_Tuple2"
      ,_0: $Dict.empty
      ,_1: 0},
      spec));
   };
   var makeIndicesOne = function () {
      var go = F2(function (e,
      _v10) {
         return function () {
            switch (_v10.ctor)
            {case "_Tuple2":
               return function () {
                    switch (e.ctor)
                    {case "Add": return A2(go,
                         e._1,
                         A2(go,
                         e._0,
                         {ctor: "_Tuple2"
                         ,_0: _v10._0
                         ,_1: _v10._1}));
                       case "Constant":
                       return {ctor: "_Tuple2"
                              ,_0: _v10._0
                              ,_1: _v10._1};
                       case "Cos": return A2(go,
                         e._0,
                         {ctor: "_Tuple2"
                         ,_0: _v10._0
                         ,_1: _v10._1});
                       case "Exp": return A2(go,
                         e._1,
                         {ctor: "_Tuple2"
                         ,_0: _v10._0
                         ,_1: _v10._1});
                       case "LogBase": return A2(go,
                         e._1,
                         {ctor: "_Tuple2"
                         ,_0: _v10._0
                         ,_1: _v10._1});
                       case "Mul": return A2(go,
                         e._1,
                         A2(go,
                         e._0,
                         {ctor: "_Tuple2"
                         ,_0: _v10._0
                         ,_1: _v10._1}));
                       case "Pow": return A2(go,
                         e._0,
                         {ctor: "_Tuple2"
                         ,_0: _v10._0
                         ,_1: _v10._1});
                       case "Sin": return A2(go,
                         e._0,
                         {ctor: "_Tuple2"
                         ,_0: _v10._0
                         ,_1: _v10._1});
                       case "Var": return function () {
                            var _v29 = A2($Dict.get,
                            e._0,
                            _v10._0);
                            switch (_v29.ctor)
                            {case "Just":
                               return {ctor: "_Tuple2"
                                      ,_0: _v10._0
                                      ,_1: _v10._1};
                               case "Nothing":
                               return {ctor: "_Tuple2"
                                      ,_0: A3($Dict.insert,
                                      e._0,
                                      _v10._1,
                                      _v10._0)
                                      ,_1: _v10._1 + 1};}
                            _U.badCase($moduleName,
                            "between lines 67 and 74");
                         }();}
                    _U.badCase($moduleName,
                    "between lines 65 and 97");
                 }();}
            _U.badCase($moduleName,
            "between lines 65 and 97");
         }();
      });
      return go;
   }();
   var parenthesize = function (x) {
      return A2($Basics._op["++"],
      "(",
      A2($Basics._op["++"],x,")"));
   };
   var envName = "__odearr";
   var compileExpression = F2(function (indices,
   e) {
      return function () {
         switch (e.ctor)
         {case "Add":
            return parenthesize(A2($Basics._op["++"],
              A2(compileExpression,
              indices,
              e._0),
              A2($Basics._op["++"],
              "+",
              A2(compileExpression,
              indices,
              e._1))));
            case "Constant":
            return parenthesize($Basics.toString(e._0));
            case "Cos":
            return A2($Basics._op["++"],
              "Math.cos(",
              A2($Basics._op["++"],
              A2(compileExpression,
              indices,
              e._0),
              ")"));
            case "Exp":
            return A2($Basics._op["++"],
              "Math.pow(",
              A2($Basics._op["++"],
              $Basics.toString(e._0),
              A2($Basics._op["++"],
              ",",
              A2($Basics._op["++"],
              A2(compileExpression,
              indices,
              e._1),
              ")"))));
            case "LogBase":
            return parenthesize(A2($Basics._op["++"],
              "Math.log(",
              A2($Basics._op["++"],
              A2(compileExpression,
              indices,
              e._1),
              A2($Basics._op["++"],
              ") / Math.log(",
              A2($Basics._op["++"],
              $Basics.toString(e._0),
              ")")))));
            case "Mul":
            return parenthesize(A2($Basics._op["++"],
              A2(compileExpression,
              indices,
              e._0),
              A2($Basics._op["++"],
              "*",
              A2(compileExpression,
              indices,
              e._1))));
            case "Pow":
            return A2($Basics._op["++"],
              "Math.pow(",
              A2($Basics._op["++"],
              A2(compileExpression,
              indices,
              e._0),
              A2($Basics._op["++"],
              ",",
              A2($Basics._op["++"],
              $Basics.toString(e._1),
              ")"))));
            case "Sin":
            return A2($Basics._op["++"],
              "Math.sin(",
              A2($Basics._op["++"],
              A2(compileExpression,
              indices,
              e._0),
              ")"));
            case "Var":
            return A2($Basics._op["++"],
              envName,
              A2($Basics._op["++"],
              "[",
              A2($Basics._op["++"],
              $Basics.toString(A2($Util.getExn,
              e._0,
              indices)),
              "]")));}
         _U.badCase($moduleName,
         "between lines 33 and 59");
      }();
   });
   var compile = function (spec) {
      return function () {
         var indices = makeIndices(spec);
         var exprArrayString = A2($Basics._op["++"],
         "[",
         A2($Basics._op["++"],
         A2($String.join,
         ",",
         A2($List.map,
         compileExpression(indices),
         $Dict.values(spec))),
         "]"));
         return {_: {}
                ,$function: $Native$ODE.evaluate(A2($Basics._op["++"],
                "(function(t,",
                A2($Basics._op["++"],
                envName,
                A2($Basics._op["++"],
                "){return ",
                A2($Basics._op["++"],
                exprArrayString,
                "})")))))
                ,indices: indices};
      }();
   };
   var JSFunction = {ctor: "JSFunction"};
   var JSSolution = {ctor: "JSSolution"};
   var Solution = F2(function (a,
   b) {
      return {_: {}
             ,jsSolution: a
             ,names: b};
   });
   var System = F2(function (a,b) {
      return {_: {}
             ,$function: a
             ,indices: b};
   });
   _elm.ODE.values = {_op: _op
                     ,System: System
                     ,Solution: Solution
                     ,JSSolution: JSSolution
                     ,JSFunction: JSFunction
                     ,envName: envName
                     ,parenthesize: parenthesize
                     ,compileExpression: compileExpression
                     ,makeIndicesOne: makeIndicesOne
                     ,makeIndices: makeIndices
                     ,compile: compile
                     ,solve: solve
                     ,at: at
                     ,solutionValues: solutionValues
                     ,solutionParameters: solutionParameters
                     ,parseExn: parseExn};
   return _elm.ODE.values;
};
Elm.Result = Elm.Result || {};
Elm.Result.make = function (_elm) {
   "use strict";
   _elm.Result = _elm.Result || {};
   if (_elm.Result.values)
   return _elm.Result.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Result",
   $Maybe = Elm.Maybe.make(_elm);
   var toMaybe = function (result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return $Maybe.Nothing;
            case "Ok":
            return $Maybe.Just(result._0);}
         _U.badCase($moduleName,
         "between lines 164 and 177");
      }();
   };
   var Err = function (a) {
      return {ctor: "Err",_0: a};
   };
   var andThen = F2(function (result,
   callback) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return Err(result._0);
            case "Ok":
            return callback(result._0);}
         _U.badCase($moduleName,
         "between lines 126 and 145");
      }();
   });
   var Ok = function (a) {
      return {ctor: "Ok",_0: a};
   };
   var map = F2(function (func,
   ra) {
      return function () {
         switch (ra.ctor)
         {case "Err": return Err(ra._0);
            case "Ok":
            return Ok(func(ra._0));}
         _U.badCase($moduleName,
         "between lines 41 and 52");
      }();
   });
   var map2 = F3(function (func,
   ra,
   rb) {
      return function () {
         var _v9 = {ctor: "_Tuple2"
                   ,_0: ra
                   ,_1: rb};
         switch (_v9.ctor)
         {case "_Tuple2":
            switch (_v9._0.ctor)
              {case "Err":
                 return Err(_v9._0._0);
                 case "Ok": switch (_v9._1.ctor)
                   {case "Ok": return Ok(A2(func,
                        _v9._0._0,
                        _v9._1._0));}
                   break;}
              switch (_v9._1.ctor)
              {case "Err":
                 return Err(_v9._1._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 55 and 58");
      }();
   });
   var map3 = F4(function (func,
   ra,
   rb,
   rc) {
      return function () {
         var _v16 = {ctor: "_Tuple3"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc};
         switch (_v16.ctor)
         {case "_Tuple3":
            switch (_v16._0.ctor)
              {case "Err":
                 return Err(_v16._0._0);
                 case "Ok": switch (_v16._1.ctor)
                   {case "Ok":
                      switch (_v16._2.ctor)
                        {case "Ok": return Ok(A3(func,
                             _v16._0._0,
                             _v16._1._0,
                             _v16._2._0));}
                        break;}
                   break;}
              switch (_v16._1.ctor)
              {case "Err":
                 return Err(_v16._1._0);}
              switch (_v16._2.ctor)
              {case "Err":
                 return Err(_v16._2._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 63 and 67");
      }();
   });
   var map4 = F5(function (func,
   ra,
   rb,
   rc,
   rd) {
      return function () {
         var _v26 = {ctor: "_Tuple4"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc
                    ,_3: rd};
         switch (_v26.ctor)
         {case "_Tuple4":
            switch (_v26._0.ctor)
              {case "Err":
                 return Err(_v26._0._0);
                 case "Ok": switch (_v26._1.ctor)
                   {case "Ok":
                      switch (_v26._2.ctor)
                        {case "Ok":
                           switch (_v26._3.ctor)
                             {case "Ok": return Ok(A4(func,
                                  _v26._0._0,
                                  _v26._1._0,
                                  _v26._2._0,
                                  _v26._3._0));}
                             break;}
                        break;}
                   break;}
              switch (_v26._1.ctor)
              {case "Err":
                 return Err(_v26._1._0);}
              switch (_v26._2.ctor)
              {case "Err":
                 return Err(_v26._2._0);}
              switch (_v26._3.ctor)
              {case "Err":
                 return Err(_v26._3._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 72 and 77");
      }();
   });
   var map5 = F6(function (func,
   ra,
   rb,
   rc,
   rd,
   re) {
      return function () {
         var _v39 = {ctor: "_Tuple5"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc
                    ,_3: rd
                    ,_4: re};
         switch (_v39.ctor)
         {case "_Tuple5":
            switch (_v39._0.ctor)
              {case "Err":
                 return Err(_v39._0._0);
                 case "Ok": switch (_v39._1.ctor)
                   {case "Ok":
                      switch (_v39._2.ctor)
                        {case "Ok":
                           switch (_v39._3.ctor)
                             {case "Ok":
                                switch (_v39._4.ctor)
                                  {case "Ok": return Ok(A5(func,
                                       _v39._0._0,
                                       _v39._1._0,
                                       _v39._2._0,
                                       _v39._3._0,
                                       _v39._4._0));}
                                  break;}
                             break;}
                        break;}
                   break;}
              switch (_v39._1.ctor)
              {case "Err":
                 return Err(_v39._1._0);}
              switch (_v39._2.ctor)
              {case "Err":
                 return Err(_v39._2._0);}
              switch (_v39._3.ctor)
              {case "Err":
                 return Err(_v39._3._0);}
              switch (_v39._4.ctor)
              {case "Err":
                 return Err(_v39._4._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 82 and 123");
      }();
   });
   var formatError = F2(function (f,
   result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return Err(f(result._0));
            case "Ok":
            return Ok(result._0);}
         _U.badCase($moduleName,
         "between lines 148 and 161");
      }();
   });
   var fromMaybe = F2(function (err,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return Ok(maybe._0);
            case "Nothing":
            return Err(err);}
         _U.badCase($moduleName,
         "between lines 180 and 182");
      }();
   });
   _elm.Result.values = {_op: _op
                        ,map: map
                        ,map2: map2
                        ,map3: map3
                        ,map4: map4
                        ,map5: map5
                        ,andThen: andThen
                        ,toMaybe: toMaybe
                        ,fromMaybe: fromMaybe
                        ,formatError: formatError
                        ,Ok: Ok
                        ,Err: Err};
   return _elm.Result.values;
};
Elm.Set = Elm.Set || {};
Elm.Set.make = function (_elm) {
   "use strict";
   _elm.Set = _elm.Set || {};
   if (_elm.Set.values)
   return _elm.Set.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Set",
   $Dict = Elm.Dict.make(_elm),
   $List = Elm.List.make(_elm);
   var partition = F2(function (p,
   set) {
      return A2($Dict.partition,
      F2(function (k,_v0) {
         return function () {
            return p(k);
         }();
      }),
      set);
   });
   var filter = F2(function (p,
   set) {
      return A2($Dict.filter,
      F2(function (k,_v2) {
         return function () {
            return p(k);
         }();
      }),
      set);
   });
   var foldr = F3(function (f,
   b,
   s) {
      return A3($Dict.foldr,
      F3(function (k,_v4,b) {
         return function () {
            return A2(f,k,b);
         }();
      }),
      b,
      s);
   });
   var foldl = F3(function (f,
   b,
   s) {
      return A3($Dict.foldl,
      F3(function (k,_v6,b) {
         return function () {
            return A2(f,k,b);
         }();
      }),
      b,
      s);
   });
   var toList = $Dict.keys;
   var diff = $Dict.diff;
   var intersect = $Dict.intersect;
   var union = $Dict.union;
   var member = $Dict.member;
   var isEmpty = $Dict.isEmpty;
   var remove = $Dict.remove;
   var insert = function (k) {
      return A2($Dict.insert,
      k,
      {ctor: "_Tuple0"});
   };
   var singleton = function (k) {
      return A2($Dict.singleton,
      k,
      {ctor: "_Tuple0"});
   };
   var empty = $Dict.empty;
   var fromList = function (xs) {
      return A3($List.foldl,
      insert,
      empty,
      xs);
   };
   var map = F2(function (f,s) {
      return fromList(A2($List.map,
      f,
      toList(s)));
   });
   _elm.Set.values = {_op: _op
                     ,empty: empty
                     ,singleton: singleton
                     ,insert: insert
                     ,remove: remove
                     ,isEmpty: isEmpty
                     ,member: member
                     ,foldl: foldl
                     ,foldr: foldr
                     ,map: map
                     ,filter: filter
                     ,partition: partition
                     ,union: union
                     ,intersect: intersect
                     ,diff: diff
                     ,toList: toList
                     ,fromList: fromList};
   return _elm.Set.values;
};
Elm.Signal = Elm.Signal || {};
Elm.Signal.make = function (_elm) {
   "use strict";
   _elm.Signal = _elm.Signal || {};
   if (_elm.Signal.values)
   return _elm.Signal.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Signal",
   $Basics = Elm.Basics.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Signal = Elm.Native.Signal.make(_elm),
   $Task = Elm.Task.make(_elm);
   var send = F2(function (_v0,
   value) {
      return function () {
         switch (_v0.ctor)
         {case "Address":
            return A2($Task.onError,
              _v0._0(value),
              function (_v3) {
                 return function () {
                    return $Task.succeed({ctor: "_Tuple0"});
                 }();
              });}
         _U.badCase($moduleName,
         "between lines 370 and 371");
      }();
   });
   var Message = function (a) {
      return {ctor: "Message"
             ,_0: a};
   };
   var message = F2(function (_v5,
   value) {
      return function () {
         switch (_v5.ctor)
         {case "Address":
            return Message(_v5._0(value));}
         _U.badCase($moduleName,
         "on line 352, column 5 to 24");
      }();
   });
   var mailbox = $Native$Signal.mailbox;
   var Address = function (a) {
      return {ctor: "Address"
             ,_0: a};
   };
   var forwardTo = F2(function (_v8,
   f) {
      return function () {
         switch (_v8.ctor)
         {case "Address":
            return Address(function (x) {
                 return _v8._0(f(x));
              });}
         _U.badCase($moduleName,
         "on line 339, column 5 to 29");
      }();
   });
   var Mailbox = F2(function (a,
   b) {
      return {_: {}
             ,address: a
             ,signal: b};
   });
   var sampleOn = $Native$Signal.sampleOn;
   var dropRepeats = $Native$Signal.dropRepeats;
   var filterMap = $Native$Signal.filterMap;
   var filter = F3(function (isOk,
   base,
   signal) {
      return A3(filterMap,
      function (value) {
         return isOk(value) ? $Maybe.Just(value) : $Maybe.Nothing;
      },
      base,
      signal);
   });
   var merge = F2(function (left,
   right) {
      return A3($Native$Signal.genericMerge,
      $Basics.always,
      left,
      right);
   });
   var mergeMany = function (signalList) {
      return function () {
         var _v11 = $List.reverse(signalList);
         switch (_v11.ctor)
         {case "::":
            return A3($List.foldl,
              merge,
              _v11._0,
              _v11._1);
            case "[]":
            return $Debug.crash("mergeMany was given an empty list!");}
         _U.badCase($moduleName,
         "between lines 177 and 197");
      }();
   };
   var foldp = $Native$Signal.foldp;
   var map5 = $Native$Signal.map5;
   var map4 = $Native$Signal.map4;
   var map3 = $Native$Signal.map3;
   var map2 = $Native$Signal.map2;
   _op["~"] = F2(function (funcs,
   args) {
      return A3(map2,
      F2(function (f,v) {
         return f(v);
      }),
      funcs,
      args);
   });
   var map = $Native$Signal.map;
   _op["<~"] = map;
   var constant = $Native$Signal.constant;
   var Signal = {ctor: "Signal"};
   _elm.Signal.values = {_op: _op
                        ,merge: merge
                        ,mergeMany: mergeMany
                        ,map: map
                        ,map2: map2
                        ,map3: map3
                        ,map4: map4
                        ,map5: map5
                        ,constant: constant
                        ,dropRepeats: dropRepeats
                        ,filter: filter
                        ,filterMap: filterMap
                        ,sampleOn: sampleOn
                        ,foldp: foldp
                        ,mailbox: mailbox
                        ,send: send
                        ,message: message
                        ,forwardTo: forwardTo
                        ,Mailbox: Mailbox};
   return _elm.Signal.values;
};
Elm.Signal = Elm.Signal || {};
Elm.Signal.Extra = Elm.Signal.Extra || {};
Elm.Signal.Extra.make = function (_elm) {
   "use strict";
   _elm.Signal = _elm.Signal || {};
   _elm.Signal.Extra = _elm.Signal.Extra || {};
   if (_elm.Signal.Extra.values)
   return _elm.Signal.Extra.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Signal.Extra",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var passiveMap2 = F2(function (func,
   a) {
      return function ($) {
         return A2($Signal.map2,
         func,
         a)($Signal.sampleOn(a)($));
      };
   });
   var withPassive = passiveMap2(F2(function (x,
   y) {
      return x(y);
   }));
   var combine = A2($List.foldr,
   $Signal.map2(F2(function (x,y) {
      return A2($List._op["::"],
      x,
      y);
   })),
   $Signal.constant(_L.fromArray([])));
   var mapMany = F2(function (f,
   l) {
      return A2($Signal._op["<~"],
      f,
      combine(l));
   });
   var applyMany = F2(function (fs,
   l) {
      return A2($Signal._op["~"],
      fs,
      combine(l));
   });
   var mergeMany = F2(function (original,
   others) {
      return A3($List.foldl,
      $Signal.merge,
      original,
      others);
   });
   var filter = function (initial) {
      return A2($Signal.filterMap,
      $Basics.identity,
      initial);
   };
   var keepIf = $Signal.filter;
   var runBuffer$ = F3(function (l,
   n,
   input) {
      return function () {
         var f = F2(function (inp,
         prev) {
            return function () {
               var l = $List.length(prev);
               return _U.cmp(l,
               n) < 0 ? A2($Basics._op["++"],
               prev,
               _L.fromArray([inp])) : A2($Basics._op["++"],
               A2($List.drop,l - n + 1,prev),
               _L.fromArray([inp]));
            }();
         });
         return A3($Signal.foldp,
         f,
         l,
         input);
      }();
   });
   var runBuffer = runBuffer$(_L.fromArray([]));
   var foldps = F3(function (f,
   bs,
   aS) {
      return A2($Signal._op["<~"],
      $Basics.fst,
      A3($Signal.foldp,
      F2(function (a,_v0) {
         return function () {
            switch (_v0.ctor)
            {case "_Tuple2": return A2(f,
                 a,
                 _v0._1);}
            _U.badCase($moduleName,
            "on line 174, column 29 to 34");
         }();
      }),
      bs,
      aS));
   });
   var delayRound = F2(function (b,
   bS) {
      return A3(foldps,
      F2(function ($new,old) {
         return {ctor: "_Tuple2"
                ,_0: old
                ,_1: $new};
      }),
      {ctor: "_Tuple2",_0: b,_1: b},
      bS);
   });
   var filterFold = F2(function (f,
   initial) {
      return function () {
         var f$ = F2(function (a,s) {
            return function () {
               var res = A2(f,a,s);
               return {ctor: "_Tuple2"
                      ,_0: res
                      ,_1: A2($Maybe.withDefault,
                      s,
                      res)};
            }();
         });
         return function ($) {
            return filter(initial)(A2(foldps,
            f$,
            {ctor: "_Tuple2"
            ,_0: $Maybe.Just(initial)
            ,_1: initial})($));
         };
      }();
   });
   var initSignal = function (s) {
      return A2($Signal.sampleOn,
      $Signal.constant({ctor: "_Tuple0"}),
      s);
   };
   var switchHelper = F4(function (filter,
   b,
   l,
   r) {
      return function () {
         var fromJust = function (_v4) {
            return function () {
               switch (_v4.ctor)
               {case "Just": return _v4._0;}
               _U.badCase($moduleName,
               "on line 285, column 25 to 26");
            }();
         };
         var lAndR = A2($Signal.merge,
         A3(filter,
         b,
         $Maybe.Nothing,
         A2($Signal._op["<~"],
         $Maybe.Just,
         l)),
         A3(filter,
         A2($Signal._op["<~"],
         $Basics.not,
         b),
         $Maybe.Nothing,
         A2($Signal._op["<~"],
         $Maybe.Just,
         r)));
         var base = A2($Signal._op["~"],
         A2($Signal._op["~"],
         A2($Signal._op["<~"],
         F3(function (bi,li,ri) {
            return $Maybe.Just(bi ? li : ri);
         }),
         initSignal(b)),
         initSignal(l)),
         initSignal(r));
         return A2($Signal._op["<~"],
         fromJust,
         A2($Signal.merge,base,lAndR));
      }();
   });
   var unzip4 = function (pairS) {
      return {ctor: "_Tuple4"
             ,_0: A2($Signal._op["<~"],
             function (_v7) {
                return function () {
                   switch (_v7.ctor)
                   {case "_Tuple4": return _v7._0;}
                   _U.badCase($moduleName,
                   "on line 134, column 19 to 20");
                }();
             },
             pairS)
             ,_1: A2($Signal._op["<~"],
             function (_v13) {
                return function () {
                   switch (_v13.ctor)
                   {case "_Tuple4":
                      return _v13._1;}
                   _U.badCase($moduleName,
                   "on line 134, column 47 to 48");
                }();
             },
             pairS)
             ,_2: A2($Signal._op["<~"],
             function (_v19) {
                return function () {
                   switch (_v19.ctor)
                   {case "_Tuple4":
                      return _v19._2;}
                   _U.badCase($moduleName,
                   "on line 134, column 75 to 76");
                }();
             },
             pairS)
             ,_3: A2($Signal._op["<~"],
             function (_v25) {
                return function () {
                   switch (_v25.ctor)
                   {case "_Tuple4":
                      return _v25._3;}
                   _U.badCase($moduleName,
                   "on line 134, column 103 to 104");
                }();
             },
             pairS)};
   };
   var unzip3 = function (pairS) {
      return {ctor: "_Tuple3"
             ,_0: A2($Signal._op["<~"],
             function (_v31) {
                return function () {
                   switch (_v31.ctor)
                   {case "_Tuple3":
                      return _v31._0;}
                   _U.badCase($moduleName,
                   "on line 128, column 17 to 18");
                }();
             },
             pairS)
             ,_1: A2($Signal._op["<~"],
             function (_v36) {
                return function () {
                   switch (_v36.ctor)
                   {case "_Tuple3":
                      return _v36._1;}
                   _U.badCase($moduleName,
                   "on line 128, column 43 to 44");
                }();
             },
             pairS)
             ,_2: A2($Signal._op["<~"],
             function (_v41) {
                return function () {
                   switch (_v41.ctor)
                   {case "_Tuple3":
                      return _v41._2;}
                   _U.badCase($moduleName,
                   "on line 128, column 69 to 70");
                }();
             },
             pairS)};
   };
   var unzip = function (pairS) {
      return {ctor: "_Tuple2"
             ,_0: A2($Signal._op["<~"],
             $Basics.fst,
             pairS)
             ,_1: A2($Signal._op["<~"],
             $Basics.snd,
             pairS)};
   };
   var zip4 = $Signal.map4(F4(function (v0,
   v1,
   v2,
   v3) {
      return {ctor: "_Tuple4"
             ,_0: v0
             ,_1: v1
             ,_2: v2
             ,_3: v3};
   }));
   var zip3 = $Signal.map3(F3(function (v0,
   v1,
   v2) {
      return {ctor: "_Tuple3"
             ,_0: v0
             ,_1: v1
             ,_2: v2};
   }));
   var zip = $Signal.map2(F2(function (v0,
   v1) {
      return {ctor: "_Tuple2"
             ,_0: v0
             ,_1: v1};
   }));
   var keepWhen = F3(function (boolSig,
   a,
   aSig) {
      return $Signal.map($Basics.snd)(A2(keepIf,
      $Basics.fst,
      {ctor: "_Tuple2"
      ,_0: true
      ,_1: a})($Signal.sampleOn(aSig)(A2(zip,
      boolSig,
      aSig))));
   });
   var switchWhen = F3(function (b,
   l,
   r) {
      return A4(switchHelper,
      keepWhen,
      b,
      l,
      r);
   });
   var sampleWhen = F3(function (bs,
   def,
   sig) {
      return $Signal.map($Basics.snd)(A2(keepIf,
      $Basics.fst,
      {ctor: "_Tuple2"
      ,_0: true
      ,_1: def})(A2(zip,bs,sig)));
   });
   var switchSample = F3(function (b,
   l,
   r) {
      return A4(switchHelper,
      sampleWhen,
      b,
      l,
      r);
   });
   var keepThen = F3(function (choice,
   base,
   signal) {
      return A2(switchSample,
      choice,
      signal)($Signal.constant(base));
   });
   var andMap = F2(function (x,y) {
      return A2($Signal._op["~"],
      x,
      y);
   });
   _op["~>"] = $Basics.flip($Signal.map);
   var foldp$ = F3(function (fun,
   initFun,
   input) {
      return function () {
         var fromJust = function (_v46) {
            return function () {
               switch (_v46.ctor)
               {case "Just": return _v46._0;}
               _U.badCase($moduleName,
               "on line 161, column 25 to 26");
            }();
         };
         var fun$ = F2(function (_v49,
         mb) {
            return function () {
               switch (_v49.ctor)
               {case "_Tuple2":
                  return $Maybe.Just(fun(_v49._0)(A2($Maybe.withDefault,
                    _v49._1,
                    mb)));}
               _U.badCase($moduleName,
               "between lines 158 and 159");
            }();
         });
         var initial = A2(_op["~>"],
         initSignal(input),
         initFun);
         var rest = A3($Signal.foldp,
         fun$,
         $Maybe.Nothing,
         A2(zip,input,initial));
         return A2($Signal._op["<~"],
         fromJust,
         A2($Signal.merge,
         A2($Signal._op["<~"],
         $Maybe.Just,
         initial),
         rest));
      }();
   });
   var foldps$ = F3(function (f,
   iF,
   aS) {
      return A2($Signal._op["<~"],
      $Basics.fst,
      A3(foldp$,
      F2(function (a,_v53) {
         return function () {
            switch (_v53.ctor)
            {case "_Tuple2": return A2(f,
                 a,
                 _v53._1);}
            _U.badCase($moduleName,
            "on line 180, column 46 to 51");
         }();
      }),
      iF,
      aS));
   });
   var deltas = function (signal) {
      return function () {
         var initial = function (value) {
            return {ctor: "_Tuple2"
                   ,_0: value
                   ,_1: value};
         };
         var step = F2(function (value,
         delta) {
            return {ctor: "_Tuple2"
                   ,_0: $Basics.snd(delta)
                   ,_1: value};
         });
         return A3(foldp$,
         step,
         initial,
         signal);
      }();
   };
   var foldpWith = F4(function (unpack,
   step,
   init,
   input) {
      return function () {
         var step$ = F2(function (a,
         _v57) {
            return function () {
               switch (_v57.ctor)
               {case "_Tuple2":
                  return unpack(A2(step,
                    a,
                    _v57._1));}
               _U.badCase($moduleName,
               "on line 194, column 7 to 25");
            }();
         });
         return A2(_op["~>"],
         A3($Signal.foldp,
         step$,
         init,
         input),
         $Basics.fst);
      }();
   });
   var keepWhenI = F2(function (fs,
   s) {
      return function () {
         var fromJust = function (_v61) {
            return function () {
               switch (_v61.ctor)
               {case "Just": return _v61._0;}
               _U.badCase($moduleName,
               "on line 331, column 25 to 26");
            }();
         };
         return A2(_op["~>"],
         A3(keepWhen,
         A2($Signal.merge,
         $Signal.constant(true),
         fs),
         $Maybe.Nothing,
         A2($Signal._op["<~"],
         $Maybe.Just,
         s)),
         fromJust);
      }();
   });
   var fairMerge = F3(function (resolve,
   left,
   right) {
      return function () {
         var merged = A2($Signal.merge,
         left,
         right);
         var boolRight = A2($Signal._op["<~"],
         $Basics.always(false),
         right);
         var boolLeft = A2($Signal._op["<~"],
         $Basics.always(true),
         left);
         var bothUpdated = A2($Signal._op["~"],
         A2($Signal._op["<~"],
         F2(function (x,y) {
            return !_U.eq(x,y);
         }),
         A2($Signal.merge,
         boolLeft,
         boolRight)),
         A2($Signal.merge,
         boolRight,
         boolLeft));
         var keep = keepWhenI(bothUpdated);
         var resolved = A2($Signal._op["~"],
         A2($Signal._op["<~"],
         resolve,
         keep(left)),
         keep(right));
         return $Signal.merge(resolved)(merged);
      }();
   });
   _elm.Signal.Extra.values = {_op: _op
                              ,andMap: andMap
                              ,zip: zip
                              ,zip3: zip3
                              ,zip4: zip4
                              ,unzip: unzip
                              ,unzip3: unzip3
                              ,unzip4: unzip4
                              ,foldp$: foldp$
                              ,foldps: foldps
                              ,foldps$: foldps$
                              ,runBuffer: runBuffer
                              ,runBuffer$: runBuffer$
                              ,deltas: deltas
                              ,delayRound: delayRound
                              ,keepIf: keepIf
                              ,keepWhen: keepWhen
                              ,sampleWhen: sampleWhen
                              ,switchWhen: switchWhen
                              ,keepWhenI: keepWhenI
                              ,switchSample: switchSample
                              ,keepThen: keepThen
                              ,filter: filter
                              ,filterFold: filterFold
                              ,fairMerge: fairMerge
                              ,mergeMany: mergeMany
                              ,combine: combine
                              ,mapMany: mapMany
                              ,applyMany: applyMany
                              ,passiveMap2: passiveMap2
                              ,withPassive: withPassive};
   return _elm.Signal.Extra.values;
};
Elm.Slider = Elm.Slider || {};
Elm.Slider.make = function (_elm) {
   "use strict";
   _elm.Slider = _elm.Slider || {};
   if (_elm.Slider.values)
   return _elm.Slider.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Slider",
   $Basics = Elm.Basics.make(_elm),
   $Html = Elm.Html.make(_elm),
   $Html$Attributes = Elm.Html.Attributes.make(_elm),
   $Html$Events = Elm.Html.Events.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var stepString = function (mx) {
      return function () {
         switch (mx.ctor)
         {case "Just":
            return $Basics.toString(mx._0);
            case "Nothing": return "any";}
         _U.badCase($moduleName,
         "between lines 20 and 24");
      }();
   };
   var Options = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,max: b
             ,min: a
             ,step: c
             ,value: d};
   });
   var valueDecoder = A2($Json$Decode._op[":="],
   "target",
   A2($Json$Decode._op[":="],
   "valueAsNumber",
   $Json$Decode.$float));
   var slider = F2(function (options,
   f) {
      return A2($Html.input,
      _L.fromArray([$Html$Attributes.type$("range")
                   ,$Html$Attributes.$class("mdl-slider mdl-js-slider")
                   ,$Html$Attributes.tabindex(10)
                   ,$Html$Attributes.value($Basics.toString(options.value))
                   ,$Html$Attributes.max($Basics.toString(options.max))
                   ,$Html$Attributes.min($Basics.toString(options.min))
                   ,$Html$Attributes.step(stepString(options.step))
                   ,A3($Html$Events.on,
                   "input",
                   valueDecoder,
                   f)]),
      _L.fromArray([]));
   });
   _elm.Slider.values = {_op: _op
                        ,valueDecoder: valueDecoder
                        ,Options: Options
                        ,stepString: stepString
                        ,slider: slider};
   return _elm.Slider.values;
};
Elm.String = Elm.String || {};
Elm.String.make = function (_elm) {
   "use strict";
   _elm.String = _elm.String || {};
   if (_elm.String.values)
   return _elm.String.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "String",
   $Maybe = Elm.Maybe.make(_elm),
   $Native$String = Elm.Native.String.make(_elm),
   $Result = Elm.Result.make(_elm);
   var fromList = $Native$String.fromList;
   var toList = $Native$String.toList;
   var toFloat = $Native$String.toFloat;
   var toInt = $Native$String.toInt;
   var indices = $Native$String.indexes;
   var indexes = $Native$String.indexes;
   var endsWith = $Native$String.endsWith;
   var startsWith = $Native$String.startsWith;
   var contains = $Native$String.contains;
   var all = $Native$String.all;
   var any = $Native$String.any;
   var toLower = $Native$String.toLower;
   var toUpper = $Native$String.toUpper;
   var lines = $Native$String.lines;
   var words = $Native$String.words;
   var trimRight = $Native$String.trimRight;
   var trimLeft = $Native$String.trimLeft;
   var trim = $Native$String.trim;
   var padRight = $Native$String.padRight;
   var padLeft = $Native$String.padLeft;
   var pad = $Native$String.pad;
   var dropRight = $Native$String.dropRight;
   var dropLeft = $Native$String.dropLeft;
   var right = $Native$String.right;
   var left = $Native$String.left;
   var slice = $Native$String.slice;
   var repeat = $Native$String.repeat;
   var join = $Native$String.join;
   var split = $Native$String.split;
   var foldr = $Native$String.foldr;
   var foldl = $Native$String.foldl;
   var reverse = $Native$String.reverse;
   var filter = $Native$String.filter;
   var map = $Native$String.map;
   var length = $Native$String.length;
   var concat = $Native$String.concat;
   var append = $Native$String.append;
   var uncons = $Native$String.uncons;
   var cons = $Native$String.cons;
   var fromChar = function ($char) {
      return A2(cons,$char,"");
   };
   var isEmpty = $Native$String.isEmpty;
   _elm.String.values = {_op: _op
                        ,isEmpty: isEmpty
                        ,length: length
                        ,reverse: reverse
                        ,repeat: repeat
                        ,cons: cons
                        ,uncons: uncons
                        ,fromChar: fromChar
                        ,append: append
                        ,concat: concat
                        ,split: split
                        ,join: join
                        ,words: words
                        ,lines: lines
                        ,slice: slice
                        ,left: left
                        ,right: right
                        ,dropLeft: dropLeft
                        ,dropRight: dropRight
                        ,contains: contains
                        ,startsWith: startsWith
                        ,endsWith: endsWith
                        ,indexes: indexes
                        ,indices: indices
                        ,toInt: toInt
                        ,toFloat: toFloat
                        ,toList: toList
                        ,fromList: fromList
                        ,toUpper: toUpper
                        ,toLower: toLower
                        ,pad: pad
                        ,padLeft: padLeft
                        ,padRight: padRight
                        ,trim: trim
                        ,trimLeft: trimLeft
                        ,trimRight: trimRight
                        ,map: map
                        ,filter: filter
                        ,foldl: foldl
                        ,foldr: foldr
                        ,any: any
                        ,all: all};
   return _elm.String.values;
};
Elm.Task = Elm.Task || {};
Elm.Task.make = function (_elm) {
   "use strict";
   _elm.Task = _elm.Task || {};
   if (_elm.Task.values)
   return _elm.Task.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Task",
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Task = Elm.Native.Task.make(_elm),
   $Result = Elm.Result.make(_elm);
   var sleep = $Native$Task.sleep;
   var spawn = $Native$Task.spawn;
   var ThreadID = function (a) {
      return {ctor: "ThreadID"
             ,_0: a};
   };
   var onError = $Native$Task.catch_;
   var andThen = $Native$Task.andThen;
   var fail = $Native$Task.fail;
   var mapError = F2(function (f,
   promise) {
      return A2(onError,
      promise,
      function (err) {
         return fail(f(err));
      });
   });
   var succeed = $Native$Task.succeed;
   var map = F2(function (func,
   promiseA) {
      return A2(andThen,
      promiseA,
      function (a) {
         return succeed(func(a));
      });
   });
   var map2 = F3(function (func,
   promiseA,
   promiseB) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return succeed(A2(func,a,b));
         });
      });
   });
   var map3 = F4(function (func,
   promiseA,
   promiseB,
   promiseC) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return A2(andThen,
            promiseC,
            function (c) {
               return succeed(A3(func,
               a,
               b,
               c));
            });
         });
      });
   });
   var map4 = F5(function (func,
   promiseA,
   promiseB,
   promiseC,
   promiseD) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return A2(andThen,
            promiseC,
            function (c) {
               return A2(andThen,
               promiseD,
               function (d) {
                  return succeed(A4(func,
                  a,
                  b,
                  c,
                  d));
               });
            });
         });
      });
   });
   var map5 = F6(function (func,
   promiseA,
   promiseB,
   promiseC,
   promiseD,
   promiseE) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return A2(andThen,
            promiseC,
            function (c) {
               return A2(andThen,
               promiseD,
               function (d) {
                  return A2(andThen,
                  promiseE,
                  function (e) {
                     return succeed(A5(func,
                     a,
                     b,
                     c,
                     d,
                     e));
                  });
               });
            });
         });
      });
   });
   var andMap = F2(function (promiseFunc,
   promiseValue) {
      return A2(andThen,
      promiseFunc,
      function (func) {
         return A2(andThen,
         promiseValue,
         function (value) {
            return succeed(func(value));
         });
      });
   });
   var sequence = function (promises) {
      return function () {
         switch (promises.ctor)
         {case "::": return A3(map2,
              F2(function (x,y) {
                 return A2($List._op["::"],
                 x,
                 y);
              }),
              promises._0,
              sequence(promises._1));
            case "[]":
            return succeed(_L.fromArray([]));}
         _U.badCase($moduleName,
         "between lines 101 and 106");
      }();
   };
   var toMaybe = function (task) {
      return A2(onError,
      A2(map,$Maybe.Just,task),
      function (_v3) {
         return function () {
            return succeed($Maybe.Nothing);
         }();
      });
   };
   var fromMaybe = F2(function ($default,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return succeed(maybe._0);
            case "Nothing":
            return fail($default);}
         _U.badCase($moduleName,
         "between lines 139 and 141");
      }();
   });
   var toResult = function (task) {
      return A2(onError,
      A2(map,$Result.Ok,task),
      function (msg) {
         return succeed($Result.Err(msg));
      });
   };
   var fromResult = function (result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return fail(result._0);
            case "Ok":
            return succeed(result._0);}
         _U.badCase($moduleName,
         "between lines 151 and 153");
      }();
   };
   var Task = {ctor: "Task"};
   _elm.Task.values = {_op: _op
                      ,succeed: succeed
                      ,fail: fail
                      ,map: map
                      ,map2: map2
                      ,map3: map3
                      ,map4: map4
                      ,map5: map5
                      ,andMap: andMap
                      ,sequence: sequence
                      ,andThen: andThen
                      ,onError: onError
                      ,mapError: mapError
                      ,toMaybe: toMaybe
                      ,fromMaybe: fromMaybe
                      ,toResult: toResult
                      ,fromResult: fromResult
                      ,spawn: spawn
                      ,sleep: sleep};
   return _elm.Task.values;
};
Elm.Text = Elm.Text || {};
Elm.Text.make = function (_elm) {
   "use strict";
   _elm.Text = _elm.Text || {};
   if (_elm.Text.values)
   return _elm.Text.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Text",
   $Color = Elm.Color.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Text = Elm.Native.Text.make(_elm);
   var line = $Native$Text.line;
   var italic = $Native$Text.italic;
   var bold = $Native$Text.bold;
   var color = $Native$Text.color;
   var height = $Native$Text.height;
   var link = $Native$Text.link;
   var monospace = $Native$Text.monospace;
   var typeface = $Native$Text.typeface;
   var style = $Native$Text.style;
   var append = $Native$Text.append;
   var fromString = $Native$Text.fromString;
   var empty = fromString("");
   var concat = function (texts) {
      return A3($List.foldr,
      append,
      empty,
      texts);
   };
   var join = F2(function (seperator,
   texts) {
      return concat(A2($List.intersperse,
      seperator,
      texts));
   });
   var defaultStyle = {_: {}
                      ,bold: false
                      ,color: $Color.black
                      ,height: $Maybe.Nothing
                      ,italic: false
                      ,line: $Maybe.Nothing
                      ,typeface: _L.fromArray([])};
   var Style = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,bold: d
             ,color: c
             ,height: b
             ,italic: e
             ,line: f
             ,typeface: a};
   });
   var Through = {ctor: "Through"};
   var Over = {ctor: "Over"};
   var Under = {ctor: "Under"};
   var Text = {ctor: "Text"};
   _elm.Text.values = {_op: _op
                      ,fromString: fromString
                      ,empty: empty
                      ,append: append
                      ,concat: concat
                      ,join: join
                      ,link: link
                      ,style: style
                      ,defaultStyle: defaultStyle
                      ,typeface: typeface
                      ,monospace: monospace
                      ,height: height
                      ,color: color
                      ,bold: bold
                      ,italic: italic
                      ,line: line
                      ,Style: Style
                      ,Under: Under
                      ,Over: Over
                      ,Through: Through};
   return _elm.Text.values;
};
Elm.Time = Elm.Time || {};
Elm.Time.make = function (_elm) {
   "use strict";
   _elm.Time = _elm.Time || {};
   if (_elm.Time.values)
   return _elm.Time.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Time",
   $Basics = Elm.Basics.make(_elm),
   $Native$Signal = Elm.Native.Signal.make(_elm),
   $Native$Time = Elm.Native.Time.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var delay = $Native$Signal.delay;
   var since = F2(function (time,
   signal) {
      return function () {
         var stop = A2($Signal.map,
         $Basics.always(-1),
         A2(delay,time,signal));
         var start = A2($Signal.map,
         $Basics.always(1),
         signal);
         var delaydiff = A3($Signal.foldp,
         F2(function (x,y) {
            return x + y;
         }),
         0,
         A2($Signal.merge,start,stop));
         return A2($Signal.map,
         F2(function (x,y) {
            return !_U.eq(x,y);
         })(0),
         delaydiff);
      }();
   });
   var timestamp = $Native$Signal.timestamp;
   var every = $Native$Time.every;
   var fpsWhen = $Native$Time.fpsWhen;
   var fps = function (targetFrames) {
      return A2(fpsWhen,
      targetFrames,
      $Signal.constant(true));
   };
   var inMilliseconds = function (t) {
      return t;
   };
   var millisecond = 1;
   var second = 1000 * millisecond;
   var minute = 60 * second;
   var hour = 60 * minute;
   var inHours = function (t) {
      return t / hour;
   };
   var inMinutes = function (t) {
      return t / minute;
   };
   var inSeconds = function (t) {
      return t / second;
   };
   _elm.Time.values = {_op: _op
                      ,millisecond: millisecond
                      ,second: second
                      ,minute: minute
                      ,hour: hour
                      ,inMilliseconds: inMilliseconds
                      ,inSeconds: inSeconds
                      ,inMinutes: inMinutes
                      ,inHours: inHours
                      ,fps: fps
                      ,fpsWhen: fpsWhen
                      ,every: every
                      ,timestamp: timestamp
                      ,delay: delay
                      ,since: since};
   return _elm.Time.values;
};
Elm.Transform2D = Elm.Transform2D || {};
Elm.Transform2D.make = function (_elm) {
   "use strict";
   _elm.Transform2D = _elm.Transform2D || {};
   if (_elm.Transform2D.values)
   return _elm.Transform2D.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Transform2D",
   $Native$Transform2D = Elm.Native.Transform2D.make(_elm);
   var multiply = $Native$Transform2D.multiply;
   var rotation = $Native$Transform2D.rotation;
   var matrix = $Native$Transform2D.matrix;
   var translation = F2(function (x,
   y) {
      return A6(matrix,
      1,
      0,
      0,
      1,
      x,
      y);
   });
   var scale = function (s) {
      return A6(matrix,
      s,
      0,
      0,
      s,
      0,
      0);
   };
   var scaleX = function (x) {
      return A6(matrix,
      x,
      0,
      0,
      1,
      0,
      0);
   };
   var scaleY = function (y) {
      return A6(matrix,
      1,
      0,
      0,
      y,
      0,
      0);
   };
   var identity = $Native$Transform2D.identity;
   var Transform2D = {ctor: "Transform2D"};
   _elm.Transform2D.values = {_op: _op
                             ,identity: identity
                             ,matrix: matrix
                             ,multiply: multiply
                             ,rotation: rotation
                             ,translation: translation
                             ,scale: scale
                             ,scaleX: scaleX
                             ,scaleY: scaleY};
   return _elm.Transform2D.values;
};
Elm.Util = Elm.Util || {};
Elm.Util.make = function (_elm) {
   "use strict";
   _elm.Util = _elm.Util || {};
   if (_elm.Util.values)
   return _elm.Util.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Util",
   $Array = Elm.Array.make(_elm),
   $Basics = Elm.Basics.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm);
   var maybeMap2 = F3(function (f,
   ma,
   mb) {
      return function () {
         switch (ma.ctor)
         {case "Just":
            return function () {
                 switch (mb.ctor)
                 {case "Just":
                    return $Maybe.Just(A2(f,
                      ma._0,
                      mb._0));
                    case "Nothing":
                    return $Maybe.Nothing;}
                 _U.badCase($moduleName,
                 "between lines 79 and 82");
              }();
            case "Nothing":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 77 and 82");
      }();
   });
   var revMap = function (f) {
      return function () {
         var go = F2(function (acc,
         xs) {
            return function () {
               switch (xs.ctor)
               {case "::": return A2(go,
                    A2($List._op["::"],
                    f(xs._0),
                    acc),
                    xs._1);
                  case "[]": return acc;}
               _U.badCase($moduleName,
               "between lines 69 and 72");
            }();
         });
         return go(_L.fromArray([]));
      }();
   };
   var dropWhile = F2(function (f,
   xs) {
      return function () {
         switch (xs.ctor)
         {case "::":
            return f(xs._0) ? A2(dropWhile,
              f,
              xs._1) : xs;
            case "[]":
            return _L.fromArray([]);}
         _U.badCase($moduleName,
         "between lines 58 and 63");
      }();
   });
   var takeWhile = F2(function (f,
   xs) {
      return function () {
         switch (xs.ctor)
         {case "::":
            return f(xs._0) ? A2($List._op["::"],
              xs._0,
              A2(takeWhile,
              f,
              xs._1)) : _L.fromArray([]);
            case "[]":
            return _L.fromArray([]);}
         _U.badCase($moduleName,
         "between lines 49 and 54");
      }();
   });
   var both = F2(function (f,
   _v13) {
      return function () {
         switch (_v13.ctor)
         {case "_Tuple2":
            return {ctor: "_Tuple2"
                   ,_0: f(_v13._0)
                   ,_1: f(_v13._1)};}
         _U.badCase($moduleName,
         "on line 45, column 18 to 26");
      }();
   });
   var getExn = F2(function (k,d) {
      return function () {
         var _v17 = A2($Dict.get,k,d);
         switch (_v17.ctor)
         {case "Just": return _v17._0;
            case "Nothing":
            return $Debug.crash(A2($Basics._op["++"],
              "getExn: ",
              A2($Basics._op["++"],
              $Basics.toString(k),
              " not in dict")));}
         _U.badCase($moduleName,
         "between lines 40 and 42");
      }();
   });
   var sequenceResults = function (xs) {
      return function () {
         switch (xs.ctor)
         {case "::": switch (xs._0.ctor)
              {case "Err":
                 return $Result.Err(xs._0._0);
                 case "Ok":
                 return A2($Result.map,
                   F2(function (x,y) {
                      return A2($List._op["::"],
                      x,
                      y);
                   })(xs._0._0),
                   sequenceResults(xs._1));}
              break;
            case "[]":
            return $Result.Ok(_L.fromArray([]));}
         _U.badCase($moduleName,
         "between lines 28 and 36");
      }();
   };
   var sequenceMaybes = function (xs) {
      return function () {
         switch (xs.ctor)
         {case "::": switch (xs._0.ctor)
              {case "Just":
                 return A2($Maybe.map,
                   F2(function (x,y) {
                      return A2($List._op["::"],
                      x,
                      y);
                   })(xs._0._0),
                   sequenceMaybes(xs._1));
                 case "Nothing":
                 return $Maybe.Nothing;}
              break;
            case "[]":
            return $Maybe.Just(_L.fromArray([]));}
         _U.badCase($moduleName,
         "between lines 16 and 24");
      }();
   };
   _op["!"] = F2(function (arr,i) {
      return function () {
         var _v28 = A2($Array.get,
         i,
         arr);
         switch (_v28.ctor)
         {case "Just": return _v28._0;
            case "Nothing":
            return $Debug.crash("!: Index not in array");}
         _U.badCase($moduleName,
         "between lines 10 and 12");
      }();
   });
   _elm.Util.values = {_op: _op
                      ,sequenceMaybes: sequenceMaybes
                      ,sequenceResults: sequenceResults
                      ,getExn: getExn
                      ,both: both
                      ,takeWhile: takeWhile
                      ,dropWhile: dropWhile
                      ,revMap: revMap
                      ,maybeMap2: maybeMap2};
   return _elm.Util.values;
};
Elm.VirtualDom = Elm.VirtualDom || {};
Elm.VirtualDom.make = function (_elm) {
   "use strict";
   _elm.VirtualDom = _elm.VirtualDom || {};
   if (_elm.VirtualDom.values)
   return _elm.VirtualDom.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "VirtualDom",
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm),
   $Native$VirtualDom = Elm.Native.VirtualDom.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var lazy3 = $Native$VirtualDom.lazy3;
   var lazy2 = $Native$VirtualDom.lazy2;
   var lazy = $Native$VirtualDom.lazy;
   var defaultOptions = {_: {}
                        ,preventDefault: false
                        ,stopPropagation: false};
   var Options = F2(function (a,
   b) {
      return {_: {}
             ,preventDefault: b
             ,stopPropagation: a};
   });
   var onWithOptions = $Native$VirtualDom.on;
   var on = F3(function (eventName,
   decoder,
   toMessage) {
      return A4($Native$VirtualDom.on,
      eventName,
      defaultOptions,
      decoder,
      toMessage);
   });
   var attributeNS = $Native$VirtualDom.attributeNS;
   var attribute = $Native$VirtualDom.attribute;
   var property = $Native$VirtualDom.property;
   var Property = {ctor: "Property"};
   var fromElement = $Native$VirtualDom.fromElement;
   var toElement = $Native$VirtualDom.toElement;
   var text = $Native$VirtualDom.text;
   var node = $Native$VirtualDom.node;
   var Node = {ctor: "Node"};
   _elm.VirtualDom.values = {_op: _op
                            ,text: text
                            ,node: node
                            ,toElement: toElement
                            ,fromElement: fromElement
                            ,property: property
                            ,attribute: attribute
                            ,attributeNS: attributeNS
                            ,on: on
                            ,onWithOptions: onWithOptions
                            ,defaultOptions: defaultOptions
                            ,lazy: lazy
                            ,lazy2: lazy2
                            ,lazy3: lazy3
                            ,Options: Options};
   return _elm.VirtualDom.values;
};
Elm.Window = Elm.Window || {};
Elm.Window.make = function (_elm) {
   "use strict";
   _elm.Window = _elm.Window || {};
   if (_elm.Window.values)
   return _elm.Window.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Window",
   $Basics = Elm.Basics.make(_elm),
   $Native$Window = Elm.Native.Window.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var dimensions = $Native$Window.dimensions;
   var width = A2($Signal.map,
   $Basics.fst,
   dimensions);
   var height = A2($Signal.map,
   $Basics.snd,
   dimensions);
   _elm.Window.values = {_op: _op
                        ,dimensions: dimensions
                        ,width: width
                        ,height: height};
   return _elm.Window.values;
};
