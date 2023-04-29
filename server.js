require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./src/models");
const auth = require("./src/routes/auth.route");
const todo = require("./src/routes/todo-route");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

setTimeout(() => {
  db.sequelize.sync();
}, 5000);

app.use(cors(corsOptions));

app.use(express.json());

app.use("/auth", auth);

app.use("/todo", todo);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
