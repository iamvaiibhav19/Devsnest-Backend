
const { emailValidation,
    passwordValidation } = require('../utils');


const registerInitialCheck = (req, res, next) => {
    const { email, password, confPassword } = req.body;
    if (
        typeof (email) == 'string' &&
        typeof (password) == 'string' &&
        typeof (confPassword) == 'string' &&
        email.lenght > 0 &&
        confPassword === password &&
        emailValidation(email) &&
        passwordValidation(password)
    )
    {
        next();
    }
    else {
        res.status(401).send("initial check failed");
    }
}
module.exports = registerInitialCheck;