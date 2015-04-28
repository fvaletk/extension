'use strict';
angular
    .module('app.core')
    .controller('LoginController', [ '$scope', 'SessionService', '$location', 'AuthenticationService', function($scope, SessionService, $location, AuthenticationService) {

  		$scope.credentials = { email: "miguel.perez+admin@koombea.com", password: "password" }

      $scope.token = AuthenticationService.getToken();

  		$scope.login = function(){
  			SessionService.login($scope.credentials,
          function(response){
            AuthenticationService.setToken(response.data.user.authentication_token);
            $location.path('/checkin/index');
          },
          function(error){
            console.log("Code", error);
          }
        );
  		};

    }
  ]);
