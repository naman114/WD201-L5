const { connect } = require("./connectDB");
const Todo = require("./TodoModel");

const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.addTask({
      title: "Second Item",
      dueDate: new Date(),
      completed: false,
    });
    console.log(`Created todo with ID: ${todo.id}`);
  } catch (error) {
    console.error(error);
  }
};

const countItems = async () => {
  try {
    const totalCount = await Todo.count();
    console.log(`Found ${totalCount} items in the table!`);
  } catch (error) {
    console.error(error);
  }
};

const getAllTodos = async () => {
  try {
    const todos = await Todo.findAll({
      where: { completed: true },
      order: [["id", "DESC"]],
    });
    const todoList = todos.map((todo) => todo.displayableString()).join("\n");

    console.log(todoList);
  } catch (error) {
    console.error(error);
  }
};

// IIFE (Immediately Invoked Function Expression): A JS function that runs as soon as defined
(async () => {
  //   await createTodo();
  //   await countItems();
  await getAllTodos();
})();
