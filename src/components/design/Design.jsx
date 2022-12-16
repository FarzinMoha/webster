import React from "react";
import Title from "../title/Title";
import "./Design.scss";
import design from '../../video/design.mp4'
import steps from '../../video/steps.mp4'
import time from '../../video/time.mp4'
import support from '../../video/support.mp4'

const Design = () => {
  return (
    <>
      <Title title={"web design"} id={"design"} />
      <div className="design-container">
        <div className="design-boxes-container">
          <div className="design-box">
            <h1 className="design-box-title">Design</h1>
            <div className="design-box-designText">
              <video className="design-box-image" autoPlay muted loop preload="metadata">
                <source src={design} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="design-text">
                <h1>1- Lorem Ipsum has been the industry's standard dummy</h1>
                <h1>2- Lorem Ipsum has been the industry's standard dummy</h1>
                <h1>3- Lorem Ipsum has been the industry's standard dummy</h1>
              </div>
            </div>
          </div>
          <div className="design-box">
            <h1 className="design-box-title">steps</h1>
            <div className="design-box-designText">
            <video className="design-box-image" autoPlay muted loop preload="metadata">
                <source src={steps} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="design-text">
                <h1>1- Lorem Ipsum has been the industry's standard dummy</h1>
                <h1>2- Lorem Ipsum has been the industry's standard dummy</h1>
                <h1>3- Lorem Ipsum has been the industry's standard dummy</h1>
              </div>
            </div>
          </div>
          <div className="design-box">
            <h1 className="design-box-title">time</h1>
            <div className="design-box-designText">
            <video className="design-box-image" autoPlay muted loop preload="metadata">
                <source src={time} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="design-text">
                <h1>1- Lorem Ipsum has been the industry's standard dummy</h1>
                <h1>2- Lorem Ipsum has been the industry's standard dummy</h1>
                <h1>3- Lorem Ipsum has been the industry's standard dummy</h1>
              </div>
            </div>
          </div>
          <div className="design-box">
            <h1 className="design-box-title">support</h1>
            <div className="design-box-designText">
            <video className="design-box-image" autoPlay muted loop preload="metadata">
                <source src={support} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="design-text">
                <h1>1- Lorem Ipsum has been the industry's standard dummy</h1>
                <h1>2- Lorem Ipsum has been the industry's standard dummy</h1>
                <h1>3- Lorem Ipsum has been the industry's standard dummy</h1>
              </div>
            </div>
          </div>
          <div className="design-box-end">
            <p>we are be with you</p>
            <p>step by step</p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
