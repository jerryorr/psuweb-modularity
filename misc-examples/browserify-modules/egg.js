var chicken = require('./chicken')
var sprintf = require('sprintf')

module.exports.thesis = function () {
  return sprintf('You need the %s before the %s.', 
    sound(), chicken.sound())
}

var sound = module.exports.sound = function () {
  return 'crack'
}
