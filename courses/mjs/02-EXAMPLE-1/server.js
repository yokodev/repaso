var http = require('http'),
    querystring = require('querystring'),
    fs = require('fs'),
    path = require('path'),
    url = require('url');

  var directory = './documents';


var server = http.createServer(function(req,res){
  writeIndex(req,res);
});

function writeIndex(req,res) {
  res.writeHead(200,{'Content-Type':'text/html'});

  fs.readdir(directory,function(err,files){
    if(err){
      res.end(err);
      return;
    }
    var fileListHtml= '';
    for (var i = 0; i < files.length; i++) {
      file =files[i];
      fileListHtml+=`<li><a href= "?file=${file}">${file}</a></li>`
    }
    res.end(`
      <ul>
          ${fileListHtml}
      </ul>
      <form method=post>
        <input type="text" name="file">
        <textarea name="text"></textarea>
        <input type="submit"/>
      </form>


      `);
  });
}

server.listen(4000);
console.log('listening on port 4000');
