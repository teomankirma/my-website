import Header from "./Header";
import AboutMe from "./AboutMe";
import Education from "./Education";
import MyExperiences from "./MyExperiences";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import { useState } from "react";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import Home from "./Home";
import WhatIDo from "./WhatIDo";

function App() {
  const TURKISH = {
    aboutMe: "Hakkımda",
    education: "Eğitimim",
    myExperiences: "Deneyimlerim",
    contactMe: "Bana Ulaşın",
    aboutMeText:
      "Merhaba, ismim Teoman. 20 yaşındayım ve Nişantaşı Üniversitesi'nde Yazılım Mühendisliği bölümünde eğitimime devam etmekteyim. İzmir'de yaşıyorum. Basketbol oynamayı, gitar çalmayı ve oyun oynamayı seviyorum. Front-End Developer veya Full-Stack Developer olmayı hedefliyorum.",
    myExperiencesText:
      "HTML, CSS, JavaScript vb. Front-End dilleri ve Framework'lerinde tecrübelerim var. Okulumdaki eğitimden kaynaklı Java, C#, Dart dillerinde de tecrübeliyim.",
    firstSchool: "Abdi İbrahim İlkokulu",
    middleSchool: "İstanbul Akademi Koleji",
    highSchool: "Emlakbank Süleyman Demirel Anadolu Lisesi",
    university: "Nişantaşı Üniversitesi 3/4",
  };

  const ENGLISH = {
    aboutMe: "About Me",
    education: "Education",
    myExperiences: "My Experiences",
    contactMe: "Contact Me",
    aboutMeText:
      "Hello, my name is Teoman. I'm 20 years old and I'm studying Software Engineering at Nisantasi University. I live in Izmir. I love playing basketball, playing guitar and playing video games. I aim to be Front-End Developer or Full-Stack Developer.",
    myExperiencesText:
      "I have experiences with Front-End languages and frameworks such as HTML, CSS, Javascript etc. I have experience in Java, C#, Dart languages, which is due to the education at my school.",
    firstSchool: "Abdi Ibrahim First School",
    middleSchool: "Istanbul Academy College Middle School",
    highSchool: "Emlakbank Suleyman Demirel High School",
    university: "Nisantasi University 3/4",
  };

  const [language, setLanguage] = useState(ENGLISH);

  function languageTurkish(e) {
    e.preventDefault();
    setLanguage(TURKISH);
  }

  function languageEnglish(e) {
    e.preventDefault();
    setLanguage(ENGLISH);
  }

  const lightTheme = createTheme({
    type: "light",
  });

  const darkTheme = createTheme({
    type: "dark",
  });

  return (
    <NextUIProvider theme={lightTheme}>
      <Header
        language={language}
        turkish={languageTurkish}
        english={languageEnglish}
      />
      <Home />
      <AboutMe language={language} />
      <WhatIDo />
      {/* 
      <Education language={language} />
      <MyExperiences language={language} />
      <ContactMe language={language} />
      <Footer /> */}
    </NextUIProvider>
  );
}

export default App;
