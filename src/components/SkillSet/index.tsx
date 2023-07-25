import "./index.css";
import react1 from "../../assets/react1.svg";
import js from "../../assets/js.svg";
import ts from "../../assets/ts.svg";
import html5 from "../../assets/html5.svg";
import css3 from "../../assets/css3.svg";
import cpp from "../../assets/cpp.svg";
import nodejs from "../../assets/nodejs.svg";
import jest from "../../assets/jest.svg";
import sass from "../../assets/sass.svg";

const SkillSet = () => {
  return (
    <div className="skill-parent">
      <div className="skill-title">Skill Set</div>
      <div className="skills-row">
        <div className="icon">
          {" "}
          <img style={{ width: "50px" }} src={react1} alt="react" /> React
        </div>
        <div className="icon">
          {" "}
          <img style={{ width: "50px" }} src={js} alt="js" /> JavaScript
        </div>
        <div className="icon">
          {" "}
          <img style={{ width: "50px" }} src={ts} alt="ts" /> TypeScript
        </div>
      </div>
      <div className="skills-row">
        <div className="icon">
          {" "}
          <img style={{ width: "50px" }} src={html5} alt="html5" /> HTML5
        </div>
        <div className="icon">
          {" "}
          <img style={{ width: "50px" }} src={css3} alt="css3" /> CSS3
        </div>
        <div className="icon">
          {" "}
          <img style={{ width: "50px" }} src={cpp} alt="cpp" /> C++
        </div>
      </div>
      <div className="skills-row">
        <div className="icon">
          {" "}
          <img style={{ width: "50px" }} src={nodejs} alt="nodejs" /> Node.js
        </div>
        <div className="icon">
          {" "}
          <img style={{ width: "50px" }} src={sass} alt="sass" /> Sass
        </div>
        <div className="icon">
          {" "}
          <img style={{ width: "50px" }} src={jest} alt="jest" /> Jest
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
