'use strict';

/* Controllers */


function MyCtrl1($scope) {
	$scope.trainingId='Training';
	$scope.trainings=[
			{'trainingId':'sgcl','name':'Intalio|Create Training - Singapore'},
			{'trainingId':'inbpms','name':'Intalio|BPMS Training - India'}
	];
	$scope.trainingSelected={'trainingId':'initial','name':'Intalio Training'};
	$scope.rating=[
	{"order":0,"value":"Poor"},{"order":1,"value":"Average"},{"order":2,"value":"Good"},{"order":3,"value":"Excellent"}]
}
//MyCtrl1.$inject = ['$scope'];



function MyCtrl2($scope, $routeParams) {
	$scope.selectedTraining=$routeParams.selectedTraining;
}
//MyCtrl2.$inject = [];
