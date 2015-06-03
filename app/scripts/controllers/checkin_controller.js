'use strict';
angular
  .module('app.core')
  .controller('CheckinController', ['$scope','$location', 'ServiceManager', function($scope, $location, ServiceManager){

    var checkinService = ServiceManager.resolveService("Checkin");
    var sessionService = ServiceManager.resolveService("Session");
    var authenticationService = ServiceManager.resolveService("Authentication");

    $scope.checkins = [];
    $scope.tasks = [];
    $scope.test = true;

    checkinService.getSuggestedCheckins(
      function(result){
        $scope.checkins = result.data.suggested_checkins;
        $scope.tasks =  result.data.tasks;
      },
      function(error){
        console.log("Error", error);
      }
    );

    $scope.logout = function(){
      sessionService.logout(
        function(response){
          authenticationService.clearToken();
          $location.path('/');
        },
        function(error){
          console.log("Code", error);
        }
      );
    };

    $scope.checkinsEmpty = function (){
      console.log("Checkins ",$scope.checkins.length);
      $scope.checkins.length > 0 ? true : false;
    };

  }]);
