var db = require("../models");

module.exports = function(app) {

	app.get("/vetForm", function(req, res) {

		res.render("vetForm", {layout: "empty"});
	});

	app.get ("/empForm", function(req, res) {

		res.render("empForm", {layout: "empty"});
	})

	app.post("/api/vetSubmit", function(req, res) {

		req.body.category = "veteran";

		db.Veteran.create(req.body).then(function(adVeteran) {
		});

		db.Admin.create(req.body).then(function(adVeteran) {
			res.redirect("/login");
		});
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

	app.post("/api/empSubmit", function(req, res) {

		req.body.category = "employer";

		db.Employer.create(req.body).then(function(adEmployer) {
		});

		db.Admin.create(req.body).then(function(adEmployer) {
			res.redirect("/login");
		});
	});


}