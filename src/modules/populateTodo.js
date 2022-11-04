import removeTodo from './removeTodo.js';
import editTodo from './editTodo.js';

const mainContainer = document.querySelector('#todo-container');
const populateTodo = (todo) => {
  const li = document.createElement('li');
  li.className = 'main-item li';

  const todoCheck = document.createElement('input');
  todoCheck.type = 'checkbox';
  todoCheck.className = 'checkbox';

  li.appendChild(todoCheck);

  const p = document.createElement('p');
  p.textContent = todo.description;
  p.className = 'todo-p';
  li.appendChild(p);

  const miniForm = document.createElement('form');
  miniForm.classList = 'edit-me hide';

  const input = document.createElement('input');
  input.type = 'text';
  input.value = todo.description;
  input.classList = 'hide';
  miniForm.appendChild(input);
  li.appendChild(miniForm);

  const editIcon = document.createElement('span');
  editIcon.classList = 'material-symbols-outlined more icon';
  editIcon.textContent = 'edit';
  li.appendChild(editIcon);

  editIcon.addEventListener('click', () => {
    li.classList.add('edit-background');
    input.classList.add('edit-background');
    input.classList.remove('hide');
    p.classList.add('hide');
    miniForm.classList.remove('hide');
  });

  const deleteIcon = document.createElement('span');
  deleteIcon.classList = 'material-symbols-outlined icon';
  deleteIcon.textContent = 'delete';
  li.appendChild(deleteIcon);

  deleteIcon.addEventListener('click', () => {
    removeTodo(todo.index);
  });

  miniForm.addEventListener('change', (e) => {
    e.preventDefault();
    editTodo(input.value, todo.index);
  });

  mainContainer.appendChild(li);
};

export default populateTodo;
