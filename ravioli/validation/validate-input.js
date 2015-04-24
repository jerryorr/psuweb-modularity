var $ = require('jquery')
var _ = require('lodash')

module.exports = function (input, validations) {
  return function () {
    var val = $(input).val()
    var error = _.chain(validations)
      .map(function (validation) {
        return validation(val)
      })
      .compact()
      .first().value()

    return error
  }
}
