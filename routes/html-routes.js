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
	});

	app.get("/employer", function(req, res) {

		db.Employer.findAll({}).then(function(dbEmployer) {

			var data = [];

			for (i = 0; i < dbEmployer.length; i++) {

				var input = dbEmployer[i].dataValues;

				data.push(input);
			}

			var hbsObject = {
				employers: data
			}

			res.render("empTable", hbsObject);
		})
	})

	app.get("/employer/:id", function(req, res) {
		
		console.log("ID:", req.params.id);


		db.Employer.findOne({

			where: {
				id: req.params.id
			}

		}).then(function(dbEmployer){

				var values = dbEmployer.dataValues;

				var hbsObject = {
					companyName: values.companyName,
					website: values.website,
					phoneNumber: values.phoneNumber,
					firstName: values.firstName,
					lastName: values.lastName,
					email: values.email,
					address1: values.address1,
					city: values.city,
					state: values.state,
					zip: values.zip,
					logo: values.logo
				}

				console.log(hbsObject);
				res.render("employer", hbsObject);
			})
		});

	app.get("/veteran", function(req, res) {

			db.Veteran.findAll({}).then(function(dbVeterans){
				var data = [];

				//console.log(dbVeterans);

				for (var i = 0; i < dbVeterans.length; i++) {
					var input = dbVeterans[i].dataValues;
					data.push(input);
				}

					var hbsObject = {
						veterans: data
					}

				//console.log(hbsObject);
				res.render("vetTable", hbsObject);


			});
	
	});



	app.get("/jobsTable", function(req, res) {

		db.Employer.findAll({}).then(function(dbEmployer){
			
			var data = [];

				for (var i = 0; i < dbEmployer.length; i++) {

					var input = dbEmployer[i].dataValues;

					data.push(input);
				}
					var hbsObject = {
					employer: data
				}

				res.render("jobs", hbsObject);
			});
	});
};
