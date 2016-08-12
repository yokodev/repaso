// so this is the first part of the of buffers
//the old way of working with buffers in node 
//now with ES6 there are new ways of doing this

// I need to specify the data, size plus the encoding
var buf = new Buffer('hello','utf-8');

console.log(buf);

console.log(buf.toString());
console.log(buf.toJSON());

console.log(buf[0]);

console.log(buf[1]);

buf.write('wo');
console.log(buf.toString());

/** not very often will we use this 
 * 
 * */ 
