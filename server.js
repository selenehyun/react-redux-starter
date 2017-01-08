var express = require('express');
var app = express();
var path = require('path');


app.use('/static', express.static(__dirname + '/build/static'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})