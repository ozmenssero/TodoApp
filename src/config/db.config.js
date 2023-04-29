require("dotenv").config();

module.exports = {
  HOST: process.env.MYSQL_HOST,
  USER: "homestead",
  PASSWORD: "secret",
  DB: "playablefactory",
  dialect: "mysql",
  PORT: "3306",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
