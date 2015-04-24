module.exports = function (validation, label) {
  return function (value) {
    return validation(value, label)
  }
}
