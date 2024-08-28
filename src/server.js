// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const sequelize = require('./database'); // Импорт подключения к базе данных
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
