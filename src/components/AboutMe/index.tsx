import "./index.css";
import "../../fonts/notosans.ttf";
const AboutMe = () => {
  return (
    <div className="aboutme-parent">
      <div className="aboutme-title">About Me</div>

      <div className="aboutme-text">
        <p>
          As a front-end developer, I'm passionate about web design and
          developing efficient user interfaces. I currently have 2+ years of
          professional experience as an undergrad in creating streamlined
          applications for the credit card and financial industry.
        </p>
        <p>
          In the future, I'd love to pursue an opportunity in UI/UX design or
          back-end development. I want my websites to be attractive, but also
          functional and effective. However, my passion is ultimately with
          front-end programming, development, and all the problem solving it
          comes with.{" "}
        </p>

        <p>
          My biggest strength is my persistence. I'll debug and edit something
          for hours without distraction, because I'm only satisfied once it
          finally compiles and works.
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
