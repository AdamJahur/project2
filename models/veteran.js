module.exports = function(sequelize, DataTypes) {
  
  var Veteran = sequelize.define("Veteran", {

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
      },
    rank: {
        type: DataTypes.STRING,
      },
    first_name: {
        type: DataTypes.STRING,
      },
    last_name: {
        type: DataTypes.STRING,
      },
    phone_number: {
        type: DataTypes.STRING,
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
        }
      },
    skills: {
        type: DataTypes.STRING,
      },
    username: {
        type: DataTypes.STRING,
      },
    password: {
        type: DataTypes.STRING,
      },
    field: {
      type: DataTypes.STRING
      },
    bio: {
    type: DataTypes.STRING
  }
}, 
  {
       timestamps: false
    });
  return Veteran;
};

