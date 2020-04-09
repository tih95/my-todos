import { removeTodo, toggleComplete } from './todo.utils';

const INITIAL_STATE = {
  todos: [],
  loading: false,
  error: null
}

const todoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_TODOS_BEGIN':
      return {
        ...state,
        loading: true
      }
    case 'SET_TODOS_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        todos: action.payload
      }
    case 'SET_TODOS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case 'ADD_TODO_BEGIN':
      return {
        ...state,
        loading: true
      }
    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'ADD_TODO_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: removeTodo(state.todos, action.payload)
      }
    case 'TOGGLE_COMPLETE_BEGIN':
      return {
        ...state,
        loading: true
      }
    case 'TOGGLE_COMPLETE_SUCCESS':
      return {
        ...state,
        loading: false,
        todos: toggleComplete(state.todos, action.payload)
      }
    case 'TOGGLE_COMPLETE_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        }
    default: 
      return state;
  }
}

export default todoReducer;