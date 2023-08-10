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
          I mostly utilize React and TypeScript. I have sufficient experience
          with JavaScript, HTML5, CSS3, as well as automated unit testing using
          Jest. I tinker a lot with Figma and a little bit of Python using
          Django, and Express and Node.js as well.
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
