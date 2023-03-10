import CV from './cv.pdf';
import Resume from './resume.pdf';

const dob = new Date('07/27/2002');
const diff_ms = Date.now() - dob.getTime();
const age_dt = new Date(diff_ms);

const age = Math.abs(age_dt.getUTCFullYear() - 1970);

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

  firstSchool: 'Abdi İbrahim İlkokulu',
  middleSchool: 'İstanbul Akademi Koleji',
  highSchool: 'Emlakbank Süleyman Demirel Anadolu Lisesi',
  university: 'Nişantaşı Üniversitesi 3/4'
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

  firstSchool: 'Abdi Ibrahim First School',
  middleSchool: 'Istanbul Academy College Middle School',
  highSchool: 'Emlakbank Suleyman Demirel High School',
  university: 'Nisantasi University 3/4'
};

export { TURKISH, ENGLISH };
