import React from 'react';
import LoginForm from 'src/components/login/LoginForm';
import palette from 'src/styles/palette';
import { styled } from 'styled-components';

const LoginTemplateBlock = styled.div`
  position: relative;
  padding: 0;
  background: ${palette.white[0]};
  display: flex;
  width: 100%;
  height: 96vh;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  overflow: hidden;
`;

const LoginPage = () => {
  return (
    <LoginTemplateBlock>
      <LoginForm />
    </LoginTemplateBlock>
  );
};

export default LoginPage;
