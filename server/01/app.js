var http = require('http');
var fs = require('fs');


http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.htm','utf8');
    var mensaje = 'hola from kizomba';
    html = html.replace('{mensaje}',mensaje);
    res.end(html);
}).listen(1337);