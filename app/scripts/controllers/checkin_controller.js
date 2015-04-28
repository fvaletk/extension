'use strict';
angular
  .module('app.core')
  .controller('CheckinController', ['$scope', 'SessionService', 'AuthenticationService', 'CheckinService', '$location', function($scope, SessionService, AuthenticationService, CheckinService, $location){

    $scope.checkins = {};
    $scope.tasks = {};
    $scope.selectedTask = "";
    $scope.hours = "0";

    CheckinService.getSuggestedCheckins(
      function(result){
        $scope.checkins = result.data.suggested_checkins;
        $scope.tasks =  result.data.tasks;
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

    $scope.getTaskById = function(id){
      var task =  $.grep($scope.tasks, function(t){ return t.id == id; });
      return task[0];
    };

    $scope.checkin = function(){
        console.log("Hours "+ $scope.hours);
    };

  }]);
