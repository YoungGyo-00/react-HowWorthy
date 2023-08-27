import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem; // 위아래, 왼쪽오른쪽
  color: black;
  outline: none;
  cursor: pointer;

  background-color: ${palette.yellow[0]};
  &:hover {
    background-color: ${palette.gray[0]};
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
