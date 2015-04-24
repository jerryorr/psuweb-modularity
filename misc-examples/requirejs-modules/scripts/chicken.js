define(function (require) {
  var egg = require('./egg')
  var sprintf = require('./sprintf')

  var module = {}
  module.thesis = function () {
    return sprintf('You need the %s before the %s.', 
      sound(), egg.sound())
  }

  var sound = module.sound = function () {
    return 'cluck'
  }

  return module
})