var http = require('http');
var mustache = require('mustache')
requestHandler = function(req, res){
	console.log("in request handler");
	if (req.url == '/') {
		result = mustache.render("Hello {{first_name}} {{last_name}}",
			{
				"first_name": "Manish",
				"last_name": "Nikam"
			})

		console.log(result);
		res.end(result);

	}
	else{
		res.end("Dont be far from home");
	}
}


var server = http.createServer(requestHandler);

server.listen(8000, function(){
	console.log("Started server on port 8000");
})