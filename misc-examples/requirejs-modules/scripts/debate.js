define(function (require) {
  var $ = require('jquery')
  var chicken = require('./chicken')
  var egg = require('./egg')

  $('<div/>').html(chicken.thesis())
    .appendTo(document.body)

  $('<div/>').html(egg.thesis())
    .appendTo(document.body)
})