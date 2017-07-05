var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
  console.log('Server listening at http://localhost:8080')
