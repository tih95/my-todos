export const addTodo = (todos, todoToAdd) => {
  const copy = [...todos];

  return [...copy, todoToAdd];
}

export const removeTodo = (todos, todoToRemove) => {
  const foundTodo = todos.find(todo => todo.id === todoToRemove.id);

  return todos.filter(todo => todo.id !== foundTodo.id);
}