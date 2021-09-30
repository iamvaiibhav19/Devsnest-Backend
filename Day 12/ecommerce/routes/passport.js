const { router } = require("../app");
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser,
} = require("../utils/Auth");

//yser registration route
route.post("/register-user", async (req, res) => {
  await userRegister(req.body, "user", res);
});

//admin registration route
router.post("/register-admin", async (req, res) => {
  await userRegister(req.body, "admin", res);
});

//super admin registration route
router.post("/register-super-admin", async (req, res) => {
  await userRegister(req.body, "superadmin", res);
});

//users login route
router.post("/login-user", async (req, res) => {
  await userLogin(req.body, "admin", res);
});

//admin login route
router.post("/login-admin", async (req, res) => {
  await userLogin(req.body, "admin", res);
});

//super admin login route
router.post("/login-super-admin", async (req, res) => {
  await userLogin(req.body, "superadmin", res);
});

//users protected route
router.get(
  "/user-protected",
  userAuth,
  checkRole(["user"]),
  async((req, res) => {
    return res.json("Hello User");
  })
);
