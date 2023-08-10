/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.css";
import homeicon from "../../../assets/logonew.svg";
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
        jena adkins
      </div>

      <div className="links">
        <div
          className="link-2"
          onClick={() => {
            setCurrent(2);
          }}
        >
          about me
        </div>

        <div
          className="link-1"
          onClick={() => {
            setCurrent(3);
          }}
        >
          projects
        </div>

        <div
          className="link-4"
          onClick={() => {
            setCurrent(4);
          }}
        >
          contact
        </div>
      </div>
    </div>
  );
};

export default Header;
