const addTodo = require('./__mocks__/addTodo.js');
const localStorageMock = require('./__mocks__/LocalStorageMock.js');

it('returns characters count', () => {
  // const newTodo = { name: 'JK Rowling' };
  // localStorageMock.setItem('todo', JSON.stringify([{ name: 'JK Rowling' }]));
  const local = localStorageMock.getItem('todo');
  const newTodo = { name: 'name', isCompleted: false, index: 556 };
  
  expect(addTodo(newTodo)).toBe(JSON.parse(local).length + 1);
});
