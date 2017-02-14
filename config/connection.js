var Sequelize = require('sequelize');

var sequelize = new Sequelize('military_connect', 'root', '@ndroid4LIFE', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = sequelize;
