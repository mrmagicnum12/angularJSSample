var controller;

controller = controller;

function controller(helloWorld){
	var vm; 

	vm = this;
	vm.sayHello = sayHello; 
	vm.helloMessage = helloWorld.getHelloMessage();

	function sayHello(){
		return alert(vm.personName || "Please Type Your Name!!");
	}
}

module.exports = controller;