angular.module('OWMapp', ['ngRoute'])
  .value('owmCities', ['Chicago', 'New_York', 'Dallas'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl : 'home.html',
      controller : 'HomeCtrl'
    }).when('/cities/:city',{
      templateUrl: 'city.html',
      controller: 'CityCtrl',
      //We resolve city here first because if the city is wrong, the city.html
      //should not load with a wrong city.
      resolve :{
        city : function(owmCities, $location, $route){
          var city = $route.current.params.city;
          if(owmCities.indexOf(city) == -1){
            $location.path('/error');
            return;
          }
          return city;
        }
      }
    }).when('/error', {
      template: '<p> An error occured </p>'
    });
  }])
  .controller('HomeCtrl', function($scope){
    //empty for now
  })
  .controller('CityCtrl', function($scope, city){
    $scope.city = city;

  });
