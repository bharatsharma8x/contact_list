const express = require("express");
const bodyParser = require("body-parser");
const {sequelize, testDbconnection} = require("./config/db")
const { errorHandler } = require("./Middlewere");
const authRoutes = require("./routes/AuthRoutes");
const contactRoutes = require("./routes/ContactRoutes");
const searchRoutes = require("./routes/SearchRoutes");
const spamRoutes = require("./routes/SpamRoutes");

testDbconnection();
const app = express();

app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/contacts", contactRoutes);
app.use("/search", searchRoutes);
app.use("/spam", spamRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
