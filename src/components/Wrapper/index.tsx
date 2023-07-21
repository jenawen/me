import Header from "../Header";
import Landing from "../Landing";
import "./index.css";
import "../../fonts/ebgaramond.ttf";
import "../../fonts/notosans.ttf";
import Portfolio from "../Portfolio";
const Wrapper = () => {
  return (
    <div className="parent">
      <Header />
      <Landing />
      <Portfolio />
    </div>
  );
};

export default Wrapper;
