import "./index.css";
import pdf from "../../assets/pdf.svg";
import resume from "../../../public/adkins_resume_2023.pdf";
const AboutMe = () => {
  return (
    <div className="aboutme-parent">
      <div className="aboutme-title">About Me</div>

      <div className="aboutme-text">
        <p>
          I started my career as a software developer creating user interfaces
          and websites. As an intern and undergrad, I quickly grew to love
          everything web development and creating modern, efficient web apps.
        </p>

        <p>
          In my current role, I combine my solid development background with
          data science and analysis, creating complex algorithms and dynamic
          dashboards that allow users to engage with high-volume datasets. I
          craft user experiences that are more informative than the usual static
          visualization tools. I make data interactive so it’s easier to point
          out trends, liabilities, and any other desired indicators for our
          portfolio management team.
        </p>

        <p>
          I mostly utilize Python and Streamlit for making those interactive
          dashboards, and React and TypeScript for dynamic web pages. PostgreSQL
          is my go-to for database management. I use Figma for any complex
          dashboard designs and features. Outside of development, I often deal
          with financial metrics, statements, KPIs, and other data reports. I’ve
          worked with Tableau, as well as SQL and SAS.
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
