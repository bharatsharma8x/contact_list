const {Spam} = require("../models/Spam");

const markAsSpam = async (req, res) => {
  try {
    const { phonenumber,isspam,email,name } = req.body;
    const spam = await Spam.create({ phonenumber, isspam ,email,name});
    res.status(201).json({ message: "Number marked as spam", spam });
  } catch (error) {
    res.status(500).json({ message: "Failed to mark as spam", error: error.message });
  }
};


const getAllNumbers = async (req, res) => {
  try {    
    const spam = await Spam.findAll({});
    res.status(201).json({data:spam});
  } catch (error) {
    res.status(500).json({ message: "Failed to mark as spam", error: error.message });
  }
};

module.exports = { markAsSpam ,getAllNumbers};
