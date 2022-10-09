const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDB");

class Todo extends Model {}

Todo.init(
  {
    // attributes
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
  }
);

module.exports = Todo;

Todo.sync();
