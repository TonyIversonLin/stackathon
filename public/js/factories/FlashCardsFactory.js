app.factory('FlashCardsFactory', function ($http) {

    return {
        getFlashCards: function (category) {

            var queryStringParamaters = {};

            if (category) {
                queryStringParamaters.category = category;
            }

            return $http.get('/cards', {
                params: queryStringParamaters
            }).then(function (response) {
                return response.data;
            });
        }
    };

});