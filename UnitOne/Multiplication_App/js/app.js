var app = angular.module('MyApp',[]);

app.controller('MultCtrl', function($scope, $attrs){
	$scope.numberlimit = $attrs.numberlimit || 10;
	//console.log($scope.numberlimit);
	//$scope.numbers = [1, 2, 3,4 ,5, 6, 7, 8, 9,10];
	$scope.numbers = function(){
		var numbers = [];
		for (var i = 0; i < $scope.numberlimit; i++){
			numbers.push(i + 1);
		};
		console.log(numbers);
		return numbers;
	};

	$scope.compute = function(a, b){
		return a * b;
	};
});	