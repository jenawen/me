import "./index.css";
const PortfolioTemplate = (props: any) => {
  const { title, status, involve, img, date, desc, type, live, viewText } =
    props;
  return (
    <div className="template-parent">
      <div className="top-template">
        <div className="img">
          <img style={{ width: "520px" }} src={`${img}`} />{" "}
        </div>

        <div className="side-text">
          <div className="side-title">{title}</div>
          <p>{date}</p>
          <p>Current status: {status}</p>
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
      <div className={`desc-${type}`}>{desc}</div>
    </div>
  );
};

export default PortfolioTemplate;
