import "./index.css";
import "../../fonts/ebgaramond.ttf";
import "../../fonts/notosans.ttf";
import { useEffect, useState } from "react";
import Header from "../Header/DesktopHeader/index";
import Landing from "../Landing/DesktopLanding/index";
import Portfolio from "../Portfolio/DesktopPortfolio";
import AboutMe from "../AboutMe/index";
import SkillSet from "../SkillSet";
import ContactMe from "../ContactMe";
import MobileHeader from "../Header/MobileHeader";

const Wrapper = () => {
  const [pageType, setPageType] = useState("desktop");
  const [current, setCurrent] = useState(1);
  const width = window.innerWidth;

  useEffect(() => {
    if (width <= 480) {
      setPageType("mobile");
    }
  }, [width]);

  useEffect(() => {
    if (current === 6) {
      setCurrent(1);
    }
    if (document) {
      document
        .querySelector(`#slide-${current > 6 ? 1 : current}`)!
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [current]);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header?.classList.add("is-sticky")
      : header?.classList.remove("is-sticky");
  };

  return (
    <>
      <div className="parent">
        <div id="slide-1">
          {pageType === "mobile" ? (
            <div className="header-section d-none d-xl-block">
              {" "}
              <MobileHeader setCurrent={setCurrent} />{" "}
            </div>
          ) : (
            <div className="header-section d-none d-xl-block">
              {" "}
              <Header setCurrent={setCurrent} />{" "}
            </div>
          )}

          <Landing />
        </div>

        <div id="slide-2">
          <Portfolio />
        </div>

        <div id="slide-3">
          <AboutMe />
        </div>

        <div id="slide-4">
          <SkillSet />
        </div>

        <div id="slide-5">
          <ContactMe />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
