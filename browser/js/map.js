let map;
let zoom;
let currentLatLong;
let style = JSON.parse('[{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]');

function initMap() {
	let	lat  = 40.689247;
	let	long = -74.044502;
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: lat, lng: long},
      zoom: zoom || 15,
      styles: style
    });
    zoom = 18;
}
function makeMarker(latlngObj) {
	var marker = new google.maps.Marker({
	position: latlngObj,
	title: "Hello World!"
	});
	return marker;
}
function updateMap(coordinate) {
	lat = coordinate.coords.latitude;
	long = coordinate.coords.longitude;
	alert("Lat: " + coordinate.coords.latitude + "\nLon: " + coordinate.coords.longitude);
	currentLatLong = new google.maps.LatLng(lat,long);
	map.setCenter(currentLatLong);
	let marker = makeMarker(currentLatLong);
	marker.setMap(map);
}
document.getElementById('get_location').onclick = function () {
	console.log('clicking')
	navigator.geolocation.getCurrentPosition(updateMap,function(error){
         alert(error.message);
    }, {
         enableHighAccuracy: true
              ,timeout : 5000
    });
	return false;
}