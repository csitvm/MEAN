// This example is used to demonstrate how we need to handle get and post requests in node 

//To use HTTP sever
var http = require('http');

//Returns the contents of the filename as buffer
var form = require('fs').readFileSync('../html/node_inputform.html');

var server =http.createServer(function (request, response)
	{
		if(request.method === 'GET')
		{  
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(form);
			response.end();
		}
		
		if(request.method === 'POST')
		{ 
			var postData = '';
			request.on('data', function(chunk)
			{
				postData+=chunk;
			}).on('end', function()
				{
					console.log('User Posted:\n' + postData);
					response.end('You Posted:\n' + postData);
				});	
		}
	});

server.listen(3001);
console.log("Serever started , listening to port : 3001");