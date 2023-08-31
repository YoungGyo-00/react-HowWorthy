import React from 'react';
import palette from 'src/utils/palette';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button';

const LoginBox = styled.div`
  .title-area {
    display: block;
    padding-bottom: 1rem;
    text-align: center;
    font-weight: normal;
    letter-spacing: 2px;
    font-size: 4vh;
  }
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  height: 50%;
  padding: 2rem;
  background-color: ${palette.yellow[1]};
  margin-top: 18vh;
  flex-basis: 25%;
`;

const Form = styled.form`
  text-align: center;
`;

const Title = styled.div`
  margin: 0;
  color: ${palette.black[0]};
  width: fit-content;
  margin-bottom: 5px;
  margin-left: 1vh;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border-radius: 10px;
  width: 95%;
  height: 1.5rem;
  margin-bottom: 1rem;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.7rem;
  line-height: 1.5rem;
  color: ${palette.gray[1]};
`;

const LoginForm = () => {
  return (
    <LoginBox>
      <div className="title-area">Welcome back!</div>
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
    </LoginBox>
  );
};

export default LoginForm;
