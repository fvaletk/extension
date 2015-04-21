'use strict';
angular
  .module('app.core')
  .controller('CheckinController', ['$scope', 'SessionService', 'AuthenticationService', 'CheckinService', '$location', function($scope, SessionService, AuthenticationService, CheckinService, $location){

    $scope.checkins = {};

    CheckinService.getSuggestedCheckins(
      function(result){
        $scope.checkins = result;
      },
      function(error){
        console.log("Error", error);
      }
    );

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
