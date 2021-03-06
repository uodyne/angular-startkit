app.controller('MyappCtrl', function($scope, $routeSegment, loader) {
    $scope.$routeSegment = $routeSegment;
    $scope.loader = loader;
    $scope.angularurl = "//ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.2/angular.min.js";
    $scope.$on('routeSegmentChange', function() {
        loader.show = false;
    })
});
app.controller('TodoController', function($scope) {
	$scope.saved = localStorage.getItem('todos');
	$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
	localStorage.setItem('todos', JSON.stringify($scope.todos));

	$scope.addTodo = function() {
		$scope.todos.push({
			text: $scope.todoText,
			done: false
		});
		$scope.todoText = ''; //clear the input after adding
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo){
			count+= todo.done ? 0 : 1;
		});
		return count;
	};

	$scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo){
			if (!todo.done)
				$scope.todos.push(todo);
		});
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};
});
