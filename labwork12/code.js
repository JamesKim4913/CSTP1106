// Success weather result, display html
function procces_(data){
  console.log(data);
  temp = data.main.temp  // current temperature
  jQuery('#city_temperature').html(temp)

  // fahrenheit to celsius
  // celcius = parseFloat(temp)-273.15
  // celsius to fahrenheit
	// fahrenheit = ((parseFloat(temp)-273.15)*1.8)+32
}

// Ajax get send, openweathermap
function AJAX_GET(){
  city_name_input = jQuery('#city_name_input').val()  
  // For temperature in Celsius use units=metric
  $.ajax({
    url:`https://api.openweathermap.org/data/2.5/weather?q=${city_name_input}&appid=83a2edbfd82058895386c02214670622&units=metric`,
    type:'GET',
    success: procces_
  })
}

function setup(){
  $('#get_temperature_button').click(AJAX_GET);
}
// Init document ready
$(document).ready(setup);



/*
// ======================
// Weather API - https://openweathermap.org/current
// Json Viewer - https://codebeautify.org/jsonviewer
// ======================

Temperature is available in Fahrenheit, Celsius and Kelvin units.

For temperature in Fahrenheit use units=imperial
For temperature in Celsius use units=metric
Temperature in Kelvin is used by default, no need to use units parameter in API call
List of all API parameters with units openweathermap.org/weather-data

api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric


{"coord":{"lon":-122.9526,"lat":49.2664},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":278.43,"feels_like":278.43,"temp_min":275.72,"temp_max":281.61,"pressure":1015,"humidity":85},"visibility":10000,"wind":{"speed":0.89,"deg":71,"gust":2.68},"clouds":{"all":90},"dt":1637602812,"sys":{"type":2,"id":2009437,"country":"CA","sunrise":1637595222,"sunset":1637626967},"timezone":-28800,"id":5911606,"name":"Burnaby","cod":200}
*/
