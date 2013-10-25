app.directive('bzSlider', ['$timeout', '$parse', function ($timeout, $parse) {
    return {
        restrict: 'AC',
        replace: false,
        scope: true,
        controller: bzSliderController,
        link: function(scope, element, attrs) {
            element.addClass('bz-slider');
            var slides = [];
            scope.$slideIndex = 0;
            // watch for slides update
            scope.$watch(attrs.bzSlider, function(value) {
                slides = element.children();
            });
        }
    };
}]);