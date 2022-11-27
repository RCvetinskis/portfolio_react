import React from "react";
import { Helmet } from "react-helmet-async";
import DiplomoPhoto from "../assets/dipomaphoto.png";

const Knowledge = () => {
  return (
    <div className="knowledge">
      <Helmet>
        <title>Experience</title>
      </Helmet>
      <header>
        <h1>Experience</h1>
      </header>

      <div className="experience-container ">
        <div className="year-container">
          <h5>2022 March - 2022 September</h5>
          <p>CodeAcademy</p>
        </div>

        <div className="exp">
          <h2>TypeScript, Node, React</h2>
          <p>
            Working on multiple projects , learning javascript, react ,node and
            many more fundamentals for becoming developer.
          </p>
        </div>
      </div>

      <div className="experience-container ">
        <div className="year-container">
          <h5>2022 March - 2022 September</h5>
          <p>
            {" "}
            Web Developer Bootcamp 2022 <br />
            <span>Udemy by Colt Steele</span>
          </p>
        </div>

        <div className="exp">
          <h2>HTML, CSS, JS, Node</h2>
          <p>
            The ins and outs of HTML5, CSS3, and Modern JavaScript. Making REAL
            web applications using cutting-edge technologies.
          </p>
        </div>
      </div>

      <div className="diploma">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://codeacademy.lt/programavimo-kursai/typescript/"
        >
          <img src={DiplomoPhoto} alt="diplomas" />
        </a>
      </div>
    </div>
  );
};

export default Knowledge;
