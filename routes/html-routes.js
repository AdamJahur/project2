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
};