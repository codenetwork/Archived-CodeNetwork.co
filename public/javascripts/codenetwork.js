var app = angular.module('CodeNetwork', ['ngRoute']);

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

app.controller('navController', function($scope, $http){
  console.log('Using Nav Controller...');

  // Nav Controller...
});

app.controller('mainController', function($scope, $http){
  console.log('Using Main Controller...');

  // Toggle Modals
  $scope.modal = { join: false };
  $scope.toggleModal = function(modal) {
    (modal == 'join') ? $scope.modal.join = !$scope.modal.join : null;
    console.log($scope.modal.join);
  };

  // Modal : Join Code Network
  $scope.showModalJoin = false;
  $scope.toggleModal_Register = function() {
    $scope.modalJoin = !$scope.modalJoin;
  };

  // Modal : Example Modal
  $scope.showModalOther = false;
  $scope.toggleModalOther = function() {
    $scope.modalOther = !$scope.modalOther;
  };
});

app.controller('authController', function($scope, $http){
  console.log('Using Auth Controller...');

  // Auth Controller...

});

app.directive('modal', function () {
  return {
    templateUrl: 'templates/directives/modal.html',
    restrict: 'E', transclude: true, replace:true, scope:true,
    link: function postLink(scope, element, attrs) {
      scope.title = attrs.title;

      scope.$watch(attrs.visible, function(value){
        if(value == true) $(element).modal('show');
        else $(element).modal('hide');
      });

      $(element).on('shown.bs.modal', function(){
        scope.$apply(function(){ scope.$parent[attrs.visible] = true; });
        console.log(scope.$parent[attrs.visible]);
      });

      $(element).on('hidden.bs.modal', function(){
        scope.$apply(function(){ scope.$parent[attrs.visible] = false; });
        console.log(scope.$parent[attrs.visible]);
      });
    }
  };
});