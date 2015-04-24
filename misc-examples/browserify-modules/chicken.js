var egg = require('./egg')
var sprintf = require('sprintf')

module.exports.thesis = function () {
  return sprintf('You need the %s before the %s.', 
    sound(), egg.sound())
}

var sound = module.exports.sound = function () {
  return 'cluck'
}
