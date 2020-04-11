import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import dayjs from 'dayjs';

import { removeTodo, toggleComplete } from '../../redux/todo/todo.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './TodoItem.styles.scss';

const TodoItem = ({ todoItem, removeTodo, toggleComplete, currentUser }) => {
  const { dueDate, name, completed } = todoItem;
  
  return (
    <div className={`todo-item ${completed ? 'completed' : 'not-completed'}`}>
      <input 
        type="checkbox" 
        onChange={() => toggleComplete(todoItem, currentUser.id)} 
        checked={completed} 
      />
      <p>{name} </p>
      {
        !dueDate 
          ? null
          : <p>{dayjs(dueDate.toDate()).format('MMM D')}</p>
      }
      <FaTrash onClick={() => removeTodo(todoItem, currentUser.id)} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: (todo, userId) => dispatch(removeTodo(todo, userId)),
    toggleComplete: (todo, userId) => dispatch(toggleComplete(todo, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);