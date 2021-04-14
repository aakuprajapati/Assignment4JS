/*
	Weather Api From Weather Unlocked
		https://developer.weatherunlocked.com/

	How to use the Weather Unlocked API?
		Document https://developer.weatherunlocked.com/documentation/localweather
*/

var marquee = document.getElementById("weather");
// geolocation browser api

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(hoverMarquee);
} else {
  marquee.textContent = "Unable to find your location!";
}

//get response from api
function hoverMarquee(position) {
  var fullUrl =
    "http://api.weatherunlocked.com/api/current/" +
    round2DecimalPlace(position.coords.latitude) +
    "," +
    round2DecimalPlace(position.coords.longitude) +
    "?app_id=907c355c" +
    "&app_key=442d66aee56e79029ef11e470c62b311";

  var request = new XMLHttpRequest();
  request.addEventListener("load", weatherLine);
  request.open("GET", fullUrl);
  request.responseType = "json";
  request.send();
}

//set weather information to marquee
function weatherLine(xmlObj) {
  data = xmlObj.currentTarget.response;

  text =
    'WEATHER RIGHT NOW: "' +
    data.wx_desc +
    '"&emsp;TEMPERATURE: ' +
    data.temp_c +
    "°C" +
    "&emsp; HUMIDITY: " +
    data.humid_pct +
    "%";
  marquee.innerHTML = text;
}

//Round decimal to 2 decimal value
function round2DecimalPlace(value) {
  return Math.round(value * 100) / 100;
}
