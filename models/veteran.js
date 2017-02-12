module.exports = function(sequelize, DataTypes) {
  
  var Veteran = sequelize.define("Veteran", {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
    rank: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('Male', 'Female'),
      allowNull: false,
      isIn: [['Male', 'Female']],
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     skills: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  });
  return Veteran;
};
