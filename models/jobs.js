module.exports = function(sequelize, DataTypes) {

	var Job = sequelize.define("Job", {

		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		job_title: {
			type: DataTypes.STRING,
		},
		job_description: {
			type: DataTypes.STRING,
		},
		skills: {
			type: DataTypes.STRING,
		},
		field: {
			type: DataTypes.STRING,
		},
		company_name: {
			type: DataTypes.STRING
		},
		employer_id: {
			type: DataTypes.STRING
		}
	}, {
		timestamps: false

	});

	return Job;
};

