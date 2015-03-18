// This example creates an instance of web server which listens in port 3002
// and it handles few path requests

var http = require('http');
var path = require('path');

var server = http.createServer( function(request, response)
{
	if(request.method === 'GET')
	{
		GetRoute(path.basename(decodeURI(request.url)),response);
		response.end();
	}
});
server.listen(3002);

console.log("server started, listening to port : 3002");

//--------------------------------------------------------------------------------
function GetRoute(path,response)
{
	switch(path)
	{
		case '':
			response.write("This the root this application");	
			break;
		case 'index':
			response.write("This the index page of this application");	
			break;
		case 'login':
			response.write(require('fs').readFileSync('../html/node_inputform.html'));
			break;
		default:
			response.write("No such route configured..");	
	}
}