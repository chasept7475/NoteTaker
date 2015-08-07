// Startup Express App
var express = require('express');
var app = express();
var http = require('http').Server(app);
var cfenv = require("cfenv");

var appEnv = cfenv.getAppEnv();
http.listen(appEnv.port, appEnv.bind);
console.log('App started on ' + appEnv.bind + ':' + appEnv.port);

// Configure views
var path = require('path');
app.use(express.static(path.join(__dirname, 'views')));

// handle HTTP GET request to the "/" URL
app.get('/', function(req, res) {
  res.render('index');
});