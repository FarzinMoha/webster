import React from "react";
import "./FooterBg.scss";

const FooterBg = ({scrollPosition , isVisible , scrollarray }) => {
  const speed = 100
    const scaleX1 = !scrollarray[2] && scrollPosition <  scrollarray[2] ? 0 : ((scrollPosition-scrollarray[2])/speed)
    const scaleX2 = scrollarray[2] && scrollPosition <  (scrollarray[2]+20) ? 0 : ((scrollPosition-(scrollarray[2]+20))/speed)
    const scaleX3 = scrollarray[2] && scrollPosition <  (scrollarray[2]+40) ? 0 : ((scrollPosition-(scrollarray[2]+40))/speed)
    const scaleX4 = scrollarray[2] && scrollPosition <  (scrollarray[2]+60) ? 0 : ((scrollPosition-(scrollarray[2]+60))/speed)
    const scaleX5 = scrollarray[2] && scrollPosition <  (scrollarray[2]+80) ? 0 : ((scrollPosition-(scrollarray[2]+80))/speed)
    const scaleX6 = scrollarray[2] && scrollPosition <  (scrollarray[2]+100) ? 0 : ((scrollPosition-(scrollarray[2]+100))/speed)
    const scaleX7 = scrollarray[2] && scrollPosition <  (scrollarray[2]+120) ? 0 : ((scrollPosition-(scrollarray[2]+120))/speed)
    const scaleX8 = scrollarray[2] && scrollPosition <  (scrollarray[2]+140) ? 0 : ((scrollPosition-(scrollarray[2]+140))/speed)
    const scaleX9 = scrollarray[2] && scrollPosition <  (scrollarray[2]+160) ? 0 : ((scrollPosition-(scrollarray[2]+160))/speed)
    const scaleX10 = scrollarray[2] && scrollPosition <  (scrollarray[2]+180) ? 0 : ((scrollPosition-(scrollarray[2]+180))/speed)
    const scaleX11 = scrollarray[2] && scrollPosition <  (scrollarray[2]+200) ? 0 : ((scrollPosition-(scrollarray[2]+200))/speed)
    const scaleX12 = scrollarray[2] && scrollPosition <  (scrollarray[2]+220) ? 0 : ((scrollPosition-(scrollarray[2]+220))/speed)
    const scaleX13 = scrollarray[2] && scrollPosition <  (scrollarray[2]+240) ? 0 : ((scrollPosition-(scrollarray[2]+240))/speed)
    const scaleX14 = scrollarray[2] && scrollPosition <  (scrollarray[2]+260) ? 0 : ((scrollPosition-(scrollarray[2]+260))/speed)
    const scaleX15 = scrollarray[2] && scrollPosition <  (scrollarray[2]+280) ? 0 : ((scrollPosition-(scrollarray[2]+280))/speed)
    const scaleX16 = scrollarray[2] && scrollPosition <  (scrollarray[2]+300) ? 0 : ((scrollPosition-(scrollarray[2]+300))/speed)
    const scaleX17 = scrollarray[2] && scrollPosition <  (scrollarray[2]+320) ? 0 : ((scrollPosition-(scrollarray[2]+320))/speed)
    const scaleX18 = scrollarray[2] && scrollPosition <  (scrollarray[2]+340) ? 0 : ((scrollPosition-(scrollarray[2]+340))/speed)
    const scaleX19 = scrollarray[2] && scrollPosition <  (scrollarray[2]+360) ? 0 : ((scrollPosition-(scrollarray[2]+360))/speed)
    const scaleX20 = scrollarray[2] && scrollPosition <  (scrollarray[2]+380) ? 0 : ((scrollPosition-(scrollarray[2]+380))/speed)
    // console.log(scrollPosition);
    // console.log(isVisible);
    // console.log(scrollarray);
  return (
    <div className="footer-bg-container">
        <h1 className="footer-bg-title">WE ARE THE BEST</h1>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX1 >= 1 ? 1.1 : scaleX1} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX2 >= 1 ? 1.1 : scaleX2} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX3 >= 1 ? 1.1 : scaleX3} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX4 >= 1 ? 1.1 : scaleX4} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX5 >= 1 ? 1.1 : scaleX5} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX6 >= 1 ? 1.1 : scaleX6} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX7 >= 1 ? 1.1 : scaleX7} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX8 >= 1 ? 1.1 : scaleX8} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX9 >= 1 ? 1.1 : scaleX9} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX10 >= 1 ? 1.1 : scaleX10} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX11 >= 1 ? 1.1 : scaleX11} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX12 >= 1 ? 1.1 : scaleX12} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX13 >= 1 ? 1.1 : scaleX13} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX14 >= 1 ? 1.1 : scaleX14} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX15 >= 1 ? 1.1 : scaleX15} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX16 >= 1 ? 1.1 : scaleX16} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX17 >= 1 ? 1.1 : scaleX17} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX18 >= 1 ? 1.1 : scaleX18} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX19 >= 1 ? 1.1 : scaleX19} , 1)`} : null }></div>
      <div className="footer-bg" style={isVisible ? {transform:`scale(${scaleX20 >= 1 ? 1.1 : scaleX20} , 1)`} : null }></div>
    </div>
  );
};

export default FooterBg;
