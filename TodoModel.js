const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDB");

class Todo extends Model {
  // static method
  static async addTask(params) {
    return await Todo.create(params);
  }

  // instance method
  displayableString() {
    return `${this.completed ? "[x]" : "[ ]"} ${this.id} ${this.title} - ${
      this.dueDate
    }`;
  }
}

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

// To create the table
Todo.sync();
