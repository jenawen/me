/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.css";
import x from "../../../assets/x.svg";
import linkedin from "../../../assets/linkedin.svg";
import github from "../../../assets/github.svg";
import gitlab from "../../../assets/gitlab.svg";

const MobileHeaderMenu = (props: any) => {
  const { setOpenMenu, setCurrent } = props;
  return (
    <div className="menu-parent">
      <div className="menu-shadow">
        <div className="menu-card" id="slide">
          <img
            src={x}
            onClick={() => {
              setOpenMenu(false);
            }}
          />
          <div className="menu-links">
            <div
              className="link-1"
              onClick={() => {
                setCurrent(2);
                setOpenMenu(false);
              }}
            >
              Portfolio
            </div>
            <div
              className="link-2"
              onClick={() => {
                setCurrent(3);
                setOpenMenu(false);
              }}
            >
              About Me
            </div>
            <div
              className="link-3"
              onClick={() => {
                setCurrent(4);
                setOpenMenu(false);
              }}
            >
              Skill Set
            </div>
            <div
              className="link-4"
              onClick={() => {
                setCurrent(5);
                setOpenMenu(false);
              }}
            >
              Contact Me
            </div>
          </div>

          <div className="sm-links">
            <div
              className="link"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jena-adkins/",
                  "_blank"
                )
              }
            >
              <img src={linkedin} style={{ width: "30px" }} />
            </div>
            <div
              className="link"
              onClick={() =>
                window.open("https://gitlab.com/jenaadkins", "_blank")
              }
            >
              <img src={gitlab} style={{ width: "30px" }} />
            </div>
            <div
              className="link"
              onClick={() =>
                window.open("https://github.com/jenawen", "_blank")
              }
            >
              <img src={github} style={{ width: "30px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeaderMenu;
