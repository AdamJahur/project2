var db = require("../models");

module.exports = function(app) {

	console.log(db.Admin);

	app.get("/api/team", function(req, res) {

		db.Admin.findAll({}).then(function(dbAdmin) {
			res.json(dbAdmin);
		});
	});
}