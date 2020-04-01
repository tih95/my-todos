import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux';

import { removeTodo } from '../../redux/todo/todo.actions';
import { TodoItemContainer } from './TodoItem.styles';

const TodoItem = ({ todoItem, removeTodo }) => {
  return (
    <TodoItemContainer>
      <p>{todoItem.name} </p>
      <FaTimes onClick={() => removeTodo(todoItem)} />
    </TodoItemContainer>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: todo => dispatch(removeTodo(todo))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);