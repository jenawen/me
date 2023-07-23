/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.css";
import homeicon from "../../../assets/homeicon.svg";
const Header = (props: any) => {
  const { setCurrent } = props;
  return (
    <div className="header-parent">
      <div
        onClick={() => {
          setCurrent(1);
        }}
        className="icon"
      >
        <img src={homeicon} />
      </div>

      <div className="links">
        <div
          className="link-1"
          onClick={() => {
            setCurrent(2);
          }}
        >
          Portfolio
        </div>
        <div
          className="link-2"
          onClick={() => {
            setCurrent(3);
          }}
        >
          About Me
        </div>
        <div
          className="link-3"
          onClick={() => {
            setCurrent(4);
          }}
        >
          Skill Set
        </div>
        <div
          className="link-4"
          onClick={() => {
            setCurrent(5);
          }}
        >
          Contact Me
        </div>
      </div>
    </div>
  );
};

export default Header;
