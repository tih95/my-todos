import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/Home.page.jsx';

import { selectCurrentTodos, selectCompletedTodos } from './redux/todo/todo.selectors';

import './App.css';


const App = ({ currentTodos, completedTodos }) => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentTodos: selectCurrentTodos,
  completedTodos: selectCompletedTodos
})

export default connect(mapStateToProps)(App);
