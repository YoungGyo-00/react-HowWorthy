import React, { useState, useEffect, useMemo } from 'react';
import LoginViewer from 'src/app/login/components/LoginViewer';
import { PageTemplateBlock } from 'src/components/common/PageTemplateBlock';
import { Link } from 'react-router-dom';
import NaverLogin from './components/NaverLogin';
import RedirectURI from './components/RedirectURI';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authCode, setAuthCode] = useState(null);

  useEffect(() => {
    setIsLoggedIn(!authCode);
  }, [authCode]);

  const handleDataAndCode = (responseData, code) => {
    if (responseData) {
      setIsLoggedIn(true);
    }
    console.log('test');
    setAuthCode(code);
  };

  const handleLogout = async () => {
    try {
      if (!authCode) return;

      // 여기서 토큰 삭제 로직을 수행합니다.
      const accessToken = localStorage.getItem(
        'com.naver.nid.oauth.state_token',
      );
      if (accessToken) {
        localStorage.removeItem('com.naver.nid.oauth.state_token'); // 접근 토큰 삭제
      }

      setIsLoggedIn(false);
      setAuthCode(null);
    } catch (error) {
      console.error('로그아웃 중 에러 발생:', error);
    }
  };

  const showButton = useMemo(() => {
    if (!authCode || authCode == null) {
      return (
        <>
          <RedirectURI onDataReceived={handleDataAndCode} />
          <NaverLogin />
        </>
      );
    }

    return (
      <Link to="/post">
        <button>test</button>
      </Link>
    );
  }, [isLoggedIn]);

  return (
    <PageTemplateBlock flex_direction="row" justify_content="space-around">
      <LoginViewer />
      {showButton}
    </PageTemplateBlock>
  );
};

export default LoginPage;
