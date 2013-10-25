(function(angular, factory) {
    if (typeof define === 'function' && define.amd) {
        define('bzSlider', ['angular'], function($, angular) {
            return factory(angular);
        });
    } else {
        return factory(angular);
    }
}(angular || null, function(angular) {
var app = angular.module('bzSlider', []);
app.directive('bzSlider', ['$timeout', '$parse', function ($timeout, $parse) {
    return {
        restrict: 'AC',
        replace: false,
        scope: true,
        controller: function() {
        },
        link: function(scope, element, attrs) {
            element.addClass('bz-slider');
            var slides = [];
            scope.$slideIndex = 0;
            // watch for slides update
            scope.$watch(attrs.bzSlider, function(value) {
                slides = element.children();
            });
            scope.next = function() {
                var total = slides.length;
                if (total > 0) {
                    scope.$slideIndex = (scope.$slideIndex == total - 1) ? 0 : scope.$slideIndex + 1;
                }
                $timeout(function() { scope.next() }, 2000);
            }
            scope.next();

            scope.setIndex = function(index) {
                scope.$slideIndex = index;
            }
        }
    };
}]);
app.directive('bzSlide', ['$timeout', '$parse', function ($timeout, $parse) {
    return {
        restrict: 'AC',
        replace: false,
        scope: false,
        require: '^bzSlider',
        link: function(scope, element, attrs) {
        
        }
    };
}]);
    return app;
}));