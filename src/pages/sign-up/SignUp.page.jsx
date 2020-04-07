import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { Input, Button, Form, SignUp, InputLabel, PageHeader } from './SignUp.styles';

const SignUpPage = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confPassword) {
      alert('passwords do not match')
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      history.push('/dashboard');
      createUserProfileDocument(user, name);
    }
    catch(e) {
      console.log(e);
    }
    
    setName('');
    setEmail('');
    setPassword('');
    setConfPassword('');
  }
  
  return (
    <SignUp>
      <PageHeader>Dont' have an account? Sign up here</PageHeader>
      <Form onSubmit={handleSubmit}>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input 
          id="name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input 
          id="email"
          type="email" 
          name="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input 
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputLabel htmlFor="confPassword">Confirm Password</InputLabel>
        <Input 
          id="confPassword"
          type="password"
          name="confPassword"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
        />
        <Button>Sign Up</Button>
      </Form>
    </SignUp>
  )
}

export default SignUpPage