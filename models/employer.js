module.exports = function(sequelize, DataTypes) {

	var Employer = sequelize.define("Employer", {

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
		website: {
			type: DataTypes.STRING
		},
		phone_number: {
			type: DataTypes.STRING
		},
		email: {
			type: DataTypes.STRING,
		},
		address: {
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
			},
		},
		userName: {
     	 	type: DataTypes.STRING,
    	},
   		 password: {
      		type: DataTypes.STRING,
    	},
    	logo: {
    		type: DataTypes.STRING
    	}

	}, {
		timestamps: false
	});

	return Employer;
};