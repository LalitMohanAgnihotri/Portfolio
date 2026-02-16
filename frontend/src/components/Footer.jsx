import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-end py-3 my-4">
        <div className="col-md-6 d-flex flex-column"> 
          <h4 className="footer-name">Lalit Mohan Agnihotri</h4> 
          <p className="copywright-text">
            Full Stack Web Developer building modern, responsive, and user-friendly applications.
          </p>
        </div>

        <div className="col-md-6 d-flex flex-column align-items-end justify-content-between ">
          <ul className="nav list-unstyled d-flex mb-2  "> 
            <li className="ms-3 ">
              <a className="icon-footer" href="https://github.com/LalitMohanAgnihotri" aria-label="GitHub">
                <FaGithub></FaGithub>
              </a>
            </li>
            <li className="ms-3">
              <a className="icon-footer" href="https://www.linkedin.com/in/lalit-mohan-agnihotri-5a3632338/" aria-label="LinkedIn">
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li className="ms-3">
              <a className="icon-footer" href="#" aria-label="Twitter">
                <FaXTwitter></FaXTwitter>
              </a>
            </li>
            <li className="ms-3">
              <a className="icon-footer" href="https://www.instagram.com/agnihotri8805" aria-label="Instagram">
                <FaInstagram></FaInstagram>
              </a>
            </li>
          </ul>
          <span className="mb-0 copywright-text">
            © 2025 Lalit Mohan Agnihotri. All rights reserved.
          </span> 
        </div>
        
      </footer>
    </div>
  );
};
export default Footer;