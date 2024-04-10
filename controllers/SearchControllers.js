const { Op } = require("sequelize");
const {Users} = require("../models/Users");
const { Spam } = require("../models/Spam");

const searchByName = async (req, res) => {
  try {
    const { name } = req.query;
    // const users = await Users.findAll({
    //   where: { name: { [Op.like]: `%${name}%` } }
    // });
    const contacts = await Spam.findAll({
      where: { name: { [Op.like]: `%${name}%` } }
    });
    res.json({ contacts });
  } catch (error) {
    res.status(500).json({ message: "Search failed", error: error.message });
  }
};

const searchByPhoneNumber = async (req, res) => {
  try {
    const { phonenumber } = req.query;
    // const users = await Users.findAll({ where: { phonenumber } });
    const contacts = await Spam.findAll({ where: { phonenumber } });
    res.json({ contacts });
  } catch (error) {
    res.status(500).json({ message: "Search failed", error: error.message });
  }
};

module.exports = { searchByName, searchByPhoneNumber };
