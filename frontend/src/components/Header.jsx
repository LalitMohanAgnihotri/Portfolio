import { Link } from 'react-router-dom'; 

const Header = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-md header-container">
      <div className="container-fluid">
        <Link
          to="/" 
          className="navbar-brand d-flex align-items-center me-auto link-body-emphasis text-decoration-none name"
        >
          <span className="fs-4 header-name">Lalit Mohan</span>
        </Link>
        <button
          className="btn btn-outline-secondary d-md-none" 
          type="button"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 nav nav-pills nav-links">
            <li className="nav-item">
              <a href="#home" className="nav-link" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about-sec" className="nav-link">
                About
              </a>
            </li>
            <li href="nav-item">
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;