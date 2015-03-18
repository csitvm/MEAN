// When this file is executed by node application (in command/terminal window type "node <file_name>"), 
// a web server instance will be created and it will listen in port 1234
// Type http://localhost:1234 in your browser and you should see a message

var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('response from server...');
}).listen(1234);