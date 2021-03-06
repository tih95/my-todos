import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled(Link)`
  color: black;
  text-decoration: none;
  margin-top: 1em;
`

export const SignIn = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const Input = styled.input`
  border-radius: 3px;
  border: 2px solid black;
  padding: 1em;
  margin-bottom: 1em;
`;

export const InputLabel = styled.label`

`;

export const Button = styled.button`
  border-radius: 3px;
  border: 2px solid black;
  background: none;
  padding: 1em;
  margin-top: 4em;
  font-weight: 700;
  font-size: 0.8rem;
`;

export const PageHeader = styled.h1`
  font-weight: 700;
  margin-bottom: 1em;
`;