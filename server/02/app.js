var http = require('http');
var fs = require('fs');


http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'application/json'});
    var obj={
        firstname : 'john',
        lastname : 'Dooe'
    };
    res.end(JSON.stringify(obj));
}).listen(1337);
