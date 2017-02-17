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

	app.get("/home", function(req, res) {

		res.render("home");
	});

	app.get("/error", function(req, res) {

		res.render("loginError", {layout: "empty"});
	});

	app.get("/team", function(req, res) {

		db.Admin.findAll({}).then(function(dbAdmin) {
			
			var data = [];

			for (i = 0; i < dbAdmin.length; i++) {

				if(dbAdmin[i].dataValues.category === "admin") {

					var input = dbAdmin[i].dataValues;

					data.push(input);
				}
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
		
		db.Employer.findOne({

			where: {
				id: req.params.id
			}

		}).then(function(dbEmployer){

			var values = dbEmployer.dataValues;

			var hbsObject = {
				companyName: values.company_name,
				firstName: values.first_name,
				lastName: values.last_name,
				website: values.website,
				phoneNumber: values.phone_number,
				email: values.email,
				address1: values.address,
				city: values.city,
				state: values.state,
				zip: values.zip,
				logo: values.logo
			}

			// console.log(hbsObject);
			res.render("employer", hbsObject);
		})
	});

	app.get("/Veteran/:id", function(req, res) {
		
		// console.log("ID:", req.params.id);

		db.Veteran.findOne({

			where: {
				id: req.params.id
			}

		}).then(function(dbVeterans){

			var values = dbVeterans.dataValues;

			var hbsObject = {
				rank: values.rank,
				firstName: values.first_name,
				lastName: values.last_name,
				phoneNumber: values.phone_number,
				email: values.email,
				address1: values.address,
				city: values.city,
				state: values.state,
				zip: values.zip,
				bio: values.bio
			}

			// console.log(hbsObject);
			res.render("veteran", hbsObject);
		})
	});

	app.get("/veteran", function(req, res) {

		db.Veteran.findAll({}).then(function(dbVeterans){

			var data = [];

				for (var i = 0; i < dbVeterans.length; i++) {
					var input = dbVeterans[i].dataValues;
					data.push(input);
				}

				var hbsObject = {
					veterans: data
				}

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

	app.get("/user/veteran/:user", function(req, res) {

		console.log(req.params.user);

		db.Veteran.findOne({
			where: {
				username: req.params.user
			}
		}).then(function(dbVeteran) {

			var values = dbVeteran.dataValues;
			var hbsObject = values;

			hbsObject.layout = "veteran";

			res.render("veteran", hbsObject);
		})
	});

	app.get("/user/veteran/setting/:user", function(req, res) {

		db.Veteran.findOne({
			where: {
				username: req.params.user
			}
		}).then(function(dbVeteran) {

			var hbsObject = dbVeteran.dataValues;

			hbsObject.layout = "veteran";

			res.render("vetSettings", hbsObject);
		});
	});

	app.get("/user/employer/:user", function(req, res) {

		db.Employer.findOne({
			where: {
				username: req.params.user
			}
		}).then(function(dbEmployer) {

			var values = dbEmployer.dataValues;
			var hbsObject = values;

			hbsObject.layout = "employer";

			res.render("employer", hbsObject);
		});
	});

	app.get("/user/employer/setting/:user", function(req, res) {

		db.Employer.findOne({
			where: {
				username: req.params.user
			}
		}).then(function(dbEmployer) {

			var hbsObject = dbEmployer.dataValues;

			hbsObject.layout = "employer";

			res.render("empSettings", hbsObject);
		})
	})
};
