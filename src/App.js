import React from 'react';
import TodoForm from './components/todo-form/TodoForm.component';
import TodoList from './components/todo-list/TodoList.component';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
