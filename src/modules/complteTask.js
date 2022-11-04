const complete = (index, value) => {
  const todoList = JSON.parse(localStorage.getItem('todo'));
  todoList.forEach((todo) => {
    if (todo.index === index) {
      todo.isCompleted = value;
    }
  });
  localStorage.setItem('todo', JSON.stringify(todoList));
};

export default complete;
