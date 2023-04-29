const authService = require("../services/auth.services");

exports.checkUser = async (req, res, next) => {
  const user = await authService.findUser(req, res);

  if (!user[0]) {
    return next(
      res.status(401).json({
        status: "Unauthorized",
        message: "User not found",
      })
    );
  }

  next();
};
