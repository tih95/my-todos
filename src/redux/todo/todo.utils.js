export const addTodo = (todos, todoToAdd) => {
  const copy = [...todos];

  return [...copy, todoToAdd];
}

export const removeTodo = (todos, todoToRemove) => {
  const foundTodo = todos.find(todo => todo.id === todoToRemove.id);

  return todos.filter(todo => todo.id !== foundTodo.id);
}

export const completeTodo = (todos, todoToComplete) => {
  const copy = [...todos];

  const foundTodoIndex = copy.findIndex(todo => todo.id === todoToComplete.id);
  copy[foundTodoIndex].completed = true;

  return copy; 
}