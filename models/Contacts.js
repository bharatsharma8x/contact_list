const {sequelize} = require("../config/db")
const { DataTypes } = require("sequelize");

 const Contact = sequelize.define("contacts", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phonenumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userid:{
    type: DataTypes.STRING,
    allowNull: false
  }
},{timestamps:false});
module.exports = {Contact};
