angular.module('MyApp',[])
	.controller('TipCtrl', function($scope){
		$scope.tiptotal = 0;
		$scope.mealcount = 0;
		$scope.submit = function(){
			$scope.subtotal = $scope.basetotal + $scope.basetotal * $scope.tax * 0.01; 
			$scope.tip = $scope.basetotal * $scope.tipper * 0.01;
			$scope.total = $scope.subtotal + $scope.tip;
			$scope.tiptotal += $scope.tip;
			$scope.mealcount += 1;
			$scope.tippermeal = $scope.tiptotal / $scope.mealcount;
		};

		$scope.cancel = function(){
			$scope.basetotal = "";
			$scope.tax = "";
			$scope.tipper = "";
		};

		$scope.reset = function(){
			$scope.basetotal = "";
			$scope.tax = "";
			$scope.tipper = "";
			$scope.subtotal = "";
			$scope.tip = "";
			$scope.total = "";
			$scope.tiptotal = 0;
			$scope.mealcount = 0;
			$scope.tippermeal = "";
		}

	});