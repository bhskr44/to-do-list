import getLocalstorage from './LocalStorageCopy.js';

const saveTodo = (newTodo) => {
  let todoList = [];
  if (getLocalstorage()) {
    todoList = JSON.parse(localStorage.getItem('todo'));
  }
  todoList.push(newTodo);
  localStorage.setItem('todo', JSON.stringify(todoList));
  // getLocalstorage();
};

export default saveTodo;
