'use strict';
angular
  .module('app.services')
  .factory('CheckinService', [ '$resource', 'BASE_URL', 'AuthenticationService', function CheckinActions($resource, BASE_URL, AuthenticationService){

    var actions = {
      'getSuggestedCheckins': getSuggestedCheckins
    };

    function getSuggestedCheckins(successCallback, errorCallback){
      var request = $resource(BASE_URL+'/api/v2/checkin_suggestions',{},{});
      request.save({auth_token: AuthenticationService.getToken()}).$promise.then(
          function (result){
              successCallback(result);
          },
          function (error){
              errorCallback(error.code);
          }
      );
    };

    return actions;
  }
]);
