import Pill from "../../Pill";
import "./index.css";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MobilePortfolio = (props: any) => {
  const {
    title,
    status,
    pillType,
    involve,
    img,
    date,
    desc,
    type,
    live,
    viewText,
    pillArray,
  } = props;
  return (
    <div className="template-parent-m">
      <div className="side-text-m">
        <div className="side-title-m">{title}</div>
        <div>{date}</div>
        <div>
          Current status: <Pill text={status} status={pillType} />
        </div>
        <div>{involve}</div>
        {live ? (
          <p
            className="m-link"
            onClick={() => window.open(` ${live}`, "_blank")}
          >
            {viewText}
          </p>
        ) : null}
      </div>

      <div className="img-m">
        <img style={{ maxWidth: "330px" }} src={`${img}`} />{" "}
      </div>

      <div className={`desc-${type}-m`}>{desc}</div>
      <div className="pill-text">
        {pillArray.map((e: { text: string; status: string }) => (
          <Pill text={e.text} status={e.status} />
        ))}
      </div>
    </div>
  );
};

export default MobilePortfolio;
