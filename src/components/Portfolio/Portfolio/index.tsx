/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./index.css";
import uwmockup from "../../../assets/uwmockup.svg";
import c1bicon from "../../../assets/c1bicon.svg";
import glucose from "../../../assets/glucose.svg";
import sawaramu from "../../../assets/sawara2.svg";
import pmockups from "../../../assets/pmockups.svg";
import pmockups1 from "../../../assets/psinglemu.svg";
import uwsmol from "../../../assets/uwsmallmu.svg";
import MobilePortfolio from "../MobilePortfolio";
import {
  DBDesc,
  P1Desc,
  RegZDesc,
  SawaraDesc,
  UWDesc,
  regzUW,
  db,
  sawarap,
  p2,
  GlucoseDesc,
  pglucose,
} from "./Descriptions";
import PortfolioTemplate2 from "../PortfolioTemplate2";

const Portfolio = (props: any) => {
  const { pageType } = props;
  const [seeMore, setSeeMore] = useState<boolean>(false);

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
            type={"mockup"}
            viewText={null}
            url={null}
            icon={null}
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
            icon={null}
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
                image={null}
                description={RegZDesc()}
                pills={regzUW}
                viewText={null}
                url={null}
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
                icon={null}
              />
              <MobilePortfolio
                title={"Digital Bank"}
                date={"2023 "}
                image={null}
                description={DBDesc()}
                pills={db}
                type={"icon"}
                icon={c1bicon}
                viewText={null}
                url={null}
              />
              <MobilePortfolio
                title={"Glucose Dashboard"}
                date={"2023"}
                image={null}
                description={GlucoseDesc()}
                pills={pglucose}
                viewText={"View GitHub Repo"}
                url={"https://github.com/jenawen/glucose"}
                type={"icon"}
                icon={glucose}
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
            viewText={null}
            type={"mockup"}
            url={null}
            icon={null}
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
            icon={null}
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
                image={null}
                description={RegZDesc()}
                pills={regzUW}
                viewText={null}
                url={null}
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
                icon={null}
              />

              <PortfolioTemplate2
                title={"Digital Bank"}
                date={"2023 (In-progress)"}
                image={null}
                description={DBDesc()}
                pills={db}
                type={"icon"}
                icon={c1bicon}
                viewText={null}
                url={null}
              />

              <PortfolioTemplate2
                title={"Glucose Level Dashboard"}
                date={"2023 (In-progress)"}
                image={null}
                description={GlucoseDesc()}
                pills={pglucose}
                viewText={"View GitHub Repo"}
                url={"https://github.com/jenawen/glucose"}
                type={"icon"}
                icon={glucose}
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
