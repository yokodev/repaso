var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet',function(){
	console.log('Somewhere a first greet has occured');
});

emtr.on('greet', function(){
		console.log('a second greet has occured');
});

//console.log('manual log');

emtr.emit('greet');
