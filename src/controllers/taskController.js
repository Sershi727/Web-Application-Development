const Task = require('../models/task');

exports.createTask = async (req, res) => {
  try {
    const { title, description, due_date, user_id } = req.body;
    const task = await Task.create({ title, description, due_date, user_id });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Другие методы для редактирования и удаления задач
