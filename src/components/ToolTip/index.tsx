/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./index.css";

export const ToolTip = (props: any) => {
  const { displayText, position = "top" } = props;

  const [active, setActive] = useState(false);

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
