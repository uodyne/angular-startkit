
app.controller('MainCtrl', function($scope, $routeSegment, loader) {

    $scope.$routeSegment = $routeSegment;
    $scope.loader = loader;

    $scope.$on('routeSegmentChange', function() {
        loader.show = false;
    })
});

app.controller('Section1Ctrl', function($scope, $routeSegment) {
    
    $scope.$routeSegment = $routeSegment;
    $scope.test = { btnClicked: false };
    $scope.items = [ 1,2,3,4,5 ];
});

app.controller('Section1ItemCtrl', function($scope, $routeSegment) {

    $scope.$routeSegment = $routeSegment;
    $scope.item = { id: $routeSegment.$routeParams.id };
    $scope.test = { textValue: '' };
});

app.controller('Section2Ctrl', function($scope, $routeSegment) {

    $scope.$routeSegment = $routeSegment;
    $scope.test = { textValue: '' };
    $scope.items = [ 1,2,3,4,5,6,7,8,9 ];
});

app.controller('ErrorCtrl', function($scope, error) {
    $scope.error = error;
});

app.controller('SlowDataCtrl', function($scope, data, loader) {
    loader.show = false;
    $scope.data = data;
});

