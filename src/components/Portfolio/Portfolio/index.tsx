/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PortfolioTemplate from "../PortfolioTemplate/index";
import "./index.css";
// import regz from "../../../assets/portfoliopics/regz.png";
import uw1 from "../../../assets/portfoliopics/uw1.png";
import c1b from "../../../assets/c1b.svg";
import journal from "../../../assets/portfoliopics/journal.png";
import liptint from "../../../assets/portfoliopics/liptint.png";
import sawara from "../../../assets/portfoliopics/sawara.png";
import portfolio from "../../../assets/portfoliopics/portfolio.png";
import portfolio2 from "../../../assets/portfoliopics/portfolio2.png";
import MobilePortfolio from "../MobilePortfolio";

const Portfolio = (props: any) => {
  const { pageType } = props;
  const [seeMore, setSeeMore] = useState(false);

  const regzUW = [
    { text: "React", status: "def" },
    { text: "TypeScript", status: "def" },
    { text: "HTML", status: "def" },
    { text: "SASS", status: "def" },
    { text: "Jest", status: "def" },
  ];
  const db = [
    { text: "React", status: "def" },
    { text: "TypeScript", status: "def" },
    { text: "Jest", status: "def" },
  ];

  const jrnl = [
    { text: "React", status: "def" },
    { text: "TypeScript", status: "def" },
    { text: "CSS", status: "def" },
    { text: "Chart.js", status: "def" },
  ];

  const p1 = [
    { text: "Vite", status: "def" },
    { text: "React", status: "def" },
    { text: "TypeScript", status: "def" },
    { text: "HTML", status: "def" },
    { text: "CSS", status: "def" },
    { text: "HeroTofu", status: "def" },
    { text: "GitLab Pages", status: "def" },
  ];

  const ltp = [
    { text: "React", status: "def" },
    { text: "TypeScript", status: "def" },
    { text: "HTML", status: "def" },
    { text: "CSS", status: "def" },
  ];

  const portfolios = [
    { text: "React", status: "def" },
    { text: "TypeScript", status: "def" },
    { text: "HTML", status: "def" },
    { text: "CSS", status: "def" },
    { text: "Figma", status: "def" },
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-title"> Portfolio</div>

      {pageType === "mobile" ? (
        <>
          <MobilePortfolio
            title={"Reg Z Calculator"}
            status={"Deployed"}
            pillType={"deployed"}
            involve={"Front-end, Unit testing"}
            desc={
              <>
                <p>
                  {" "}
                  A Regulation Z calculator that calculates the amount of credit
                  due from purchases, cash advance fees, or merchant charges. A
                  credit protection feature is also included for credit
                  statements.
                </p>

                <p>
                  {" "}
                  This was my first project as an intern. The task was to create
                  an interface to replace an Excel sheet that had the same
                  functions, but was becoming increasingly obsolete and
                  difficult to update.{" "}
                </p>
                <p>
                  This project was an internal application. Contact me if you
                  would like to know more about it.
                </p>
              </>
            }
            type={"1"}
            img={c1b}
            pillArray={regzUW}
          />
          <MobilePortfolio
            title={"Underwriting"}
            status={"Deployed"}
            pillType={"deployed"}
            involve={"Front-end, Unit testing, Documentation"}
            desc={
              <>
                <p>
                  An underwriting application that allows the user to create a
                  custom credit line for a specific credit card.
                </p>
                <p>
                  This was one section of a larger internal project titled
                  RISK-246. The purpose of the project was to create, edit, and
                  manage credit card campaigns more efficiently. I was in charge
                  of the Underwriting portion of the project.{" "}
                </p>
                <p>
                  Since this was an internal application, contact me if you
                  would like to know more about it.
                </p>
              </>
            }
            type={"2"}
            img={uw1}
            pillArray={regzUW}
          />

          <MobilePortfolio
            title={"Digital Bank"}
            status={"In-progress"}
            pillType={"ongoing"}
            involve={"Custom form creation/handling, Unit Testing"}
            desc={
              <>
                <p>
                  {" "}
                  An application for customer savings and checkings accounts.
                </p>
                <p>
                  {" "}
                  Due to this being an ongoing project, I can only provide
                  sparse details about it.{" "}
                </p>
                <p>Contact me if you'd like to know more about the project.</p>
              </>
            }
            type={"1"}
            img={c1b}
            pillArray={db}
          />

          {!seeMore ? (
            <button
              className="see-more"
              onClick={() => {
                setSeeMore(true);
              }}
            >
              See More
            </button>
          ) : null}

          {seeMore ? (
            <>
              <MobilePortfolio
                title={"Glucose Journal"}
                status={"In-progress"}
                pillType={"ongoing"}
                involve={"Front-end, UI/UX Design, Unit Testing"}
                desc={
                  <>
                    <p>
                      A simple journal-like application to track food and
                      glucose levels. The glucose level graph allows the user to
                      visually see their progress over time.
                    </p>
                    <p>
                      I created this project for my partner was diagnosed with
                      diabetes. For a month, we wanted to track his food intake
                      and glucose levels. I was using my notes app in my phone,
                      but hated the touchscreen interface. So I decided to make
                      my own!
                    </p>
                  </>
                }
                type={"2"}
                img={journal}
                pillArray={jrnl}
              />
              <MobilePortfolio
                title={"Lip Tint Picker"}
                status={"In-progress"}
                pillType={"ongoing"}
                involve={"Front-end, UI/UX Design"}
                desc={
                  <>
                    <p>
                      An interactive and informative quiz-like application that
                      gives the user a recommended lip product based on desired
                      finish, texture, undertone, etc.
                    </p>
                    <p>
                      I wanted to create an application that fed off user inputs
                      but was also fun, trendy, and memorable. I was able to
                      combine two things I really enjoy, beauty and front-end
                      development.
                    </p>
                  </>
                }
                live={"https://github.com/jenawen/liptint"}
                viewText={"View GitHub Repository"}
                type={"1"}
                img={liptint}
                pillArray={ltp}
              />
              <MobilePortfolio
                title={"Sawara's Portfolio"}
                status={"In-progress"}
                pillType={"ongoing"}
                involve={"Front-end, Unit testing"}
                desc={
                  <>
                    <p>
                      A portfolio site for a UX Designer to showcase her
                      projects.
                    </p>
                    <p>
                      I was commissioned by my friend to build a website for her
                      that she designed using Figma. Building this website
                      exposed me more to Figma and how it works, which motivated
                      me to try and use it myself.
                    </p>
                  </>
                }
                live={"https://github.com/jenawen/sawara"}
                viewText={"View GitHub Repository"}
                type={"2"}
                img={sawara}
                pillArray={portfolios}
              />
              <MobilePortfolio
                title={"Personal Portfolio V.1"}
                status={"Deployed"}
                pillType={"deployed"}
                involve={"Front-end, UI/UX Design"}
                live={"https://jenaadkins.gitlab.io/portfolio/"}
                viewText={"View Live"}
                desc={
                  <>
                    <p>My first attempt at a personal site/portfolio.</p>
                    <p>
                      I first started development with hand-drawn sketches of
                      what I wanted my site to look like. After a few
                      renditions, I decided to build using handdrawn wireframes
                      as reference
                    </p>
                    <p>
                      Overall, it functioned well but I was ultimately
                      unsatisfied with it and decided to do a redesign, focusing
                      more on responsiveness and efficiency.
                    </p>
                  </>
                }
                type={"1"}
                img={portfolio}
                pillArray={p1}
              />
              <MobilePortfolio
                title={"Personal Portfolio V.2"}
                status={"Maintenance"}
                pillType={"maintain"}
                involve={"Front-end, UI/UX Design"}
                live={
                  "https://www.figma.com/file/OwdsgAMnJqcj0HZVGCABxU/Portfolio-Pt2?type=design&node-id=0%3A1&mode=design&t=2mbYdgFCf1th3d7r-1"
                }
                viewText={"View Figma File"}
                desc={
                  <>
                    <p>
                      My second attempt at a personal site/portfolio, using
                      Figma for the first time for the design.
                    </p>
                    <p>
                      I created my first portfolio mostly on a whim without a
                      real definite design. I had handdrawn sketches, but did
                      not use any design software, and was developing and adding
                      things where I saw fit.
                    </p>
                    <p>
                      I decided to do a redesign to create a more responsive and
                      elegant feel that also showed off more front-end
                      techniques I've acquired over the years.
                    </p>
                  </>
                }
                type={"2"}
                img={portfolio2}
                pillArray={portfolios}
              />

              <button
                className="see-more"
                onClick={() => {
                  setSeeMore(false);
                }}
              >
                {" "}
                See Less{" "}
              </button>
            </>
          ) : null}
        </>
      ) : (
        <>
          <PortfolioTemplate
            title={"Regulation Z Calculator"}
            status={"Deployed"}
            pillType={"deployed"}
            involve={"Front-end, Unit testing"}
            desc={
              <>
                <p>
                  {" "}
                  A Regulation Z calculator that calculates the amount of credit
                  due from purchases, cash advance fees, or merchant charges. A
                  credit protection feature is also included for credit
                  statements.
                </p>

                <p>
                  {" "}
                  This was my first project as an intern. Our task was to create
                  an interface to replace an Excel sheet that had the same
                  functions, but was becoming increasingly obsolete and
                  difficult to update.{" "}
                </p>
                <p>
                  This project was an internal application. Contact me if you
                  would like to know more about it.
                </p>
              </>
            }
            type={"1"}
            date={"2021-2022"}
            img={c1b}
            pillArray={regzUW}
          />

          <PortfolioTemplate
            title={"Underwriting"}
            status={"Deployed"}
            pillType={"deployed"}
            involve={"Front-end, Unit testing, Documentation"}
            desc={
              <>
                <p>
                  An underwriting application that allows the user to create a
                  custom credit line for a specific credit card.
                </p>
                <p>
                  This was one page of a larger internal project titled
                  RISK-246. The purpose of the project was to create, edit, and
                  manage credit card campaigns more efficiently.{" "}
                </p>
                <p>
                  Since this was an internal application, contact me if you
                  would like to know more about it.
                </p>
              </>
            }
            type={"2"}
            img={uw1}
            pillArray={regzUW}
          />

          <PortfolioTemplate
            title={"Digital Bank"}
            status={"In-progress"}
            pillType={"ongoing"}
            involve={"Custom form creation/handling, Unit Testing"}
            desc={
              <>
                <p>
                  {" "}
                  An application for customer savings and checkings accounts.
                </p>
                <p>
                  {" "}
                  Due to this being an ongoing project, I can only provide
                  sparse details about it. However, it's a very high-profile
                  project for the current company.{" "}
                </p>
                <p>Contact me if you'd like to know more about the project.</p>
              </>
            }
            type={"1"}
            img={c1b}
            pillArray={db}
          />

          {!seeMore ? (
            <button
              className="see-more"
              onClick={() => {
                setSeeMore(true);
              }}
            >
              See More
            </button>
          ) : null}

          {seeMore ? (
            <>
              <PortfolioTemplate
                title={"Glucose Journal"}
                status={"In-progress"}
                pillType={"ongoing"}
                involve={"Front-end, Design, Unit Testing"}
                desc={
                  <>
                    <p>
                      A simple journal-like application to track food and
                      glucose levels. The glucose level graph allows the user to
                      visually see their progress over time.
                    </p>
                    <p>
                      I created this project for my partner was diagnosed with
                      diabetes. For a month, we wanted to track his food intake
                      and glucose levels. I was using my notes app in my phone,
                      but hated the touchscreen interface. So I decided to make
                      my own!
                    </p>
                  </>
                }
                type={"2"}
                img={journal}
                pillArray={jrnl}
              />
              <PortfolioTemplate
                title={"Lip Tint Picker"}
                status={"In-progress"}
                pillType={"ongoing"}
                involve={"Front-end, Design, Unit Testing"}
                desc={
                  <>
                    <p>
                      An interactive and informative quiz-like application that
                      gives the user a recommended lip product based on desired
                      finish, texture, undertone, etc.
                    </p>
                    <p>
                      I wanted to create an application that fed off user inputs
                      but was also fun, trendy, and memorable. I was able to
                      combine two things I really enjoy, beauty and front-end
                      development.
                    </p>
                  </>
                }
                live={"https://github.com/jenawen/liptint"}
                viewText={"View GitHub Repository"}
                type={"1"}
                img={liptint}
                pillArray={ltp}
              />
              <PortfolioTemplate
                title={"Sawara's Portfolio"}
                status={"In-progress"}
                pillType={"ongoing"}
                involve={"Front-end, Unit testing"}
                desc={
                  <>
                    <p>
                      A portfolio site for a UX Designer to showcase her
                      projects.
                    </p>
                    <p>
                      I was commissioned by my friend to build a website for her
                      that she designed using Figma. Building this website
                      exposed me more to Figma and how it works, which motivated
                      me to try and use it myself.
                    </p>
                  </>
                }
                live={"https://github.com/jenawen/sawara"}
                viewText={"View GitHub Repository"}
                type={"2"}
                img={sawara}
                pillArray={portfolios}
              />
              <PortfolioTemplate
                title={"Personal Portfolio V.1"}
                status={"Deployed"}
                pillType={"deployed"}
                involve={"Front-end, Unit testing"}
                live={"https://jenaadkins.gitlab.io/portfolio/"}
                viewText={"View Live"}
                desc={
                  <>
                    <p>My first attempt at a personal site/portfolio.</p>
                    <p>
                      I first started development with hand-drawn sketches of
                      what I wanted my site to look like. After a few
                      renditions, I decided to build using handdrawn wireframes
                      as reference
                    </p>
                    <p>
                      Overall, it functioned well but I was ultimately
                      unsatisfied with it and decided to do a redesign, focusing
                      more on responsiveness and efficiency.
                    </p>
                  </>
                }
                type={"1"}
                img={portfolio}
                pillArray={p1}
              />
              <PortfolioTemplate
                title={"Personal Portfolio V.2"}
                status={"Maintenance"}
                pillType={"maintain"}
                involve={"Front-end, Design, Unit testing"}
                live={
                  "https://www.figma.com/file/OwdsgAMnJqcj0HZVGCABxU/Portfolio-Pt2?type=design&node-id=0%3A1&mode=design&t=2mbYdgFCf1th3d7r-1"
                }
                viewText={"View Figma File"}
                desc={
                  <>
                    <p>
                      My second attempt at a personal site/portfolio, using
                      Figma for the first time for the design.
                    </p>
                    <p>
                      I created my first portfolio mostly on a whim without a
                      real definite design. I had handdrawn sketches, but did
                      not use any design software, and was developing and adding
                      things where I saw fit.
                    </p>
                    <p>
                      I decided to do a redesign to create a more responsive and
                      elegant feel that also showed off more front-end
                      techniques I've acquired over the years.
                    </p>
                  </>
                }
                type={"2"}
                img={portfolio2}
                pillArray={portfolios}
              />

              <button
                className="see-more"
                onClick={() => {
                  setSeeMore(false);
                }}
              >
                {" "}
                See Less{" "}
              </button>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Portfolio;
