import { addTodo } from './todo.utils';

const INITIAL_STATE = {
  todos: [ 
    {
      id: 1,
      name: 'Get poop',
      description: 'Go outside get this and come back in',
      date: new Date()
    }
  ]
}

const todoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: addTodo(state.todos, action.payload)
      }
    default: 
      return state;
  }
}

export default todoReducer;