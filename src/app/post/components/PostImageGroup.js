import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import Post_Box from 'src/assets/post/Post_Box.png';
import Post_Emoticon from 'src/assets/post/Post_Emoticon.png';
import Button from 'src/components/common/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ImageGroup = styled.image`
  .emoticon {
    width: 130px;
    height: 130px;
    position: absolute;
    margin-left: 45rem;
    margin-top: 4rem;
  }
  .box {
    width: 1200px;
    height: 350px;
    position: absolute;
    margin-left: 10rem;
  }
  .text {
    width: 420px;
    height: 120px;
    position: absolute;
    margin-top: 24.5rem;
    margin-left: 4rem;
  }
  .picture {
    width: 250px;
    height: 250px;
    position: absolute;
    margin-left: 40rem;
    margin-top: 2rem;
  }
  margin-top: 2rem;
`;

const PostImageGroup = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null); // 올린 파일을 저장하는 state
  const [s3ImageUrl, setS3ImageUrl] = useState(null);

  const handleClickFileInput = () => {
    fileInputRef.current.click();
  };

  // 업로드 파일이 바뀔 때마다 이벤트 발생
  const uploadProfile = (e) => {
    const fileList = e.target.files;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);

      setImageFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(imageFile);
    setImageFile('');
  };

  const upload = async () => {
    try {
      const formData = new FormData();

      formData.append('file', imageFile.file);

      console.log(imageFile.file);

      const response = await axios.post(
        'http://3.35.110.165:8080/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      setS3ImageUrl(response.data);
    } catch (error) {
      console.error('서버로 코드 전송 중 에러 발생:', error);
    } finally {
      console.log('업로드 코드 완료');
    }
  };

  const ranking = async () => {
    try {
      const response = await axios.post(
        'http://3.35.110.165:5000/evaluate_image',
        { image_url: s3ImageUrl },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      navigate('/rating', { response: response, image_url: s3ImageUrl });
    } catch (error) {
      console.error('서버로 코드 전송 중 에러 발생: ', error);
    } finally {
      console.log('이미지 분석 완료');
    }
  };
  useEffect(() => {
    console.log(s3ImageUrl);

    if (s3ImageUrl) {
      console.log('test', imageFile);
      navigate('/rating', { state: { imageFile } });
    }
  }, [s3ImageUrl]);

  const showImage = useMemo(() => {
    if (!imageFile || imageFile == null) {
      return (
        <>
          <img className="emoticon" src={Post_Emoticon} alt="Emoticon" />
          <Button
            color="gray"
            margin_top="13rem"
            margin_left="41rem"
            onClick={handleClickFileInput}
          >
            Choose Files
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={uploadProfile}
          ></input>
        </>
      );
    }
    return (
      <img
        className="picture"
        src={imageFile.thumbnail}
        alt={imageFile.type}
        onClick={handleClickFileInput}
      />
    );
  }, [imageFile]);

  return (
    <ImageGroup>
      <img className="box" src={Post_Box} alt="Box" />
      {showImage}
      <Button
        color="none"
        margin_top="18rem"
        margin_left="42.3rem"
        onClick={deleteFileImage}
      >
        Or Drop Files Here
      </Button>
      <Button
        color="gray"
        margin_top="24rem"
        margin_left="40.7rem"
        onClick={upload}
      >
        Get Feedback
      </Button>
    </ImageGroup>
  );
};

export default PostImageGroup;
