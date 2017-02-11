module.exports = function(sequelize, DataTypes) {

	var Admin = sequelize.define("Admins", {

		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		bio: {
			type: DataTypes.STRING,
			allowNull: false
		},
	}, {
		timestamps: false
	});

	return Admin;	
};