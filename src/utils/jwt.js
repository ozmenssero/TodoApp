const jwt = require("jsonwebtoken");

exports.signJwt = (payload, options = {}) => {
  const privateKey = Buffer.from(
    process.env.ACCESS_TOKEN_PRIVATE_KEY,
    "base64"
  ).toString("ascii");

  return jwt.sign(payload, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
};

exports.verifyJwt = (token) => {
  try {
    const publicKey = Buffer.from(
      process.env.ACCESS_TOKEN_PUBLIC_KEY,
      "base64"
    ).toString("ascii");

    return jwt.verify(token, publicKey);
  } catch (error) {
    return null;
  }
};
