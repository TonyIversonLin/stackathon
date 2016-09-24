app.service('multipartForm', ['$http', function($http){
	this.post = function(uploadUrl, data){
		var fd = new FormData();
		for(var key in data){
			fd.append(key, data[key]);
		}
		//attach the current geolocation of the image before sending
		function imageCoord(coordinate){
			console.log('getting image coordinate before sending',coordinate)
			alert("Lat: " + coordinate.coords.latitude + "\nLon: " + coordinate.coords.longitude);
			let lat = coordinate.coords.latitude;
			let long = coordinate.coords.longitude;
			fd.append('lat',lat);
			fd.append('long',long);
			console.log('this is the complete obj before send',fd);
			$http.post(uploadUrl, fd, {
			transformRequest: angular.indentity,
			headers: { 'Content-Type': undefined }
			});
		}
		navigator.geolocation.getCurrentPosition(imageCoord,function(error){
         	alert(error.message);
    		}, {
         enableHighAccuracy: true
              ,timeout : 5000
    	});

	}
}])