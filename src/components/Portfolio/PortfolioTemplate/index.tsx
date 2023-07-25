import Pill from "../../Pill";
import "./index.css";
const PortfolioTemplate = (props: any) => {
  const { title, status, involve, img, desc, type, live, viewText } = props;
  return (
    <div className="template-parent">
      <div className="top-template">
        <div className="img">
          <img style={{ width: "520px" }} src={`${img}`} />{" "}
        </div>

        <div className="side-text">
          <div className="side-title">{title}</div>

          <p>
            Current status: <Pill text={status} status={"maintain"} />
          </p>
          <p>{involve}</p>

          {live ? (
            <p
              className="link-p"
              onClick={() => window.open(` ${live}`, "_blank")}
            >
              {viewText}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <div className={`desc-${type}`}>{desc}</div>
      </div>
    </div>
  );
};

export default PortfolioTemplate;
