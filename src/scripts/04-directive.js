app.directive('bzSlider', ['$timeout', '$parse', function ($timeout, $parse) {
    return {
        restrict: 'AC',
        replace: false,
        scope: true,
        controller: bzSliderController,
        link: function(scope, element, attrs) {
            element.addClass('bz-slider');
            scope.$slideIndex = 0;
            scope.$slides = [];

            // watch for slides update
            scope.$watch(attrs.bzSlider, function(value) {
                var arr = [];
                angular.forEach(element.children(), function(item) {
                    if (angular.element(item).hasClass('bz-slide')) {
                        arr.push(item);
                    }
                });
                scope.$slides = arr;
            });
            // delay
            if (angular.isDefined(attrs.delay)) {
                scope.$watch(attrs.delay, function(value) {
                    scope.$delay = value;
                });
            }
            // autoplay
            if (angular.isDefined(attrs.autoplay)) {
                scope.$autoplay = $parse(attrs.autoplay)(scope);
                if (scope.$autoplay) {
                    scope.play();
                }
            }
        }
    };
}]);