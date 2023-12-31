/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.css";
import { useState, useEffect } from "react";

interface IHeader {
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const Header = (props: IHeader) => {
  const { setCurrent } = props;
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const navToggle = document.querySelector(".nav-toggle");
  const bars = document.querySelectorAll(".bar");

  const toggleMenu = () => {
    bars.forEach((bar) => bar.classList.toggle("x"));
  };

  const toggle = () => {
    if (isOpen) {
      setIsOpen(false);
      if (navToggle) {
        navToggle.addEventListener("click", toggleMenu);
      }
    }
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const toggleScroll = () => {
    if (isOpen) {
      setIsOpen(false);
      if (navToggle) {
        navToggle.addEventListener("click", toggleMenu);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScroll);
    return () => {
      window.removeEventListener("scroll", toggleScroll);
    };
  }, []);

  return (
    <div className={`header-parent-${isOpen}`}>
      {isOpen ? (
        <>
          <div className={`links-${isOpen}`}>
            <div
              className="link"
              onClick={() => {
                setCurrent(1);
              }}
            >
              home
            </div>
            <div
              className="link"
              onClick={() => {
                setCurrent(2);
              }}
            >
              about me
            </div>

            <div
              className="link"
              onClick={() => {
                setCurrent(3);
              }}
            >
              projects
            </div>

            <div
              className="link"
              onClick={() => {
                setCurrent(4);
              }}
            >
              contact
            </div>
          </div>
        </>
      ) : null}

      <div
        onClick={() => {
          toggle();
        }}
        className="nav-toggle"
      >
        <div className={`bar-1-${isOpen}`}></div>
        <div className={`bar-2-${isOpen}`}></div>
        <div className={`bar-3-${isOpen}`}></div>
      </div>
    </div>
  );
};

export default Header;
