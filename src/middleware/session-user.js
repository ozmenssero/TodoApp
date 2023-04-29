const authService = require("../services/auth.services");
const jwtUtils = require("../utils/jwt");

exports.checkSession = async (req, res, next) => {
  let accessToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    accessToken = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.accessToken) {
    accessToken = req.cookies.accessToken;
  }

  if (!accessToken) {
    return next(res.status(403).send());
  }

  const decoded = jwtUtils.verifyJwt(accessToken);

  if (!decoded) {
    return next(res.status(403).send());
  }

  const user = await authService.findUser(req, res);

  if (!user) {
    return next(res.status(403).send());
  }

  res.locals.user = user;

  next();
};
