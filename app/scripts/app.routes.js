'use strict';
angular
  .module('app.routes', ['ngRoute'])
  .config(config);

function config ($routeProvider) {
  $routeProvider.
      when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/checkin/index', {
        templateUrl: 'views/checkin/index.html',
        controller: 'CheckinController'
      })
      .otherwise({
        redirectTo: '/'
      });
};
