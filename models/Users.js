const {sequelize} = require("../config/db")
const { DataTypes } = require("sequelize");

  const Users = sequelize.define( "user", {
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      email: {
          type: DataTypes.STRING,
          unique: true,
          isEmail: true,
          allowNull: false
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      phonenumber:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }
  }, {timestamps: false}, )


module.exports = {Users}
