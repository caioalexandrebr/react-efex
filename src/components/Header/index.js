import styled from 'styled-components';
import React, { Component } from 'react';
import { Container } from '@gympass/yoga';

import Nav from '../Nav';

const HeaderDefault = styled.header`
  width: 100%;
  height: 95vh;
  background: #1a1a1a;
`;

class Header extends Component {
  render() {
    return (
      <>
        <Nav/>
        <Container fluid>
          <HeaderDefault/>
        </Container>
      </>
    );
  }
}

export default Header;