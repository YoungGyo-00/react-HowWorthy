import React from 'react';
import palette from 'src/styles/palette';
import styled from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const Form = styled.form`
  text-align: center;
`;

const Title = styled.div`
  margin: 0;
  color: ${palette.black[0]};
  width: fit-content;
  margin-bottom: 5px;
  margin-left: 5px;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border-radius: 10px;
  width: 95%;
  height: 4vh;
  margin-bottom: 1rem;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.7rem;
  line-height: 1.5rem;
  color: ${palette.gray[1]};
`;

const AuthForm = () => {
  return (
    <>
      <Form>
        <Title>Your Email</Title>
        <StyledInput name="username" placeholder=" example@gmail.com" />
        <Title>Your Password</Title>
        <StyledInput name="password" placeholder=" password" />
        <Link to="/post">
          <Button>Log In</Button>
        </Link>
      </Form>
      <Footer>
        <div>Are you new here? Join our service!</div>
        <Link to="/register">
          <Button>Sign up for free</Button>
        </Link>
      </Footer>
    </>
  );
};

export default AuthForm;
