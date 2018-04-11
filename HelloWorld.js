var http = require("http");

var b = http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.write('Hello Neha, This is just a simple program :) \n');
   response.end('Hello World \n');
}); 

b.listen(80);

// Console will print the message
console.log('Server running at http://127.0.0.1:80/');