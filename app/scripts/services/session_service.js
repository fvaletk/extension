'use strict';
angular
  .module('app.services')
  .factory('SessionService', [ '$resource', 'BASE_URL', 'AuthenticationService', function SessionActions($resource, BASE_URL, AuthenticationService){

  	var actions = {
  		'login': login,
      'logout': logout
  	};

    function login(credentials, successCallback, errorCallback){
      var request = $resource(BASE_URL+'/api/users/sessions/sign_in',{},{});
      request.save({user: credentials}).$promise.then(
          function (result){
              successCallback(result);
          },
          function (error){
              errorCallback(error.code);
          }
      );
    };

    function logout(successCallback, errorCallback){
      var request = $resource(BASE_URL+'/api/users/sessions/sign_out',{},{});
      request.delete({auth_token: AuthenticationService.getToken()}).$promise.then(
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
