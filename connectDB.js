const Sequelize = require("sequelize");

const database = "todo_db";
const username = "postgres";
const password = "27o2^gxu8rbb!&EuqAJu";
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});

const connect = async () => {
  return sequelize.authenticate();
};

module.exports = {
  connect,
  sequelize,
};
