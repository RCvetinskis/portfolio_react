import React from "react";

const ProjectInfo = ({ animate }) => {
  return (
    <div
      className={
        animate ? "project-info p-2 infoAnimation" : "project-info p-2 "
      }
    >
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
  );
};

export default ProjectInfo;
