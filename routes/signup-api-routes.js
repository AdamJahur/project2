var db = require("../models");

module.exports = function(app) {

	app.get("/vetForm", function(req, res) {

		res.render("vetForm", {layout: "empty"});
	});

	app.post("/api/vetSubmit", function(req, res) {

		req.body.category = "veteran";

		console.log(req.body);

		db.Veteran.create(req.body).then(function(adVeteran) {
			res.redirect("/login");
		})
	})
}