angular.module('CACapp')
  .controller('CtryCtrl', ['$scope', 'getCountries', function($scope, getCountries){
      $scope.customAttribute = "countryName";
      $scope.reverse = false;
      getCountries()
      //This is how you unwrap a promise object.
      .then(function(data){
        $scope.countries = data.data.geonames;
      })
  }])
  .controller('CCtrl', ['$scope', '$route', 'getCountry', 'getNebur', function($scope, $route, getCountry, getNebur){
    var ctry = $route.current.params.country;
    getCountry(ctry)
    .then(function(data){
      $scope.information = data.data.geonames[0];
      //console.log($scope.information);
    })
    getNebur(ctry)
    .then(function(data){
      $scope.nbrs = data.data.geonames;
    })
  }])
