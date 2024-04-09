const {sequelize} = require("../config/db")
const { DataTypes } = require("sequelize");

const Spam = sequelize.define("allnumbers", {
  phonenumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isspam: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  },
  email:{
    type: DataTypes.STRING,
    allowNull: true
  },

  name:{
    type: DataTypes.STRING,
    allowNull: false
  }

},{timestamps:false});



module.exports = {Spam};
