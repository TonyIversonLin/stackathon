app.controller('NewCardFormCtrl', function ($scope, FlashCardsFactory) {

    $scope.newCard = {
        answers: []
    };

    $scope.submitCard = function (newCard) {
        FlashCardsFactory.addNewCard(newCard).then(function () {
            $scope.newCard = {
                answers: []
            };
        });
    };

});