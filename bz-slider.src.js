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
    $scope.$slides = $scope.$slides || [];

    $scope.next = function() {
        var total = $scope.$slides.length;
        if (total > 0) {
            $scope.$slideIndex = ($scope.$slideIndex == total - 1) ? 0 : $scope.$slideIndex + 1;
        }
        $timeout($scope.next, 2000);
    }
    $scope.next();

    $scope.setIndex = function(index) {
        $scope.$slideIndex = index;
    }
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
            // watch for slides update
            scope.$watch(attrs.bzSlider, function(value) {
                scope.$slides = element.children();
            });
        }
    };
}]);
    return app;
}));