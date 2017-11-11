//add required npms

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');



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

//https://www.npmjs.com/package/node-spotify-api
