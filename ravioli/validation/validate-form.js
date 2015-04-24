var _ = require('lodash')

module.exports = function (validations) {
  return function () {
    return _.chain(validations)
      .map(function (validation) {
        return validation()
      })
      .compact()
      .value()
  }
}