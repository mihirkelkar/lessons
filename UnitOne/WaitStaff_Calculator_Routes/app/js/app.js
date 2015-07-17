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
      controller : 'ResetCtrl'
    }).otherwise('/');
  }])
  .service('tipService', function(){
    var tipdata = {
      subtotal : 0,
      tax : 0,
      tip : 0,
      total : 0,
      basetotal : 0,
      tiptotal : 0,
      mealcount :0
    };

    return {
        getSubtotal : function(){
          return tipdata.subtotal;
        },
        getTip : function(){
          return tipdata.tip;
        },
        getTotal : function(){
          return tipdata.total;
        },
        setSubmit: function(basetotal, tax, tip){
          tipdata.subtotal = basetotal + basetotal * tax * 0.01;
          tipdata.tip = basetotal * tip * 0.01;
          tipdata.total = tipdata.subtotal + tipdata.tip;
          tipdata.tiptotal += tipdata.tip;
          tipdata.mealcount += 1;
        },
        getTiptotal : function(){
          return tipdata.tiptotal;
        },
        getMealcount : function(){
          return tipdata.mealcount;
        },
        setReset : function(){
          tipdata.subtotal = 0;
          tipdata.tax = 0;
          tipdata.tip = 0;
          tipdata.total = 0;
          tipdata.basetotal = 0;
          tipdata.mealcount = 0;
          tipdata.tiptotal = 0;
        }
    }
  })
  .controller('TipCtrl', function($scope, tipService){
    $scope.subtotal = tipService.getSubtotal();
    $scope.tip = tipService.getTip();
    $scope.total = tipService.getTotal();
    $scope.submit = function(){
        tipService.setSubmit($scope.basetotal, $scope.tax, $scope.tipper);
        $scope.subtotal = tipService.getSubtotal();
        $scope.tip = tipService.getTip();
        $scope.total = tipService.getTotal();
    };
    $scope.cancel = function(){
      $scope.basetotal = "";
      $scope.tax = "";
      $scope.tipper = "";
    }
  })
  .controller('ResetCtrl', function($scope, tipService){
    $scope.tiptotal = tipService.getTiptotal();
    $scope.mealcount = tipService.getMealcount();
    $scope.tippermeal = $scope.tiptotal / $scope.mealcount;
    $scope.reset = function(){
      $scope.tiptotal = "";
      $scope.mealcount = "";
      $scope.tippermeal = "";
      tipService.setReset();
    }
  })
