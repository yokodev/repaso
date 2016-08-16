var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var people = [
        {
            firstname: 'jesus',
            lastname : 'doe'
        },
        {
            firstname: 'Gerardo',
            lastname : 'doe'
        },
        {
            firstname: 'Antonio',
            lastname : 'doe'
        }
    ];

app.set('view engine', 'ejs');

app.use('/assets',express.static(__dirname + '/public'));

app.get('/', function(req, res){
    //res.render('index');
    //so what I will do this time is pass in the array from the server to the view
    //actually Im passing it a object
    res.render('index', {serverPeople: people});
});

app.listen(port);