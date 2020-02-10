import React from 'react';
import styled from 'styled-components';
import splash from '../../assets/img/splash.png';
import bgsoldier from '../../assets/img/bg-soldier.jpg';
import { Container, Row, Col } from '@gympass/yoga';

import Title from '../../components/Title';
import Button from '../../components/Button';

import { device } from '../Device';

const WrapperWhy = styled.section`
  position: relative;
  padding-top: 550px;
  padding-bottom: 50px;

  @media ${device.md} {
    padding: 50px 0;
  }
`;

const Box = styled.div`
  width: 100%;
  position: relative;
`;

const BoxImage = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  position: absolute;
  background: url(${bgsoldier});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #464646;

  @media ${device.md} {
    width: 60%;
    height: 100%;
  }
`;

const Splash = styled.div`
  top: 0;
  right: 0;
  width: 700px;
  height: 700px;
  position: absolute;
  background: url(${splash});
  background-size: 700px;
  transform: translateY(-50%);
  background-repeat: no-repeat;
  /* background-position: 10% 10%; */
`;

function SectionWhy() {
  return (
    <WrapperWhy>
      <BoxImage/>
      <Container>
        <Row>
          <Col xxs={12} md-start={9} md={4}>
            <Box>
              <Title>Lorem <span>ipsum</span></Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium turpis turpis. Nulla facilisi. Duis molestie mauris eu justo iaculis, eu placerat ante ultricies. Etiam et odio sit amet lacus sodales imperdiet sed nec felis. Sed venenatis augue eros, id blandit erat tempor id. Nulla lacinia purus vel augue accumsan placerat. Phasellus bibendum eros vel neque consectetur interdum. Pellentesque quis congue purus. Quisque scelerisque in eros id efficitur. Vestibulum at sagittis orci. Pellentesque tempus vehicula congue. Aliquam erat volutpat. Donec vel tincidunt lectus. Aenean sit amet faucibus arcu. Quisque posuere magna lacinia erat cursus, ac molestie sapien rhoncus. Etiam vitae velit eget turpis posuere finibus.
              </p>
              <Button>Lorem ipsum</Button>
              <Splash/>
            </Box>
          </Col>
        </Row>
      </Container>
    </WrapperWhy>
  );
}

export default SectionWhy;