var db = require("../models");


module.exports = function(app) {

	app.get('/login', function(req, res) {

		res.render("login", {layout: "empty"});
	});

	app.post('/api/login', function(req, res) {

		var emailInput = req.body.email;
		var passwordInput = req.body.password;

		if (passwordInput) {

			db.Admin.findOne({
				where: {
					username: emailInput
				}
			}).then(function(dbAdmin) {

				var passwordAdmin = dbAdmin.dataValues.password;

				if (passwordInput === passwordAdmin) {

					console.log("True");

					res.redirect("/team");

				} else {

					res.redirect("/error");
				}
				
			});

		} else {

			return console.log("Please enter password");
		}
	});
}