app.controller('FlashCardController', function ($scope, ScoreFactory) {

    $scope.answered = false;
    $scope.answeredCorrectly = null;

    $scope.answerQuestion = function (answer) {

        if ($scope.answered) {
            return;
        }

        $scope.answered = true;
        $scope.answeredCorrectly = answer.correct;

        if (answer.correct) {
            ScoreFactory.correct = ScoreFactory.correct + 1;
        } else {
            ScoreFactory.incorrect = ScoreFactory.incorrect + 1;
        }

    };

});