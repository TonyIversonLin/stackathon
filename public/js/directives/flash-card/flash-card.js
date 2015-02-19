app.directive('flashCard', function (ScoreFactory) {

    return {
        restrict: 'E',
        scope: {
          item: '='
        },
        templateUrl: 'js/directives/flash-card/flash-card.html',
        link: function (scope) {

            scope.answered = false;
            scope.answeredCorrectly = null;

            scope.answerQuestion = function (answer) {

                if (scope.answered) {
                    return;
                }

                scope.answered = true;
                scope.answeredCorrectly = answer.correct;

                if (answer.correct) {
                    ScoreFactory.correct = ScoreFactory.correct + 1;
                } else {
                    ScoreFactory.incorrect = ScoreFactory.incorrect + 1;
                }

            };

        }
    };

});