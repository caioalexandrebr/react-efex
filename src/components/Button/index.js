import React from 'react';
import styled from 'styled-components';

const ButtonDefault = styled.button`
  color: #009748;
  font-size: 16px;
  padding: 15px 50px;
  transition: all 0.1s;
  border-radius: 9999px;
  background: transparent;
  border: 3px solid #009748;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;

  &:hover {
    color: white;
    background: #009748;
  }
`;

const Button = ({ children, ...props }) => <ButtonDefault {...props} >{children}</ButtonDefault>;

export default Button;