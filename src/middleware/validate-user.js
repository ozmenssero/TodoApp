const authService = require("../services/auth.services");

exports.validateUser = async (req, res, next) => {
  const payload = req.body;
  const user = await authService.findUser(req, res);

  if (!payload) {
    return next(
      res.status(400).json({
        status: "fail",
        message: "No email or password given",
      })
    );
  } else if (!payload.email) {
    return next(
      res.status(400).json({
        status: "fail",
        message: "No email given",
      })
    );
  } else if (!payload.password) {
    return next(
      res.status(400).json({
        status: "fail",
        message: "No password given",
      })
    );
  } else if (user[0]) {
    return next(
      res.status(400).json({
        status: "fail",
        message: "User exists",
      })
    );
  }

  next();
};
