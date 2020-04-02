export const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    payload: todo
  }
}

export const removeTodo = todo => {
  return {
    type: 'REMOVE_TODO',
    payload: todo
  }
}

export const completeTodo = todo => {
  return {
    type: 'COMPLETE_TODO',
    payload: todo
  }
}