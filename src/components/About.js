import React from "react";
import ProfilePic from "../assets/profilepic.jpg";
const About = () => {
  return (
    <article>
      <div className="text-container">
        <h5>Hello, I'm</h5>
        <div className="text-wrap">
          <h1>Robertas Cvetinskis.</h1>
          <h1>Front-End Developer</h1>
        </div>
        <div>
          <p className="intro fs-5 ">
            Recently I finished TypeScript React and Node.js course at
            Codeacademy. Currently, I'm in search of a job or internship to
            become a professional developer.
          </p>
        </div>
      </div>
      <div className="img-container">
        <img src={ProfilePic} alt="profile-pic" />
      </div>
    </article>
  );
};

export default About;
