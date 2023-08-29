import React from 'react';
import palette from 'src/styles/palette';
import styled from 'styled-components';
import AuthForm from './AuthForm';

const AuthTemplateBlock = styled.div`
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

const LoginBox = styled.div`
  .title-area {
    display: block;
    padding-bottom: 1rem;
    text-align: center;
    font-weight: normal;
    letter-spacing: 2px;
    font-size: 25px;
  }
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 2rem;
  background-color: ${palette.yellow[1]};
  width: 25%;
  height: 50%;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <LoginBox>
        <div className="title-area">Welcome back!</div>
        <AuthForm />
      </LoginBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
