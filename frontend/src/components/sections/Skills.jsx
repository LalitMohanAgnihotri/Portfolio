import SkillCard from "./Skills.Card";
const Skills = () => {
  return (
    <div id="skills">
      <center>
        <h5 className="about-me">MY SKILLS</h5>
      </center>
      <center>
        <h1 className="who-i">Technical Expertise</h1>
      </center>
      <center>
        <p className="who-i-am">
          I have experience working with a variety of technologies across the
          full stack development spectrum. Here are the key technologies and
          tools I'm proficient with:
        </p>
      </center>
      <SkillCard></SkillCard>
    </div>
  );
};

export default Skills;
