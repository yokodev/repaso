//this is the ES6 version of buffers apparently js did not used to behave
//well with buffers but in the new version of JS is doing it well
//here is the new version of it

// this are 8 bites
var buffer = new ArrayBuffer(8);
//with this view object we can work in a better way with the buffers
var view = new Int32Array(buffer);

//just setting each position of the array a value
//since the buffer is 8 bytes and each one has 8 bits = 64 bits
//meaning there are only two spaces in a 32 array
view[0] = 5;
view[1] = 15;
//notice that if we keep putting more data in another cell, it will simply
//not add it to
//view[2] = 524;

console.log(view);
