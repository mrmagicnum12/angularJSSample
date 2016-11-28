var angular,component, controller,factory;

angular = require('angular');
controller = require('./controller');
factory = require('./factory')

component = {
	controller : controller,
	template : `<div>
					{{$ctrl.helloMessage + $ctrl.personName}}
					<br/>
					<br/>
					<input ng-model="$ctrl.personName"></input>
					<br/>
					<br/>
					<button ng-click="$ctrl.sayHello()">Alert Your Name</button>
				</div>`
}


angular.module('helloWorld.message',[])
.component('helloWorld', component)
.factory('helloWorld',factory)

