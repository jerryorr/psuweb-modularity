// I sure hope the browser finished loading jquery 
// by now...
$(document).ready(function () {
  // I sure hope the browser finished loading egg.js 
  // and chicken.js by now...

  $('<div/>').html(chicken.thesis())
    .appendTo(document.body)

  $('<div/>').html(egg.thesis())
    .appendTo(document.body)
})
