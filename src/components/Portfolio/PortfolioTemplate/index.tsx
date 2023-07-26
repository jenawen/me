/* eslint-disable @typescript-eslint/no-explicit-any */
import Pill from "../../Pill";
import "./index.css";

const PortfolioTemplate = (props: any) => {
  const {
    title,
    status,
    pillType,
    involve,
    img,
    desc,
    type,
    live,
    viewText,
    pillArray,
  } = props;

  return (
    <div className="template-parent">
      <div className="top-template">
        <div className="img">
          <img style={{ width: "520px" }} src={`${img}`} />{" "}
        </div>

        <div className="side-text">
          <div className="side-title">{title}</div>

          <p>
            Current status: <Pill text={status} status={pillType} />
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

      <div className="bottom-template">
        <div className="pill-text">
          {pillArray.map((e: { text: string; status: string }) => (
            <Pill text={e.text} status={e.status} />
          ))}
        </div>
        <div className={`desc-${type}`}>{desc}</div>
      </div>
    </div>
  );
};

export default PortfolioTemplate;
