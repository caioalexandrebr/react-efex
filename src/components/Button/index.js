import React from 'react';
import styled from 'styled-components';

const ButtonDefault = styled.button`
  color: #009748;
  font-size: 16px;
  padding: 15px 50px;
  border: 3px solid #009748;
  border-radius: 9999px;
  background: transparent;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
`;

const Button = ({ children, ...props }) => <ButtonDefault {...props} >{children}</ButtonDefault>;

export default Button;