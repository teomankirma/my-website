import HeaderItems from "./HeaderItems";
import Languages from "./Languages";

function Header() {
  return (
    <nav
      id="navbar-customized"
      className="navbar navbar-expand-lg navbar-custom"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon text-info"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#aboutMe">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#myExperiences">
                My Experiences
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#contactMe">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

{
  /* <div className="header">
<Languages />
<HeaderItems />
</div> */
}
