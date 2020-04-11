export const removeTodo = (todos, todoToRemove) => {
  console.log(todoToRemove);
  const foundTodo = todos.find(todo => todo.id === todoToRemove.id);

  return todos.filter(todo => todo.id !== foundTodo.id);
}

export const toggleComplete = (todos, todoToToggle) => {
  const copy = [...todos];

  const foundTodoIndex = copy.findIndex(todo => todo.id === todoToToggle.id);
  copy[foundTodoIndex].completed = !copy[foundTodoIndex].completed;

  return copy; 
}