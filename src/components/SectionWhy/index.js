import React from 'react';
import styled from 'styled-components';
import splash from '../../assets/img/splash.png';
import bgsoldier from '../../assets/img/bg-soldier.jpg';
import { Container, Row, Col } from '@gympass/yoga';

import Title from '../../components/Title';
import Button from '../../components/Button';

const Box = styled.div`
  width: 100%;
  position: relative;
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

const Img = styled.img`
  width: 100%;
  height: auto;
`;

function SectionWhy() {
  return (
    <Container fluid>
      <Row>
        <Col xxs={12} md={6}>
          <Box>
            <Img src={bgsoldier} />
          </Box>
        </Col>
        <Col xxs={12} md={6}>
          <Box>
            <Splash/>
            <Title>Lorem <span>ipsum</span></Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium turpis turpis. Nulla facilisi. Duis molestie mauris eu justo iaculis, eu placerat ante ultricies. Etiam et odio sit amet lacus sodales imperdiet sed nec felis. Sed venenatis augue eros, id blandit erat tempor id. Nulla lacinia purus vel augue accumsan placerat. Phasellus bibendum eros vel neque consectetur interdum. Pellentesque quis congue purus. Quisque scelerisque in eros id efficitur. Vestibulum at sagittis orci. Pellentesque tempus vehicula congue. Aliquam erat volutpat. Donec vel tincidunt lectus. Aenean sit amet faucibus arcu. Quisque posuere magna lacinia erat cursus, ac molestie sapien rhoncus. Etiam vitae velit eget turpis posuere finibus.
            </p>
            <Button>Lorem ipsum</Button>
          </Box>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionWhy;