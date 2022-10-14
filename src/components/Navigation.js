import React, { useState } from "react";
import Logo from "../assets/mylogo.gif";
const Navigation = () => {
  const [showBurger, setShowBurger] = useState(false);

  return (
    <nav className="d-flex justify-content-between fs-6  ">
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <ul className="ul-nav d-flex align-items-center gap-3">
        <li>About</li>
        <li>GitHub Repositories</li>
        <li>Knowledge</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>
          <button className="resume">Resume</button>
        </li>
      </ul>

      {/* burger animation */}
      <div
        onClick={() => setShowBurger(!showBurger)}
        className={showBurger ? " burger open" : "burger"}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {showBurger && (
        <div className="sideBar-container">
          <div className="left-side"></div>
          <ul className="ul-burger ">
            <li>About</li>
            <li>GitHub Repositories</li>
            <li>Knowledge</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>
              <button className="resume">Resume</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
