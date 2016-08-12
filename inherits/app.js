var EventEmitter = require('events');
var util = require('util');

//this is my regular object ANY object
function Greetr() {
	this.greeting = 'Hello Mundo';
}

//here is where we make the inheritance the OLD way but using nodes buildin method
//
// so it says Greetr will inherit from EventEmitter
util.inherits(Greetr, EventEmitter);

//when this method is run it will then emit a greet event 
Greetr.prototype.greet = function(data){
	console.log(this.greeting + ': '+data);
	this.emit('greet',data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log(' a greet was detected '+ data);
})

//greeter1.emit('greet');
//greeter1.greet();
greeter1.greet('Jesus');





