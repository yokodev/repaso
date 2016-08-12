function greet(callback){
    console.log('before cb');
    var data = {
        name: 'Jon'
    }
    callback(data);
}


greet(function(data){
    console.log('this is the callback');
    console.log(data);
});


greet(function(data){
    console.log('this is the second callback');
    console.log(data.name);
});