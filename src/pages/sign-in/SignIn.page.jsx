import React, { useState } from 'react';

import { auth } from '../../firebase/firebase.utils';
import { SignIn } from './SignIn.styles';
import { PageHeader, InputLabel, Input, Form, Button, LinkWrapper } from './SignIn.styles';

const SignInPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/dashboard');
    }
    catch(e) {
      console.log(e);
    }

    setEmail('');
    setPassword('');
  }

  return (
    <SignIn>
      <PageHeader>Sign In</PageHeader>
      <Form onSubmit={handleSubmit}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input 
          id="email"
          name="email"
          value={email}
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input 
          id="password"
          name="password"
          value={password}
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Sign In</Button>
      </Form>
      <LinkWrapper to="/signup">Don't have an account? Sign up here</LinkWrapper>
    </SignIn>
  )
}

export default SignInPage;