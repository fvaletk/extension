'use strict';
angular
  .module('app.core')
  .controller('CheckinFormController', ['$scope' ,function($scope){

    $scope.selectedTask = "";
    $scope.hours = "0";
    $scope.description = "";

    $scope.getTaskById = function(tasks, id){
      var task =  $.grep(tasks, function(t){ return t.id == id; });
      return task[0];
    };

    $scope.checkin_submit = function(){
        console.log("Task "+ $scope.selectedTask.name);
        console.log("Hours "+ $scope.hours);
        console.log("Description "+ $scope.description);
    };

  }]);
