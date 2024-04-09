const express = require("express");
const router = express.Router();
const { searchByName, searchByPhoneNumber } = require("../controllers/SearchControllers");
const { authenticateUser } = require("../Middlewere");

router.get("/name",authenticateUser, searchByName);

router.get("/phoneNumber",authenticateUser, searchByPhoneNumber);

module.exports = router;
