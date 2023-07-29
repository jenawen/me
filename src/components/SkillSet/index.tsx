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
import python from "../../assets/python.svg";
import figma from "../../assets/figma.svg";
import django from "../../assets/django.svg";

const SkillSet = () => {
  return (
    <div className="skill-parent">
      <div className="skill-title">Skill Set</div>
      <p style={{ fontFamily: "Manrope" }}>
        Here are some tools I have the most experience and confidence using!
      </p>

      <div className="skills-cont">
        <div className="skills-row">
          <div className="icon-skill">
            {" "}
            <img
              style={{ width: "50px" }}
              src={react1}
              alt="react"
              onClick={() => window.open("https://react.dev/", "_blank")}
            />{" "}
            React
          </div>
          <div className="icon-skill">
            {" "}
            <img
              style={{ width: "50px" }}
              src={js}
              alt="js"
              onClick={() =>
                window.open("https://devdocs.io/javascript/", "_blank")
              }
            />{" "}
            JavaScript
          </div>
          <div className="icon-skill">
            {" "}
            <img
              style={{ width: "50px" }}
              src={ts}
              alt="ts"
              onClick={() =>
                window.open("https://www.typescriptlang.org/", "_blank")
              }
            />{" "}
            TypeScript
          </div>
        </div>
        <div className="skills-row">
          <div className="icon-skill">
            {" "}
            <img
              style={{ width: "50px" }}
              src={html5}
              alt="html5"
              onClick={() =>
                window.open(
                  "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
                  "_blank"
                )
              }
            />{" "}
            HTML5
          </div>
          <div className="icon-skill">
            {" "}
            <img
              style={{ width: "50px" }}
              src={css3}
              alt="css3"
              onClick={() =>
                window.open(
                  "https://developer.mozilla.org/en-US/docs/Web/CSS",
                  "_blank"
                )
              }
            />{" "}
            CSS3
          </div>
          <div className="icon-skill">
            {" "}
            <img
              style={{ width: "50px" }}
              src={cpp}
              alt="cpp"
              onClick={() => window.open("https://cplusplus.com/", "_blank")}
            />{" "}
            C++
          </div>
        </div>
        <div className="skills-row">
          <div className="icon-skill">
            {" "}
            <img
              style={{ width: "50px" }}
              src={nodejs}
              alt="nodejs"
              onClick={() => window.open("https://nodejs.org/en", "_blank")}
            />{" "}
            Node.js
          </div>
          <div className="icon-skill">
            {" "}
            <img
              style={{ width: "50px" }}
              src={sass}
              alt="sass"
              onClick={() =>
                window.open("https://sass-lang.com/documentation/", "_blank")
              }
            />{" "}
            Sass
          </div>
          <div className="icon-skill">
            {" "}
            <img
              style={{ width: "50px" }}
              src={jest}
              alt="jest"
              onClick={() => window.open("https://jestjs.io/", "_blank")}
            />{" "}
            Jest
          </div>
        </div>
      </div>

      <p style={{ fontFamily: "Manrope" }}>
        These are tools I’m currently learning and experimenting with.
      </p>
      <div className="skills-row">
        <div className="icon-skill">
          {" "}
          <img
            style={{ width: "50px" }}
            src={python}
            alt="py"
            onClick={() => window.open("https://www.python.org/", "_blank")}
          />{" "}
          Python
        </div>
        <div className="icon-skill">
          {" "}
          <img
            style={{ width: "50px" }}
            src={django}
            alt="dj"
            onClick={() =>
              window.open("https://www.djangoproject.com/", "_blank")
            }
          />{" "}
          Django
        </div>
        <div className="icon-skill">
          {" "}
          <img
            style={{ width: "50px" }}
            src={figma}
            alt="fg"
            onClick={() => window.open("https://www.figma.com/", "_blank")}
          />{" "}
          Figma
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
