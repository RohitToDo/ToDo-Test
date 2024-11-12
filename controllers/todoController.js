const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
  const { title, description, dueDate } = req.body;

  try {
    const todo = new Todo({
      title,
      description,
      dueDate,
      user: req.userId,
    });
    await todo.save();
    res.status(201).json({"message": "Todo created successfully", "todo" : todo});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.userId });
  res.json(todos);
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({"message": "Todo updated successfully", "todo" : updatedTodo});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.status(204).json({"message": "Todo deleted successfully"});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
