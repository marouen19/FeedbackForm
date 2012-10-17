'use strict';

/* Controllers */


function MyCtrl1($scope) {
	$scope.trainingId='Training';
	$scope.trainings=[
			{'id':'sgcl','name':'Intalio|Create Training - Singapore'},
			{'id':'inbpms','name':'Intalio|BPMS Training - India'}
	];
}
//MyCtrl1.$inject = ['$scope'];



function MyCtrl2() {
}
MyCtrl2.$inject = [];
