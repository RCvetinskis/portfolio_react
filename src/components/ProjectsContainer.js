import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Projects from "./Projects";
import UpComingProjects from "./UpComingProjects";
const ProjectsContainer = () => {
  const [showProjectsContent, setShowProjectsContent] = useState("Projects");
  return (
    <div className="projects-container">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <header>
        <div className="projects-nav d-flex justify-content-between">
          <h1
            onClick={() => setShowProjectsContent("Projects")}
            className={showProjectsContent === "Projects" ? "selected" : ""}
          >
            Projects
          </h1>
          <h1
            onClick={() => setShowProjectsContent("Upcomming")}
            className={
              showProjectsContent === "Upcomming"
                ? "selected text-end"
                : "text-end"
            }
          >
            Upcomming Projects
          </h1>
        </div>
      </header>
      {showProjectsContent === "Projects" ? <Projects /> : <UpComingProjects />}
    </div>
  );
};

export default ProjectsContainer;
