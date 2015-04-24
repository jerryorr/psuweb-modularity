$(document).ready(function () {

  $('input[name=presenting]').change(function () {
    var presenting = $('input[name=presenting]:checked').val() == 'yes'

    $('.payment').toggleClass('hidden', presenting)
    
    if (presenting) {
      $('.payment .has-error').removeClass('has-error')
      $('.payment .help-block').remove()
      $('.payment input').data('valid', true)
    }
  })

  $('input#name').on('change input blur', function () {
    var input = $(this)
    var inputGroup = input.parent()

    inputGroup.find('.help-block').remove()

    var name = input.val()
    var valid = !empty(name)

    inputGroup.toggleClass('has-error', !valid)
    if (!valid) {
      input.after('<span class="help-block">Name is required</span>')
    }

    input.data('valid', valid)
  })

  $('input#email').on('change input blur', function () {
    var input = $(this)
    var inputGroup = input.parent()

    inputGroup.find('.help-block').remove()

    var val = input.val()
    var valid = !empty(val) && /.+@.+\..+/.test(val)

    inputGroup.toggleClass('has-error', !valid)
    if (!valid) {
      input.after('<span class="help-block">A valid email address is required</span>')
    }

    input.data('valid', valid)
  })

  $('input#credit-card').on('change input blur', function () {
    var input = $(this)
    var inputGroup = input.parent()

    inputGroup.find('.help-block').remove()

    var val = input.val()
    var valid = !empty(val) && /^[\d -]+$/.test(val)

    inputGroup.toggleClass('has-error', !valid)
    if (!valid) {
      input.after('<span class="help-block">A valid credit card number is required</span>')
    }

    input.data('valid', valid)
  })

  $('input#credit-code').on('change input blur', function () {
    var input = $(this)
    var inputGroup = input.parent()

    inputGroup.find('.help-block').remove()

    var val = input.val()
    var valid = !empty(val) && /^[\d]+$/.test(val)

    inputGroup.toggleClass('has-error', !valid)
    if (!valid) {
      input.after('<span class="help-block">A valid code is required</span>')
    }

    input.data('valid', valid)
  })


  $('.submit').click(function () {
    var invalidInputs = $('form input').filter(function () {
      return !$(this).data('valid')
    })

    if (invalidInputs.length == 0) {
      $('form').replaceWith('<p class="alert alert-success">See you at the conference!</p>')
    }
  })

  function empty (v) {
    if (!v) {
      return true
    }
    if (typeof v === 'string' && v.trim() == '') {
      return true
    }
    return false
  }
}) 