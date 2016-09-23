app.controller('FlashcardsController',function($scope,FlashCardsFactory,allFlashCards){
// FlashCardsFactory.getFlashCards()
//   	.then(function(flashCards){
//   		console.log(flashCards);
//   		//$scope.getCurrentFlashCards = FlashCardsFactory.getCurrentFlashCards;
//       $scope.flashCards = flashCards;
//       $scope.loading = false;
//   	});
	$scope.flashCards = allFlashCards;
})