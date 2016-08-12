var Emitter = require('events');
var configEvents = require('./configEvents').events;
var emtr = new Emitter();

emtr.on(configEvents.GREET,function(){
	console.log('Somewhere a first greet has occured');
});

emtr.on(configEvents.GREET, function(){
		console.log('a second greet has occured');
});

emtr.on(configEvents.HI, function(){
		console.log('a emit from a HI config file was trigger');
});

//console.log('manual log');

emtr.emit(configEvents.GREET);
emtr.emit(configEvents.HI);
