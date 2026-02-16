import WhatIDo from "./AboutCard";
import AboutJourney from "./AboutHero";
const About = () => {
  return (
    <div id="about-sec">
      <center>
        <h5 className="about-me">ABOUT ME</h5>
      </center>
      <center>
        <h1 className="who-i">Who I Am</h1>
      </center>
      <center>
        <p className="who-i-am">
          I am a passionate Full Stack Web Developer with a strong focus on
          creating modern, responsive, and user-friendly applications. I enjoy
          working with cutting-edge technologies and delivering clean, efficient
          code.
        </p>
      </center>
      <AboutJourney></AboutJourney>
      <WhatIDo></WhatIDo>
    </div>
  );
};
export default About;
