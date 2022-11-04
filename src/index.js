import './style.css';

const todo = [
  { description: 'Go to 4th Block', isCompleted: false, index: 4 },
  { description: 'Go Bazar', isCompleted: false, index: 1 },
  { description: 'Go to the gym', isCompleted: false, index: 2 },
  { description: 'Go to the Field', isCompleted: false, index: 3 },
];

todo.sort((a, b) => a.index - b.index);

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

  mainContainer.appendChild(li);
};

todo.forEach((item) => {
  populateTodo(item);
});
