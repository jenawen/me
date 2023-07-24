import "./index.css";
import "../../fonts/notosans.ttf";
const AboutMe = () => {
  return (
    <div className="aboutme-parent">
      <div className="aboutme-title">About Me</div>

      <div className="aboutme-text">
        <p>
          As a front-end developer, I'm passionate about web design and
          developing responsive and efficient user interfaces. I currently have
          2+ years of professional experience as an undergrad in creating
          streamlined applications for the credit card and financial industry
          using React and TypeScript.
        </p>
        <p>
          In the future, I'd love to pursue an opportunity in UI/UX design or
          back-end development. However, my passion is ultimately with front-end
          programming, development, and all the problem solving it comes with.{" "}
        </p>

        <p>
          Being extremely detail oriented, I excel at implementing intended
          designs into functional, scalable components. I love collaborating
          with others, and strive to make the design-to-development process as
          productive and accurate as possible, no matter how many iterations
          there are.
        </p>

        <p>
          In my free time, I love doing nail art and visiting dessert cafes
          across Las Vegas. I can never say no to coffee or boba :) I also love
          cars and mechanical drafting; I have a project car I've been working
          on for 8 years now!
        </p>

        <p>Click here to download my resume!</p>
      </div>
    </div>
  );
};

export default AboutMe;
