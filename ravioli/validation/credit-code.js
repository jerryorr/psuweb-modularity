var empty = require('./empty')

module.exports = function (val, label) {
  label = label || 'Field'
  return /^[\d]+$/.test(val) ? null : (label + ' must be a valid credit card security code')
}
