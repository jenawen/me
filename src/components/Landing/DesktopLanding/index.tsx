import "./index.css";
import landing from "../../../assets/landing.svg";
import loc from "../../../assets/loc.svg";

const Landing = () => {
  return (
    <div className="landing-parent">
      <div className="landing-text">
        <div className="landing-title">Hello! I'm Jena.</div>
        <div id="landing-job">Front-end Developer</div>
        <div id="landing-work">
          Currently working as a Web Development Intern at{" "}
          <a
            style={{ textDecoration: "underline", color: "#504333" }}
            href="https://www.creditonebank.com/"
          >
            Credit One Bank.
          </a>
        </div>
        <div id="landing-loc">
          <img id="loc" src={loc} /> Las Vegas, Nevada
        </div>
      </div>
      <div className="landing-photo">
        <div className="c-1"></div>
        <div className="c-2"></div>
        <img src={landing} />
      </div>
    </div>
  );
};

export default Landing;
