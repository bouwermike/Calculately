//Get document ready & establish key inputs
$(document).ready(function () {
  $('#one').click(function () {
    $('#screen').append($('#one').text())
  });
  $('#two').click(function () {
    $('#screen').append($('#two').text())
  });
  $('#three').click(function () {
    $('#screen').append($('#three').text())
  });
  $('#four').click(function () {
    $('#screen').append($('#four').text())
  });
  $('#five').click(function () {
    $('#screen').append($('#five').text())
  });
  $('#six').click(function () {
    $('#screen').append($('#six').text())
  });
  $('#seven').click(function () {
    $('#screen').append($('#seven').text())
  });
  $('#eight').click(function () {
    $('#screen').append($('#eight').text())
  });
  $('#nine').click(function () {
    $('#screen').append($('#nine').text())
  });
  $('#zero').click(function () {
    $('#screen').append($('#zero').text())
  });
  $('#plus').click(function () {
    $('#screen').append($('#plus').text())
  });
  $('#minus').click(function () {
    $('#screen').append($('#minus').text())
  });
  $('#divide').click(function () {
    $('#screen').append($('#divide').text())
  });
  $('#multiply').click(function () {
    $('#screen').append("*")
  });
  $('#decimal').click(function () {
    $('#screen').append($('#decimal').text())
  });
  $('#clear').click(function () {
    $('#screen').empty()
  });

  //Eval input and return answer
  $('#equals').click(function () {
      var x = $('#screen').text();
      var y = eval(x);
      $('#screen').empty();
      $('#screen').append(y)
  });
})
