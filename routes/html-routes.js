// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models")

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

		db.Admin.findAll({}).then(function(dbAdmin) {
			
			var data = [];

			for (i = 0; i < dbAdmin.length; i++) {

				var input = dbAdmin[i].dataValues;

				data.push(input);
			}

			var hbsObject = {
				admins: data
			}

			res.render("team", hbsObject);

		});
	});

	app.get("/vetHome", function(req, res) {

		res.render("vethtml", {layout: 'main'})
	});

	app.get("/profile/:id", function(req, res) {

		console.log("Profile ID: ", req.params.id);

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

			res.render("profile", hbsObject)
		})
	})

	app.get("/employer", function(req, res) {
		res.render("employer", {layout: "user"});
	});




app.get("/veteran", function(req, res) {

			db.military_connect.findAll({}).then(function(dbVeterans){
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
				res.render("vetTable", hbsObject);


			});
	
	});









};
