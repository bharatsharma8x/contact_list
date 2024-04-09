const express = require("express");
const router = express.Router();
const { addContact } = require("../controllers/ContactController");
const { authenticateUser } = require("../Middlewere");


router.post("/", authenticateUser, addContact);


module.exports = router;
