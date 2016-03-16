'use strict';

// The root application module for this app
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  /* When in steps state, root ui-view filled with another ui-view,
  ** which is populated by the proper substate (i.e. a particular step)
  */
  $stateProvider
    .state("steps", {
      abstract: true,
      views: {
        '': { template: '<div ui-view></div>'}
      }
    })
    .state("steps.1", {
      url: '/',
      views: {
        '': { templateUrl:"/app/components/how-it-works/step-1/step-1.html" }
      },
      data: {
        step: 1
      }
    })
    .state("steps.2", {
      views: {
        '': { templateUrl:"/app/components/how-it-works/step-2/step-2.html" }
      },
      data: {
        step: 2
      }
    })
    .state("steps.3", {
      views: {
        '': { templateUrl:"/app/components/how-it-works/step-3/step-3.html" }
      },
      data: {
        step: 3
      }
    });
  $urlRouterProvider.otherwise("/");
});

app.controller('appController', function() {
});
