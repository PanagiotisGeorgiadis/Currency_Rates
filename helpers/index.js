class projectHelpers {

	constructor() {

	}

	sendIndexPage(request, response, folderPath) {

		var options = {
			root: folderPath,
			headers: {
				"x-timestamp": Date.now(),
				"x-sent": true
			}
		}

		var filename = "index.html";
		response.sendFile(filename, options, function(err) {
			if(err)
				console.log(err);
			else
				console.log("Sent File: " + filename);
		});
	}
}

module.exports = projectHelpers;