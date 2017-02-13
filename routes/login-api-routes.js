var db = ("./models.js");
var passport = require("passport");

module.exports = function(app) {

	app.post('/login', function(req, res) {

		var username = req.body.username.toString();
		var password = req.body.password;

		console.log(username);

		db.Admin.findAll({
			where: {
				username: username
			}
		}).then(function(dbAdmin) {

			console.log(dbAdmin);
		})
	});

}