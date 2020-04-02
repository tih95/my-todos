import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import { removeTodo, toggleComplete } from '../../redux/todo/todo.actions';

import './TodoItem.styles.scss';

const TodoItem = ({ todoItem, removeTodo, toggleComplete }) => {
  const { dueDate, name, completed } = todoItem;

  return (
    <div className={`todo-item ${completed ? 'completed' : 'not-completed'}`}>
      <input 
        type="checkbox" 
        onChange={() => toggleComplete(todoItem)} 
        checked={completed} 
      />
      <p>{name} </p>
      {
        !dueDate 
          ? null
          : <p>{dayjs(dueDate).format('MMM D')}</p>
      }
      <FaTrash onClick={() => removeTodo(todoItem)} />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: todo => dispatch(removeTodo(todo)),
    toggleComplete: todo => dispatch(toggleComplete(todo))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);