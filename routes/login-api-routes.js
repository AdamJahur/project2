var db = ("./models.js");
var passport = require("passport");

module.exports = function(app) {

	app.get('/login', function(req, res) {

		res.render("", {layout: "login"});
	});

}