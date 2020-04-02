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

export const toggleComplete = todo => {
  return {
    type: 'TOGGLE_COMPLETE',
    payload: todo
  }
}