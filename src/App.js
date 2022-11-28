import "./style/main.scss";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Repositories from "./components/Repositories";
import Knowledge from "./components/Knowledge";
import ProjectsContainer from "./components/ProjectsContainer";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

function App() {
  const [showContent, setShowContent] = useState("About");

  return (
    <div className="page">
      <Helmet>
        <title>Robertas Portfolio</title>
      </Helmet>

      <Navigation setShowContent={setShowContent} showContent={showContent} />
      <div className="container-md">
        {showContent === "About" ? (
          <About />
        ) : showContent === "Github" ? (
          <Repositories showContent={showContent} />
        ) : showContent === "Knowledge" ? (
          <Knowledge />
        ) : showContent === "Projects" ? (
          <ProjectsContainer />
        ) : (
          <About />
        )}
      </div>

      <Footer />
    </div>
  );
}
export default App;
