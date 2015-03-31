app.controller('MainController', function ($scope, whateverName) {
	$scope.flashCards = whateverName;

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
});