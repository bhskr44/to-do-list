import getLocalstorage from '../__mocks__/LocalStorageCopy.js';

const saveTodo = (newTodo) => {
  let todoList = [];
  if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
  }
  todoList.push(newTodo);
  localStorage.setItem('todo', JSON.stringify(todoList));
  getLocalstorage();
};

export default saveTodo;
