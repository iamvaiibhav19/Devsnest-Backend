

const emailValidation = (email, password, confpassword) => {
    const t=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return t.test(email);
}

const passwordValidation = (email, password, confpassword) => {
    const t = /^ (?=.* [A - Za - z])(?=.* d)[A - Za - zd]{ 8, }$/;
    return t.test(email);
}

module.exports = {
    emailValidation,
    passwordValidation
}