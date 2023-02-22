import { Navbar, Text, Link } from "@nextui-org/react";

function Header(props) {
  return (
    <Navbar>
      <Navbar.Brand>
        <Text h4>Teoman Kirma</Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Link href="https://twitter.com/teomankirma">
            <i class="fa-brands fa-twitter"></i>
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link href="https://github.com/teomankirma">
            <i class="fa-brands fa-github"></i>
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link href="https://www.linkedin.com/in/teoman-k%C4%B1rma-14ba31238/">
            <i class="fa-brands fa-linkedin"></i>
          </Link>
        </Navbar.Item>
        <Navbar.Toggle showIn="sm" />
        <Navbar.Collapse css={{ color: "$myColor" }}>
          <Navbar.CollapseItem>Home</Navbar.CollapseItem>
          <Navbar.CollapseItem>About Me</Navbar.CollapseItem>
          <Navbar.CollapseItem>What I Do</Navbar.CollapseItem>
          <Navbar.CollapseItem>Resume</Navbar.CollapseItem>
          <Navbar.CollapseItem>Portfolio</Navbar.CollapseItem>
          <Navbar.CollapseItem>Testimonial</Navbar.CollapseItem>
          <Navbar.CollapseItem>Contact</Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar.Content>
    </Navbar>
  );
}

export default Header;
