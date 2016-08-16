var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var config = require('./config')
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');

app.use('/', express.static(__dirname + '/public'));

app.set('view engine','ejs');

mongoose.connect(config.getDbConnectionString());
setupController(app);
app.listen(port);