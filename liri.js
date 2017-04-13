
// REQUIRE NPM PACKAGES
var twitter = require("twitter");
var spotify = require("spotify");
var reQuest = require("request");
var fs = require("fs");

// GET TWITTER API KEYS
var keys = require('./keys.js');


//COMMAND LINE VARIABLES

var commandOne = process.argv[2];
var commandTwo = process.argv[3];

// TEST IF WORKING
// console.log(commandOne);
// console.log(commandTwo);
// console.log(keys);
// -----------------------------------------------------------------------------------

// TWITTER API ( GET 20 MOST RECENT POST)---------------------------------------------
//------------------------------------------------------------------------------------

// if first param from user is my-tweets 
if (commandOne === 'my-tweets') {
	//console.log test
	console.log("working");
	// grab data from keys.js and store it in a variable

	keys = JSON.stringify(keys);
	keys = JSON.parse(keys);

	var client = new twitter(keys.twitterKeys);


	client.get('statuses/user_timeline.json', { screen_name: 'userKeys', count: 20 }, function(error, tweets, response) {
		if (!error) {
			console.log(error);
		}

		// console.log(response);
		console.log(tweets);
	});


	
}


