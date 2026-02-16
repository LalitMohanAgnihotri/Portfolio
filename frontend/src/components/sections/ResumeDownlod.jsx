import { useState } from 'react'; 
import { MdFileDownload } from "react-icons/md";
import { TiEye } from "react-icons/ti";
import imagePath from "../../assets/resume/image.png";
const ResumeDownlod = () => {
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);

    const resumeTitle = "Resume Preview"; 
    const pdfPath = "/Programming with JavaScript.pdf"; 
    const FullScreenImageView = () => (
        <div className="modal-overlay">
        <div className="modal-content-dark-bg">
            <button 
                onClick={() => setIsImageEnlarged(false)}
                className="close-fullscreen-btn"
            >
                Close
            </button>
            <h2 className="fullscreen-title">{resumeTitle}</h2>
            <hr className="fullscreen-divider" />
            
            <div className="fullscreen-image-container">
                <img
                    src={imagePath}
                    alt={resumeTitle}
                    className="fullscreen-certificate-image-resume"
                />
                
            </div>
            
        </div>
    </div>
    );

    return (
        <>
            <div className="col-10 col-sm-12 col-lg-5">
                <center>
                    <div className="card-body download-card">
                        <h3 className="card-title download-heding">Download Resume</h3>
                        <p className="card-text download-text ">
                            For a complete overview of my skills, education, and projects,
                            please download my detailed resume.
                        </p>

                        <a 
                            href={pdfPath} 
                            download 
                            className="btn btn-primary download-btn-link"  
                        >
                            <button className="download-btn">
                                <MdFileDownload className="download-icon" />
                                Download PDF
                            </button>
                        </a>
                        
                    </div>
                </center>
                
    
                <div 
                    className="image-hover-wrapper"
                    onClick={() => setIsImageEnlarged(true)} 
                >
                    <img src={imagePath} className="resume-img" alt="resume img" />
                    
                    <div className="image-overlay resume-overlay">
                        <button className="image-overlay-btn resume-view-btn">
                            <TiEye/>
                            View Resume
                        </button>
                    </div>
                </div>
            </div>

            {isImageEnlarged && <FullScreenImageView />}
        </>
    );
};

export default ResumeDownlod;