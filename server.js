var express = require('express');
var mysqul = require("mysql");

var bodyParser = require('body-parser');
var app = express();


// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;


  connection.connect(function(err) {
    if (process.env.JAWSDB_URL) {
     connection = mysqul.createConnection(process.env.JAWSDB_URL);
    }else{
        connection = mysql.createConnection({
            host: "localhost",
            port: 3308,
            user: "root",
            password: "root",
            database: "nerds_db"
          });
    };
  
    console.log("connected as id " + connection.threadId);
  });
  connection.connect();
  module.exports = connection;
  
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