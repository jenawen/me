/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.css";
import Pill from "../../Pill";

interface IPortfolioTemplate2 {
  title: string;
  date: string;
  image: any | null;
  description: any;
  pills: any;
  viewText: string | null;
  url: any | null;
  type: string;
  icon: any;
}

const PortfolioTemplate2 = (props: IPortfolioTemplate2) => {
  const { title, date, image, description, pills, viewText, url, type, icon } =
    props;

  return (
    <div className="outer-container">
      {viewText ? (
        <>
          <div className="view-text">
            <div className="circles-group">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
            </div>
            <div onClick={() => window.open(` ${url}`, "_blank")}>
              {" "}
              &nbsp;{viewText}&nbsp;{" "}
            </div>
            <div className="circles-group">
              <div className="circle3"></div>
              <div className="circle2"></div>
              <div className="circle1"></div>
            </div>
          </div>
        </>
      ) : null}

      <div className="template-cont">
        {type === "mockup" ? (
          <div className="p-photo-big">
            <img src={image} id="proj-p" />
          </div>
        ) : null}

        <div className={`p-text-${type}`}>
          {type === "mockup" ? (
            <div className="p-title">
              {title}
              <div className="p-date">&nbsp;{date}</div>
            </div>
          ) : null}
          {type === "icon" ? (
            <div className="p-title">
              <img src={icon} id="p-icon" />

              {title}
              <div className="p-date">&nbsp;{date}</div>
            </div>
          ) : null}

          <div className="p-desc">{description}</div>
          <div className="p-pills">
            {pills.map((e: { text: string; status: string }, i: number) => (
              <Pill text={e.text} status={e.status} key={i} link={null} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTemplate2;
