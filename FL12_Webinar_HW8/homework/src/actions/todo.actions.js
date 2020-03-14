let nextTodoId = 0;

export const addTodo = (text, data) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  complete: false,
  data: data,
  text: text


});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

