angular.module('MyApp', [])
	.controller('MadCtrl', function($scope){
		$scope.gender = ""
		$scope.change = function(){
			if ($scope.gender == "") {
				$scope.gender = "her";
				$scope.pro = "s";
			} else {
				$scope.gender = "";
				$scope.pro = "";
			}
		};
});