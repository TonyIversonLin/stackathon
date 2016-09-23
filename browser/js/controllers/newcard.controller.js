app.controller('NewCardController',function($scope,FlashCardsFactory){
	$scope.newCard = {
	    question: null,
	    category: null,
	    answers: [
	        { text: null, correct: false },
	        { text: null, correct: false },
	        { text: null, correct: false }
	    ]
	};
	$scope.submit = function(){
		console.log('trying to sumbit',$scope.newCard);
		FlashCardsFactory.createNewCards($scope.newCard)
			.then(function(newCard){
				//$scope.$digest();
				//$scope.$parent.flashCards = FlashCardsFactory.getCurrentFlashCards();
				console.log('create successful',newCard);
			})
	}
})