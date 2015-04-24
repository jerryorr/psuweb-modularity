define(function (require) {
  var sprintf = require('./sprintf')

  var module = {}
  module.thesis = function () {
    return sprintf('You need the %s before the %s.', 
      // Note that because of the circular dependency, I have to
      // require this on demand, or RequireJS barfs
      sound(), require('./chicken').sound())
  }

  var sound = module.sound = function () {
    return 'crack'
  }

  return module
})