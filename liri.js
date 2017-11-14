//add required npms

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

//get data from keys.js and store in variable

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


//command to show last 20 tweets by typing node liri.js my-tweets


//command to show following info - node liri.js spotify-this-song '<song name here>'
//Artist
//The song's name
//A preview link of the song from Spotify
//The album that the song is from


//If no song then default to "The Sign" by Ace of Base

//code for movie search node liri.js movie-this '<movie name here>'
//	   * Title of the movie.
//     * Year the movie came out.
//     * IMDB Rating of the movie.
//     * Rotten Tomatoes Rating of the movie.
//     * Country where the movie was produced.
//     * Language of the movie.
//     * Plot of the movie.
//     * Actors in the movie.



