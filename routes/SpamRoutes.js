const express = require("express");
const router = express.Router();
const { markAsSpam, getAllNumbers } = require("../controllers/SpamController");
const { authenticateUser } = require("../Middlewere");

router.post("/",authenticateUser, markAsSpam);
router.get("/",authenticateUser, getAllNumbers);

module.exports = router;
