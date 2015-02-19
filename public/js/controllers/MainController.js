app.controller('MainController', function ($scope, FlashCardsFactory) {

    $scope.loading = true;

    var setFlashCards = function (flashCards) {
        $scope.loading = false;
        $scope.flashCards = flashCards;
    };

    var getThenSetAllFlashCards = function () {
        FlashCardsFactory.getFlashCards().then(setFlashCards);
        $scope.loading = true;
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
        $scope.loading = true;
    };

    $scope.resetCategory = function () {
        $scope.currentCategory = null;
        getThenSetAllFlashCards();
    };

    getThenSetAllFlashCards();

});
