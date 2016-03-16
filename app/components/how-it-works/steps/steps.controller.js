'use strict';

var app = angular.module('app');
app.controller('stepsController', ['$scope', function($scope) {

  $scope.currentStep = 1;

  // this'll be called on every state change in the app
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if (angular.isDefined(toState.data.step)) {
      $scope.currentStep = toState.data.step;
      return;
    }
    $scope.currentStep = 1;
  });
}]);
