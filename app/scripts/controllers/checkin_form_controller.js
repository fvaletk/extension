'use strict';
angular
  .module('app.core')
  .controller('CheckinFormController', ['$scope', 'ServiceManager', function($scope, ServiceManager){

    var checkinService = ServiceManager.resolveService("Checkin");
    $scope.params = { project_id: "", task_id: "", hours: "0", description: "" };

    $scope.getTaskById = function(tasks, id){
      var task =  $.grep(tasks, function(t){ return t.id == id; });
      return task[0];
    };

    $scope.checkin_submit = function(){
      checkinService.createCheckin($scope.params,
        function(response){
          console.log("Success!!", response);
        },
        function(error){
          console.log("Code", error);
        }
      );
    };

  }]);
