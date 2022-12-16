import React, { useEffect, useState } from "react";
import About from "../about/About";
import Design from "../design/Design";
import Footer from "../footer/Footer";
import Intro from "../intro/Intro";
import NavScroll from "../nav-scroll/NavScroll";
import Projects from "../projects/Projects";
import WhoWeAre from "../who/WhoWeAre";

const Main = ({ add }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div style={{ width: "100%" }}>
      {add && (
          <NavScroll scrollPosition={scrollPosition} />
      )}
      <Intro />
      {add && (
        <>
          <Projects />
          <Design />
          <WhoWeAre scrollPosition={scrollPosition} />
          <About />
          <Footer scrollPosition={scrollPosition} />
        </>
      )}
    </div>
  );
};

export default Main;
