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

			db.Admin.findOne({
				where: {
					username: user
				}
			}).then(function(dbAdmin) {

				if (dbAdmin === null) {

					res.redirect("/error");
					return;
				};

				var category = dbAdmin.dataValues.category;
				var user = dbAdmin.dataValues.username;
				var password = dbAdmin.dataValues.password;

				if (pass === password) {
				
					console.log(category);

					switch(category) {
						
						case "admin":
	
							res.redirect("/home");
							break;
	
						case "veteran":
	
							res.redirect("/user/veteran/" + user);
							break;
	
						case "employer":
	
							res.redirect("/user/employer/" + user);
							break;
					};

				} else {

					res.redirect("/error");
				}
		});
	});
}