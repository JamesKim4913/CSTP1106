let number = 1;



function search() {
  var keyword = $("#keyword").val();
  if(keyword !="") {
    $.ajax({
        url: `https://imdb-api.com/en/API/SearchTitle/k_vvmwabzw/{keyword}`,
        type: 'GET',
        success: process_
    });
  } else {
    return;
  }
}


function show(id) {
  $.ajax({
      url: `https://imdb-api.com/en/API/Title/k_vbvmwrke/{id}`,
      type: 'GET',
      success: showdetail
  });
}

function showdetail(data) {
    for (var j = 0; j < data.results.length; j++){
      to_add = "";
      to_add += '<div>';

      to_add += data.results[j].description

      to_add += '</div>';
      jQuery('#show').append(to_add);
    } 
}



function process_(data){
  for (var j = 0; j < data.results.length; j++){
    to_add = "";
    to_add += '<div>';

    to_add += number++ + ". ";
    to_add += 'Title: ' + data.results[j].title + '<br>';
    to_add += 'Description: ' + data.results[j].description + '<br>';
    to_add += '<img src="' + data.results[j].image + '" width="100" height="100">' + '<br>';

    to_add += '<button type="button" id="show" onclick="show(\"'+data.results[j].id+'\")">Show plot</button>';

    to_add += '<hr>';

    to_add += '</div>';
    jQuery('#result').append(to_add);
  }
}


function setup() {
  $('#search').click(search);
  $('#show').click(show);
}


jQuery(document).ready(setup);
