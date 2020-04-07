import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import { NavbarWrapper, Nav } from './Header.styles';

const Header = ({ currentUser, history }) => {
  
  return (
    <Nav>
      <NavbarWrapper>
        <Link to="/">My-Todos</Link>
        <div>
          {currentUser ? 
            <button onClick={() => {
              auth.signOut()
              history.push('/')
            }}>Sign out</button>
            : 
            <div>
              <Link to="/signup">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </div>
          }
        </div>
      </NavbarWrapper>
    </Nav>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default withRouter(connect(mapStateToProps)(Header));