/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PortfolioTemplate from "../PortfolioTemplate/index";
import "./index.css";
// import regz from "../../../assets/portfoliopics/regz.png";
import uw1 from "../../../assets/portfoliopics/uw1.png";
import c1b from "../../../assets/c1b.svg";
import journal from "../../../assets/portfoliopics/journal.png";
import liptint from "../../../assets/portfoliopics/liptint.png";
import sawara from "../../../assets/sawarap.png";
import portfolio from "../../../assets/portfoliopics/portfolio.png";
import portfolio2 from "../../../assets/portfoliopics/portfolio2.png";
import MobilePortfolio from "../MobilePortfolio";
import {
  DBDesc,
  JournalDesc,
  LTPDesc,
  P1Desc,
  P2Desc,
  RegZDesc,
  SawaraDesc,
  UWDesc,
  regzUW,
  db,
  jrnl,
  ltp,
  sawarap,
  p1,
  p2,
} from "./Descriptions";

const Portfolio = (props: any) => {
  const { pageType } = props;
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="portfolio-container">
      <div className="portfolio-title">Portfolio</div>

      {pageType === "mobile" ? (
        <>
          <MobilePortfolio
            title={"Reg Z Calculator"}
            status={"Deployed"}
            pillType={"deployed"}
            involve={"Front-end, Unit testing"}
            desc={RegZDesc()}
            type={"1"}
            img={c1b}
            pillArray={regzUW}
          />
          <MobilePortfolio
            title={"Underwriting"}
            status={"Deployed"}
            pillType={"deployed"}
            involve={"Front-end, Unit testing, Documentation"}
            desc={UWDesc()}
            type={"2"}
            img={uw1}
            pillArray={regzUW}
          />

          <MobilePortfolio
            title={"Digital Bank"}
            status={"In-progress"}
            pillType={"ongoing"}
            involve={"Custom form creation/handling, Unit Testing"}
            desc={DBDesc()}
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
                live={"https://github.com/jenawen/sugarlvls"}
                viewText={"View GitHub Repository"}
                desc={JournalDesc()}
                type={"2"}
                img={journal}
                pillArray={jrnl}
              />
              <MobilePortfolio
                title={"Lip Tint Picker"}
                status={"In-progress"}
                pillType={"ongoing"}
                involve={"Front-end, UI/UX Design"}
                desc={LTPDesc()}
                live={"https://github.com/jenawen/liptint"}
                viewText={"View GitHub Repository"}
                type={"1"}
                img={liptint}
                pillArray={ltp}
              />
              <MobilePortfolio
                title={"Sawara's Portfolio"}
                status={"Deployed"}
                pillType={"deployed"}
                involve={"Front-end, Unit testing"}
                desc={SawaraDesc()}
                live={"https://sawara.vercel.app/"}
                viewText={"View Live"}
                type={"2"}
                img={sawara}
                pillArray={sawarap}
              />
              <MobilePortfolio
                title={"Personal Portfolio V.1"}
                status={"Deployed"}
                pillType={"deployed"}
                involve={"Front-end, UI/UX Design"}
                live={"https://jenaadkins.gitlab.io/portfolio/"}
                viewText={"View Live"}
                desc={P1Desc()}
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
                desc={P2Desc()}
                type={"2"}
                img={portfolio2}
                pillArray={p2}
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
            desc={RegZDesc()}
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
            desc={UWDesc()}
            type={"2"}
            img={uw1}
            pillArray={regzUW}
          />

          <PortfolioTemplate
            title={"Digital Bank"}
            status={"In-progress"}
            pillType={"ongoing"}
            involve={"Custom form creation/handling, Unit Testing"}
            desc={DBDesc()}
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
                live={"https://github.com/jenawen/sugarlvls"}
                viewText={"View GitHub Repository"}
                desc={JournalDesc()}
                type={"2"}
                img={journal}
                pillArray={jrnl}
              />
              <PortfolioTemplate
                title={"Lip Tint Picker"}
                status={"In-progress"}
                pillType={"ongoing"}
                involve={"Front-end, Design, Unit Testing"}
                desc={LTPDesc()}
                live={"https://github.com/jenawen/liptint"}
                viewText={"View GitHub Repository"}
                type={"1"}
                img={liptint}
                pillArray={ltp}
              />
              <PortfolioTemplate
                title={"Sawara's Portfolio"}
                status={"Deployed"}
                pillType={"deployed"}
                involve={"Front-end, Unit testing"}
                desc={SawaraDesc()}
                live={"https://sawara.vercel.app/"}
                viewText={"View Live"}
                type={"2"}
                img={sawara}
                pillArray={sawarap}
              />
              <PortfolioTemplate
                title={"Personal Portfolio V.1"}
                status={"Deployed"}
                pillType={"deployed"}
                involve={"Front-end, Unit testing"}
                live={"https://jenaadkins.gitlab.io/portfolio/"}
                viewText={"View Live"}
                desc={P1Desc()}
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
                desc={P2Desc()}
                type={"2"}
                img={portfolio2}
                pillArray={p2}
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
