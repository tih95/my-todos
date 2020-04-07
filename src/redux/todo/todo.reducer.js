import { addTodo, removeTodo, toggleComplete } from './todo.utils';

const INITIAL_STATE = {
  todos: []
}

const todoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: addTodo(state.todos, action.payload)
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: removeTodo(state.todos, action.payload)
      }
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        todos: toggleComplete(state.todos, action.payload)
      }
    default: 
      return state;
  }
}

export default todoReducer;