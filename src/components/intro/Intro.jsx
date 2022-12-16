import React from "react";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import IntroBottom from "./intro-bottom/IntroBottom";
import Loading from "../loading/Loading";
import "./Intro.scss";

const Intro = () => {
  const width = window.innerWidth;
  return (
    <div className="intro-container">
      {width < 700 && (
        <div id="light">
          <div id="lineh1"></div>
          <div id="lineh2"></div>
          <div id="lineh3"></div>
        </div>
      )}
      <div className="intro-navigation">
        <Logo />
        <Navigation />
      </div>
      <div className="intro-title">
        <h1>WE ARE WEBSTER</h1>
        <h1>WE IMPROVE YOUR</h1>
        <h1>WORK & ATTRACTIVE</h1>
      </div>
      <div className="intro-bottom">
        <IntroBottom />
      </div>
      <Loading />
    </div>
  );
};

export default Intro;
