import addTodo from './addTodo.js';
import saveTodoList from './saveTodoList.js';

const saveTodo = (newTodo) => {
  const todoList = addTodo(newTodo);
  saveTodoList(todoList);
};

export default saveTodo;
