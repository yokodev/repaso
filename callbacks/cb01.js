var fs = require('fs');

var greet = fs.readFileSync(__dirname +'/greet.txt','utf8');

console.log(greet);
var greet2 = fs.readFile(__dirname + '/greet.txt','utf8',
    function(err,data){
        console.log(data);
    });

console.log('Done!');

/** so what this returns is a buffer  and the problem is if a lot of people
 * are using or accesing the same function is creating a lot of buffers that could
 * eventually lead to a lost of lot of memmory
 * 
 */