const emailValidate = (email) => {
  //it will check if email is valid or not
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  // /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
};

const passwordValidate = (password) => {
  var re = /^(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&-]).{8,}$/;
  return re.test(password);
};

module.exports = {
  emailValidate,
  passwordValidate,
};
