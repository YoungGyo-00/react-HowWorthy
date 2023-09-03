import React from 'react';
import styled, { css } from 'styled-components';
import palette from 'src/utils/palette';

const StyledButton = styled.button`
  ${(props) => {
    switch (props.color) {
      case 'gray':
        return css`
          border: none;
          border-radius: 1.7rem;
          font-size: 2rem;
          font-weight: 400;
          padding: 0.7rem 2rem; // 위아래, 왼쪽오른쪽
          color: ${palette.white[0]};
          outline: none;
          cursor: pointer;
          margin-top: ${props.margin_top};
          margin-left: ${props.margin_left};
          position: absolute;

          background-color: ${palette.gray[0]};
          &:hover {
            background-color: ${palette.yellow[0]};
          }
        `;

      case 'none':
        return css`
          font-size: 1.5rem;
          font-weight: 400;
          color: ${palette.gray[0]};
          outline: none;
          cursor: pointer;
          margin-top: ${props.margin_top};
          margin-left: ${props.margin_left};
          position: absolute;
        `;

      default:
        return css`
          border: none;
          font-size: 1.5rem;
          font-weight: bold;
          padding: 0.25rem 1rem; // 위아래, 왼쪽오른쪽
          color: black;
          outline: none;
          cursor: pointer;
          border-radius: 10px;
          margin-top: ${props.margin_top};

          background-color: ${palette.yellow[0]};
          &:hover {
            background-color: ${palette.gray[0]};
          }
        `;
    }
  }}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
