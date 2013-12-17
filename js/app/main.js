var app = angular.module("choreApp", []);


app.controller("ctrl", function ($scope) {
	$scope.logChore = function (message) {
		console.log(message + " is done!");
	}
}); 


app.directive("kid", function () {
	return {
		restrict: 'E',
		scope: {
			done: "&"
		},
		template: '<div><input type="text" ng-model="chore"> {{chore}}</div>' +
		'<div class="button" ng-click="done({chore_test : chore})">I\'m done</div>'
	}
})