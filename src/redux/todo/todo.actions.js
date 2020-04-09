import { firestore } from '../../firebase/firebase.utils';

// A Thunk which calls the firestore call to retrieve todo data for a spcific user.
export const setTodos = (userId) => {
  return async dispatch => {
    dispatch(setTodosBegin());

    const todosToSet = [];

    try {
      const todosSnapshot = await firestore.collection(`users/${userId}/todos`).get();

      todosSnapshot.forEach(docSnapShot => {
  
        todosToSet.push({
          id: docSnapShot.id,
          ...docSnapShot.data(),
        })
      })
      dispatch(setTodosSuccess(todosToSet))
    }
    catch(e) {
      dispatch(setTodosFailure(e));
    }
  }
}

// These next functions are called in the setTodos() function. 
export const setTodosBegin = () => {
  return {
    type: 'SET_TODOS_BEGIN'
  }
}

export const setTodosSuccess = (todos) => {
  return {
    type: 'SET_TODOS_SUCCESS',
    payload: todos
  }
}

export const setTodosFailure = (error) => {
  return {
    type: 'SET_TODOS_FAILURE',
    payload: error
  }
}

// Thunk function that adds a todo to the firestore and the redux store as well
export const addTodo = (todo, userId) => {
  return async dispatch => {
    dispatch(addTodoBegin());
    console.log('started addtodo being')
    const todoRef = firestore.collection(`users/${userId}/todos`);

    try {
      const newlyAddedDoc = await todoRef.add(todo);

      const snapshot = await newlyAddedDoc.get();

      dispatch(addTodoSuccess({id: snapshot.id, ...snapshot.data()}))
      
    }
    catch(e) {
      dispatch(addTodoFailure(e));
    }
  }
}

export const addTodoBegin = () => {
  return {
    type: 'ADD_TODO_BEGIN'
  }
}

export const addTodoSuccess = todo => {
  return {
    type: 'ADD_TODO_SUCCESS',
    payload: todo
  }
}

export const addTodoFailure = error => {
  return {
    type: 'ADD_TODO_FAILURE',
    payload: error
  }
}

export const removeTodo = todo => {
  return {
    type: 'REMOVE_TODO',
    payload: todo
  }
}

export const toggleComplete = (todo, userId) => {
  
  return async dispatch => {
    dispatch(toggleCompleteBegin());

    const todoRef = firestore.collection(`/users/${userId}/todos`).doc(`${todo.id}`);

    try {
      const updatedTodo = {...todo, completed: !todo.completed}
      await todoRef.update(updatedTodo)

      dispatch(toggleCompleteSuccess(updatedTodo));
    }
    catch(e) {
      dispatch(toggleCompleteFailure())
    }
  }
}

export const toggleCompleteBegin = () => {
  return {
    type: 'TOGGLE_COMPLETE_BEGIN'
  }
}

export const toggleCompleteSuccess = todo => {
  return {
    type: 'TOGGLE_COMPLETE_SUCCESS',
    payload: todo
  }
}

export const toggleCompleteFailure = error => {
  return {
    type: 'TOGGLE_COMPLETE_FAILURE',
    payload: error
  }
}