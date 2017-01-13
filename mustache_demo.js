var mustache = require("mustache");

result = mustache.render("Hello {{first_name}} {{last_name}}",
	{
		"first_name": "Manish",
		"last_name": "Nikam"
	})

console.log(result);