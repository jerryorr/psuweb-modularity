$ = require('jquery')

module.exports = function (name) {
  return $('input[name=' + name + ']:checked').val() == 'true'
}