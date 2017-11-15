//add required npms

var Twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");
var fs = require("fs");

//get data from keys.js and store in variable
var datakey = require("./keys.js");

/*
//https://www.npmjs.com/package/twitter 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
*/

//https://www.npmjs.com/package/node-spotify-api

//login: use Facebook credentials
//app name: Concert Reviewers
//Client ID: 651cfff19a3a4307a895e9dcf1d18d9a
//Client Secret: 9a0170325c2f4a3389bbb59ec76941fd

/*
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
*/

//take in following commands
//`my-tweets`
//`spotify-this-song`
//`movie-this`
//`do-what-it-says`


//1. command to show last 20 tweets by typing node liri.js my-tweets


//2. command to show following info - node liri.js spotify-this-song '<song name here>'
//Artist
//The song's name
//A preview link of the song from Spotify
//The album that the song is from


//If no song then default to "The Sign" by Ace of Base

//3. code for movie search node liri.js movie-this '<movie name here>'
// use OMDB API - http://www.omdbapi.com   key: 40e9cece
//	"Title"   * Title of the movie.  
//  "Year"   * Year the movie came out.
//  "imdbRating"   * IMDB Rating of the movie.
//   "Ratings":[{Source":"Rotten Tomatoes"  * Rotten Tomatoes Rating of the movie.
//     * Country where the movie was produced.
//     * Language of the movie.
//  plot   * Plot of the movie.
//     * Actors in the movie.
var nodeArgs = process.argv;
var movieName = "";

for (var i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  }
  else {
    movieName += nodeArgs[i];
  }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece"
console.log(queryUrl);

request(queryUrl, function(error, response, body) {
  // If the request is successful
  if (!error && response.statusCode === 200) {
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Year);
  }
});

/*
{"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","Rated":"PG","Released":"25 May 1977","Runtime":"121 min","Genre":"Action, Adventure, Fantasy","Director":"George Lucas","Writer":"George Lucas","Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing","Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.","Language":"English","Country":"USA","Awards":"Won 6 Oscars. Another 50 wins & 28 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYTUwNTdiMzMtNThmNS00ODUzLThlMDMtMTM5Y2JkNWJjOGQ2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"92/100"}],"Metascore":"92","imdbRating":"8.7","imdbVotes":"1,004,425","imdbID":"tt0076759","Type":"movie","DVD":"21 Sep 2004","BoxOffice":"N/A","Production":"20th Century Fox","Website":"http://www.starwars.com/episode-iv/","Response":"True"}

*/



//if user doesn't type in a movie else insert 'Mr. Nobody'
//console.log "If you haven't watched 'Mr. Nobody then you should: "
//href http://www.imdb.com/title/tt0485947/
//It's on Netflix

//4. code to retrieve text from random.txt file when node liri.js do-what-it-says is entered
//use fs node package




