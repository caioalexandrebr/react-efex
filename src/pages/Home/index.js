import React from 'react';
import { ThemeProvider } from '@gympass/yoga';

import Nav from '../../components/Nav';
import SectionWhy from '../../components/SectionWhy';
import SectionContact from '../../components/SectionContact';
import Footer from '../../components/Footer';

function Home() {
  return (
    <ThemeProvider>
      <Nav/>
      <SectionWhy/>
      <SectionContact/>
      <Footer/>
    </ThemeProvider>
  );
}

export default Home;