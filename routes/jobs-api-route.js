var path = require("path");
var db = require("../models");


module.exports = function(app) {

	app.post("/api/addjob", function(req, res) {
			console.log(req.body);
		db.Job.create(req.body).then(function(dbjobs) {
			res.redirect("/home");
		});
	});

}
