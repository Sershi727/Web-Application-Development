document.getElementById('task-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const due_date = document.getElementById('due_date').value;

  const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description, due_date })
  });

  const result = await response.json();
  // Обновите интерфейс пользователя
});

// Логика для редактирования и удаления задач
