var http = require('http');
//var mustache = require('mustache')
//var randomNumber = require('./random-number.js')

/*
** Simple calculator.
** Pass the arguments in url as follows
** 			i => First Number
**			j => Second Number
**			op => Operator
**					add - addition
**					sub - subtract
**					mul - multiply
**					div - divide
*/

requestHandler = function(req, res){
	console.log("in request handler");
	var url = require('url');
	var query = url.parse(req.url, true).query;
	var ans = null;
	var n1 = parseFloat(query["i"]);
	var n2 = parseFloat(query["j"]);
	switch(query["op"])
	{
		case "add": ans = n1 + n2;break;
		case "sub": ans = n1 - n2;break;
		case "mul": ans = n1 * n2;break;
		case "div": ans = n1 / n2;break;
	}


	res.end("" + ans);
	//switch()
}


var server = http.createServer(requestHandler);

server.listen(8000, function(){
	console.log("Started server on port 8000");
})