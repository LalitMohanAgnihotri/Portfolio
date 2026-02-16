const Sidebar = ({ toggleSidebar }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "280px", position: "fixed", top: 0, bottom: 0, zIndex: 1050 }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <a
          href="/"
          className="d-flex align-items-center me-auto text-white text-decoration-none"
        >
          <svg
            className="bi pe-none me-2"
            width="40"
            height="32"
            aria-hidden="true"
          >
            <use xlinkHref="#bootstrap"></use>
          </svg>
          
        </a>
        {/* Close button that calls the prop function */}
        <button
          className="btn-close btn-close-white"
          onClick={toggleSidebar}
          aria-label="Close"
        ></button>
      </div>
      <ul className="nav nav-pills flex-column mb-auto sidebar-links">
        <li className="nav-item">
          <a href="#home" className="nav-link text-white" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="#about-sec" className="nav-link text-white">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link text-white">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link text-white">
            Projects
          </a>
        </li>
        <li>
          <a href="#resume" className="nav-link text-white">
            Resume
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link text-white">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;