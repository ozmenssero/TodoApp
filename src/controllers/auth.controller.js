const authService = require("../services/auth.services");
const bcrypt = require("bcryptjs");

exports.registerHandler = async (req, res) => {
  try {
    authService.createUser(req, res);
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({
        status: "fail",
        message: "Email already exist",
      });
    }
  }
};

exports.loginHandler = async (req, res) => {
  try {
    const user = await authService.findUser(req, res);

    if (
      !user[0] ||
      !(await bcrypt.compare(req.body.password, user[0].get("password")))
    ) {
      return res.status(401).json({
        status: "Unauthorized",
        message: "Invalid email or password",
      });
    }

    const accessTokenCookieOptions = {
      expires: new Date(Date.now() + 15 * 60 * 1000),
      maxAge: 15 * 60 * 1000,
      httpOnly: true,
      sameSite: "lax",
    };

    const { access_token } = await authService.signToken(user);

    res.cookie("accessToken", access_token, accessTokenCookieOptions);

    res.status(200).json({
      status: "success",
      access_token,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
