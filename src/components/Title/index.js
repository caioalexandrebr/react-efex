import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.h3`
  font-size: 40px;
  font-weight: 100;
  text-transform: uppercase;
  color: ${props => props.primary ? "white" : "black"};

  span {
    color: #009748;
  }
`;

class Title extends Component {
  render() {
    return (
      <Text>{this.props.children}</Text>
    );
  }
}

export default Title;