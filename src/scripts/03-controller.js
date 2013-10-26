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