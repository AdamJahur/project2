var db = require("../models");


module.exports = function(app) {

	app.get('/login', function(req, res) {

		res.render("login", {layout: "empty"});
	});

	app.get('/api/login/:email', function(req, res) {

		var data = req.params.email;

		console.log(data);

		db.Admin.findOne({
			where: {
				email: data
			}
		}).then(function(dbAdmin) {
			res.json(dbAdmin);
		})
	});
}