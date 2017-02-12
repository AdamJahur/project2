var db = require("../models");

module.exports = function(app) {

	app.post("/api/addteam", function(req, res) {

		db.Admin.create(req.body).then(function(dbAdmin) {
			res.redirect("/team");
		});
	});
}