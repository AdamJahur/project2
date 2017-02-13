module.exports = function(sequelize, DataTypes) {

	var Employer = sequelize.define("Employers", {

		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		companyName: {
			type: DataTypes.STRING,
		},
		firstName: {
			type: DataTypes.STRING, 
		},
		lastName: {
			type: DataTypes.STRING,
		},
		phoneNumber: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			// validate: {
			// 	isEmail: true
			// }
		},
		address1: {
			type: DataTypes.STRING,
		},
		city: {
			type: DataTypes.STRING,
		},
		state: {
			type: DataTypes.STRING,
		},
		zip: {
			type: DataTypes.INTEGER,
			validate: {
				len: [5]
			}
		}
	});

	return Employer;
}