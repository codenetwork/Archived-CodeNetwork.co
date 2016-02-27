var app = angular.module('CodeNetwork', ['ngRoute', 'ngResource', 'ngMaterial', 'ngMessages']);

// Angular Routes
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'main.html',
      controller: 'mainController'
    })
    .when('/join', {
    templateUrl: 'join.html',
    controller: 'authController'
  });
});

app.controller('mainController', function($scope, $http){
  // Main Controller...
});

app.controller('authController', function($scope, $http){
  // Auth Controller...
});