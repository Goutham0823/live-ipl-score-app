import React, { useState } from "react";
import { GiCricketBat } from "react-icons/gi"; // cricket bat icon
import { FaTrophy } from "react-icons/fa";     // trophy icon
import LiveScore from "../components/LiveScore/LiveScore";  // Import the LiveScore component
import "./HomePage.css";

const HomePage = () => {
  const [showLiveScore, setShowLiveScore] = useState(false);

  // Toggle live score display
  const handleLiveScoreClick = () => {
    setShowLiveScore(!showLiveScore);
  };

  return (
    <div className="container">
      <h1>🏏 Welcome to IPL Live Scores</h1>

      <button onClick={handleLiveScoreClick}>
        <GiCricketBat style={{ marginRight: "8px" }} />
        Live Score
      </button>

      <br /><br />

      <button>
        <FaTrophy style={{ marginRight: "8px" }} />
        Old Match Results
      </button>

      {showLiveScore && <LiveScore />} {/* Conditionally render LiveScore */}

    </div>
  );
};

export default HomePage;
