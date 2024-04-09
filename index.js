const express = require("express");
const bodyParser = require("body-parser");
const {sequelize, testDbconnection} = require("./config/db")
const { errorHandler } = require("./Middlewere");
const authRoutes = require("./routes/AuthRoutes");
const contactRoutes = require("./routes/ContactRoutes");
const searchRoutes = require("./routes/SearchRoutes");
const spamRoutes = require("./routes/SpamRoutes");

testDbconnection();
const index = express();

index.use(bodyParser.json());

index.use("/auth", authRoutes);
index.use("/contacts", contactRoutes);
index.use("/search", searchRoutes);
index.use("/spam", spamRoutes);

index.use(errorHandler);

const PORT = process.env.PORT || 3000;
index.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
