var http = require('http');
var mustache = require('mustache')
var randomNumber = require('./random-number.js')
requestHandler = function(req, res){
	console.log("in request handler");
	if (req.url == '/') {
		

		result = randomNumber();
		console.log(result);
		res.end(result + " ");

	}
	else{
		res.end("Dont be far from home");
	}
}


var server = http.createServer(requestHandler);

server.listen(9000, function(){
	console.log("Started server on port 8000");
})