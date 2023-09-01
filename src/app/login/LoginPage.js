import React from 'react';
import LoginForm from 'src/app/login/components/LoginForm';
import LoginViewer from 'src/app/login/components/LoginViewer';
import { PageTemplateBlock } from 'src/components/common/PageTemplateBlock';

const LoginPage = () => {
  return (
    <PageTemplateBlock flex_direction="row" justify_content="space-around">
      <LoginViewer />
      <LoginForm />
    </PageTemplateBlock>
  );
};

export default LoginPage;
