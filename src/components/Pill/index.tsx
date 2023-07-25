import "./index.css";

const Pill = (props: any) => {
  const { text, link, status } = props;

  if (link) {
    return (
      <div
        className={`pill-${status}`}
        onClick={() => {
          window.open(`${link}`, "_blank");
        }}
      >
        {text}
      </div>
    );
  }
  return <div className={`pill-${status}`}>{text}</div>;
};

export default Pill;
