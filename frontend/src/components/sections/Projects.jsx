import ProjectCard from "./ProjectCard";
import { FaGithub } from 
"react-icons/fa";
const Projects = () => {
  return (
    <div id="projects">
      <center>
        <h5 className="about-me">MY PROJECTS</h5>
      </center>
      <center>
        <h1 className="who-i">Recent Work</h1>
      </center>
      <center>
        <p className="who-i-am">
          Here are some of the projects I've built that demonstrate my skills
          and experience. Each project is briefly described with links to code
          repositories and live demos.
        </p>
      </center>
      <ProjectCard></ProjectCard>
      <center>
        <a href="https://github.com/LalitMohanAgnihotri?tab=repositories">
          {" "}
          <button className="btn send-btn Project-btn">
            <FaGithub className="social-icon-p" />
            View More Projects on GitHub
          </button>
        </a>
      </center>
    </div>
  );
};

export default Projects;
