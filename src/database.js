// src/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Создание подключения к базе данных
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);

// Проверка подключения
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Unable to connect to the database:', err));

// Экспорт модели и подключения
module.exports = sequelize;
