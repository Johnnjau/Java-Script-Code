const todos = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Walk the dog', completed: true },
  { id: 3, title: 'Read a book', completed: false },
];

// forEach, map, filter
const todoTitle = todos.map(function(todo) {
  return todo.title;
});

console.log(todoTitle);