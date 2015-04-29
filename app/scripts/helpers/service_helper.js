'use strict';
angular
  .module('app.helpers')
  .factory('ServiceManager', [ '$injector', function AuthenticationActions($injector){
    return {
      resolveService: function(service_name){
        return $injector.get(service_name+"Service");
      }
    }
  }
]);
