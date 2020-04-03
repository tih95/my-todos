import React, { useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'react-uuid';
import DaypickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { addTodo } from '../../redux/todo/todo.actions';

const TodoForm = ({ addTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    addTodo({
      id: uuid(),
      name: name,
      description: description,
      date: new Date(),
      completed: false,
      dueDate: dueDate
    })

    setName('');
    setDescription('');
    setDueDate(null);
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
        <DaypickerInput 
          selectedDay={dueDate}
          onDayChange={(selectedDay) => setDueDate(selectedDay)}
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