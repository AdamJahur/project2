// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

	app.get("/", function(req, res) {

		res.render("home");
	});

	app.get("/home", function(req, res) {

		res.render("home");
	});

	app.get("/team", function(req, res) {

		res.render("team");
	});

	app.get("/veteran", function(req, res) {
			db.Veterans.findall({}).then(function(dbVeterans){
				var data = [];

				console.log(dbVeterans);

				for (var i = 0; i < dbVeterans.length; i++) {
					var input = dbVeterans[i].dataValues;
					data.push(input);
				}

					var hbsObject = {
					veterans: data
				}

				console.log(hbsObject);
				res.render("/veteran", hbsObject);


			});
		res.render("vetTable");
	});
};