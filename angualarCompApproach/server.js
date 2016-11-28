//app configurations
var express = require('express');
var app = express();
var http = require('http').Server(app);
var serveStatic = require('serve-static');
 
 
app.set('port', process.env.PORT || 7770);
 
 
app.use(serveStatic('./', { fallthrough: true }));
app.use(serveStatic('./', { index: "index.html" }));
 
startServer();
 
function startServer() {
  //start server
  http.listen(app.get('port'), function () {
    console.log("Basic Angular App w/ Browserify and Components");
  });
}