import "./index.css";
import landing from "../../../assets/me.svg";

const Landing = () => {
  return (
    <div className="landing-parent">
      <div className="landing-photo">
        <img src={landing} />
      </div>
      <div className="landing-text">
        <div className="landing-title">Hi! I'm Jena.</div>
        <p>
          I'm a <span style={{ color: "#DC7384" }}>front-end developer</span>{" "}
          and undergraduate student majoring in Computer Science at UNLV.
        </p>
        <p>
          Currently working as a Web Development Intern at{" "}
          <a style={{ color: "#e8536c" }} href="https://www.creditonebank.com/">
            Credit One Bank.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Landing;
