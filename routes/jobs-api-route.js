var path = require("path");
var db = require("../models");


module.exports = function(app) {

	app.post("/api/addjob/:companyId", function(req, res) {
			
		var data = req.body;

		data.companyId = req.params.companyId;

		console.log(data)

		db.Job.create(data).then(function(dbjobs) {
			res.redirect("/home");
		});
	});

}
