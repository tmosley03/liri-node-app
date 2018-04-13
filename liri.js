require("dotenv").config();

require("./keys.js");

var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("spotify");

// console.log(keys);

var command = process.argv[2];
console.log("this is the comand var: " + command);

// svar spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

console.log("keys: " + keys);



// //==== switch statement for all functions ===================

switch (command) {
    case "my-tweets":
        function twiterFunc() {
            console.log("from twitter switch case");
            var params = { screen_name: '@TM32662797' };
            client.get('statuses/user_timeline', params, function (error, tweets, response) {
                if (!error) {
                    console.log(tweets);
                }
               
            });
        };
        break;

    case "spotifiy-this-song":
        function spotifyFunc() {
            spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function (err, data) {
                if (err) {
                    console.log('Error occurred: ' + err);
                    return data;
                }
            });
        }
        break;

    case "movie-this":
        function movieFunc() {
            var userSearch = "http://www.omdbapi.com/?apikey=trillogy&" + process.argv[3];

            $.ajax({
                url: userSearch,
                method: "GET"
            }).then(function (response) {
                console.log(response);
            });
        };
        break;

    case "do-what-it-says":
    function whatItsays(){
        fs.readFile('/random.txt', (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    }

    default: 
    console.log("Something went wrong with the switch.... :-(");


}

