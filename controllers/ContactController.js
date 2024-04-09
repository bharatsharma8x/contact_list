const {Contact} = require("../models/Contacts");

const addContact = async (req, res) => {
  try {
    const userid =req.userid
    const { name, phonenumber } = req.body;
    const contact = await Contact.create({ name, phonenumber ,userid  });
    const spam = await Spam.create({ phonenumber,name});
    res.status(201).json({ message: "Contact added successfully", contact });
  } catch (error) {
    res.status(500).json({ message: "Failed to add contact", error: error.message });
  }
};

module.exports = { addContact};
