import React from 'react';

import TodoItem from '../todo-item/TodoItem.component';

const TodoList = ({ title, todoItems }) => {
  return (
    <div>
      <h3>{title}</h3>
      {todoItems.map(todoItem => 
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      )}
    </div>
  )
}

export default TodoList;