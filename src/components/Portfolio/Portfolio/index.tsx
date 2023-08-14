/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PortfolioTemplate from "../PortfolioTemplate/index";
import "./index.css";
import uwmockup from "../../../assets/uwmockup.svg";
import c1bicon from "../../../assets/c1bicon.svg";
import ltpicon from "../../../assets/ltpicon.svg";
import sawaramu from "../../../assets/sawaramu.svg";
import pmockups from "../../../assets/pmockups.svg";
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
import PortfolioTemplate2 from "../PortfolioTemplate2";

const Portfolio = (props: any) => {
  const { pageType } = props;
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="portfolio-container">
      <div className="portfolio-title">My Projects</div>

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
          <PortfolioTemplate2
            title={"Underwriting"}
            date={"2021 - 2022"}
            image={uwmockup}
            description={UWDesc()}
            pills={regzUW}
            // viewText={}
            type={"mockup"}
          />

          <PortfolioTemplate2
            title={"Sawara's Portfolio"}
            date={"2023"}
            image={sawaramu}
            description={SawaraDesc()}
            pills={sawarap}
            viewText={"View Live"}
            url={"https://sawara.vercel.app/"}
            type={"mockup"}
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
              <PortfolioTemplate2
                title={"Regulation Z"}
                date={"2021 - 2022"}
                // image={sawaramu}
                description={RegZDesc()}
                pills={regzUW}
                // viewText={"View Live"}
                // url={"https://sawara.vercel.app/"}
                type={"icon"}
                icon={c1bicon}
              />

              <PortfolioTemplate2
                title={"Personal Portfolio"}
                date={"2023"}
                image={pmockups}
                description={P1Desc()}
                pills={p2}
                viewText={"View Live"}
                url={"https://jenaadkins.gitlab.io/portfolio/"}
                type={"mockup"}
              />

              <PortfolioTemplate2
                title={"Digital Bank"}
                date={"2023 (In-progress)"}
                // image={pmockups}
                description={DBDesc()}
                pills={db}
                type={"icon"}
                icon={c1bicon}
              />

              <PortfolioTemplate2
                title={"Lip Tint Picker"}
                date={"2023 (In-progress)"}
                // image={pmockups}
                description={LTPDesc()}
                pills={ltp}
                viewText={"View GitHub Repo"}
                url={"https://github.com/jenawen/liptint"}
                type={"icon"}
                icon={ltpicon}
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
