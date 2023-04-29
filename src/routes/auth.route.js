const express = require("express");
const authController = require("../controllers/auth.controller");
const validate = require("../middleware/validate-user");
const checkUser = require("../middleware/check-user");
const router = express.Router();

//router.use(validate.validateUser);

router.post("/register", authController.registerHandler);

router.use(checkUser.checkUser);

router.post("/login", authController.loginHandler);

module.exports = router;
