import './style.css';
import Todo from './modules/Todo.js';
import saveTodo from './modules/saveTodo.js';
import populateTodo from './modules/populateTodo.js';

const mainContainer = document.querySelector('#todo-container');
const populateAllTodo = () => {
  mainContainer.innerHTML = '';
  const todoList = JSON.parse(localStorage.getItem('todo'));

  todoList.sort((a, b) => a.index - b.index);

  todoList.forEach((todo) => {
    populateTodo(todo);
  });
};

const todoItem = document.querySelector('#todo-item');
todoItem.addEventListener('change', () => {
  let todoList = [];
  if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
  }
  const todo = new Todo(todoItem.value, false, todoList.length);
  saveTodo(todo);
  populateAllTodo();
  todoItem.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  populateAllTodo();
});
