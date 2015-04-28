angular
  .module('app.directives')
  .directive('checkinFormDirective', function () {
  return {
      restrict: 'EA', //E = element, A = attribute, C = class, M = comment
      scope: {
          //@ reads the attribute value, = provides two-way binding, & works with functions
          tasks: '=',
          checkin: '='
      },
      templateUrl: 'views/checkin/_checkin_form.html',
      controller: 'CheckinFormController', //Embed a custom controller in the directive
      link: function ($scope, element, attrs) { } //DOM manipulation
  }
});
