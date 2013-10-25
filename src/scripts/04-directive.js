app.directive('bzSlider', ['$timeout', '$parse', function ($timeout, $parse) {
    return {
        restrict: 'AC',
        replace: false,
        scope: true,
        controller: bzSliderController,
        link: function(scope, element, attrs) {
            element.addClass('bz-slider');
            scope.$slideIndex = 0;
            // watch for slides update
            scope.$watch(attrs.bzSlider, function(value) {
                scope.$slides = element.children();
            });
        }
    };
}]);