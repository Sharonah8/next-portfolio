const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card html">
          <i className="fa-brands fa-html5 html-icon"></i>
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <i className="fa-brands fa-css3-alt css-icon"></i>
          <p>CSS</p>
        </div>
        <div className="skill-card js">
          <i className="fa-brands fa-js-square js-icon"></i>
          <p>Javascript</p>
        </div>
        <div className="skill-card react">
          <i className="fa-brands fa-react react-icon"></i>
          <p>React</p>
        </div>
        <div className="skill-card next">
          <i className="fa-brands fa-react react-icon"></i>
          <p>NextJs</p>
        </div>
        <div className="skill-card git">
          <i className="fa-brands  fa-square-git"></i>
          <p>Git</p>
        </div>
        <div className="skill-card git">
          <i className="fa-brands"></i>
          <p>Apollo GraphQL</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
