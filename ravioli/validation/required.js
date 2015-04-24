var empty = require('./empty')

module.exports = function (val, label) {
  label = label || 'Field'
  return empty(val) ? (label + ' is required') : null
}
