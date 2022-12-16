import React from "react";
import "./Navigation.scss";
import ScrollIntoView from "react-scroll-into-view";

const Navigation = () => {
  return (
    <div id="navigation" className="navigation-container">
      <ul className="navigation-items">
        <ScrollIntoView selector="#logo">
          <li className="navigation-item home">Home</li>
        </ScrollIntoView>
        <ScrollIntoView selector="#projects">
          <li className="navigation-item projects">Projects</li>
        </ScrollIntoView>
        <ScrollIntoView selector="#design">
          <li className="navigation-item design">Design</li>
        </ScrollIntoView>
        <ScrollIntoView selector="#about">
          <li className="navigation-item about">about</li>
        </ScrollIntoView>
        <ScrollIntoView selector="#footer">
          <li className="navigation-item contact">contact</li>
        </ScrollIntoView>
      </ul>
    </div>
  );
};

export default Navigation;
