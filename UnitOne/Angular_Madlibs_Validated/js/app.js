angular.module('MyApp', [])
	.controller('MadCtrl', function($scope){
		$scope.gender = ""
		$scope.showresult = false;
		$scope.submitted = false;
		$scope.change = function(){
			if ($scope.gender == "") {
				$scope.gender = "her";
				$scope.pro = "s";
			} else {
				$scope.gender = "";
				$scope.pro = "";
			}
		};

		$scope.submit = function(){
			$scope.submitted = true;
			if($scope.myForm.$valid && $scope.myFormTwo.$valid && $scope.myFormThree.$valid){
				$scope.showresult = true;
			}
		};

		$scope.reset = function(){
			$scope.showresult = false;
			$scope.submitted = false;
			$scope.gender = "";
			$scope.pro = "";
			$scope.male = '';
			$scope.job = '';
			$scope.celeb = '';
			$scope.obx = '';
			$scope.dirty = '';
			$scope.tedious = '';
			$scope.skill = '';
			$scope.adj = '';
			$scope.num = '';
			$scope.confirmed = false;

		};
});