angular.module("MyApp", ["ngRoute"])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl : 'home.html',
      controller : 'TipCtrl'
    }).when('/new', {
      templateUrl: 'newmeal.html',
      controller: 'TipCtrl'
    }).when('/earn', {
      templateUrl : 'earning.html',
      controller : 'TipCtrl'
    }).otherwise('/home');
  }])
  .controller('TipCtrl', function($scope){
    $scope.city = "New York City";
  })
