import "./index.css";
import pdf from "../../assets/pdf.svg";
import resume from "../../../public/adkins_resume_2023.pdf";
const AboutMe = () => {
  return (
    <div className="aboutme-parent">
      <div className="aboutme-title">About Me</div>

      <div className="aboutme-text">
        <p>
          I started my career as a front-end developer creating user interfaces
          and websites. As an intern and undergrad, I quickly grew to love
          everything web development and creating modern, efficient web apps.
        </p>

        <p>
          In my current role, I combine those front-end skills with data
          analysis, creating reactive and dynamic dashboards that allow users to
          interact with high volume datasets. I strive to craft a user
          experience that’s more informative than the usual static visualization
          tools. My goal is to make data feel tangible and concise to point out
          trends, liabilities, and any other desired indicators.
        </p>

        <p>
          I mostly utilize <span style={{ color: "#D67272" }}> React </span> and
          <span style={{ color: "#D67272" }}> TypeScript</span>. I have
          sufficient experience with{" "}
          <span style={{ color: "#D67272" }}> JavaScript</span>,{" "}
          <span style={{ color: "#D67272" }}> HTML5</span>,{" "}
          <span style={{ color: "#D67272" }}> CSS3</span>, as well as automated
          unit testing using <span style={{ color: "#D67272" }}>Jest</span>. I
          often use <span style={{ color: "#D67272" }}>Express</span> and
          <span style={{ color: "#D67272" }}> Node.js</span> for any back-end
          functionality. <span style={{ color: "#D67272" }}>Python</span> and{" "}
          <span style={{ color: "#D67272" }}>Streamlit</span> are my go-to’s for
          data visualization. I also love tinkering with{" "}
          <span style={{ color: "#D67272" }}>Figma</span>.
        </p>

        <p>
          In my free time, I love doing nail art and going to cute cafes. I can
          never say no to coffee or boba.
        </p>

        <p> Thanks for stopping by :)</p>
        <p>
          {" "}
          <a
            href={resume}
            download="jenaadkins_resume"
            target="_blank"
            rel="noreferrer"
          >
            <img src={pdf} id="pdf" /> Click here to download my resume!
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
