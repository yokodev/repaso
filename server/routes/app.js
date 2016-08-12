var http = require('http');
var fs = require('fs');


http.createServer(function(req, res){

   if(req.url === '/'){
       res.writeHead(200, {'Content-Type': 'text/html'});
       var html = fs.readFileSync(__dirname + '/index.htm','utf8');
       res.end(html);
   }else if(req.url === '/api'){
       res.writeHead(200, {'Content-Type': 'application/json'});
        var obj={
            firstname : 'john',
            lastname : 'Dooe'
        };
        res.end(JSON.stringify(obj));

   }else {
       res.writeHead(404);
       res.end();
   }
   
    
}).listen(1337);
