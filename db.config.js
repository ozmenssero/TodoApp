module.exports = {
  HOST: "mysql",
  USER: "homestead",
  PASSWORD: "secret",
  DB: "playablefactory",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
