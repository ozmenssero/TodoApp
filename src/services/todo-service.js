const db = require("../models");

const Todo = db.todo;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const todo = {
    access_token: req.body.access_token,
    text: req.body.text,
    tag: req.body.tag,
    image: req.body.image,
    file: req.body.file,
  };

  const todoInformations = Todo.findAll({
    where: {
      access_token: req.body.access_token,
    },
  });

  Todo.create(todo)
    .then((data) => {
      res.status(201).json({
        status: "success",
        data: {
          todo,
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

exports.delete = (req, res) => {
  const todo = {
    access_token: req.body.access_token,
    text: req.body.text,
  };

  Todo.destroy({
    where: {
      [Op.and]: [{ text: todo.text }, { access_token: todo.access_token }],
    },
  });
};

exports.update = (req, res) => {
  const todo = {
    access_token: req.body.access_token,
    text: req.body.text,
    image: req.body.image,
    file: req.body.file,
  };

  return Todo.update(todo, {
    where: {
      [Op.or]: [
        { access_token: todo.access_token },
        { text: todo.text },
        { image: todo.image },
        { file: todo.file },
      ],
    },
  });
};

exports.show = async (req, res) => {
  return Todo.findAll({
    where: {
      access_token: req.body.access_token,
    },
  });
};
