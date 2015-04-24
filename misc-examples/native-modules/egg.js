(function (global) { 
  var egg = global.egg = {}

  egg.thesis = function () {
    // I sure hope the browser finished loading egg.js 
    // and sprintf.js by now...
    return sprintf('You need the %s before the %s.',
      egg.sound(), chicken.sound())
  }

  egg.sound = function () {
    return 'crack'
  }

}(window))
