/*jshint esversion: 6 */

var fs = require("fs");
const http = require ('http');
const port = 8080;
var url = require('url');
var path = require('path');
var contentTypesByExtention = {
  '':'text/html',
  'html': 'text/html',
  'js':   'text/javascript',
  'css':  'text/css'
};

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello Node.js Server!');
};

const server = http.createServer(function(requestHandler, response){
    var pathname = url.parse(requestHandler.url).pathname;
    if (fs.statSync(pathname).isDirectory()) { // Look at this line - connection refused, style.css
           pathname += 'index.html';
         }
    var ext = path.extname(pathname||'').split('.');
    console.log(ext);
    console.log(pathname);
    var contentType = contentTypesByExtention[ext[1]] || 'text/plain';
    fs.readFile("index.html", function(err, data){
      response.writeHead(200, {'Content-Type': contentType});
      response.write(data);
      response.end();
    });


}).listen(port);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
