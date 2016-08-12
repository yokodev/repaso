var Person = {
	firstname : '',
	lastname : '',
	greet : function() {
		return this.firstname + ' '+this.lastname;
	}
}



var Jon = Object.create(Person);
Jon.firstname = 'Jon';
Jon.lastname = 'Pellant';


var Jesus = Object.create(Person);
Jesus.firstname = 'Jesus';
Jesus.lastname = 'Amaya';


console.log(Jon.greet());
console.log(Jesus.greet());



