const todoService = require("../services/todo-service");

exports.create = async (req, res) => {
  try {
    todoService.create(req, res);
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    todoService.delete(req, res);

    res.status(200).json({
      status: "success",
      message: "Content deleted",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    todoService.update(req, res);

    res.status(200).json({
      status: "success",
      message: "Content updated",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.show = async (req, res) => {
  try {
    const todoInformation = await todoService.show(req, res);

    res.status(200).json({
      status: "success",
      data: todoInformation,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
