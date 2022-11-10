const saveTodoList = (todoList) => {
  localStorage.setItem('todo', JSON.stringify(todoList));
};

export default saveTodoList;
