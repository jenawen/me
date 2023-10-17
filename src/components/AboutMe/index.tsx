import "./index.css";
import pdf from "../../assets/pdf.svg";
import resume from "../../../public/adkins_resume_2023.pdf";
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
          Outside of web development, I have an interest in data analysis and
          have experience creating data reports and dashboards. I enjoy taking
          high-volume datasets and creating dynamic ways to visualize and
          interact with them, just like with websites and applications.
        </p>

        <p>
          I mostly utilize <span style={{ color: "#D67272" }}> React </span> and
          <span style={{ color: "#D67272" }}> TypeScript</span>. I have
          sufficient experience with{" "}
          <span style={{ color: "#D67272" }}> JavaScript</span>,{" "}
          <span style={{ color: "#D67272" }}> HTML5</span>,{" "}
          <span style={{ color: "#D67272" }}> CSS3</span>, as well as automated
          unit testing using <span style={{ color: "#D67272" }}>Jest</span> and{" "}
          <span style={{ color: "#D67272" }}>Vitest</span>. I often use{" "}
          <span style={{ color: "#D67272" }}>Express</span> and
          <span style={{ color: "#D67272" }}> Node.js</span> for any back-end
          functionality. <span style={{ color: "#D67272" }}>Python</span> and{" "}
          <span style={{ color: "#D67272" }}>Streamlit</span> are my go-to’s for
          data visualization. I also love tinkering with{" "}
          <span style={{ color: "#D67272" }}>Figma</span>.
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
