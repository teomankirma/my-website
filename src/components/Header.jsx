function Header(props) {
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
                {props.language.aboutMe}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#education">
                {props.language.education}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#myExperiences">
                {props.language.myExperiences}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#contactMe">
                {props.language.contactMe}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#turkce"
                onClick={props.turkish}
              >
                🇹🇷 Türkçe
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#english"
                onClick={props.english}
              >
                🇬🇧 English
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
