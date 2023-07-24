import "./index.css";

const MobileHeaderMenu = (props: any) => {
  const { setOpenMenu } = props;
  return (
    <div className="menu-parent">
      <div className="menu-shadow">
        <div
          onClick={() => {
            setOpenMenu(false);
          }}
          className="menu-card"
          id="slide"
        >
          Menu Menu
        </div>
      </div>
    </div>
  );
};

export default MobileHeaderMenu;
