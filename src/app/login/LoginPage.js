import React from 'react';
import LoginForm from 'src/app/login/components/LoginForm';
import LoginViewer from 'src/app/login/components/LoginViewer';
import palette from 'src/utils/palette';
import { styled } from 'styled-components';

const LoginTemplateBlock = styled.div`
  position: relative;
  padding: 0;
  background: ${palette.white[0]};
  display: flex;
  width: 100%;
  height: 96vh;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  box-sizing: border-box;
  overflow: hidden;
`;

const LoginPage = () => {
  return (
    <LoginTemplateBlock>
      <LoginViewer />
      <LoginForm />
    </LoginTemplateBlock>
  );
};

export default LoginPage;
