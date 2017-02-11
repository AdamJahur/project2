module.exports = function(sequelize, DataTypes) {
  var Veteran = sequelize.define("Veteran", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    rank: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    LastName: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    phoneNumber: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1]
    },
    address1: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    address2: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    zip: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    userName: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }

  });
  return Veteran;
};
