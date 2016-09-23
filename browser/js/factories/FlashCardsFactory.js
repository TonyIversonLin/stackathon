app.factory('FlashCardsFactory', function ($http) {
    var cachFlashCards;
    return { 
        //cachflashCards: [],
    	getFlashCards: function (category) {
    		var queryParams = {}
    		if(category) queryParams.category = category;
        	return $http.get('/api/cards',{
        		params: queryParams
        	}).then(function(response){
                cachFlashCards = response.data;
        		return response.data;
        	});
        },
        createNewCards: function(flashcard){
            console.log('about to send the new card',flashcard)
            return $http.post('/cards',flashcard)
                .then(function(res){
                    cachFlashCards.push(res.data);
                    return res.data;
                })
        },
        getCurrentFlashCards: function(){
            console.log('cach data',cachFlashCards);
            return cachFlashCards;
        }
    };
});