import React from 'react';
import RegisterForm from './components/RegisterForm';
import { styled } from 'styled-components';
import palette from 'src/utils/palette';
import { PageTemplateBlock } from 'src/components/common/PageTemplateBlock';

const Header = styled.div`
  width: 100%;
  height: 85px;
  text-align: left;
  background-color: ${palette.yellow[1]};
  font-size: 50px;
  font-weight: normal;
  padding-left: 2rem;
  padding-top: 1rem;
  color: ${palette.gray[2]};
`;

const HeaderImage = styled.img`
  height: 50px;
  width: 50px;
`;

const Title = styled.div`
  margin-top: 3rem;
  margin-left: 4rem;
  font-weight: 600;
  font-size: 60px;
`;

const Content = styled.div`
  margin-left: 4rem;
  font-weight: 500;
  font-size: 40px;
`;

const RegisterPage = () => {
  return (
    <PageTemplateBlock flex_direction="column" justify_content="flex-start">
      <Header>
        <div>How Worthy</div>
      </Header>
      <Title>Welcome to How Worthy!</Title>
      <Content>Create Account</Content>
      <RegisterForm />
    </PageTemplateBlock>
  );
};

export default RegisterPage;
