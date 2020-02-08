import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '@gympass/yoga';

import Button from '../../components/Button';

const Section = styled.section`
  padding: 60px 0;
  background: #1a1a1a;
`;

const Form = styled.form`
  input, textarea {
    width: 100%;
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
      <Container fluid>
        <Row>
          <Col xxs={12} md={6}>
            olá mundo
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
                  <Button>Send</Button>
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