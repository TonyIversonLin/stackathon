app.directive('flashCard',function(ScoreFactory){
	return {
		restrict: 'E',
		templateUrl: 'js/directives/flashCard/flashCard.html',
		scope: {
			card: '='
		},
		link: function(scope,element,attr){
			scope.answerQuestion = function (answer, flashCard) {
			    console.log(answer);
			    if (!flashCard.answered) {
			      flashCard.answered = true;
			      flashCard.answeredCorrectly = answer.correct;
			      if(answer.correct) ScoreFactory.correct++;
			      else ScoreFactory.incorrect++;
	    		}
  			};	
		}
	}
});

app.directive('borderOnHover',function(){
	return {
		restrict: 'A',
		link: function(scope,element,attr){
			element.on('mouseenter', function () {
				element.css("border-color","blue");
			});
			element.on('mouseleave', function () {
				element.css("border-color","black");
			});
		}
	}
});

app.filter('onlyRightAnswer',function(){
  return function(answers){
    return answers.filter(function(answer){
      return answer.correct === true;
    })
  };
})