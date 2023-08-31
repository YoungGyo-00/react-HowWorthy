import React from 'react';
import RegisterForm from './components/RegisterForm';
import { styled } from 'styled-components';
import palette from 'src/utils/palette';
import { PageTemplateBlock } from 'src/components/common/PageTemplateBlock';

const Header = styled.div`
  width: 100;
  height: 10vh;
  text-align: left;
  background-color: ${palette.yellow[1]};
`;

const RegisterPage = () => {
  return (
    <PageTemplateBlock flex_direction="column">
      <Header />
      <RegisterForm />
    </PageTemplateBlock>
  );
};

export default RegisterPage;
