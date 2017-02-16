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
    gender: {
      type: DataTypes.ENUM('Male', 'Female'),
      isIn: [['Male', 'Female']],
    },
    address1: {
      type: DataTypes.STRING,
    },
    address2: {
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
    userName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
     skills: {
      type: DataTypes.STRING,
    
    }

  }, {
       timestamps: false
    });
  return Veteran;
};
