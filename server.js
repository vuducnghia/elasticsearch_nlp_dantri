var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
var search = require('./routes');
var httpServer = http.createServer(app);
var path = require('path');

httpServer.listen(4300, function(){
    console.log ('http:4200');

});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', search)

