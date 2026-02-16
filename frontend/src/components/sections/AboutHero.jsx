const AboutJourney = () => {
  return (
    <>
      <div className="container col-xxl-10 ">
        <div className="row align-items-center g-5 py-5 ">
          <div className="col-lg-6 timeline">
            <h1 className="display-4 fw-bold my-journy">My Journey</h1>{" "}
            <p className="lead about-dec ">
              I began my journey in web development with a curiosity about how
              websites work. What started as a hobby quickly evolved into a
              passion for creating digital experiences that solve real-world
              problems.
            </p>
            <p className="lead about-dec">
              As a fresh graduate, I am eager to apply my skills in real-world
              projects and continue learning new technologies. I believe in the
              power of clean code, responsive design, and intuitive user
              experiences.
            </p>
            <p className="lead about-dec">
              I am constantly exploring new technologies and frameworks to
              enhance my skill set. My goal is to create web applications that
              not only look great but also provide exceptional functionality and
              user experience.
            </p>{" "}
          </div>

          <div className="col-10 col-sm-12 col-lg-5">
            <div className=" about-img-box">
              <div className="about-img">
                <img src="#" className="about-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutJourney;
