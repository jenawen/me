import "./index.css";
import landing from "../../../assets/landing.svg";
const Landing = () => {
  return (
    <div className="landing-parent">
      <div className="landing-photo">
        <img src={landing} />
      </div>
      <div className="landing-text">
        <div className="landing-title">Hi! I'm Jena.</div>
        <p>
          I'm a front-end developer and undergraduate student majoring in
          Computer Science at UNLV.
        </p>
        <p>Currently working as a Web Development Intern at Credit One Bank</p>
      </div>
    </div>
  );
};

export default Landing;
