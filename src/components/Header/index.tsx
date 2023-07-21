import "./index.css";
import homeicon from "../../assets/homeicon.svg";
const Header = () => {
  return (
    <div className="header-parent">
      <div className="icon">
        <img src={homeicon} />
      </div>

      <div className="links">
        <div className="link-1">Portfolio</div>
        <div className="link-1">About Me</div>
        <div className="link-1">Skill Set</div>
        <div className="link-1">Contact Me</div>
      </div>
    </div>
  );
};

export default Header;
