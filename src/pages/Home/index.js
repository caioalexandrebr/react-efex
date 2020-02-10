import React from 'react';
import { ThemeProvider } from '@gympass/yoga';

import Header from '../../components/Header';
import SectionWhy from '../../components/SectionWhy';
import SectionContact from '../../components/SectionContact';
import Footer from '../../components/Footer';

function Home() {
  return (
    <ThemeProvider>
      <Header/>
      <SectionWhy/>
      <SectionContact/>
      <Footer/>
    </ThemeProvider>
  );
}

export default Home;