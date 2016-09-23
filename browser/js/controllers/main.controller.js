app.controller('MainController', function ($scope,FlashCardsFactory,ScoreFactory) {

  $scope.categories = [
    'SQL',
    'Express',
    'Angular',
    'Node'
  ];
  //$scope.loading = true;

  $scope.getCategoryCards = function(category){
  	$scope.currentCategory = category;
  	FlashCardsFactory.getFlashCards(category)
  	.then(function(flashCards){
  		console.log(flashCards);
  		$scope.flashCards = flashCards;
  	});
  }

  //$scope.getCurrentFlashCards = FlashCardsFactory.getCurrentFlashCards;

  // $scope.answerQuestion = function (answer, flashCard) {
  //   console.log(answer);
  //   if (!flashCard.answered) {
  //     flashCard.answered = true;
  //     flashCard.answeredCorrectly = answer.correct;
  //     if(answer.correct) ScoreFactory.correct++;
  //     else ScoreFactory.incorrect++;
  //   }
  // }
  FlashCardsFactory.getFlashCards()
  	.then(function(flashCards){
  		console.log(flashCards);
  		//$scope.getCurrentFlashCards = FlashCardsFactory.getCurrentFlashCards;
      $scope.flashCards = flashCards;
      $scope.loading = false;
  	});

});

app.filter('onlyRightAnswer',function(){
  return function(answers){
    return answers.filter(function(answer){
      return answer.correct === true;
    })
  }
})
