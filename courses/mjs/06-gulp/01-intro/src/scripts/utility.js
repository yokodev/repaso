let unaVariable = 10;

class Person2 {
	constructor(name){
		this._name=name;
	}
	sayName(){
		console.log(`my Name is ${$this._name}`);
	}
}

const person1 = new Person2("juancito");
console.log([unaVariable, person1]);
