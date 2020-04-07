import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { firestore } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCurrentTodos, selectCompletedTodos } from '../../redux/todo/todo.selectors';
import { setTodos } from '../../redux/todo/todo.actions';
import TodoForm from '../../components/todo-form/TodoForm.component';
import TodoList from '../../components/todo-list/TodoList.component';

const Dashboard = ({ currentUser, currentTodos, completedTodos, setTodos }) => {
  
  useEffect(() => {
    const initializeTodos = async () => {
      const todosToSet = [];

      const todosSnapshot = await firestore.collection(`users/${currentUser.id}/todos`).get();

      todosSnapshot.forEach(docSnapShot => {
        const dueDate = docSnapShot.get('dueDate');

        todosToSet.push({
          id: docSnapShot.id,
          ...docSnapShot.data(),
          dueDate: dueDate.toDate()
        })
      })

      setTodos(todosToSet);
    }
    
    initializeTodos();

    return () => {
      
    }
  }, [])

  return (
    <div>
      <h1>Welcome, {currentUser.displayName}</h1>
      <TodoForm />
      <TodoList title="Active" todoItems={currentTodos} />
      <TodoList title="Completed"todoItems={completedTodos} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  currentTodos: selectCurrentTodos,
  completedTodos: selectCompletedTodos 
})

const mapDispatchToProps = dispatch => ({
  setTodos: todos => dispatch(setTodos(todos))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);