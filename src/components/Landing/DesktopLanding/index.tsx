import "./index.css";
import landing from "../../../assets/landing.svg";
import loc from "../../../assets/loc.svg";

const Landing = () => {
  return (
    <div className="landing-parent">
      <div className="landing-text">
        <div className="landing-title">Hello! I'm Jena.</div>
        <div id="landing-job">Software Developer | Data Analyst</div>
        <div id="landing-work">
          transforming data into dynamic, interactive UI
        </div>
        <div id="landing-loc">
          <img id="loc" src={loc} />{" "}
          <a
            style={{ textDecoration: "underline", color: "#5F401A" }}
            href="https://www.creditonebank.com/"
          >
            Credit One Bank
          </a>{" "}
          - Portfolio Management
        </div>
      </div>
      <div className="landing-photo">
        <div className="c-1"></div>
        <div className="c-2"></div>
        {/* <img src={landing} /> */}
      </div>
    </div>
  );
};

export default Landing;
