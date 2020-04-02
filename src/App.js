import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TodoForm from './components/todo-form/TodoForm.component';
import TodoList from './components/todo-list/TodoList.component';

import './App.css';
import { selectCurrentTodos, selectCompletedTodos } from './redux/todo/todo.selectors';

const App = ({ currentTodos, completedTodos }) => {
  return (
    <div className="App">
      <TodoForm />
      <TodoList todoItems={currentTodos} title="Active" />
      <TodoList todoItems={completedTodos} title="Completed" />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentTodos: selectCurrentTodos,
  completedTodos: selectCompletedTodos
})

export default connect(mapStateToProps)(App);
