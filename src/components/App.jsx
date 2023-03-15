import { createContext, useState } from 'react';
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

export const Context = createContext();

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
    <Context.Provider value={{ language, languageTurkish, languageEnglish }}>
      <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <Header />
        <Home />
        <KnowMeMore />
        <WhatIDo />
        <Resume />
        <Portfolio />
        <Testimonial />
        <GetInTouch />
        <Footer />
      </NextUIProvider>
    </Context.Provider>
  );
}

export default App;
