module.exports = function (val, label) {
  label = label || 'Field'
  return /.+@.+\..+/.test(val) ? null : (label + ' must be a valid email address')
}
