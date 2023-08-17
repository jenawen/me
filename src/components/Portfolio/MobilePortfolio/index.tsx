/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.css";
import Pill from "../../Pill";

const PortfolioTemplate2 = (props: any) => {
  const { title, date, image, description, pills, viewText, url, type, icon } =
    props;

  return (
    <div className={`outer-container-m-${type}`}>
      {type === "mockup" ? (
        <div className="p-photo-m">
          <img src={image} id="proj-p-m" />
        </div>
      ) : null}
      <div className={`template-${type}-m`}>
        <div className={`p-text-${type}-m`}>
          {type === "mockup" ? (
            <div className="p-title-m">
              {title}
              <div className="p-date-m">&nbsp;{date}</div>
            </div>
          ) : null}
          {type === "icon" ? (
            <div className="p-title-m">
              <img src={icon} id="p-icon-m" />

              {title}
              <div className="p-date-m">&nbsp;{date}</div>
            </div>
          ) : null}

          <div className="p-desc-m">{description}</div>
          <div className="p-pills-m">
            {pills.map((e: { text: string; status: string }) => (
              <Pill text={e.text} status={e.status} />
            ))}
          </div>
        </div>
      </div>

      {viewText ? (
        <>
          <div className="view-text-m">
            <div className="circles-group-m">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
            </div>
            <div onClick={() => window.open(` ${url}`, "_blank")}>
              {" "}
              &nbsp;{viewText}&nbsp;{" "}
            </div>
            <div className="circles-group-m">
              <div className="circle3"></div>
              <div className="circle2"></div>
              <div className="circle1"></div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PortfolioTemplate2;
