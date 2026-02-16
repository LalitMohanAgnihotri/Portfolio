import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import { FaExpand } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import FullScreenImageView from "./FullScreenImageView";

const CertificateModal = ({ certificate, closeModal }) => {
  if (!certificate) return null;

  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  if (isImageEnlarged) {
    return (
      <FullScreenImageView
        certificate={certificate}
        setIsImageEnlarged={setIsImageEnlarged}
      />
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content-dark-bg">
        <button onClick={closeModal} className="close-modal-btn">
          &times;
        </button>

        <h2 className="modal-title-light-text"><PiCertificate className="certifications-certifi-icon" />{certificate.title}</h2>

        {certificate.certificateImage && (
          <div className="certificate-image-section-center">
            <div
              className="image-hover-wrapper"
              onClick={() => setIsImageEnlarged(true)}
            >
              <img
                src={certificate.certificateImage}
                alt={`${certificate.title} Certificate`}
                className="certificate-image-large"
              />

              <div className="image-overlay certificate-overlay">
                <button className="image-overlay-btn enlarge-btn">
                  <FaExpand /> Enlarge Image
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="modal-bottom-details-container">
          <div className="certificate-details-section-dark">
            <h3>
              <MdVerified className="certification-verifiecation-icon" />
              Certificate Details
            </h3>
            <p>
              <strong>Issuing Organization:</strong> {certificate.organization}
            </p>
            <p>
              <strong>Issued Date:</strong> {certificate.issuedDate}
            </p>
            {certificate.verificationLink && (
              <p>
                <strong>Verification:</strong>{" "}
                <a href={certificate.verificationLink} target="_blank" rel="noopener noreferrer">
                  {certificate.verificationLink}
                </a>
              </p>
            )}
          </div>

          <div className="skills-acquired-section-dark">
            <h3>Skills Acquired</h3>
            <div className="skills-list-dark">
              {certificate.skills.map((skill, index) => (
                <span key={index} className="skill-tag-dark">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-acquired-section-dark">
            <h3>Summary</h3>
            <div className="skills-list-dark">
             <p>{certificate.summary}</p>
            </div>
          </div>
        
          

        <div className="close-button-bottom">
          <button onClick={closeModal} className="close-modal-btn-bottom">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;