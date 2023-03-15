import { Navbar, Link, Switch } from '@nextui-org/react';
import useDarkMode from '@fisch0920/use-dark-mode';
import { useState, useRef, useContext } from 'react';
import { Context } from './App';
import PropTypes from 'prop-types';
import SunIcon from './SunIcon';
import NightIcon from './NightIcon';

function Header() {
  // Navbar Collapse was not closing on clicking one item from the collapse menu. Solution is from: https://github.com/nextui-org/nextui/issues/752#issuecomment-1324264715

  const context = useContext(Context);

  const navbarToggleRef = useRef();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(
    window.location.href.split(`${window.location.origin}`)[1]
  );

  const menuItems = [
    { label: context.language.menuItemHome, link: '/#home', key: '1' },
    {
      label: context.language.menuItemAboutMe,
      link: '/#aboutMe',
      key: '2'
    },
    {
      label: context.language.menuItemWhatIDo,
      link: '/#whatIDo',
      key: '3'
    },
    {
      label: context.language.menuItemResume,
      link: '/#resume',
      key: '4'
    },
    {
      label: context.language.menuItemPortfolio,
      link: '/#portfolio',
      key: '5'
    },
    {
      label: context.language.menuItemTestimonial,
      link: '/#testimonial',
      key: '6'
    },
    {
      label: context.language.menuItemContactMe,
      link: '/#contactMe',
      key: '7'
    }
  ];

  const HandleSideMenu = (link) => {
    setActiveMenu(link);
    isSideMenuOpen && navbarToggleRef.current.click();
  };

  const darkMode = useDarkMode(false);

  return (
    <Navbar variant="sticky">
      <Navbar.Brand style={{ fontWeight: 'bold' }}>{context.language.name}</Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Switch
            color="success"
            iconOff={<SunIcon />}
            iconOn={<NightIcon />}
            checked={darkMode.value}
            onChange={() => darkMode.toggle()}
          />
        </Navbar.Item>
        <Navbar.Item>
          <Link onClick={context.languageTurkish}>🇹🇷</Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link onClick={context.languageEnglish}>🇬🇧</Link>
        </Navbar.Item>
        <Navbar.Toggle
          ref={navbarToggleRef}
          onChange={(isSelected) => setIsSideMenuOpen(isSelected)}
        />
        <Navbar.Collapse>
          {menuItems.map((item) => (
            <Navbar.CollapseItem
              key={item.key}
              isActive={item.link === activeMenu}
              activeColor="success">
              <Link href={item.link} color="inherit" onClick={() => HandleSideMenu(item.link)}>
                {item.label}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar.Content>
    </Navbar>
  );
}

Header.propTypes = {
  light: PropTypes.func,
  dark: PropTypes.func,
  language: PropTypes.object,
  turkish: PropTypes.func,
  english: PropTypes.func
};

export default Header;
