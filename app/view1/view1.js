'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
	$scope.message = "";

	$scope.superheroes = [ {
		sno:'1',
		name:'Superman',
		city:'metropolis',
		power:'Flying',
		weakness:'Kryptonite'
	},
	{
		sno:'2',
		name:'Hulk',
		city:'New york',
		power:'Invincible',
		weakness:'beti'
	},
	{
		sno:'3',
		name:'Batman',
		city:'Gotham',
		power:'Gadgets',
		weakness:'psyche'
	},
	{
		sno:'4',
		name:'Spiderman',
		city:'New York',
		power:'cobweb',
		weakness:'Symbiote'
	},
	{
		sno:'5',
		name:'Flash',
		city:'Central',
		power:'speed',
		weakness:'Telepathic attacks'
	}]
}]);