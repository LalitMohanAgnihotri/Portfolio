import ActionButtons from "./ActionButtons";
import About from "./sections/About";
import SocialLinks from "./SocialLinks";
const Hero = () => {
  return (
    <div className="row align-items-center g-5 py-5 Hero-sec" id="home">
      <div className="col-lg-6 order-lg-1">
        <h5 className="greeting">Hello, I'm</h5>
        <h1 className="display-5 fw-bold text-white lh-2 mb-3 col-lg-6 name-heading">
          Lalit Mohan Agnihotri
        </h1>
          <h2 className="title-heading">
        I'm a Software Engineer
      </h2>
        <p className="lead description-text">
         Passionate about creating modern web applications with cutting-edge 
        technologies. Focused on delivering clean code and exceptional user 
        experiences.
        </p>

         <SocialLinks></SocialLinks>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
         <ActionButtons></ActionButtons>
        </div>
      </div>

      <div className="col-10 col-sm-8 col-lg-6 order-lg-2">
        <div className="profile-picture-container">
          <img src="#" alt="Lait Mohan Agnihotri" className="about-img" />
        </div>
      </div>
    </div>

    
  );
};

export default Hero;
