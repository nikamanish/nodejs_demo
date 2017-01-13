var http = require('http');
requestHandler = function(req, res){
	console.log("in request handler");
	if (req.url == '/') {
		res.end("Welcome");
	}
	else{
		res.end("Dont be far from home");
	}
}


var server = http.createServer(requestHandler);

server.listen(8000, function(){
	console.log("Started server on port 8000");
})