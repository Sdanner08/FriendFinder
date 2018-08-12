var express = require('express'),
bodyParser = require('body-parser'),
app = express();
// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 5000;
// middleware parses data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/public'));

// Require Routes
//App is passed in because it lets use us express in other files
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// Listens for when page is loaded and starts server
app.listen(PORT,function() {
console.log('Listening for App' , PORT);
});