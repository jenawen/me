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
          I mostly utilize Python and Streamlit for making those interactive
          dashboards, and React and TypeScript for dynamic web pages. PostgreSQL
          is my go-to for database management. I use Figma for any complex
          dashboard designs and features.
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
