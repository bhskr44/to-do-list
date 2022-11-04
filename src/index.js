import './style.css';
import Todo from './modules/Todo.js';
import saveTodo from './modules/saveTodo.js';
import populateTodo from './modules/populateTodo.js';

const mainContainer = document.querySelector('#todo-container');
const clearCompleted = document.querySelector('.clear');

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

clearCompleted.addEventListener('click', () => {
  let todoList = JSON.parse(localStorage.getItem('todo'));

  todoList = todoList.filter((todo) => todo.isCompleted === false);
  console.log('todoList', todoList);

  let i = 1;
  todoList.forEach((todo) => {
    todo.index = i;
    i += 1;
  });
  localStorage.setItem('todo', JSON.stringify(todoList));
  window.location.reload();
});
