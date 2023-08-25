import "./index.css";

interface IPill {
  text: string;
  link: string | null;
  status: string;
}
const Pill = (props: IPill) => {
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
