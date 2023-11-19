import React, { useMemo } from 'react';
import styled from 'styled-components';
import Rating_Box from 'src/assets/rating/Rating_Box.png';
import Rating_Picture from 'src/assets/rating/Rating_Picture.png';
import styles from './chart.css';
import Button from 'src/components/common/Button';

import { useLocation } from 'react-router-dom';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const ImageGroup = styled.image`
  .picture {
    width: 480px;
    height: 480px;
    position: absolute;
    margin-left: 4rem;
  }
  .box {
    width: 450px;
    height: 400px;
    position: absolute;
    margin-top: 2rem;
    margin-left: 36rem;
    z-index: 2;
  }
  margin-top: 3rem;
  margin-left: 10rem;
`;

const TextGroup = styled.div`
  position: absolute;
  margin-top: 28rem;
  margin-left: 58.5rem;
  z-index: 4;
`;

const ChartStyle = styled.div`
  width: 400px;
  height: 300px;
  position: absolute;
  z-index: 99;
  margin-top: 8rem;
  margin-left: 52rem;
`;

const option = {
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 10,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const feedback = ['명도를 높여주세요!', '채도를 높여주세요!'];

export const data = {
  labels: ['ninth', 'saturation', 'brightness', 'clarity', 'color temperature'],
  datasets: [
    {
      label: 'rating',
      data: [8, 4, 4, 6, 7],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const RatingImageGroup = () => {
  const { state } = useLocation();

  const ranking = useMemo(() => {
    console.log(state);
  }, state);

  return (
    <>
      <ImageGroup>
        <img className="picture" src={Rating_Picture} alt="Picture" />
        <img className="box" src={Rating_Box} alt="Box" />
        <img
          className="picture"
          src={state.imageFile.thumbnail}
          alt={state.imageFile.type}
        />

        <Button
          color="yellow"
          margin_left="26rem"
          margin_top="34rem"
          onClick={() => window.open('https://www.instagram.com/')}
        >
          Share on Social Media
        </Button>
      </ImageGroup>
      <ChartStyle>
        <Radar className={styles.chart} data={data} options={option} />
      </ChartStyle>
      <TextGroup>
        <div>{feedback[0]}</div>
        <div>{feedback[1]}</div>
      </TextGroup>
    </>
  );
};

export default RatingImageGroup;
