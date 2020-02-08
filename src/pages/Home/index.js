import React from 'react';
import { ThemeProvider } from '@gympass/yoga';

import SectionWhy from '../../components/SectionWhy';
import SectionContact from '../../components/SectionContact';

function Home() {
  return (
    <ThemeProvider>
      <SectionWhy/>
      <SectionContact/>
    </ThemeProvider>
  );
}

export default Home;