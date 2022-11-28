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
          I am creating a user-friendly gym application so users could track
          progress, update weights, and reps, and count total time spent in the
          gym and kcal burned.
          <br />
          The application will have all gym exercises with examples or
          descriptions.
          <br />
        </div>
      </div>
    </div>
  );
};

export default UpComingProjects;
