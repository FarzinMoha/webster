import React from "react";
import Title from "../title/Title";
import "./Projects.scss";
import web1 from "../../image/web/1.jpg";
import web2 from "../../image/web/2.jpg";
import web3 from "../../image/web/3.jpg";
import web4 from "../../image/web/4.jpg";
import web5 from "../../image/web/5.jpg";
import web6 from "../../image/web/6.jpg";
const Projects = () => {
  return (
    <>
      <Title title={"projects"} id={'projects'} />
      <div className="projects-container">
        <div className="projects">
          <div className="project">
            <img className="project-image" src={web1} alt="web1" />
            <p className="project-title">
              HUMAN CENTRIK WEBSITE
            </p>
          </div>
          <div className="project">
            <img className="project-image" src={web2} alt="web2" />
            <p className="project-title">
              HUMAN CENTRIK WEBSITE
            </p>
          </div>
          <div className="project">
            <img className="project-image" src={web3} alt="web1" />
            <p className="project-title">
              HUMAN CENTRIK WEBSITE
            </p>
          </div>
          <div className="project">
            <img className="project-image" src={web4} alt="web2" />
            <p className="project-title">
              HUMAN CENTRIK WEBSITE
            </p>
          </div>
          <div className="project">
            <img className="project-image" src={web5} alt="web1" />
            <p className="project-title">
              HUMAN CENTRIK WEBSITE
            </p>
          </div>
          <div className="project">
            <img className="project-image" src={web6} alt="web2" />
            <p className="project-title">
              HUMAN CENTRIK WEBSITE
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
