import { FaLocationDot, FaEnvelope, FaPhone, FaGithub, FaLinkedin ,FaInstagram } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="contact-info-box">

      <div className="loction-box">
        <FaLocationDot className="location-icon" />
        <div className="location-text">
          <p className="location-title">Location</p>
          <p className="location-desc">Lakhimpur Kheri, Uttar Pradesh, India</p>
        </div>
      </div>

      <div className="loction-box">
        <FaEnvelope className="location-icon" />
        <div className="location-text">
          <p className="location-title">Email</p>
          <p className="location-desc">lalitagnihotri62@gmail.com</p>
        </div>
      </div>

      <div className="loction-box">
        <FaPhone className="location-icon" />
        <div className="location-text">
          <p className="location-title">Phone</p>
          <p className="location-desc">+91 89574 54339</p>
        </div>
      </div>

      <h3 className="followme-heding">Follow Me</h3>

      <div className="social-links-box">
        <a href="https://github.com/LalitMohanAgnihotri"><FaGithub className="social-icon-f" /></a>
        <a href="https://www.linkedin.com/in/lalit-mohan-agnihotri-5a3632338/"><FaLinkedin className="social-icon-f" /></a>
        <a href="https://www.instagram.com/agnihotri8805"><FaInstagram className="social-icon-f" /></a>
      </div>

    </div>
  );
};

export default ContactInfo;