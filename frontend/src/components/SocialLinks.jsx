import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://github.com/LalitMohanAgnihotri"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="social-icon" />
      </a>

      <a
        href="https://www.linkedin.com/in/lalit-mohan-agnihotri-5a3632338/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="social-icon" />
      </a>

      <a
        href="https://www.instagram.com/agnihotri8805"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram className="social-icon" />
      </a>
    </div>
  );
};

export default SocialLinks;