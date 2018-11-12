$(document).ready(() => {
  $.getJSON('/api/todos').then(addTodos);

  $('#todoInput').keypress(event => {
    if (event.which === 13) {
      createTodo();
    }
  });
});

const addTodos = todos => {
  todos.forEach(addTodo);
};

const addTodo = todo => {
  const newTodo = $(`<li class="task">${todo.name}</li>`);
  if (todo.completed) {
    newTodo.addClass('done');
  }
  $('.list').append(newTodo);
};

const createTodo = () => {
  const usrInput = $('#todoInput').val();
  $.post('/api/todos', { name: usrInput })
    .then(newTodo => {
      $('#todoInput').val('');
      addTodo(newTodo);
    })
    .catch(err => {
      console.log(err);
    });
};
