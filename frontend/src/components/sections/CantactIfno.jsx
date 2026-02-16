import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdWifiCalling3 } from "react-icons/md";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const ContactInfo = () => {
  return (
    <>
      <h1 className="who-i">Contact Information</h1>{" "}
      <div className="loction-box">
        <FaLocationDot className="location-icon" />
        <div className="location-text">
          <h4 className="location-title">Location</h4>
          <p className="location-desc">Lakhimpur Kheri,UP India</p>
        </div>
      </div>
      <div className="loction-box">
        <MdEmail className="location-icon" />
        <div className="location-text">
          <h4 className="location-title">Email</h4>
          <p className="location-desc">lalitagnihotri62@gmail.com</p>
        </div>
      </div>
      <div className="loction-box">
        <MdWifiCalling3 className="location-icon" />
        <div className="location-text">
          <h4 className="location-title">Phone</h4>
          <p className="location-desc">+91 8957454339</p>
        </div>
      </div>
      <div className="followme-box">
        <h4 className="followme-heding">Follow Me</h4>
        <a href="https://github.com/LalitMohanAgnihotri">
          <FaGithub className="social-icon-f" />
        </a>
        <a href="https://www.linkedin.com/in/lalit-mohan-agnihotri-5a3632338/">
          <FaLinkedin className="social-icon-f" />
        </a>
        <a href="https://www.instagram.com/agnihotri8805/">
          <FaInstagram className="social-icon-f" />
        </a>
      </div>
      <p className="mantain-hoght-cont">ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
      <p className="mantain-hoght-cont">ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
      <p className="mantain-hoght-cont">ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
      <p className="mantain-hoght-cont">ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
      
    </>
  );
};
export default ContactInfo;
