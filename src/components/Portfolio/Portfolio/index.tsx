/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./index.css";
import uwmockup from "../../../assets/uwmockup.svg";
import c1bicon from "../../../assets/c1bicon.svg";
import ltpicon from "../../../assets/ltpicon.svg";
import sawaramu from "../../../assets/sawaramu.svg";
import pmockups from "../../../assets/pmockups.svg";
import pmockups1 from "../../../assets/psinglemu.svg";
import uwsmol from "../../../assets/uwsmallmu.svg";
import MobilePortfolio from "../MobilePortfolio";
import {
  DBDesc,
  LTPDesc,
  P1Desc,
  RegZDesc,
  SawaraDesc,
  UWDesc,
  regzUW,
  db,
  ltp,
  sawarap,
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
            title={"Underwriting"}
            date={"2021 - 2022"}
            image={uwsmol}
            description={UWDesc()}
            pills={regzUW}
            // viewText={}
            type={"mockup"}
          />
          <MobilePortfolio
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
              <MobilePortfolio
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
              <MobilePortfolio
                title={"Personal Portfolio"}
                date={"2023"}
                image={pmockups1}
                description={P1Desc()}
                pills={p2}
                viewText={"View Live"}
                url={"https://jenaadkins.gitlab.io/portfolio/"}
                type={"mockup"}
              />
              <MobilePortfolio
                title={"Digital Bank"}
                date={"2023 "}
                // image={pmockups}
                description={DBDesc()}
                pills={db}
                type={"icon"}
                icon={c1bicon}
              />
              <MobilePortfolio
                title={"Lip Tint Picker"}
                date={"2023"}
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
