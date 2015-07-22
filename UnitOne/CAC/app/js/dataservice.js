angular.module('dataService', [])
  .factory('getCountries', function($http){
    return function(){
      return $http({
        cache: true,
        method : 'GET',
        url : "http://api.geonames.org/countryInfoJSON?username=demo"
      })
    }
  })
  .factory('getCountry', function($http){
    return function(country){
      return $http({
        method : 'GET',
        url : 'http://api.geonames.org/countryInfoJSON?username=demo&country=' + country
      })
    }
  })
  .factory('getNebur', function($http){
    return function(country){
      return $http({
        method : 'GET',
        url : 'http://api.geonames.org/neighboursJSON?username=mjhea0&country=' + country
      })
    }
  })
