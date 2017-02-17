module.exports = function(sequelize, DataTypes) {

	var Admin = sequelize.define("Admin", {

		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		first_name: {
			type: DataTypes.STRING,
		},
		last_name: {
			type: DataTypes.STRING
		},
		email: {
			type: DataTypes.STRING,
		},
		username: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
		},
		category: {
			type:DataTypes.STRING
		}
	}, {

		timestamps: false

	});

	return Admin;	
};