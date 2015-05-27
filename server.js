var express = require("express");
var app = express();
var port = process.env.PORT || 3700;
var io = require('socket.io').listen(app.listen(port));
var Instagram = require('instagram-node-lib');
var http = require('http');
var https = require('https');
var request = ('request');
var intervalID;

/**
 * Set the paths for your files
 * @type {[string]}
 */
var pub = __dirname + '/public',
    view = __dirname + '/views';

var options = {
  host: 'api.instagram.com',
  port: 443,
  path: '/v1/subscriptions?client_secret=3aaa9a0b25154cf3a3ed8b4745ab82c5&client_id=6e61abb4929b478eb1889f64899ffc1d',
  method: 'GET'
};

var unsuscribe = https.request(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    var suscriptions = JSON.parse(chunk).data;
	for	(i = 0; i < suscriptions.length; i++) {
		Instagram.subscriptions.unsubscribe({ id: suscriptions[i].id });
	}
  });
});



/**
 * Set the 'client ID' and the 'client secret' to use on Instagram
 * @type {String}
 */
var clientID = '6e61abb4929b478eb1889f64899ffc1d',
    clientSecret = '3aaa9a0b25154cf3a3ed8b4745ab82c5',
	callbackURL = 'http://giussibasso.herokuapp.com/callback',
	redirectURI = 'http://giussibasso.herokuapp.com';

/**
 * Set the configuration
 */
Instagram.set('client_id', clientID);
Instagram.set('client_secret', clientSecret);
Instagram.set('callback_url', callbackURL);
Instagram.set('redirect_uri', redirectURI);
Instagram.set('maxSockets', 10);

/**
 * Uses the library "instagram-node-lib" to Subscribe to the Instagram API Real Time
 * with the tag "hashtag" ...
 * @type {String}
 */



/**
 * Set your app main configuration
 */
app.configure(function(){
	app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(pub));
    app.use(express.static(view));
    app.use(express.errorHandler());
});

/**
 * Needed to receive the handshake
 */
app.get('/callback', function(req, res){
    var handshake =  Instagram.subscriptions.handshake(req, res);
});

io.sockets.on('connection', function (socket) {
socket.on('suscribe', function(data){
	suscribe(data.tag);
});
});

app.get('/unsuscribe',function(req,res){
	var suscriptions = req.query.ids;
	for(i = 0; i < suscriptions.length;i++){
		Instagram.subscriptions.unsubscribe({ id: suscriptions[i].id });
	}
	res.status(200).end();
});


function suscribe(tag){
	Instagram.subscriptions.subscribe({
	  object: 'tag',
	  object_id: tag,
	  aspect: 'media',
	  callback_url: callbackURL,
	  type: 'subscription',
	  id: '#'
	});
}



/**
 * for each new post Instagram send us the data
 */
app.post('/callback', function(req, res) {
    var data = req.body;
    data.forEach(function(tag) {
      var url = 'https://api.instagram.com/v1/tags/' + tag.object_id + '/media/recent?client_id='+clientID;
      sendMessage(url);
    });

});

/**
 * Send the url with the hashtag to the client side
 * to do the ajax call based on the url
 * @param  {[string]} url [the url as string with the hashtag]
 */
function sendMessage(url) {
  io.sockets.emit('show', { show: url });
}

console.log("Listening on port " + port);
