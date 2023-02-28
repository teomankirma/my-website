import { Navbar, Text, Link, Switch } from '@nextui-org/react';
import { useState, useRef } from 'react';
import SunIcon from './SunIcon';
import NightIcon from './NightIcon';

function Header() {
  // Navbar Collapse was not closing on clicking one item from the collapse menu. Solution is from: https://github.com/nextui-org/nextui/issues/752#issuecomment-1324264715

  const navbarToggleRef = useRef();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(
    window.location.href.split(`${window.location.origin}`)[1]
  );

  const menuItems = [
    { label: 'Home', link: '/#home' },
    { label: 'About Me', link: '/#aboutMe' },
    { label: 'Resume', link: '/#resume' },
    { label: 'Portfolio', link: '/#portfolio' },
    { label: 'Testimonial', link: '/#testimonial' },
    { label: 'Contact', link: '/#contact' }
  ];

  const HandleSideMenu = (link) => {
    setActiveMenu(link);
    isSideMenuOpen && navbarToggleRef.current.click();
  };

  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Text h4>Teoman Kirma</Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Switch color="success" iconOff={<SunIcon />} iconOn={<NightIcon />} />
        </Navbar.Item>
        <Navbar.Item>
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
          <Link color="success" href="https://www.linkedin.com/in/teoman-k%C4%B1rma-14ba31238/">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link>🇹🇷</Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link>🇬🇧</Link>
        </Navbar.Item>
        <Navbar.Toggle
          ref={navbarToggleRef}
          onChange={(isSelected) => setIsSideMenuOpen(isSelected)}
        />
        <Navbar.Collapse>
          {menuItems.map((item) => (
            <Navbar.CollapseItem
              key={item.label}
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

export default Header;
