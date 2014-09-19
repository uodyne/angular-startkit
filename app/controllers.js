app.controller('MainCtrl', function($scope, $routeSegment, loader) {
    $scope.$routeSegment = $routeSegment;
    $scope.loader = loader;
    $scope.angularurl = "//ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.2/angular.min.js";
    $scope.$on('routeSegmentChange', function() {
        loader.show = false;
    })
});
