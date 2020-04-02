import React from 'react';
import { FaTrash, FaCheck } from 'react-icons/fa';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import { removeTodo, completeTodo } from '../../redux/todo/todo.actions';

import './TodoItem.styles.scss';

const TodoItem = ({ todoItem, removeTodo, completeTodo }) => {
  const { dueDate, name } = todoItem;

  return (
    <div className="todo-item">
      {todoItem.completed 
        ? null
        : <FaCheck onClick={() => completeTodo(todoItem)} />
      }
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
    completeTodo: todo => dispatch(completeTodo(todo))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);