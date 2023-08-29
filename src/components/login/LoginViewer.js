import React from 'react';
import styled from 'styled-components';
import palette from 'src/styles/palette';
import Login_Picture1 from '../../assets/login/Login_Picture1.png';
import Login_Picture2 from '../../assets/login/Login_Picture2.png';
import Login_Star1 from '../../assets/login/Login_Star1.png';
import Login_Star2 from '../../assets/login/Login_Star2.png';

const LoginViewerBlock = styled.div`
  .title {
    margin-top: 15vh;
    font-weight: 600;
    font-size: 10vh;
  }
  .content {
    margin-top: 3vh;
    font-size: 4vh;
  }
  display: flex;
  justify-content: flex-start;
  color: ${palette.black[0]};
  text-align: left;
  position: relative;
  width: fit-content;
  flex-direction: column;
`;

const ImageGroup = styled.image`
  .picture1 {
    height: 23vh;
    position: absolute;
    border-radius: 2rem;
    margin-top: 7vh;
  }
  .picture2 {
    height: 23vh;
    position: absolute;
    border-radius: 2rem;
    margin-left: 45vh;
    margin-top: 17vh;
  }
  .star1 {
    height: 20vh;
    position: absolute;
    margin-left: 23vh;
  }
  .star2 {
    height: 20vh;
    position: absolute;
    margin-left: 7vh;
    margin-top: 30vh;
  }
  margin-top: 2vh;
`;

const LoginViewer = () => {
  return (
    <LoginViewerBlock>
      <div className="title">How Worthy?</div>
      <div className="content">
        Upload your food picture and
        <br />
        See how <b>Insta-worthy</b> it is!
      </div>
      <ImageGroup>
        <img className="picture1" src={Login_Picture1} alt="Picture1" />
        <img className="picture2" src={Login_Picture2} alt="Picture2" />
        <img className="star1" src={Login_Star1} alt="Star1" />
        <img className="star2" src={Login_Star2} alt="Star2" />
      </ImageGroup>
    </LoginViewerBlock>
  );
};

export default LoginViewer;
