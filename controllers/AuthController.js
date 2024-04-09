const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/secrate");
const {Users} = require("../models/Users");



const register = async (req, res) => {
  try {
    const { name, phonenumber, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Users.create({
      name,
      phonenumber,
      email,
      password: hashedPassword
    });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { phonenumber, password } = req.body;
    console.log(config);
    const user = await Users.findOne({ where: { phonenumber } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user.id }, config.secrateKey, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

module.exports = { register, login };
