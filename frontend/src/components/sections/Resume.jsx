import ResumeDownlod from "./ResumeDownlod";
import ResumeEducation from "./ResumeEducation";
import ResumeCertificate from "./ResumeCertificate";
import { IoMdStar } from "react-icons/io";

const Resume = () => {
  return (
    <div id="resume">
      <center>
        <h1 className="who-i">Education & Certifications</h1>
      </center>
      <center>
        <p className="who-i-am">
          Here's a summary of my educational background and professional
          certifications. Download my complete resume for more detailed
          information.
        </p>
      </center>
      <div className="container col-xxl-10 ">
        <div className="row align-items-start g-5 py-5">
          <div className="col-lg-7 ">
            <ResumeEducation></ResumeEducation>
            <h1 className="certifications-heding">
              <IoMdStar className="certifications-icon" />
              Certifications
            </h1> 
            <ResumeCertificate></ResumeCertificate> 
          </div>
            <ResumeDownlod></ResumeDownlod>
        </div>
      </div>
    </div>
  );
};

export default Resume;