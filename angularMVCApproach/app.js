angular.module('basicAngular',[])
.controller('HelloWorldController',HelloWorldController)
.directive('helloWorld',HelloWoldDirective)
.factory('helloWorld',HelloWorldFactory)


function HelloWorldController(helloWorld){
	var vm; 

	vm = this;
	vm.sayHello = sayHello; 
	vm.helloMessage = helloWorld.getHelloMessage();

	function sayHello(){
		return alert(vm.personName || "Please Type Your Name!!");
	}
}


function HelloWorldFactory(){
	return {
		getHelloMessage : getHelloMessage
	}

	function getHelloMessage(){
		return "Hey! My Name is Anthony. Nice to meet you ";
	}
}

function HelloWoldDirective(){
	return {
		link : link,
		template : "<div>{{helloWorld}}</div>"
	}

	function link(scope,element,attrs){
		scope.helloWorld = "This is Hello World from a directive!";
	}
}