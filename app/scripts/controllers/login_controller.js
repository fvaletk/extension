'use strict';
angular
    .module('app.core')
    .controller('LoginController', [ '$scope', '$location', 'ServiceManager', function($scope, $location, ServiceManager) {

      var authenticationService = ServiceManager.resolveService("Authentication");
      var sessionService = ServiceManager.resolveService("Session");

  		$scope.credentials = { email: "miguel.perez+admin@koombea.com", password: "password" }
      $scope.token = authenticationService.getToken();

  		$scope.login = function(){
  			sessionService.login($scope.credentials,
          function(response){
            authenticationService.setToken(response.data.user.authentication_token);
            $location.path('/checkin/index');
          },
          function(error){
            console.log("Code", error);
          }
        );
  		};

    }
  ]);
