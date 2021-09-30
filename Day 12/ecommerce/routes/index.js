var express = require("express");
var router = express.Router();
var registerInitialCheck = require("../middlewares/registerChecks");
var { register, registerSuperAdmin } = require("../controllers/register");
var check = require("../middlewares/checkSuperAdmin");

/* GET home page. */
router.get("/", function (req, res, next) {
  const sess = req.session;
  sess.username = "vaibhav";

  res.render("index", { title: "Express" });
});

router.get("/test", function (req, res, next) {
  console.log("Redis Value ", req.session.username);

  res.render("index", { title: "Express" });
});

/*
 * @requires {email, firstname, lastname, password, confirmpassword} -req.body
 * @description
 * Security, performance and edge cases
 * level - 2
 * JS / SQL
 * level - 3
 * check if email already exists

 */

router.post("/register", registerInitialCheck, register);
router.post("/register-super-admin", registerInitialCheck, registerSuperAdmin);
router.get("/super", check);

module.exports = router;
