import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { auth, firestore } from './firebase/firebase.utils';
import HomePage from './pages/home-page/Home.page.jsx';
import SignUpPage from './pages/sign-up/SignUp.page';
import SignInPage from './pages/sign-in/SignIn.page';
import { setCurrentUser } from './redux/user/user.actions';
import Header from './components/Header/Header.component';

import './App.css';

const App = ({ setCurrentUser, currentUser }) => {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = firestore.collection('users').doc(user.uid);
       
        userRef.onSnapshot(snapshot => {
          if (snapshot.exists) {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          }
        })
      }
      else {
        setCurrentUser(user);
      }
    })
    
    return () => {
      unsubscribeFromAuth();
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route 
          exact 
          path="/" 
          render={HomePage} 
        />
        <Route exact path="/signup" render={() => {
          return currentUser ? <Redirect to="/" /> : <SignUpPage />
        }}/>
        <Route exact path="/signin" render={() => {
          return currentUser ? <Redirect to="/" /> : <SignInPage />
        }}/>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
