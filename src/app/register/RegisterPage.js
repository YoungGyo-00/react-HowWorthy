import React from 'react';
import RegisterForm from './components/RegisterForm';
import { styled } from 'styled-components';
import palette from 'src/utils/palette';
import { PageTemplateBlock } from 'src/components/common/PageTemplateBlock';
import Register_Emoticon from 'src/assets/register/Register_Emoticon.png';
import RegisterImageGroup from './components/RegisterImageGroup';

const Header = styled.div`
  width: 100%;
  height: 80px;
  text-align: left;
  background-color: ${palette.yellow[1]};
  font-size: 50px;
  font-weight: normal;
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: ${palette.gray[2]};
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const HeaderImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 30px;
`;

const RegisterViewerBlock = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`;

const RegisterPage = () => {
  return (
    <PageTemplateBlock flex_direction="column" justify_content="flex-start">
      <Header>
        How Worthy
        <HeaderImage src={Register_Emoticon} alt="Emoticon" />
      </Header>
      <RegisterViewerBlock>
        <RegisterForm />
        <RegisterImageGroup />
      </RegisterViewerBlock>
    </PageTemplateBlock>
  );
};

export default RegisterPage;
