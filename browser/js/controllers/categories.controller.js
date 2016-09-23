app.controller('CategoriesController',function($scope,FlashCardsFactory){
  $scope.categories = [
    'SQL',
    'Express',
    'Angular',
    'Node'
  ];
   $scope.getCategoryCards = function(category){
  	$scope.currentCategory = category;
  	FlashCardsFactory.getFlashCards(category)
  	.then(function(flashCards){
  		console.log(flashCards);
  		$scope.flashCards = flashCards;
  	});
  }
})