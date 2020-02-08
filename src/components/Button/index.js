import React, { Component } from 'react';
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

class Button extends Component {
  render() {
    return (
      <ButtonDefault>{this.props.children}</ButtonDefault>
    );
  }
}

export default Button;