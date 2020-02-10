import React from 'react';
import styled from 'styled-components';
import { device } from '../Device';

const FooterDefault = styled.footer`
  padding: 20px 0;
  text-align: center;

  @media ${device.md} {
    padding: 50px 0;
  }
`;

const Footer = () => <FooterDefault><p>Copyright © 2020 EFEX Team</p></FooterDefault>;

export default Footer;