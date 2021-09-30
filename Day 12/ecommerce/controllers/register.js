//actual logic should be written in controllers
/*
 * password hash - to protect password
 * email lowercase
 * save
 *
 */
const User = require("../models/user");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const register = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    //condition if user exists
    const alreadyExists = await User.findOne({ where: { email } }).exec();
    if (alreadyExists) {
      res.status(401).send("Email already exists");
    }

    //hashing password here
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    //create new user
    const newUser = new User({
      fullName: fullName,
      email: email.toLowerCase(),
      password: hash,
      // fullName: "Vaibhav",
    });
    const savedUser = await newUser.save();
    req.session.User = savedUser;
    res.status(201).send(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
};

const registerSuperAdmin = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    //condition if user exists
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email already exists");
    }

    //hashing password here
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    //create new user
    const newUser = new User({
      fullName: fullName,
      email: email.toLowerCase(),
      password: hash,
      // fullName: "Vaibhav",
      role: "super-admin",
    });
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports = { register, registerSuperAdmin };
