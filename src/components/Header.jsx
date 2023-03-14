import { Navbar, Link, Switch } from '@nextui-org/react';
import useDarkMode from '@fisch0920/use-dark-mode';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SunIcon from './SunIcon';
import NightIcon from './NightIcon';

function Header(props) {
  // Navbar Collapse was not closing on clicking one item from the collapse menu. Solution is from: https://github.com/nextui-org/nextui/issues/752#issuecomment-1324264715

  const navbarToggleRef = useRef();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(
    window.location.href.split(`${window.location.origin}`)[1]
  );

  const menuItems = [
    { label: props.language.menuItemHome, link: '/#home', key: '1' },
    {
      label: props.language.menuItemAboutMe,
      link: '/#aboutMe',
      key: '2'
    },
    {
      label: props.language.menuItemWhatIDo,
      link: '/#whatIDo',
      key: '3'
    },
    {
      label: props.language.menuItemResume,
      link: '/#resume',
      key: '4'
    },
    {
      label: props.language.menuItemPortfolio,
      link: '/#portfolio',
      key: '5'
    },
    {
      label: props.language.menuItemTestimonial,
      link: '/#testimonial',
      key: '6'
    },
    {
      label: props.language.menuItemContactMe,
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
      <Navbar.Brand style={{ fontWeight: 'bold' }}>{props.language.name}</Navbar.Brand>
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
        {/* <Navbar.Item>
          <Link color="success" href="https://twitter.com/teomankirma">
            <i className="fa-brands fa-twitter"></i>
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link color="success" href="https://github.com/teomankirma">
            <i className="fa-brands fa-github"></i>
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link color="success" href="https://www.linkedin.com/in/teomankirma/">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </Navbar.Item> */}
        <Navbar.Item>
          <Link onClick={props.turkish}>🇹🇷</Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link onClick={props.english}>🇬🇧</Link>
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
