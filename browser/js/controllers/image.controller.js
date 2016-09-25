//app.controller('imageController', function ($scope,ImageFactory) {
	// $scope.$watch('newImage', function (newI,old) {console.log('asdfasdf',newI)})

	// $scope.PreviewImage = function () {
	// 	var oFReader = new FileReader();
 //        oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

 //        oFReader.onload = function (oFREvent) {
 //            document.getElementById("uploadPreview").src = oFREvent.target.result;
 //        };
	// }
//})

app.controller('submitController', ['$scope', 'multipartForm', function($scope, multipartForm){
	$scope.customer = {};
	$scope.Submit = function(){
		var uploadUrl = '/uploadImage';
		console.log('about to send image', $scope.customer);
		multipartForm.post(uploadUrl, $scope.customer);
	}
}]);

app.controller('imageShowController', function ($scope, ImageFactory, DirectionFactory) {
	ImageFactory.getImages()
		.then(function(images){
			$scope.images = images;
			console.log('getting image back',images)
		}).catch(function(err){
			console.log(err);
		});
	$scope.showRoute = function (image) {
		console.log('trying to show route for the target food image',image);
		DirectionFactory.showRoute(image.lat,image.long);
	}

})