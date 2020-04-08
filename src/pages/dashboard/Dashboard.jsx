import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCurrentTodos, selectCompletedTodos } from '../../redux/todo/todo.selectors';
import { setTodos } from '../../redux/todo/todo.actions';
import TodoForm from '../../components/todo-form/TodoForm.component';
import TodoList from '../../components/todo-list/TodoList.component';

const Dashboard = ({ currentUser, currentTodos, completedTodos, dispatch }) => {
  
  useEffect(() => {
    
    dispatch(setTodos(currentUser.id));

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

// const mapDispatchToProps = dispatch => ({
//   setTodos: todos => dispatch(setTodos(todos))
// })

export default connect(mapStateToProps)(Dashboard);