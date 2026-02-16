import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/LalitMohanAgnihotri">
        <FaGithub className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/lalit-mohan-agnihotri-5a3632338/">
        <FaLinkedin className="social-icon" />
      </a>
      <a href="https://www.instagram.com/agnihotri8805">
        <FaInstagram className="social-icon" />
      </a>
    </div>
  );
};

export default SocialLinks;
