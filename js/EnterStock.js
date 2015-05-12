//'use strict';

window.onload = function() {

	input = document.getElementById("autocomplete");
	
	input.onkeypress = function(event) {
		
		if (event.keyCode == 13) {
			
			validTicker = determineTicker(input.value.toUpperCase());

			// If input is empty
			if (validTicker == 0) {

				document.getElementById("alertStock").innerHTML = "Please enter a valid stock ticker.";
			}
			// If input is valid
			if (validTicker == 1) {	

				document.getElementById("autocomplete").blur();
				input.value=input.value.toUpperCase();
				document.getElementById("alertStock").innerHTML = "";
			}
			// If input is invalid
			if (validTicker == 2) {

				document.getElementById("alertStock").innerHTML = "Please enter a valid stock ticker.";
				//This shows up when it's empty or invalid stock ticker
			}
		}
	}
}

function determineTicker (input) {
	var output = 2;
	
	if (input.length == 0 || input == "Enter Ticker") {
		output = 0;
	} else {	
		for (i = 0; i < lengthOfResponse ; i++) {
			
			if (input == response[i].Ticker) {
				output = 1;
			}
		}
	}

	return output;
}