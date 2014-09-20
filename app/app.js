var app = angular.module('myapp', ['ngRoute', 'ngAnimate', 'route-segment', 'view-segment', 'ui.bootstrap']);
app.value('loader', {show: false});

app.directive('prettyprint', function() {
    return {
        restrict: 'C',
        link: function postLink(scope, element, attrs) {
              element.html(prettyPrintOne(element.html(),'',true));
        }
    };
});
