import React, { useEffect, useRef, useState } from "react";
import Contact from "../contact/Contact";
import FooterBg from "../footer-bg/FooterBg";
import "./Footer.scss";

const Footer = ({ scrollPosition }) => {
  const footer = useRef();
  const [isVisible, setVisible] = useState(true);
  const [scrollarray, setScrollArray] = useState([]);
  useEffect(() => {
    const ref = footer.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(ref);
    return () => observer.unobserve(ref);
  }, []);
  useEffect(() => {
    setScrollArray([...scrollarray, scrollPosition]);
  }, [isVisible]);
  return (
    <div className="footer">
      <FooterBg
        isVisible={isVisible}
        scrollPosition={scrollPosition}
        scrollarray={scrollarray}
      />
      <div className="before-footer" ref={footer}>
        <h1>CONTACT US SOON</h1>
      </div>
      <div className="footer-container" id="footer">
        <Contact />
        <h1 className="footer-container-text" >
          simpler and more damn
        </h1>
        <div id="app" className="ad-App">
          <svg viewBox="0 0 766.924882629108 200" className="contact__title-curved">
            <path
              id="curve"
              d="M0 29.153918727677066C0 29.153918727677066 569.2320911112608 29.153918727677066 633.8476312419974 29.153918727677066 698.463171372734 29.153918727677066 737.770963901431 68.46171125637397 737.770963901431 133.07725138711055 737.770963901431 197.69279151784713 737.770963901431 1200 737.770963901431 1200"
            ></path>
            <text>
              <textPath href="#curve" fill="currentColor">
                The Concrete Club is about making it simpler and more damn fun!
              </textPath>
            </text>
          </svg>
        </div>
        <h1 className="contact-name">POWERD BY WEBSTER © 2022</h1>
      </div>
    </div>
  );
};

export default Footer;
