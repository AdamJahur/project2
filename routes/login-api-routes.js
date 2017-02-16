var db = require("../models");


module.exports = function(app) {

	app.get('/login', function(req, res) {

		res.render("login", {layout: "empty"});
	});

	app.post('/api/login', function(req, res) {

		console.log(req.body);

		var user = req.body.username;
		var pass = req.body.password;

		console.log("User: ", user);

			db.Admin.findAll({
				where: {
					username: user
				}, include: [
				{
					model: db.Veteran
				}]
			}).then(function(dbAdmin) {

				console.log(dbAdmin);

				if (dbAdmin === null) {

					res.redirect("/error");
					return;
				}

				var password = dbAdmin.dataValues.password;

				if (pass === password) {

					res.redirect("/home/" + user);

				} else {

					res.redirect("/error");
				}
				
			});
	});
}