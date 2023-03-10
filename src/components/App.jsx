import { useState } from 'react';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import useDarkMode from '@fisch0920/use-dark-mode';
import { TURKISH, ENGLISH } from '../language';
import Header from './Header';
import Home from './Home';
import KnowMeMore from './KnowMeMore';
import WhatIDo from './WhatIDo';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Testimonial from './Testimonial';
import GetInTouch from './GetInTouch';
import Footer from './Footer';

function App() {
  const lightTheme = createTheme({
    type: 'light'
  });

  const darkTheme = createTheme({
    type: 'dark'
  });

  const [language, setLanguage] = useState(ENGLISH);

  function languageTurkish() {
    setLanguage(TURKISH);
  }

  function languageEnglish() {
    setLanguage(ENGLISH);
  }

  const darkMode = useDarkMode(false);

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Header language={language} turkish={languageTurkish} english={languageEnglish} />
      <Home language={language} />
      <KnowMeMore language={language} />
      <WhatIDo language={language} />
      <Resume language={language} />
      <Portfolio language={language} />
      <Testimonial language={language} />
      <GetInTouch language={language} />
      <Footer language={language} />
    </NextUIProvider>
  );
}

export default App;
