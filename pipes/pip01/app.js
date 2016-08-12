var fs = require('fs');

/**
 * in the options for the highWaterMark its the size of the chunks, also the encoding set to utf8 
 */
var readable = fs.createReadStream(__dirname + '/greet.txt',
    {encoding:'utf8', highWaterMark:16 *1024});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt')


readable.on('data', function (chunk){
    console.log(chunk);
    writable.write(chunk);
});
