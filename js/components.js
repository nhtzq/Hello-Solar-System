'use strict';

/* Components */

angular.module('helloSolarSystem.components', [])
	.component('about', {
		template: `<h3>It's the UI-Router<br>Hello Solar System app!</h3>`
	})
	.component('hello', {
		template: `
			<h3>{{$ctrl.greeting}} solar system!</h3>
			<button ng-click="$ctrl.toggleGreeting()">Toggle Greeting</button>
		`, 

		controller: function() {
			this.greeting = 'hello';

			this.toggleGreeting = function() {
				this.greeting = (this.greeting == 'hello') ? 'what\'s up' : 'hello';
			}
		}
	})
	.component('people', {
		bindings: { people: '<'}, 

		/*controller: function() {
			console.log(people);
		},*/

		template: `
			<h3>Some people: </h3>
			<ul>
				<li ng-repeat="person in $ctrl.people">
					<a ui-sref="person({personId: person.id})">
						{{person.name}}
					</a>
				</li>
			</ul>
		`
	})
	.component('person', {
		bindings: { person: '<'},
		/*controller: function(person) {
			console.log(person);
		},*/

		template: `
			<h3>A person!</h3>
			<div>Name: {{$ctrl.person.name}}</div>
			<div>Id: {{$ctrl.person.id}}</div>
			<div>Company: {{$ctrl.person.company}}</div>
			<div>Email: {{$ctrl.person.email}}</div>
			<div>Address: {{$ctrl.person.address}}</div>
			<button ui-sref="people">Close</button>
		`
	});