/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./index.css";

interface IToolTip {
  displayText: string;
  position: string;
  children: any;
}

export const ToolTip = (props: IToolTip) => {
  const { displayText, position = "top" } = props;

  const [active, setActive] = useState<boolean>(false);

  const showTip = () => {
    setActive(true);
  };

  const hideTip = () => {
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      <div className="children"> {props.children} </div>
      {active && (
        <div className={`Tooltip-Tip ${position}`}>
          <i>{displayText}</i>
        </div>
      )}
    </div>
  );
};
