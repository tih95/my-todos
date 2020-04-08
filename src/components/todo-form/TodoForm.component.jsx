import React, { useState } from 'react';
import { connect } from 'react-redux';
import DaypickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { addTodo } from '../../redux/todo/todo.actions';


const TodoForm = ({ currentUser, dispatch }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(
      {
        name: name,
        description: description,
        date: new Date(),
        completed: false,
        dueDate: dueDate
      },
      currentUser.id
    ))

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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(TodoForm);