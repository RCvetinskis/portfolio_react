import React from "react";
import GymApp from "./GymApp";

const UpComingProjects = () => {
  return (
    <div className="upcomming-projects">
      <GymApp />
      <div className="about-project">
        <div>
          <h3>Gym Application</h3>
          <p>
            Technologies: <span>React-Native , Expo, Node.js , Puppeteer</span>
          </p>
        </div>
        <div className="app-goal">
          Creating user friendly gym application so users could track progress,
          update weights, reps, count total time spent in the gym and kcal
          burned.
          <br />
          Application will have all gym exercises with example or description.
          <br />
        </div>
      </div>
    </div>
  );
};

export default UpComingProjects;
