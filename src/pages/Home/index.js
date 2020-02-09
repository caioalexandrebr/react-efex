import React from 'react';
import { ThemeProvider } from '@gympass/yoga';

import Nav from '../../components/Nav';
import SectionWhy from '../../components/SectionWhy';
import SectionContact from '../../components/SectionContact';

function Home() {
  return (
    <ThemeProvider>
      <Nav/>
      <SectionWhy/>
      <SectionContact/>
    </ThemeProvider>
  );
}

export default Home;