import "./index.css";
import "../../fonts/notosans.ttf";
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
          card and financial industry using{" "}
          <span style={{ color: "#DC7384" }}> React and TypeScript.</span>
        </p>
        <p>
          In the future, I'd love to pursue an opportunity in{" "}
          <span style={{ color: "#DC7384" }}> UI/UX design. </span>
          However, my passion is ultimately with{" "}
          <span style={{ color: "#DC7384" }}>front-end programming</span>,
          development, and all the problem solving it comes with.{" "}
        </p>

        <p>
          Being extremely detail oriented, I excel at implementing intended
          designs into functional,{" "}
          <span style={{ color: "#DC7384" }}>scalable components.</span> I love
          collaborating with others, and strive to make the
          <span style={{ color: "#DC7384" }}> design-to-development</span>{" "}
          process as productive and accurate as possible, no matter how many
          iterations there are.
        </p>

        <p>
          In my free time, I love doing nail art and visiting dessert cafes
          across Las Vegas. I can never say no to{" "}
          <span style={{ color: "#DC7384" }}>coffee or boba</span> :) I also
          love cars and mechanical drafting; I have a{" "}
          <span style={{ color: "#DC7384" }}>project car</span> I've been
          working on for 8 years now!
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
