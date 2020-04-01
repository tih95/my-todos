import React, { useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'react-uuid';

import { addTodo } from '../../redux/todo/todo.actions';

const TodoForm = ({ addTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    addTodo({
      id: uuid(),
      name: name,
      description: description,
      date: new Date()
    })

    setName('');
    setDescription('');
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          value={name} 
          placeholder="Enter todo"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="textfield" 
          value={description} 
          placeholder="Enter a description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  }
}

export default connect(null, mapDispatchToProps)(TodoForm);