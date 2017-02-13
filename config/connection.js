var Sequelize = require('sequelize');

var sequelize = new Sequelize('military_connect', 'root', '', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = sequelize;