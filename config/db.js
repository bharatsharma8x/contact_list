const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("postgresql:lalsir:react@localhost:5432/testing")

const testDbconnection = async()=>{
  try {
    sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
  } catch (error) {
    console.log("nhi hora ",error);
  }
}



module.exports={testDbconnection,sequelize}
