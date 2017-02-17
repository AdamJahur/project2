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

				var category = dbAdmin.dataValues.category;
				var user = dbAdmin.dataValues.username;
				console.log("Username: ", user);
				console.log("Category: ", category);

				switch(category) {
					
					case "veteran":

						console.log("URL: /user/veteran/" + user);
						res.redirect("/user/veteran/" + user);
				};

			



				// if (dbAdmin === null) {

				// 	res.redirect("/error");
				// 	return;
				// }

				// var password = dbAdmin.dataValues.password;

				// if (pass === password) {

				// 	res.redirect("/home/" + user);

				// } else {

				// 	res.redirect("/error");
				// }
				
			});
	});
}