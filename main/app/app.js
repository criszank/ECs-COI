var mainApp = angular.module('MainApp',['ngRoute','MainControllers']);

mainApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
    when('/splash', {
      templateUrl: 'partials/splash/splash.html',
      controller: 'SplashMain'
    }).
    otherwise({
      redirectTo: '/splash'
    });

}]);
