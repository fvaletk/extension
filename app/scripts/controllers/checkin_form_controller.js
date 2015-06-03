'use strict';
angular
  .module('app.core')
  .controller('CheckinFormController', ['$scope', 'notify', 'ServiceManager', function($scope, notify, ServiceManager){

    var checkinService = ServiceManager.resolveService("Checkin");
    $scope.params = { project_id: "", task_id: "", hours: "0", description: "" };

    $scope.getTaskById = function(tasks, id){
      var task =  $.grep(tasks, function(t){ return t.id == id; });
      return task[0];
    };

    $scope.checkin_submit = function(){
      checkinService.createCheckin($scope.params,
        function(response){
          console.log("Response.success", response.success);
          if(response.success == true){
            notify({message: "Checkin has been created successfully!", duration: "4000", classes: "success_notification"});
          }
          else{
            notify({message: response.errors, duration: "2000", classes: "failed_notification"});
          }
        },
        function(error){
          console.log("Code", error);
        }
      );
    };

  }]);
