'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    //$routeProvider.when('/enter/:selectedTraining', {templateUrl: 'partials/partial1.html', controller: MyCtrl2});
    //$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
