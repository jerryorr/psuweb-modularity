(function (global) { 
  var chicken = global.chicken = {}

  chicken.thesis = function () {
    // I sure hope the browser finished loading egg.js 
    // and sprintf.js by now...
    return sprintf('You need the %s before the %s.', 
      chicken.sound(), egg.sound())
  }

  chicken.sound = function () {
    return 'cluck'
  }

}(window))
