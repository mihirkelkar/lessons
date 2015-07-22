angular.module('CACapp', ['ngRoute', 'dataService'])
//Takes care of routing
  .config(function($routeProvider){
    $routeProvider.when('/',{
      templateUrl : './home/home.html',
      controller: "HomeCtrl"
    })
    .when('/countries',{
      templateUrl : './countries/countries.html',
      controller : "CtryCtrl"
    })
    .when('/countries/:country/capital', {
      templateUrl: './countries/country.html',
      controller : 'CCtrl'
    })
    .when('/error', {
      template : "<h1> Page not Found Custom</h1>"
    })
    .otherwise('/error');
})
//Monitor routechanges constantly for errors in routing.
  .run(function($rootScope, $location, $timeout){
  //if there is an error in url navigation, just go to the error page
  $rootScope.$on('$routeChangeError', function(){
    $location.path("/error");
  });
});
