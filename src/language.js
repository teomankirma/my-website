import CV from './cv.pdf';
import Resume from './resume.pdf';

const dob = new Date('07/27/2002');
const diff_ms = Date.now() - dob.getTime();
const age_dt = new Date(diff_ms);

const age = Math.abs(age_dt.getUTCFullYear() - 1970);

const date = new Date().getFullYear();

const TURKISH = {
  /*------- Header -------*/
  name: 'Teoman Kırma',
  menuItemHome: 'Ana Ekran',
  menuItemAboutMe: 'Hakkımda',
  menuItemWhatIDo: 'Ne Yapıyorum',
  menuItemResume: 'Özgeçmiş',
  menuItemPortfolio: 'Portföy',
  menuItemTestimonial: 'Referans',
  menuItemContactMe: 'Bana Ulaşın',

  /*------- Home -------*/
  welcome: 'Hoş geldin',
  typewriter: ['Ben Teoman Kırma.', "Yazılım Mühendisi'yim.", "Frontend Developer'ım."],
  location: "İzmir, Türkiye'de yaşıyorum",
  hireMe: 'Beni İşe Alın',

  /*------- Know Me More -------*/
  knowMeMore: 'Beni Tanıyın',

  whoAmIFirst: 'Ben',
  whoAmISecond: "Frontend Developer'ım",
  aboutMe: `Merhaba, ismim Teoman. ${age} yaşındayım ve Nişantaşı Üniversitesi'nde Yazılım Mühendisliği bölümünde eğitimime devam etmekteyim. İzmir'de yaşıyorum. Basketbol oynamayı, gitar çalmayı ve oyun oynamayı seviyorum. Front-End Developer veya Full-Stack Developer olmayı hedefliyorum.`,
  myExperiences:
    "HTML, CSS, JavaScript vb. Front-End dilleri ve Framework'lerinde tecrübelerim var. Okulumdaki eğitimden kaynaklı Java, C#, Dart dillerinde de tecrübeliyim.",

  nameText: 'İsim: ',
  emailText: 'Email: ',
  email: 'teomankirma@gmail.com',
  ageText: 'Yaş: ',
  age: age,
  fromText: 'Konum: ',
  from: 'İzmir, Türkiye',

  downloadResume: "CV'mi İndir",
  resume: CV,

  experienceYear: '3+',
  experienceText: 'Yıl Deneyim',

  projectsNumber: '30+',
  projectsText: 'Tamamlanan Projeler',

  /*------- What I Do -------*/
  whatIDo: 'Ne Yapıyorum?',
  whatIDoName: 'Web Tasarım & Geliştirme',
  whatIDoText: 'Sizin istediğiniz websitelerini tasarlayabilirim ve geliştirebilirim.',

  /*------- Resume -------*/
  resumeHeader: 'Özgeçmiş',
  myEducation: 'Eğitimim',

  primarySchool: 'Abdi İbrahim İlkokulu',
  primarySchoolBadge: '2008-2012',
  primarySchoolText: '',

  middleSchool: 'İstanbul Akademi Koleji',
  middleSchoolBadge: '2012-2016',
  middleSchoolText: '',

  highSchool: 'Emlakbank Süleyman Demirel Anadolu Lisesi',
  highSchoolBadge: '2016-2020',
  highSchoolText: '',

  university: 'Nişantaşı Üniversitesi 3/4',
  universityBadge: '2020-',
  universityText: '',

  myExperience: 'Tecrübem',

  myExperienceName: 'Jr. Frontend Developer',
  myExperienceBadge: '2023-',
  myExperienceText: '',

  mySkills: 'Yeteneklerim',

  resumeProgressWebDesign: 'Web Design',
  resumeProgressWebDesignValue: 60,
  resumeProgressJavaScript: 'JavaScript',
  resumeProgressJavaScriptValue: 75,
  resumeProgressReactJS: 'React',
  resumeProgressReactJSValue: 50,
  resumeProgressHTML: 'HTML',
  resumeProgressHTMLValue: 80,
  resumeProgressCSS: 'CSS',
  resumeProgressCSSValue: 60,
  resumeProgressBootstrap: 'Bootstrap',
  resumeProgressBootstrapValue: 75,

  /*------- Portfolio -------*/
  myWork: 'Çalışmalarım',
  projectInfoText: 'Proje Hakkında',
  projectDetailsText: 'Proje Detayı',
  clientText: 'Müşteri:',
  technologiesText: 'Teknolojiler:',
  industryText: 'Endüstri:',
  dateText: 'Tarih:',

  atmProjectTitle: 'ATM',
  atmProjectInfo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
  atmClient: '',
  atmTechnologies: '',
  atmIndustry: '',
  atmDate: '',

  blogWebsiteProjectTitle: 'Blog Website',
  blogWebsiteProjectInfo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
  blogWebsiteClient: '',
  blogWebsiteTechnologies: '',
  blogWebsiteIndustry: '',
  blogWebsiteDate: '',

  keeperProjectTitle: 'Keeper',
  keeperProjectInfo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
  keeperClient: '',
  keeperTechnologies: '',
  keeperIndustry: '',
  keeperDate: '',

  myWebsiteProjectTitle: 'My Website',
  myWebsiteProjectInfo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
  myWebsiteClient: '',
  myWebsiteTechnologies: '',
  myWebsiteIndustry: '',
  myWebsiteDate: '',

  weatherProjectTitle: 'Weather',
  weatherProjectInfo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
  weatherClient: '',
  weatherTechnologies: '',
  weatherIndustry: '',
  weatherDate: '',

  /*------- Testimonial -------*/
  clientSpeak: 'Müşteri Yorumları',

  client1Name: 'Jay Shah',
  client1Tag: "Icomatic Pvt Ltd'nin kurucusu",
  client1Comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  client1Stars: '⭐️⭐️⭐️⭐️⭐️',

  client2Name: 'Patrick Cary',
  client2Tag: "ABD'den Freelancer",
  client2Comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  client2Stars: '⭐️⭐️⭐️⭐️⭐️',

  client3Name: 'Chris Tom',
  client3Tag: "İngiltere'den kullanıcı",
  client3Comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  client3Stars: '⭐️⭐️⭐️⭐️⭐️',

  client4Name: 'Dennis Jacques',
  client4Tag: "ABD'den kullanıcı",
  client4Comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  client4Stars: '⭐️⭐️⭐️⭐️⭐️',

  /*------- Get In Touch -------*/
  getInTouch: 'İletişime Geçin',
  contact: 'İLETİŞİM',
  phoneNumber: '+90 534 216 6935',
  followMe: 'TAKİP EDİN',

  sendMeANote: 'BANA NOT GÖNDERİN',
  fullNameText: 'İsim Soyisim',
  getInTouchEmailText: 'Email',
  messageText: 'Mesaj',
  sendMessageText: 'Mesajı Gönder',

  alertSuccessText: 'Başarıyla gönderildi!',
  alertErrorText: 'Hay aksi, bir şeyler yanlış gitti!',

  /*------- Footer -------*/
  footer: `Telif Hakkı © ${date} Teoman Kırma. Tüm Hakları Saklıdır.`
};

const ENGLISH = {
  /*------- Header -------*/
  name: 'Teoman Kirma',
  menuItemHome: 'Home',
  menuItemAboutMe: 'About Me',
  menuItemWhatIDo: 'What I Do',
  menuItemResume: 'Resume',
  menuItemPortfolio: 'Portfolio',
  menuItemTestimonial: 'Testimonial',
  menuItemContactMe: 'Contact Me',

  /*------- Home -------*/
  welcome: 'Welcome',
  typewriter: ["I'm Teoman Kirma.", "I'm a Software Engineer.", "I'm a Frontend Developer."],
  location: 'based in Istanbul, Turkiye.',
  hireMe: 'Hire Me',

  /*------- Know Me More -------*/
  knowMeMore: 'Know Me More',

  whoAmIFirst: "I'm",
  whoAmISecond: 'a Frontend Developer.',
  aboutMe:
    "Hello, my name is Teoman. I'm 20 years old and I'm studying Software Engineering at Nisantasi University. I live in Istanbul. I love playing basketball, playing the guitar, and playing video games. I aim to be a Frontend Developer or a Full-Stack Developer.",
  myExperiences:
    'I have experience with front-end languages and frameworks such as HTML, CSS, and JavaScript. Additionally, I have experience in Java, C#, and Dart, which I acquired through my education at school.',

  nameText: 'Name: ',
  emailText: 'Email: ',
  email: 'teomankirma@gmail.com',
  ageText: 'Age: ',
  age: age,
  fromText: 'From: ',
  from: 'Istanbul, Turkiye',

  downloadResume: 'Download Resume',
  resume: Resume,

  experienceYear: '3+',
  experienceText: 'Years Experience',

  projectsNumber: '30+',
  projectsText: 'Projects Done',

  /*------- What I Do -------*/
  whatIDo: 'What I Do?',
  whatIDoName: 'Web Design & Develop',
  whatIDoText: 'I can design and develop the websites that you want.',

  /*------- Resume -------*/
  resumeHeader: 'Resume',
  myEducation: 'My Education',

  primarySchool: 'Abdi Ibrahim Primary School',
  primarySchoolBadge: '2008-2012',
  primaryText: '',

  middleSchool: 'Istanbul Academy College Middle School',
  middleSchoolBadge: '2012-2016',
  middleSchoolText: '',

  highSchool: 'Emlakbank Suleyman Demirel High School',
  highSchoolBadge: '2016-2020',
  highSchoolText: '',

  university: 'Nisantasi University 3/4',
  universityBadge: '2020-',
  universityText: '',

  myExperience: 'My Experience',

  myExperienceName: 'Jr. Frontend Developer',
  myExperienceBadge: '2023-',
  myExperienceText: '',

  mySkills: 'My Skills',

  resumeProgressWebDesign: 'Web Design',
  resumeProgressWebDesignValue: 60,
  resumeProgressJavaScript: 'JavaScript',
  resumeProgressJavaScriptValue: 75,
  resumeProgressReactJS: 'React',
  resumeProgressReactJSValue: 50,
  resumeProgressHTML: 'HTML',
  resumeProgressHTMLValue: 80,
  resumeProgressCSS: 'CSS',
  resumeProgressCSSValue: 60,
  resumeProgressBootstrap: 'Bootstrap',
  resumeProgressBootstrapValue: 75,

  /*------- Portfolio -------*/
  myWork: 'My Work',
  projectInfoText: 'Project Info',
  projectDetailsText: 'Project Details',
  clientText: 'Client:',
  technologiesText: 'Technologies:',
  industryText: 'Industry:',
  dateText: 'Date:',

  atmProjectTitle: 'ATM',
  atmProjectInfo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
  atmClient: '',
  atmTechnologies: '',
  atmIndustry: '',
  atmDate: '',

  blogWebsiteProjectTitle: 'Blog Website',
  blogWebsiteProjectInfo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
  blogWebsiteClient: '',
  blogWebsiteTechnologies: '',
  blogWebsiteIndustry: '',
  blogWebsiteDate: '',

  keeperProjectTitle: 'Keeper',
  keeperProjectInfo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
  keeperClient: '',
  keeperTechnologies: '',
  keeperIndustry: '',
  keeperDate: '',

  myWebsiteProjectTitle: 'My Website',
  myWebsiteProjectInfo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
  myWebsiteClient: '',
  myWebsiteTechnologies: '',
  myWebsiteIndustry: '',
  myWebsiteDate: '',

  weatherProjectTitle: 'Weather',
  weatherProjectInfo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
  weatherClient: '',
  weatherTechnologies: '',
  weatherIndustry: '',
  weatherDate: '',

  /*------- Testimonial -------*/
  clientSpeak: 'Client Speak',

  client1Name: 'Jay Shah',
  client1Tag: 'Founder at Icomatic Pvt Ltd',
  client1Comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  client1Stars: '⭐️⭐️⭐️⭐️⭐️',

  client2Name: 'Patrick Cary',
  client2Tag: 'Freelancer from USA',
  client2Comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  client2Stars: '⭐️⭐️⭐️⭐️⭐️',

  client3Name: 'Chris Tom',
  client3Tag: 'User from UK',
  client3Comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  client3Stars: '⭐️⭐️⭐️⭐️⭐️',

  client4Name: 'Dennis Jacques',
  client4Tag: 'User from USA',
  client4Comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  client4Stars: '⭐️⭐️⭐️⭐️⭐️',

  /*------- Get In Touch -------*/
  getInTouch: 'Get In Touch',
  contact: 'CONTACT',
  phoneNumber: '+90 534 216 6935',
  followMe: 'FOLLOW ME',

  sendMeANote: 'SEND ME A NOTE',
  fullNameText: 'Full Name',
  getInTouchEmailText: 'Email',
  messageText: 'Message',
  sendMessageText: 'Send Message',

  alertSuccessText: 'Successfuly sent!',
  alertErrorText: 'Oops, something went wrong!',

  /*------- Footer -------*/
  footer: `Copyright © ${date} Teoman Kirma. All Rights Reserved.`
};

export { TURKISH, ENGLISH };
