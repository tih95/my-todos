import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TodoItem from '../todo-item/TodoItem.component';
import { selectTodoItems } from '../../redux/todo/todo.selectors';

const TodoList = ({ todoItems }) => {
  return (
    <div>
      {todoItems.map(todoItem => <TodoItem key={todoItem.id} todoItem={todoItem} />)}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  todoItems: selectTodoItems
})

export default connect(mapStateToProps)(TodoList);