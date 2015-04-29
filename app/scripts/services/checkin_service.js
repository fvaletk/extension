'use strict';
angular
  .module('app.services')
  .factory('CheckinService', [ '$resource', 'BASE_URL', 'ServiceManager', function CheckinActions($resource, BASE_URL, ServiceManager){

    var authenticationService = ServiceManager.resolveService("Authentication");

    var actions = {
      'getSuggestedCheckins': getSuggestedCheckins,
      'createCheckin': createCheckin
    };

    function getSuggestedCheckins(successCallback, errorCallback){
      var request = $resource(BASE_URL+'/api/v2/checkin_suggestions',{},{});
      request.get({auth_token: authenticationService.getToken()}).$promise.then(
          function (result){
              successCallback(result);
          },
          function (error){
              errorCallback(error);
          }
      );
    };

    function createCheckin(params, successCallback, errorCallback){
      var request = $resource(BASE_URL+'/api/checkins',{},{});
      request.save({auth_token: authenticationService.getToken(), checkin: params}).$promise.then(
          function (result){
              successCallback(result);
          },
          function (error){
              errorCallback(error);
          }
      );
    };

    return actions;
  }
]);
