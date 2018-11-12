$(document).ready(() => {
  $.getJSON('/api/todos').then(addTodos);
});

const addTodos = todos => {
  todos.forEach(todo => {
    const newTodo = $(`<li class="task">${todo.name}</li>`);
    if(todo.completed){
      newTodo.addClass('done')
    }
    $('.list').append(newTodo);
  });
};
