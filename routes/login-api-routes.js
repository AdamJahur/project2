var db = require("../models");


module.exports = function(app) {

	app.get('/login', function(req, res) {

		res.render("login", {layout: "empty"});
	});

	app.post('/api/login', function(req, res) {

		var user = req.body.username;
		var pass = req.body.password;

		if (pass || user) {

			db.Admin.findOne({
				where: {
					username: user
				}
			}).then(function(dbAdmin) {

				if (dbAdmin === null) {

					res.redirect("/error");
					return;
				}

				var password = dbAdmin.dataValues.password;

				if (pass === password) {

					res.redirect("/");

				} else {

					res.redirect("/error");
				}
				
			});

		} else {

			res.redirect("/error");
		}
	});
}