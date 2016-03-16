'use strict';

// The root application module for this app
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  /*$stateProvider
    .state("home", {
      url:"/",
      views: {
        '': { templateUrl:"/app/components/map/map.view.html" }
      }
    });*/
  $urlRouterProvider.otherwise("/");
});

app.controller('appController', function() {

});
