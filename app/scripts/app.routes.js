'use strict';
angular
  .module('app.routes', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider.
      when("/",
        { templateUrl: 'views/session/login.html', controller: 'LoginController' })
      .when("/checkin/index",
        { templateUrl: 'views/checkin/index.html', controller: 'CheckinController' })
      .otherwise(
        { redirectTo: '/' });
  }).
  run(function($rootScope, $location, $localStorage) {
    $rootScope.$on( "$locationChangeStart", function(event, next, current) {
      if ($localStorage.token == null) {
        $location.path('/');
      }
      else{
        $location.path('/checkin/index');
      }
    });
  });
