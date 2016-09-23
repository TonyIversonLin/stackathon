app.factory('ImageFactory', function ($http) {
	let ImageFactory = {};
	ImageFactory.uploadImage = function (imagedata) {
		console.log('about to send image')
		return $http.post('/image', imagedata)
			.then(function(res){
				console.log(res.data);
			})
	}


	return ImageFactory;
})