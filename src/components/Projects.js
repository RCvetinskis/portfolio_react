import React, { useState } from "react";
import RobinZona from "../assets/robinzonascreenshot.png";
import ProjectInfo from "./ProjectInfo";

const Projects = () => {
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [animate, setAnimate] = useState(false);

  function showInfoAnimation() {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 300);
    setShowProjectInfo(true);
  }

  return (
    <div>
      <div className="projects">
        <div className="robinzona">
          <h3>
            Title: <span>Robinzona</span>
          </h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://robinzona.herokuapp.com/"
          >
            <div
              onMouseOver={showInfoAnimation}
              className="img-robinzona"
              onMouseOut={() => setShowProjectInfo(false)}
            >
              {showProjectInfo && <ProjectInfo animate={animate} />}

              <img src={RobinZona} alt="robinzona" />
            </div>
          </a>
          <div className="projectInfo-mobile">
            <div className="text-center mt-1">
              E-commerce website based on amazon.
            </div>
            <div className=" mt-1">Made with:</div>
            <div>
              React:{" "}
              <span>
                {" "}
                (Context, Redux, Bootstrap, Axios, and many other packages)
              </span>
              <br />
              Node.js: <span>(Mongoose, Express,JsonWebToken)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
