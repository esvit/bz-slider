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
var bzSliderController = ['$scope', '$timeout', '$parse', function ($scope, $timeout, $parse) {
    var timeOut = null;

    $scope.$slides = $scope.$slides || [];
    $scope.$play = false;

    $scope.play = function() {
        timeOut = $timeout(function() {
            $scope.next();
            $scope.play();
        }, $scope.$delay || 2000);
        $scope.$play = true;
    };

    $scope.stop = function() {
        $timeout.cancel(timeOut);
        timeOut = null;
        $scope.$play = false;
    };

    $scope.next = function() {
        var total = $scope.$slides.length;
        if (total > 0) {
            $scope.$slideIndex = ($scope.$slideIndex == total - 1) ? 0 : $scope.$slideIndex + 1;
        }
    };

    $scope.prev = function() {
        var total = $scope.$slides.length;
        if (total > 0) {
            $scope.$slideIndex = ($scope.$slideIndex == 0) ? total - 1 : $scope.$slideIndex - 1;
        }
    };

    $scope.setIndex = function(index) {
        $scope.$slideIndex = index;
    };
}];
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
    return app;
}));