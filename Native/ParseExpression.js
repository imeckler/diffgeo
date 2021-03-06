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
