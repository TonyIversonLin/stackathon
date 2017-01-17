app.controller('mainPage', function ($scope) {
	$scope.showForm = false;
	$scope.uploadPanel = function () {
		$scope.showForm = !$scope.showForm;
	}
})