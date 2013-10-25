var bzSliderController = ['$scope', '$timeout', '$parse', function ($scope, $timeout, $parse) {

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
}]);