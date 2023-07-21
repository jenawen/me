import Header from "../Header";
import Landing from "../Landing";
import "./index.css";
import "../../fonts/ebgaramond.ttf";
import "../../fonts/notosans.ttf";
const Wrapper = () => {
  return (
    <div className="parent">
      <Header />
      <Landing />
    </div>
  );
};

export default Wrapper;
