let unaVariable = 10;

class Person {
	constructor(name){
		this._name=name;
	}
	sayName(){
		console.log(`my Name is ${$this._name}`);
	}
}

const person1 = new Person("juancito");
console.log([unaVariable, person1]);
