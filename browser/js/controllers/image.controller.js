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