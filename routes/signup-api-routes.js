var db = require("../models");

module.exports = function(app) {

	app.get("/vetForm", function(req, res) {

		res.render("vetForm", {layout: "empty"});
	});

	app.post("/api/vetSubmit", function(req, res) {

		req.body.category = "veteran";

		console.log(req.body);

		db.Veteran.create(req.body).then(function(adVeteran) {
		});

		db.Admin.create(req.body).then(function(adVeteran) {
			res.redirect("/login");

		})
	});

	app.post("/api/veteran/update/:user", function(req, res) {

		var user = req.params.user;

		db.Veteran.update(req.body, {
			where: {
				username: user
			}
		
		}).then(function(data) {

			console.log(user);

		res.redirect("/user/veteran/" + user)
		});
	});
}