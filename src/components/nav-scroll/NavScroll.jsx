import React, { useState } from "react";
import "./NavScroll.scss";
import ScrollIntoView from "react-scroll-into-view";
import HamburgerIcon from "../hamburger-icon/HamburgerIcon";

const NavScroll = ({ scrollPosition }) => {
  const [showMenu, setShowMenu] = useState(false);
  const width = window.innerWidth;
  return (
    <div
      className={showMenu ? "nav-scroll show" : "nav-scroll"}
      style={
        width < 769
          ? { display: "block" }
          : width >= 769 && scrollPosition > 410
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <div className="nav-scroll-container">
        <div className="nav-scroll-items">
          <div className="nav-scroll-icon" onClick={() => setShowMenu(!showMenu)}>
            <HamburgerIcon
              className="nav-scroll-icon"
              
            />
          </div>
          <ScrollIntoView selector="#logo">
            <h2
              className={showMenu ? "nav-scroll-item show" : "nav-scroll-item"}
              onClick={() => setShowMenu(false)}
            >
              Home
            </h2>
          </ScrollIntoView>
          <ScrollIntoView selector="#projects">
            <h2
              className={showMenu ? "nav-scroll-item show" : "nav-scroll-item"}
              onClick={() => setShowMenu(false)}
            >
              Projects
            </h2>
          </ScrollIntoView>
          <ScrollIntoView selector="#design">
            <h2
              className={showMenu ? "nav-scroll-item show" : "nav-scroll-item"}
              onClick={() => setShowMenu(false)}
            >
              Design
            </h2>
          </ScrollIntoView>
          <ScrollIntoView selector="#about">
            <h2
              className={showMenu ? "nav-scroll-item show" : "nav-scroll-item"}
              onClick={() => setShowMenu(false)}
            >
              About
            </h2>
          </ScrollIntoView>
          <ScrollIntoView selector="#footer">
            <h2
              className={showMenu ? "nav-scroll-item show" : "nav-scroll-item"}
              onClick={() => setShowMenu(false)}
            >
              contact
            </h2>
          </ScrollIntoView>
        </div>
      </div>
    </div>
    // <div className={scrollPosition>420 ? 'nev-scroll show' : 'nev-scroll'}><GiHamburgerMenu/></div>
  );
};

export default NavScroll;
