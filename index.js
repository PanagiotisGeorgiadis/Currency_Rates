const express = require("express");
const port = process.env.PORT || 3000;

const currencyRatesApp = express();
var Helpers = require("./helpers");

currencyRatesApp.use("/styles", express.static(__dirname + "/resources/styles/"));
currencyRatesApp.use("/images", express.static(__dirname + "/resources/images/"));
currencyRatesApp.use("/public", express.static(__dirname));

var projectHelpers = new Helpers();
var pagesFolderPath = __dirname + "/pages/"

currencyRatesApp.get("/", (request, response) => projectHelpers.sendIndexPage(request, response, pagesFolderPath));
currencyRatesApp.get("/plain_rates", (request, response) => projectHelpers.sendIndexPage(request, response, pagesFolderPath));
currencyRatesApp.get("/enhanced_rates", (request, response) => projectHelpers.sendIndexPage(request, response, pagesFolderPath));
currencyRatesApp.get("/about", (request, response) => projectHelpers.sendIndexPage(request, response, pagesFolderPath));
currencyRatesApp.get("/currency/:currencyName", (request, response) => projectHelpers.sendIndexPage(request, response, pagesFolderPath));

currencyRatesApp.get("/test", function(request, response) {

	var options = {
		root: pagesFolderPath,
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true
		}
	}

	var filename = "test.html";
	response.sendFile(filename, options, function(err) {
		if(err)
			console.log(err);
		else
			console.log("Sent File: " + filename);
	});
});

currencyRatesApp.listen(port);
console.log("Server listening on port " + port);

