//add required npms

var Twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");
var fs = require("fs");

//get data from keys.js and store in variable
var dataKey = require("./keys.js");

//take in following commands
//`my-tweets`
//`spotify-this-song`
//`movie-this`
//`do-what-it-says`
var commands = process.argv[2];

//build array for multiple word entry search
var search = "";
searchArray = process.argv;


function commandInput(commands, search){
	search = getMoreWords();

	switch (commands) {
		//get list of tweets
		case "my-tweets": myTweets();
		console.log("tweet");
		break;
		
		//get song info
		case "spotify-this-song":
		//associate search string to variable based on command name
		var songName = search;
		//if no song entered then default to The Sign
		if (songName === "") {
			searchDefaultSong();
		}
		else {
			searchSongInfo(songName);
		}
		console.log("search songs");
		break;
		
		//get movie info
		//associate search string to variable based on command name
		case "movie-this": searchMovieInfo(search);
		console.log("movie this");
		break;
		
		//get info from text file
		case "do-what-it-says": doWhatItSays();
		break;
	}
}

//for loop to obtain additional words in string search
function getMoreWords(){
	
	for (var i = 3; i < searchArray.length; i++){
		if (i > 3 && i < searchArray.length){
			search = search + "+" + searchArray[i];
		}
		else {
			search += searchArray[i];
		}
	}
	return search;
}


//1. function to show last 20 tweets by typing node liri.js my-tweets
//https://www.npmjs.com/package/twitter 
function myTweets(){
	//grab twitter keys from keys.js
	var client = new Twitter(dataKey.twitterKeys);
	//search parameter for last 20 tweets with my username
	var params = {q: '@BeersLax', count: 20};
	//search function syntax
	client.get('search/tweets', params, function(error, tweets, response) {
		if(!error){
			for (var i=0; i < params.count; i++){
				console.log(tweets);
				logOutput(tweets);
			}
		}
		else {
			console.log(error);
			logOutput(error);
		}
   });
}

//2. function to show following info - node liri.js spotify-this-song '<song name here>'
	//Artist
	//The song's name
	//A preview link of the song from Spotify
	//The album that the song is from
//If no song then default to "The Sign" by Ace of Base
	//login: use Facebook credentials
	//app name: Concert Reviewers
	//Client ID: 651cfff19a3a4307a895e9dcf1d18d9a
	//Client Secret: 9a0170325c2f4a3389bbb59ec76941fd

//https://www.npmjs.com/package/node-spotify-api
function searchSongInfo(songName){
	if (songName === "") {
		songName = "The Sign";
	};

	spotify.search({ type: 'track', query: songName }, function(err, data) {
  		if (!err) {
 			for (var i = 0; i < 10; i++) {
 				if (data.tracks.items[i] != undefined){
 					console.log("Artist: " + data.tracks.items[i].artists[0].name);
 					console.log("Song: "+ data.tracks.items[i].name);
 					console.log("Preview Link: " + data.tracks.items[i].preview_url);
 					console.log("Album: " + data.tracks.items[i].album.name);
 					logOutput("Artist: " + data.tracks.items[i].artists[0].name);
 				};			  			
  			};
		}
		else {
			console.log("Error occurred: " + err);
		};
	});
};

//3. function for movie search node liri.js movie-this '<movie name here>'
// use OMDB API - http://www.omdbapi.com   key: 40e9cece
//	"Title"   * Title of the movie.  
//  "Year"   * Year the movie came out.
//  "imdbRating"   * IMDB Rating of the movie.
//   "Ratings":[{Source":"Rotten Tomatoes"  * Rotten Tomatoes Rating of the movie.
//     * Country where the movie was produced.
//     * Language of the movie.
//  plot   * Plot of the movie.
//     * Actors in the movie.

function searchMovieInfo(movieName){
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&r=json&apikey=40e9cece"
//OMDB body
	if(!movieName){
		movieName = "Mr. Nobody"
		request(queryUrl, function (error,response, body){
			// If the request is successful
			if(!error && response.statusCode==200){
				// Parse the body of the site
				var details = JSON.parse(body)
				console.log("If you haven't watched 'Mr. Nobody then you should: " + "\n")
				console.log("Title: " + info.Title);
				console.log("Year: " + info.Year);
				console.log("IMDB Rating: " + info.imdbRating);
				console.log("Rotten Tomatoes Rating: " + info.tomatoUserMeter);
				console.log("Country: " + info.Country + "\n");
				console.log("Language: "+ info.Language + "\n");
				console.log("Plot: " + info.Plot + "\n");	
				console.log("Actors: " + info.Actors + "\n");
				console.log("It's on Netflix!")
			}
			else {
				console.log("Error occurred" + error);
			}
		});
	}
	else {
		request(queryUrl, function (error,response, body){
			// If the request is successful
			if(!error && response.statusCode==200){
				// Parse the body of the site
				var details = JSON.parse(body)
				console.log("Title: " + info.Title);
				console.log("Year: " + info.Year);
				console.log("IMDB Rating: " + info.imdbRating);
				console.log("Rotten Tomatoes Rating: " + info.tomatoUserMeter);
				console.log("Country: " + info.Country + "\n");
				console.log("Language: "+ info.Language + "\n");
				console.log("Plot: " + info.Plot + "\n");	
				console.log("Actors: " + info.Actors + "\n");
				logOutput("Title: " + info.Title);
			}
			else {
				console.log("Error occurred" + error);
			}
		});

	}
};


//4. function to retrieve text from random.txt file when node liri.js do-what-it-says is entered
function doWhatItSays(){
	fs.readFile("random.txt", "utf8", function(error, data){
		if(!error){
			doWhatItSaysEntry = data.split(",");
			searchThisSong(doWhatItSaysEntry[0], doWhatItSaysEntry[1]);
		}
		else {
			console.log("Error occurred" + error);
		}
	});
};

//function to add log entries to the log.txt file
function logOutput(logData){
	fs.appendFile("log.txt", logData, (error) => {
		if(error){
			throw error;
		}
	});
}




