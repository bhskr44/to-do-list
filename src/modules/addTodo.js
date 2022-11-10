const addTodo = (newTodo) => {
  let todoList = [];
  if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
  }
  todoList.push(newTodo);
  return todoList;
};

module.exports = addTodo;
