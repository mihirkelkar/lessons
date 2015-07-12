angular.module('Insta', [])
	.controller('InstaCtrl', function($scope, $http){
		var CLIENT_ID = "d8d33d939d66419c8bd2669014e7ef78";
		var url = "https://api.instagram.com/v1/tags/";
		var request = {
			callback: 'JSON_CALLBACK',
			client_id : CLIENT_ID
		};
		$scope.error = false;
		$scope.found = false;
		console.log("Controller is fired");
		$scope.submit = function(){
			console.log("Submit is fired");
			var searchitem = $scope.searchterm.split(" ").join("_");

			$http({
				method : 'JSONP',
				url : url + searchitem + '/media/recent',
				params: request
			}).success(function(result){
					$scope.searchterm="";
					if (result.data != undefined){
						if(result.data.length > 0){
							$scope.error = false;
							$scope.found = true;
							$scope.message = "We found " + result.data.length + " images for you"
							$scope.images = result.data;
							console.log($scope.images);

						}						
						else{
							$scope.images = [];
							$scope.error = true;
							$scope.found = false;
							$scope.message = "No results returned for your search term"
							console.log("NO results");
						}
					}	
					else{
						$scope.error = true;
						$scope.message = "The search term you entered is possibly NSFW.";

					}		
			})
			.error(function(){
				$scope.images = [];
				console.log("request failed");
				$scope.error = true;
				$scope.found = false;
				$scope.searchterm="";
				$scope.message = "This is Awkward. But we lost your packet somewhere between your computer and Palo Alto"
			})
		};
	});