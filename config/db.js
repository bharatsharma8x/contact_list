const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("postgres", "postgres.hmderrscrybmedjdifnr", "/&s9v78NB_RMMbw", {
  host: "aws-0-ap-south-1.pooler.supabase.com",
  port: 5432,
  dialect: "postgres"
});

const testDbconnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { testDbconnection, sequelize };