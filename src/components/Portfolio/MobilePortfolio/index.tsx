import "./index.css";
const MobilePortfolio = (props: any) => {
  const { title, status, involve, img, date, desc, type, live, viewText } =
    props;
  return (
    <div className="template-parent-m">
      <div className="side-text-m">
        <div className="side-title-m">{title}</div>
        <div>{date}</div>
        <div>Current status: {status}</div>
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
    </div>
  );
};

export default MobilePortfolio;
