import "./index.css";
const PortfolioTemplate = (props: any) => {
  const { title, status, involve, img, desc, type } = props;
  return (
    <div className="template-parent">
      <div className="top-template">
        <div className="img">img </div>

        <div className="side-text">
          <div className="side-title">{title}</div>
          <p>status: {status}</p>
          <p>{involve}</p>
        </div>
      </div>
      <div className={`desc-${type}`}>{desc}</div>
    </div>
  );
};

export default PortfolioTemplate;
