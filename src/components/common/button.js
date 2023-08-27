import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-wight: bold;
  padding: 0.25rem 1rem;
  color: black;
  outline: none;
  cursor: pointer;

  background: ${palette.yellow[0]};
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
