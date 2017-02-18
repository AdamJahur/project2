var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connectin = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '35cYqeqPam5g',
		database: 'military_connect'
	});
};

connection.connect();
module.exports = connection;