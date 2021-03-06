module.exports = function(sequelize, DataTypes) {

	var Employer = sequelize.define("Employer", {

		companyId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		company_name: {
			type: DataTypes.STRING,
		},
		first_name: {
			type: DataTypes.STRING, 
		},
		last_name: {
			type: DataTypes.STRING,
		},
		website: {
			type: DataTypes.STRING,
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
		username: {
     	 	type: DataTypes.STRING,
    	},
   		 password: {
      		type: DataTypes.STRING,
    	},
    	logo: {
    		type: DataTypes.STRING
    	},
    	category: {
    		type: DataTypes.STRING
    	}
	}, {

		timestamps: false
		
	});

	return Employer;
};