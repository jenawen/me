import "./index.css";

import resume from "../../../public/adkinsjena_resume_2023.pdf";
const AboutMe = () => {
  return (
    <div className="aboutme-parent">
      <div className="aboutme-title">About Me</div>

      <div className="aboutme-text">
        <p>
          As a front-end developer, I'm passionate about web design and
          developing{" "}
          <span style={{ color: "#DC7384" }}>
            responsive and efficient user interfaces.{" "}
          </span>{" "}
          I currently have{" "}
          <span style={{ color: "#DC7384" }}>
            2+ years of professional experience
          </span>{" "}
          as an undergrad in creating streamlined applications for the credit
          card and financial industry.
        </p>

        <p>
          Being extremely detail oriented, I excel at implementing intended
          designs into functional, scalable components using{" "}
          <span style={{ color: "#DC7384" }}>TypeScript and React.</span> I love
          collaborating with others, and strive to make the
          <span style={{ color: "#DC7384" }}> design-to-development</span>{" "}
          process as productive and accurate as possible, no matter how many
          handoffs there are.
        </p>

        <p>
          In my free time, I love visiting dessert cafes across Las Vegas. I can
          never say no to{" "}
          <span style={{ color: "#DC7384" }}>coffee or boba</span> :) I also
          love cars, drafting, and anything automotive. If I'm not coding, I'm
          probably working on my{" "}
          <span style={{ color: "#DC7384" }}>project car!</span>
        </p>

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
