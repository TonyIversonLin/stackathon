app.directive('borderOnHover', function () {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            element.on('mouseenter', function () {
                element.css({ border: '6px green solid' });
            });

            element.on('mouseleave', function () {
               element.css({ border: 'none' });
            });

        }
    };

});