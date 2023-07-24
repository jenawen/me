/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.css";
import homeicon from "../../../assets/homeicon.svg";
import menu from "../../../assets/menu.svg";
import { useState } from "react";
import MobileHeaderMenu from "../MobileHeaderMenu";

const MobileHeader = (props: any) => {
  const { setCurrent } = props;
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      {openMenu ? (
        <MobileHeaderMenu setOpenMenu={setOpenMenu} setCurrent={setCurrent} />
      ) : null}
      <div className="mheader-parent">
        <div
          onClick={() => {
            setCurrent(1);
          }}
          className="icon"
        >
          <img src={homeicon} />
        </div>

        <div
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          <img src={menu} />
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
