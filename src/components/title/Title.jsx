import React from "react";
import FadeIn from '../fade-in/FadeIn.component'
import "./Title.scss";
const Title = ({ title , id }) => {
  return (
    <div className="title-container" id={id}>
      <FadeIn>
        <h1 className="title-text">{title}</h1>
      </FadeIn>
    </div>
  );
};

export default Title;
