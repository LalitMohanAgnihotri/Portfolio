import React, { useState } from "react";
import certificateList from "../../Data/certificateList";
import CertificateCard from "../Effects/CertificateCard";
import CertificateModal from "../Effects/CertificateModal"; // Updated path

const ResumeCertificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Function to open the modal and set the selected certificate data
  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };
  
  // Function to close the modal
  const closeModal = () => {
    setSelectedCertificate(null);
  };
  
  return (
    <section id="resume-certificates">
      <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
        {/* Map over the certificateList to render all cards */}
        {certificateList.map((cert) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            openModal={openModal}
          />
        ))}
      </div>
      
      {/* Render the modal if a certificate is selected */}
      <CertificateModal
        certificate={selectedCertificate}
        closeModal={closeModal}
      />
    </section>
  );
};

export default ResumeCertificate;