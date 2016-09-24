app.factory('DirectionFactory', function () {
	let DirectionFactory = {};
	let directionService = new google.maps.DirectionsService();	  //path finding API
	let directionDisplay = new google.maps.DirectionsRenderer();  //path drawing API
	let directionsMap = map                     			      //Google Map API; the map object is globally defined in map.js
	directionDisplay.setMap(directionsMap);

	DirectionFactory.showRoute = function (targetLat,targetLong) {
		console.log('about calculating the route');
		let start = currentLatLong; 							   // currentLatLong is globally defined in map.js
		console.log('start position...........',currentLatLong);
		let end = "Times Square, Manhattan, NY 10036";
		let request = {
			origin: start,
			destination: end,
			travelMode: google.maps.TravelMode.TRANSIT
		};

		directionService.route(request, function(result, status) {
			if(status == google.maps.DirectionsStatus.OK) {
				directionDisplay.setDirections(result);
			}else{
				console.log('something went wrong while drawing the path')
			}
		});
	}
 
	return DirectionFactory;
})