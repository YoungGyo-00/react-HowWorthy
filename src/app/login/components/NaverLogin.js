import React from 'react';
import palette from 'src/utils/palette';
import styled from 'styled-components';

const LoginBox = styled.div`
  .title-area {
    display: block;
    padding-bottom: 1rem;
    text-align: center;
    font-weight: normal;
    letter-spacing: 2px;
    font-size: 2rem;
  }
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  width: 400px;
  height: 450px;
  padding: 2rem;
  background-color: ${palette.yellow[1]};
  margin-top: 18vh;
  font-size: 1.3rem;
  text-align: center;
`;

const Button = styled.button`
  .img {
    height: 3rem;
    margin-right: 1rem;
  }
  border-radius: 0.25rem;
  display: flex;
  text-align: center;
  align-items: center;
  margin-top: 6rem;
  font-size: 1.5rem;
  font-weight: 500;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.3rem;
  background-color: ${palette.green[0]};
  color: ${palette.white[0]};
  border: solid 1px;
  width: 21rem;
`;

const Footer = styled.div`
  margin-top: 9rem;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${palette.gray[1]};
`;

const NaverLogin = () => {
  const client_id = process.env.REACT_APP_NAVER_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_NAVER_REDIRECT_URI;
  const state = process.env.REACT_APP_NAVER_STATE;

  const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&state=${state}&redirect_uri=${encodeURIComponent(
    redirect_uri,
  )}`;

  //cors 이슈로 인해 href 방식으로 호출
  const loginNaver = () => {
    window.location.href = url;
    console.log('로그인');
  };

  return (
    <LoginBox>
      <div className="title-area">Welcome back!</div>
      <div>Upload Your Food!!</div>
      <Button onClick={loginNaver}>
        <img
          className="img"
          src="https://github.com/YoungGyo-00/cubox-croudsourcing-prototype-web/assets/89639470/f223da33-6d2a-45ef-b016-7d1aa2db7232"
        />
        Login with Naver
      </Button>
      <Footer>Are you new here? Join our service!</Footer>
    </LoginBox>
  );
};

export default NaverLogin;
