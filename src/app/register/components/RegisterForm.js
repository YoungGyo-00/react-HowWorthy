import React from 'react';
import palette from 'src/utils/palette';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button';
import StyledInput from 'src/components/common/StyledInput';

const Form = styled.form`
  text-align: center;
`;

const LoginForm = () => {
  return (
    <>
      <div className="title-area">Welcome back!</div>
      <Form>
        <StyledInput
          title="Email"
          name="username"
          placeholder=" example@gmail.com"
        />
        <StyledInput title="Password" name="password" placeholder=" password" />
        <Link to="/post">
          <Button>Log In</Button>
        </Link>
      </Form>
    </>
  );
};

export default LoginForm;
