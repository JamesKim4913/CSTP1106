function add() {
  x = parseInt($('#input1').val()); // get input value
  y = parseInt($('#input2').val());
  z = x + y
  $('#result').html(z); // html(input) is a setter
  tmp = '<span id="">' + x + ' + ' + y + ' = ' + z + ' <button id="delete">Delete</button><br></span>';
  // Old + new
  $('#history').append(tmp);
}

function subtraction() {
  x = parseInt($('#input1').val());
  y = parseInt($('#input2').val());
  z = x - y
  $('#result').html(z);
  tmp = '<span id="">' + x + ' - ' + y + ' = ' + z + ' <button id="delete">Delete</button><br></span>';
  // Old + new
  $('#history').append(tmp);
}

function multiplication() {
  x = parseInt($('#input1').val());
  y = parseInt($('#input2').val());
  z = x * y
  $('#result').html(z);
  tmp = '<span id="">' + x + ' * ' + y + ' = ' + z + ' <button id="delete">Delete</button><br></span>';
  // Old + new
  $('#history').append(tmp);
}

function division() {
  x = parseInt($('#input1').val());
  y = parseInt($('#input2').val());
  z = x / y
  $('#result').html(z);
  tmp = '<span id="">' + x + ' / ' + y + ' = ' + z + ' <button id="delete">Delete</button><br></span>';
  // Old + new
  $('#history').append(tmp);
}

function showHistory() {
  //$("#history").show();
  $('#history').attr('style', '');
}

function hideHistory() {
  //$("#history").hide();
  $('#history').attr('style', 'display:none');
}

function deleteElement() {
  // Delete parent
  $(this).parent().remove();
}


function setup() {
  $('#add').click(add);
  $('#subtraction').click(subtraction);
  $('#multiplication').click(multiplication);
  $('#division').click(division);
  $('#showhistory').click(showHistory);
  $('#hidehistory').click(hideHistory);
  $('body').on('click', '#delete', deleteElement);
}

// Document ready event
$(document).ready(setup);
