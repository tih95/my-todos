import React from 'react';

const TodoItem = ({ todoItem }) => {
  return (
    <div>
      <p>{todoItem.name}</p>
    </div>
  )
}

export default TodoItem;