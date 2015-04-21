'use strict';
angular
  .module('app.core')
  .controller('CheckinController', ['$scope', 'SessionService', 'AuthenticationService', '$location', function($scope, SessionService, AuthenticationService, $location){

    $scope.token = AuthenticationService.getToken();

    $scope.logout = function(){
      SessionService.logout(
        function(response){
          AuthenticationService.clearToken();
          $location.path('/');
        },
        function(error){
          console.log("Code", error);
        }
      );
    };
  }]);
