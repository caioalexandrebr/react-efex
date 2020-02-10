import React from 'react';
import styled from 'styled-components';

const Content = styled.p`
  font-family: sans-serif;
  color: ${props => props.inverted ? "white" : "black"};

  span {
    color: #009748;
  }
`;

const Text = ({ children, ...props }) => <Content {...props} >{children}</Content>;

export default Text;