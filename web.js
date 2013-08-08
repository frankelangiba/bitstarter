var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");
var express = require('express');

var app = express.createServer(express.logger());

app.use("/css", express.static(__dirname + '/css'));
app.use("/gfx", express.static(__dirname + '/gfx'));

app.get('/', function(request, response) {
  var c = fs.readFileSync("index.html");
  response.send(c.toString());
//  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
