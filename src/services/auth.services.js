const db = require("../models");
const jwtUtils = require("../utils/jwt");
const bcrypt = require("bcryptjs");

const User = db.user;
const Op = db.Sequelize.Op;

exports.createUser = async (req, res, next) => {
  const encryptedPassword = await bcrypt.hash(req.body.password, 12);
  const user = {
    email: req.body.email,
    password: encryptedPassword,
  };

  User.create(user)
    .then((data) => {
      res.status(201).json({
        status: "success",
        data: {
          user,
        },
      });
    })
    .catch((error) => {
      return res.status(500).send({
        status: "error",
        message: error.message,
      });
    });
};

exports.findUser = (req, res) => {
  const user = {
    email: req.body.email,
  };

  return User.findAll({
    where: {
      email: user.email,
    },
  });
};

exports.signToken = async (user) => {
  const access_token = jwtUtils.signJwt(
    { sub: user.id },
    {
      expiresIn: "15m",
    }
  );
  return { access_token };
};
