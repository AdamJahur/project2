var path = require("path");
var db = require("../models");


module.exports = function(app) {

	app.post("/api/addteam", function(req, res) {

		var object = req.body;

		object.password = req.body.name;

		console.log(object);

		db.Admin.create(req.body).then(function(dbAdmin) {
			res.redirect("/team");
		});
	});

	app.get("/api/profileteam/:id", function(req, res) {

		db.Admin.findOne({
			where: {
				id: req.params.id
			}
		}).then(function(dbAdmin) {
			
			var hbsObject = {
				id: dbAdmin.dataValues.id,
				name: dbAdmin.dataValues.name,
				email: dbAdmin.dataValues.email,
				bio: dbAdmin.dataValues.bio,
			};

			res.render("home", hbsObject)
		});
	}); 
}