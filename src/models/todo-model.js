module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define("todo", {
    access_token: {
      type: Sequelize.TEXT,
    },
    text: {
      type: Sequelize.STRING,
    },
    tag: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.TEXT,
    },
    file: {
      type: Sequelize.TEXT,
    },
  });

  return Todo;
};
