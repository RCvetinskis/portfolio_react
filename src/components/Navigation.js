import React, { useState } from "react";
import Logo from "../assets/mylogo.gif";
const Navigation = ({ showContent, setShowContent }) => {
  const [showBurger, setShowBurger] = useState(false);

  return (
    <nav className="d-flex justify-content-between fs-6  ">
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <ul className="ul-nav d-flex align-items-center gap-3">
        <li
          style={
            showContent === "About"
              ? {
                  color: "#06d6a0",
                  transform: "translate(0%, 30%)",
                  boxShadow: "2px 2px #06d6a0",
                }
              : { color: "inherit" }
          }
          onClick={() => setShowContent("About")}
        >
          About
        </li>
        <li
          style={
            showContent === "Github"
              ? {
                  color: "#06d6a0",
                  transform: "translate(0%, 30%)",
                  boxShadow: "2px 2px #06d6a0",
                }
              : { color: "inherit" }
          }
          onClick={() => setShowContent("Github")}
        >
          GitHub Repositories
        </li>
        <li
          style={
            showContent === "Knowledge"
              ? {
                  color: "#06d6a0",
                  transform: "translate(0%, 30%)",
                  boxShadow: "2px 2px #06d6a0",
                }
              : { color: "inherit" }
          }
          onClick={() => setShowContent("Knowledge")}
        >
          Knowledge
        </li>
        <li
          style={
            showContent === "Projects"
              ? {
                  color: "#06d6a0",
                  transform: "translate(0%, 30%)",
                  boxShadow: "2px 2px #06d6a0",
                }
              : { color: "inherit" }
          }
          onClick={() => setShowContent("Projects")}
        >
          Projects
        </li>
        <li
          style={
            showContent === "Contact"
              ? {
                  color: "#06d6a0",
                  transform: "translate(0%, 30%)",
                  boxShadow: "2px 2px #06d6a0",
                }
              : { color: "inherit" }
          }
          onClick={() => setShowContent("Contact")}
        >
          Contact
        </li>
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
            <li
              style={
                showContent === "About"
                  ? {
                      color: "#06d6a0",
                      transform: "translate(0%, 30%)",
                      boxShadow: "2px 2px #06d6a0",
                    }
                  : { color: "inherit" }
              }
              onClick={() => {
                setShowContent("About");
                setShowBurger(!showBurger);
              }}
            >
              About
            </li>
            <li
              style={
                showContent === "Github"
                  ? {
                      color: "#06d6a0",
                      transform: "translate(0%, 30%)",
                      boxShadow: "2px 2px #06d6a0",
                    }
                  : { color: "inherit" }
              }
              onClick={() => {
                setShowContent("Github");
                setShowBurger(!showBurger);
              }}
            >
              GitHub Repositories
            </li>
            <li
              style={
                showContent === "Knowledge"
                  ? {
                      color: "#06d6a0",
                      transform: "translate(0%, 30%)",
                      boxShadow: "2px 2px #06d6a0",
                    }
                  : { color: "inherit" }
              }
              onClick={() => {
                setShowContent("Knowledge");
                setShowBurger(!showBurger);
              }}
            >
              Knowledge
            </li>
            <li
              style={
                showContent === "Projects"
                  ? {
                      color: "#06d6a0",
                      transform: "translate(0%, 30%)",
                      boxShadow: "2px 2px #06d6a0",
                    }
                  : { color: "inherit" }
              }
              onClick={() => {
                setShowContent("Projects");
                setShowBurger(!showBurger);
              }}
            >
              Projects
            </li>
            <li
              style={
                showContent === "Contact"
                  ? {
                      color: "#06d6a0",
                      transform: "translate(0%, 30%)",
                      boxShadow: "2px 2px #06d6a0",
                    }
                  : { color: "inherit" }
              }
              onClick={() => {
                setShowContent("Contact");
                setShowBurger(!showBurger);
              }}
            >
              Contact
            </li>
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
