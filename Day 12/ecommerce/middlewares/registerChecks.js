const { emailValidate, passwordValidate } = require("../utils/validate");

/**
 * level - 1
 * email validate -@.com
 * password validate -min 6
 * password == confirm
 */

//middleware to check for input
const registerInitialCheck = (req, res, next) => {
  const { fullName, email, password, confirmPassword } = req.body;
  if (
    typeof fullName === "string" &&
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    email.length > 0 &&
    password.length > 8 &&
    confirmPassword === password
  ) {
    next();
  } else {
    res.status(401).send("Initial Checks Fail");
  }
};

module.exports = registerInitialCheck;
