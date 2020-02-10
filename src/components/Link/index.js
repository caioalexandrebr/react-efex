import React from 'react';
import styled from 'styled-components';

const Content = styled.a`
  color: #009748;
  margin-bottom: ${props => props.mb + 'px' || "0"};
  display: ${props => props.block? "block" : "inline"};
`;

const Link = ({ children, ...props }) => <Content {...props} >{children}</Content>;

export default Link;