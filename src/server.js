/*jshint esversion: 6 */

var fs = require("fs");
const http = require ('http');
const port = 8080;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello Node.js Server!');
};

const server = http.createServer(function(requestHandler, response){
  fs.readFile("index.html", function(err, data){
    response.writeHead(200, {'Content-Type': 'text/html'});
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
