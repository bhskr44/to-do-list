const localStorageMock = require('./LocalStorageMock.js');

const addTodo = (newTodo) => {
  let todoList = [];
  if (localStorageMock.getItem('todo')) {
    todoList = JSON.parse(localStorageMock.getItem('todo'));
  }
  todoList.push(newTodo);
  return todoList.length;
};

module.exports = addTodo;
