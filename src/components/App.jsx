import Header from "./Header";
import AboutMe from "./AboutMe";
import Education from "./Education";
import MyExperiences from "./MyExperiences";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const TURKISH = {
    aboutMe: "Hakkımda",
    education: "Eğitimim",
    myExperiences: "Deneyimlerim",
    contactMe: "Bana Ulaşın",
    aboutMeText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Odio ut enim blandit volutpat maecenas.",
    myExperiencesText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Odio ut enim blandit volutpat maecenas.",
    myExperiencesText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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

  return (
    <div>
      <Header
        language={language}
        turkish={languageTurkish}
        english={languageEnglish}
      />
      <AboutMe language={language} />
      <Education language={language} />
      <MyExperiences language={language} />
      <ContactMe language={language} />
      <Footer />
    </div>
  );
}

export default App;
