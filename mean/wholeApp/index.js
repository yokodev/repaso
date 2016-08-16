var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var config = require('./config')
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

app.use('/', express.static(__dirname + '/public'));

app.set('view engine','ejs');

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);
app.listen(port);