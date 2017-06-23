'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');


/**
*  The services module for helloSolarSystem
*/
angular.module('helloSolarSystem.services', [])
	.service('PeopleService', ['$http', function($http) {
		var service =  {
			getAllPeople: function() {
				return $http.get('data/people.json', { cache: true }).then(function(responce) {
					return responce.data;
				});
			}, 

			getPerson: function(id) {
				function isMatchedPersonById(person) {
					return person.id === id;
				}

				console.log('getPerson method called');
				
				return service.getAllPeople().then(function (responce) {
					return responce.find(isMatchedPersonById);
				});
			} 
		};
		return service;
	}]);
