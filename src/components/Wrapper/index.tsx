import Header from "../Header/DesktopHeader/index";
import Landing from "../Landing/DesktopLanding/index";
import "./index.css";
import "../../fonts/ebgaramond.ttf";
import "../../fonts/notosans.ttf";
import Portfolio from "../Portfolio/DesktopPortfolio";
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
