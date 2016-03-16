'use strict';

var app = angular.module('app');
app.directive('steps', function() {
  return {
      restrict: 'E',
      replace: 'true',
      templateUrl: '/app/components/how-it-works/steps/steps.html',
      controller: 'stepsController',
      scope: {},
      link: function(scope, elem, attrs) {
      }
  };
});
