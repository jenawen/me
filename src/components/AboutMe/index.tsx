import "./index.css";

import resume from "../../../public/adkinsjena_resume_2023.pdf";
const AboutMe = () => {
  return (
    <div className="aboutme-parent">
      <div className="aboutme-title">About Me</div>

      <div className="aboutme-text">
        <p>
          For the past two years, I’ve created streamlined user interfaces for
          the credit card and financial industry. I'm passionate about web
          design and development and excel at implementing intended designs into
          functional, scalable components. I love collaborating with others, and
          strive to make the design-to-development process as productive as
          possible.
        </p>

        <p>
          I mostly utilize <span style={{ color: "#DC7384" }}> React </span> and
          <span style={{ color: "#DC7384" }}> TypeScript</span>. I have
          sufficient experience with{" "}
          <span style={{ color: "#DC7384" }}> JavaScript</span>,{" "}
          <span style={{ color: "#DC7384" }}> HTML5</span>,{" "}
          <span style={{ color: "#DC7384" }}> CSS3</span>, as well as automated
          unit testing using <span style={{ color: "#DC7384" }}>Jest</span>. I
          tinker a lot with <span style={{ color: "#DC7384" }}>Figma</span> and
          a little bit of <span style={{ color: "#DC7384" }}>Python</span> using{" "}
          <span style={{ color: "#DC7384" }}>Django</span>, and{" "}
          <span style={{ color: "#DC7384" }}>Express</span> and{" "}
          <span style={{ color: "#DC7384" }}>Node.js</span> as well!
        </p>

        <p>
          In my free time, I love doing nail art and getting coffee or boba with
          friends. I also love cars and anything automotive; I have a project
          car I've been working on for 8 years now!
        </p>

        <p> Thanks for stopping by :)</p>
        <p>
          {" "}
          <a
            href={resume}
            download="adkinsjena_resume_2023"
            target="_blank"
            rel="noreferrer"
          >
            Click here to download my resume!
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
