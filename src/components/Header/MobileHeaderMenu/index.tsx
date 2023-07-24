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
            <div className="link">LinkedIn</div>
            <div className="link">GitLab</div>
            <div className="link">GitHub</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeaderMenu;
