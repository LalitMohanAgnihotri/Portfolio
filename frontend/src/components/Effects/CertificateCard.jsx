import React from "react";
import { PiCertificate } from "react-icons/pi";
import { MdVerified } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { TiEye } from "react-icons/ti";

const CertificateCard = ({ certificate, openModal }) => {
  return (
    <div className="col">
      <div className="card h-100 overflow-hidden rounded-4 shadow-lg certifications-card">
        <div className="d-flex flex-column h-100 p-4 card-body-content">
          <span className="certifications-certifi">
            <PiCertificate className="certifications-certifi-icon" />
            {certificate.title}
          </span>
          <span className="certification-verifiecation">
            <MdVerified className="certification-verifiecation-icon" />
            {certificate.organization}
          </span>
          <span className="certification-cal">
            <FaRegCalendar className="certification-cal-icon" />
            {certificate.issuedDate}
          </span>
          <center className="certification-view">
            <button
              className="certification-view-btn"
              onClick={() => openModal(certificate)} // Open modal with specific certificate data
            >
              <TiEye className="certification-view-icon" />
              View Certificate
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;