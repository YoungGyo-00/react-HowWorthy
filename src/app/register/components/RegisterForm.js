import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button';
import StyledInput from 'src/components/common/StyledInput';
import palette from 'src/utils/palette';

const RegisterViewerBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${palette.black[0]};
  text-align: left;
  position: relative;
  flex-direction: row;
`;

const Form = styled.form`
  text-align: center;
  width: 450px;
  margin-top: 3rem;
  margin-left: 4rem;
`;

const LoginForm = () => {
  return (
    <RegisterViewerBlock>
      <Form>
        <StyledInput title="Nickname" name="nickname" />
        <StyledInput title="Email" name="email" />
        <StyledInput title="Password" name="password" />
        <StyledInput title="Confirm Password" name="confirm" />
        <Link to="/">
          <Button margin_top="2rem">Sign Up</Button>
        </Link>
      </Form>
    </RegisterViewerBlock>
  );
};

export default LoginForm;
