import React from 'react';
import { connect } from 'react-redux';

import TodoForm from '../../components/todo-form/TodoForm.component';

const Dashboard = ({ currentUser }) => {
  
  return (
    <div>
      <h1>Welcome, {currentUser.displayName}</h1>
      <TodoForm />
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Dashboard);