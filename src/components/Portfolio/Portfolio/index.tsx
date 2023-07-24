import { useState } from "react";
import PortfolioTemplate from "../PortfolioTemplate/index";
import "./index.css";

const Portfolio = () => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="portfolio-container">
      <div className="portfolio-title"> Portfolio</div>

      <PortfolioTemplate
        title={"Reg Z"}
        status={"Deployed"}
        involve={"Front-end, Unit testing"}
        desc={
          " A Regulation Z calculator that calculates the amount of credit due from purchases, cash advance fees, or merchant charges. A credit protection feature is also included for credit statements. This was my first project as an intern. Our task was to create an interface to replace an Excel sheet that had the same functions, but was becoming increasingly obsolete and difficult to update. "
        }
        type={"1"}
      />

      <PortfolioTemplate
        title={"Underwriting"}
        status={"Deployed"}
        involve={"Front-end, Unit testing, Documentation"}
        desc={
          "An underwriting application that allows the user to create a custom credit line for a specific credit card. This was one page of a larger internal project titled RISK-246. The purpose of the project was to create, edit, and manage credit card campaigns more efficiently. "
        }
        type={"2"}
      />

      <PortfolioTemplate
        title={"Digital Bank"}
        status={"On-going"}
        involve={"Custom form creation/handling, Unit Testing"}
        desc={
          <>
            <p> An application for customer savings and checkings accounts.</p>
            <p>
              {" "}
              Due to this being an ongoing project, I can only provide sparse
              details about it. However, it's a very high-profile project for
              the current company.{" "}
            </p>
          </>
        }
        type={"1"}
      />

      {!seeMore ? (
        <div
          onClick={() => {
            setSeeMore(true);
          }}
        >
          See More
        </div>
      ) : null}

      {seeMore ? (
        <>
          <PortfolioTemplate
            title={"Glucose Journal"}
            status={"On-going"}
            involve={"Custom form creation/handling, Unit Testing"}
            desc={
              <>
                <p>
                  A simple journal-like application to track food and glucose
                  levels. The glucose level graph allows the user to visually
                  see their progress over time.
                </p>
                <p>
                  I created this project for my partner who had extremely high
                  blood sugar levels and was diagnosed with diabetes by his
                  doctor. For a month, we wanted to track his food intake and
                  glucose levels. I was using my notes app in my phone.
                </p>
              </>
            }
            type={"2"}
          />
          <PortfolioTemplate
            title={"Lip Tint Picker"}
            status={"On-going"}
            involve={"Custom form creation/handling, Unit Testing"}
            desc={
              <>
                <p>
                  An interactive and informative quiz-like application that
                  gives the user a recommended lip product.
                </p>
                <p>
                  I wanted to create an application that fed off user inputs but
                  was also fun and trendy. I was able to combine two things I
                  really enjoy, beauty and front-end development.
                </p>
              </>
            }
            type={"1"}
          />
          <PortfolioTemplate
            title={"Sawara's Portfolio"}
            status={"On-going"}
            involve={"Front-end, Unit testing"}
            desc={
              <>
                <p>
                  A portfolio site for a UX Designer to showcase her projects.
                </p>
                <p>
                  I was commissioned by my friend to build a website for her
                  that she designed using Figma. Building this website exposed
                  me more to Figma and how its works.
                </p>
              </>
            }
            type={"2"}
          />
          <PortfolioTemplate
            title={"Personal Portfolio V.1"}
            status={"Deployed"}
            involve={"Front-end, Unit testing"}
            desc={
              <>
                <p>My first attempt at a personal site/portfolio.</p>
                <p>
                  I first started development with handdrawn sketches of what I
                  wanted my site to look like. After a few renditions, I decided
                  to build using handdrawn wireframes as reference
                </p>
                <p>
                  Overall, it functioned well but I was ultimately unsatisfied
                  with it and decided to do a redesign, focusing more on
                  responsiveness and efficiency.
                </p>
              </>
            }
            type={"1"}
          />
          <PortfolioTemplate
            title={"Personal Portfolio V.2"}
            status={"Deployed"}
            involve={"Front-end, Unit testing"}
            desc={
              <>
                <p>
                  My second attempt at a personal site/portfolio, this time
                  using Figma for the design.
                </p>
                <p>
                  I created my first portfolio mostly on whim without a real
                  definite design in mind. I had handdrawn sketches, but did not
                  use any design software.
                </p>
                <p>
                  I decided to do a redesign to create a more responsive and
                  elegant feel that also showed off more front-end techniques
                  I've acquired over the years.
                </p>
              </>
            }
            type={"2"}
          />

          <div
            onClick={() => {
              setSeeMore(false);
            }}
          >
            {" "}
            See Less{" "}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Portfolio;
