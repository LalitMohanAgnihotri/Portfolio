import React from "react";
import { FaTimes } from "react-icons/fa"; 

const FullScreenImageView = ({ certificate, setIsImageEnlarged }) => (
  <div className="modal-overlay">
    <div className="modal-content-dark-bg">
    <button
      onClick={() => setIsImageEnlarged(false)}
      className="close-fullscreen-btn"
      aria-label="Close full screen image"
    >
    <FaTimes className="w-6 h-6" />
    </button>
    <h2 className="fullscreen-title">{certificate.title}</h2>
    <hr className="fullscreen-divider" />

    <div className="fullscreen-image-container">
      <img
        src={certificate.certificateImage}
        alt={`${certificate.title} Certificate`}
        className="fullscreen-certificate-image"
      />
    </div>
  </div>
</div>
);
export default FullScreenImageView;
