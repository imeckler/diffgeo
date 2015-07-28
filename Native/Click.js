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
