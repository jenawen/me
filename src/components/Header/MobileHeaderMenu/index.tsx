import "./index.css";
import x from "../../../assets/x.svg";
const MobileHeaderMenu = (props: any) => {
  const { setOpenMenu } = props;
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
            <div className="link">Portfolio</div>
            <div className="link">About Me</div>
            <div className="link">Skill Set</div>
            <div className="link">Contact Me</div>
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
              LinkedIn
            </div>
            <div
              className="link"
              onClick={() =>
                window.open("https://gitlab.com/jenaadkins", "_blank")
              }
            >
              GitLab
            </div>
            <div
              className="link"
              onClick={() =>
                window.open("https://github.com/jenawen", "_blank")
              }
            >
              GitHub
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeaderMenu;
