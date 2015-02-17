app.controller('MainController', function ($scope, FlashCardsFactory) {

    var setFlashCards = function (flashCards) {
        $scope.flashCards = flashCards;
    };

    var getThenSetAllFlashCards = function () {
        FlashCardsFactory.getFlashCards().then(setFlashCards);
    };

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.getCategoryCards = function (category) {
        $scope.currentCategory = category;
        FlashCardsFactory.getFlashCards(category).then(setFlashCards);
    };

    $scope.resetCategory = function () {
        $scope.currentCategory = null;
        getThenSetAllFlashCards();
    };

    getThenSetAllFlashCards();

});
