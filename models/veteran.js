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
    firstName: {
      type: DataTypes.STRING,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
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
    userName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    }
  }, {
       timestamps: false
    });
  return Veteran;
};
