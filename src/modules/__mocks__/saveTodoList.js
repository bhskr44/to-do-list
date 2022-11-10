const saveTodoList = (id, data) => {
  window.localStorage.setItem('todo', JSON.stringify(todoList));
};

export default saveTodoList;
