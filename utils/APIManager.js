export default {

	fetchDataAsync: (url, callback) => {

		var xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);

		xhr.onreadystatechange = function() {

			if (xhr.readyState === 4) {

				if(xhr.status !== 200)
					reject("Some error occured!" + xhr.responseText);

				try {
					resolve(JSON.parse(xhr.responseText));
				} catch(exception) {
					resolve(xhr.responseText);
				}
			}
		}

		xhr.onerror = (error) => reject("Some error occured while quering the API." + error);
		xhr.onabort = () => reject("Quering the API has been canceled by the user.");

		xhr.send();
	},

	fetchDataBlocking: (url) => {

		return new Promise(function(resolve, reject) {

			var xhr = new XMLHttpRequest();
			xhr.open("GET", url, true);

			xhr.onreadystatechange = function() {

				if (xhr.readyState === 4) {

					if(xhr.status !== 200)
						reject("Some error occured!" + xhr.responseText);

					try {
						resolve(JSON.parse(xhr.responseText));
					} catch(exception) {
						resolve(xhr.responseText);
					}
				}
			}

			xhr.onerror = (error) => reject("Some error occured while quering the API." + error);
			xhr.onabort = () => reject("Quering the API has been canceled by the user.");

			xhr.send();
		});
	},

	fetchDataBlockingBatch: (url, timeoutValue = 0) => {

		return new Promise(function(resolve, reject) {
			
			var xhr = new XMLHttpRequest();
			xhr.open("GET", url, true);

			xhr.onreadystatechange = function() {

				if (xhr.readyState === 4) {

					if(xhr.status !== 200)
						reject("Some error occured!" + xhr.responseText);

					try {
						resolve(JSON.parse(xhr.responseText));
					} catch(exception) {
						resolve(xhr.responseText);
					}
				}
			}

			xhr.onerror = (error) => reject("Some error occured while quering the API." + error);
			xhr.onabort = () => reject("Quering the API has been canceled by the user.");

			setTimeout(() => {
				xhr.send();
			}, timeoutValue);
		});
	}
}