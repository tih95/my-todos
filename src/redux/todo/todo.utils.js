export const addTodo = (todos, todoToAdd) => {
  const copy = [...todos];

  return [...copy, todoToAdd];
}