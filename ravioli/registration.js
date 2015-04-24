var $ = require('jquery')
var required = require('./validation/required')
var email = require('./validation/email')
var creditCard = require('./validation/credit-card')
var creditCode = require('./validation/credit-code')
var validate = require('./validation/validate')
var validateInput = require('./validation/validate-input')
var watchAndValidate = require('./validation/watch-and-validate')
var validateForm = require('./validation/validate-form')
var radioVal = require('./radio-val')

$(document).ready(function () {

  $('input[name=presenting]').change(function () {
    var presenting = radioVal('presenting')

    $('.payment').toggleClass('hidden', presenting)
    
    if (presenting) {
      $('.payment .has-error').removeClass('has-error')
      $('.payment .help-block').remove()
    }
  })

  var validateName = validateInput($('input#name'), [validate(required, 'Name')])
  watchAndValidate($('.form-group.name'), validateName)

  var validateEmail = validateInput($('input#email'), [validate(required, 'Email'), validate(email, 'Email')])
  watchAndValidate($('.form-group.email'), validateEmail)

  var validateCreditCard = validateInput($('input#credit-card'), [validate(required, 'Credit Card'), validate(creditCard, 'Credit Card')])
  watchAndValidate($('.form-group.credit-card'), validateCreditCard)

  var validateCreditCode = validateInput($('input#credit-code'), [validate(required, 'Security Code'), validate(creditCode, 'Credit Card')])
  watchAndValidate($('.form-group.credit-code'), validateCreditCode)

  var validatePresenter = validateForm([validateName, validateEmail])
  var validateAttendee = validateForm([validateName, validateEmail, validateCreditCard, validateCreditCode])

  $('.submit').click(function () {
    var errors = radioVal('presenting') ? validatePresenter() : validateAttendee()

    if (errors.length == 0) {
      $('form').replaceWith('<p class="alert alert-success">See you at the conference!</p>')
    }
  })

}) 
