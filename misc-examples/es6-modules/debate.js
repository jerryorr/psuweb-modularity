import * as chicken from './chicken'
import * as egg from './egg'
import $ from 'jquery'

$(document).ready(function () {
  $('<div/>').html(chicken.thesis())
    .appendTo(document.body)

  $('<div/>').html(egg.thesis())
    .appendTo(document.body)
})
