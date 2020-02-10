import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '@gympass/yoga';

import Text from '../Text';
import Link from '../Link';
import Title from '../Title';
import Button from '../Button';

const Section = styled.section`
  padding: 60px 0;
  background: #1a1a1a;
`;

const Form = styled.form`
  input, textarea {
    width: 100%;
    outline: none;
    color: #898989;
    font-size: 16px;
    padding: 15px 20px;
    margin-bottom: 30px;
    border-radius: 9999px;
    box-sizing: border-box; 
    background: transparent;
    border: 1px solid #898989;
    font-family: 'Oswald', sans-serif;
  }

  textarea {
    height: 200px;
    border-radius: 38px;
  }
`;

function SectionContact() {
  return (
    <Section>
      <Container>
        <Row>
          <Col xxs={12} md={6}>
            <Title inverted>Lorem <span>ipsum</span></Title>
            <Text inverted>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget lectus ullamcorper, sollicitudin nisi et.</Text>
            <Text inverted>Mauris et sapien mauris. Vivamus suscipit libero a sem maximus, quis faucibus est facilisis. Aenean nisi odio, finibus sed mauris sed, rhoncus pulvinar ante. Maecenas feugiat ullamcorper ex sed dapibus. Nulla ultricies ante sed blandit blandit. Quisque sit amet libero ligula.</Text>
            <Link mb={5} block href="tel:+5511982004537">+55 (11) 9 8200-4537</Link>
            <Link mb={15} block href="mailto: efex.team@hotmail.com">efex.team@hotmail.com</Link>
          </Col>
          <Col xxs={12} md={6}>
            <Form>
              <Row>
                <Col xxs={12} md={4}>
                  <input placeholder="Name:" type="text" name="name" />
                </Col>
                <Col xxs={12} md={4}>
                  <input placeholder="E-mail:" type="text" name="name" />
                </Col>
                <Col xxs={12} md={4}>
                  <input placeholder="Phone:" type="text" name="name" />
                </Col>
                <Col xxs={12}>
                  <textarea></textarea>
                </Col>
                <Col xxs={12}>
                  <Button inverted>Send</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default SectionContact;