-- Вставка начальных данных в таблицу пользователей
INSERT INTO users (username, password) VALUES
('user1', 'hashed_password1'),
('user2', 'hashed_password2');

-- Вставка начальных данных в таблицу задач
INSERT INTO tasks (title, description, due_date, user_id) VALUES
('Sample Task 1', 'This is a description of task 1', '2024-12-31 23:59:59', 1),
('Sample Task 2', 'This is a description of task 2', '2024-11-30 23:59:59', 2);
