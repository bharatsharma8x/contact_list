const {Spam} = require("../models/Spam");

const markAsSpam = async (req, res) => {
  try {
    const { id } = req.query;
    const { isspam } = req.body;
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const spam = await Spam.findByPk(id);

    if (!spam) {
      return res.status(404).json({ message: "Spam object not found" });
    }

    spam.isspam = isspam;
    await spam.save();

    res.status(200).json({ message: "Spam object updated successfully", spam });
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
