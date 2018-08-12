// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Modules
const friendData = require('../data/friend');

module.exports = function(app) {

	// Display friend JSON
	app.get('/api/friend',function(req, res) {
		res.json(friendData);
	});

	app.post('/api/friend', function(req, res) {
		// Pushes new data to friend JSON in JSON format
		friendData.push(req.body);
		console.log(friendData);
		// Displays it for the user when posted
		res.json(friendData);
	});
}