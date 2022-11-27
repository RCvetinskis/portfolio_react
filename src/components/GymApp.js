import React from "react";
import { useState } from "react";
const GymApp = () => {
  const [play, setPlay] = useState(false);
  return (
    <div>
      <div className="phone">
        <div className={play ? "screen" : "pause"}></div>
        <div className="btn-container">
          <button onClick={() => setPlay(!play)}>
            {play ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GymApp;
