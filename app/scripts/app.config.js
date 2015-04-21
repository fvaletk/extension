'use strict';
angular
    .module('app.config', [])
	.config(configs);

function configs($httpProvider) {
    var interceptor = function($location, $log, $q) {
        function error(response) {
            if(response.status === 401) {
                $log.error('You are unauthorised to access the requested resource (401)');
            } else if (response.status == 404) {
                $log.error('The requested resource could not be found (404)');
            } else if (response.status == response.status == 500) {
                $log.error('Internal server error (500)');
            }
            return $q.reject(response);
        }
        function success(response) {
            //Request completed successfully
            console.log("Entre Success Config");
            return response;
        }
        return function(promise) {
            console.log("Entre Failed Config");
            return promise.then(success, error);
        }
    };
    $httpProvider.interceptors.push(interceptor);
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}
