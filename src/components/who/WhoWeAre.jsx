import React, { useEffect, useRef, useState } from "react";
import "./WhoWeAre.scss";
import Title from "../title/Title";
import webster2 from "../../image/image.svg";
const WhoWeAre = ({ scrollPosition }) => {
  const webster = useRef();
  const [isVisible, setVisible] = useState(true);
  const [scrollarray, setScrollArray] = useState([]);
  const scale =
    isVisible && scrollPosition > scrollarray[2] ?  1 +(4*((scrollPosition - scrollarray[2]) / 70)) : 1;
  useEffect(() => {
    const ref = webster.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(ref);
    return () => observer.unobserve(ref);
  }, []);
  useEffect(()=>{
    setScrollArray([...scrollarray , scrollPosition])
  },[isVisible])
  return (
    <>
      <Title title={"WHO WE ARE"} id={"about"} />
      <div className="we-are-container">
        <img
          className="we-are-logo"
          src={webster2}
          alt="web"
          style={{ transform: isVisible && `scale(${scale})` , transformOrigin: '51% 47%' , opacity:scale > 30 ? `${1-(scale/80)}` : 1  }}
        />
        <div className="we-are" ref={webster}>
          <h1 className="we-are-about-title">WE ARE WEBSTER</h1>
          <p className="we-are-about">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
