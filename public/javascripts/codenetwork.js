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
  // Nav Controller...

});

app.controller('mainController', function($scope, $http){
  // Main Controller...

  // Toggle Modals
  $scope.modal = { join: false, other: false }
  $scope.toggleModal = function(modal) {
    (modal == 'join') ? $scope.modal.join = !$scope.modal.join : null;
    (modal == 'other') ? $scope.modal.other = !$scope.modal.other : null;
  }

  $scope.join = function() {
    console.log('Form Input: ' + JSON.stringify(this.user));

    $http.post('/join', this.user).success(function(response) {
      console.log(response);
    });

  }
});

app.controller('authController', function($scope, $http){
  // Auth Controller...

});


// Directive: Modal
app.directive('modal', function () {
  return {
    templateUrl: 'templates/directives/modal.html',
    restrict: 'E', transclude: true, replace:true, scope:true,
    link: function postLink(scope, element, attrs) {
      scope.title = attrs.title;

      scope.$watch(attrs.visible, function(value) {
        if(value) { return $(element).modal('show'); }
        else { $(element).modal('hide'); }
      });

      $(element).on('hidden.bs.modal', function() {
        scope.$apply(function() { scope.toggleModal(attrs.visible.split('.')[1]); });
      });
    }
  };
});