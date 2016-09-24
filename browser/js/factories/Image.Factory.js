app.factory('ImageFactory', function ($http) {
	let ImageFactory = {};
	ImageFactory.getImages = function () {
		console.log('about to get image')
		return $http.get('/allImages')
			.then(function(res){
				return res.data;
			});
	}
	return ImageFactory;
})