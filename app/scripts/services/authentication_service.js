'use strict';
angular
  .module('app.services')
  .factory('AuthenticationService', [ '$localStorage', function AuthenticationActions($localStorage){
    var actions = {
      'setToken': setToken,
      'getToken': getToken,
      'clearToken': clearToken
    };

    function setToken(token){
      $localStorage.token = token;
    };

    function getToken(){
      return $localStorage.token;
    };

    function clearToken(){
      $localStorage.$reset();
    };

    return actions;
  }
]);
