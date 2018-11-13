$(document).ready(() => {
  $.getJSON('/api/todos').then(addTodos);

  $('#todoInput').keypress(event => {
    if (event.which === 13) {
      createTodo();
    }
  });

  $('.list').on('click', 'span', e => {
    removeTodo($(e.target).parent());
  });
});

const addTodos = todos => {
  todos.forEach(addTodo);
};

const addTodo = todo => {
  const newTodo = $(`<li class="task">${todo.name}<span>X</span></li>`);
  newTodo.data('id', todo._id);
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

const removeTodo = todo => {
  const clickedId = todo.data('id');
  $.ajax({
    method: 'DELETE',
    url: `/api/todos/${clickedId}`,
  })
    .then(data => {
      todo.remove();
    })
    .catch(err => {
      console.log(err);
    });
};
