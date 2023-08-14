/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.css";
import homeicon from "../../../assets/logonew.svg";
import { useState, useEffect } from "react";
const Header = (props: any) => {
  const { setCurrent } = props;

  const [isOpen, setIsOpen] = useState(true);

  const navToggle = document.querySelector(".nav-toggle");
  const bars = document.querySelectorAll(".bar");

  console.log(bars);

  const toggleMenu = (e) => {
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
    <div className="header-parent">
      {isOpen ? (
        <>
          <div className={`links-${isOpen}`}>
            <div
              className="link"
              onClick={() => {
                setCurrent(1);
              }}
            >
              jena
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
