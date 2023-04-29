const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo-controller");
const sessionUser = require("../middleware/session-user");

//router.use(sessionUser.checkSession);

router.post("/show", todoController.show);
router.post("/create", todoController.create);
router.post("/delete", todoController.delete);
router.post("/update", todoController.update);

module.exports = router;
