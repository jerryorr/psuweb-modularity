module.exports = function (formGroup, validator) {
  var input = formGroup.find('input')
  input.on('change input blur', function () {

    formGroup.find('.help-block').remove()

    var error = validator()
    formGroup.toggleClass('has-error', !!error)
    if (error) {
      input.after('<span class="help-block">' + error + '</span>')
    }
  })
}
