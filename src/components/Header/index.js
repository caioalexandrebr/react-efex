import styled from 'styled-components';
import React, { Component } from 'react';
import { Container, Row, Col } from '@gympass/yoga';

import Nav from '../Nav';
import Title from '../Title';
import Button from '../Button';
import bgheader from '../../assets/img/bg-header.jpg';

const HeaderDefault = styled.header`
  width: 100%;
  height: 95vh;
  position: relative;
  background: url(${bgheader});
  background-position: top center;
  background-repeat: no-repeat;
  background-color: #464646;
  background-size: cover;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(26,26,26,0.2) 0%, rgba(26,26,26,0.2) 30%, rgba(26,26,26,1) 80%, rgba(26,26,26,1) 100%);
  position: absolute;
`;

class Header extends Component {
  render() {
    return (
      <>
        <Nav/>
        <HeaderDefault>
          <Overlay/>
          <Container>
            <Row>
              <Col xxs={12}>
                <Title inverted>Lorem ipsum</Title>
                <Title><span>dolor sit amet</span></Title>
                <Title inverted>Mauris et sapien</Title>
                <Button>Lorem ipsum</Button>
              </Col>
            </Row>
          </Container>
        </HeaderDefault>
      </>
    );
  }
}

export default Header;