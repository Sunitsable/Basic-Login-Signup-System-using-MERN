// home.js
import React from "react";
import { useLocation } from "react-router-dom";
import "./Home.css"; // Import your custom CSS file

function Home() {
  const location = useLocation();

  return (
    <div className="homepage-container">
      <h1>Hello {location.state.id} and welcome to the home</h1>
      <p className="message">Enjoy your stay!</p>
    </div>
  );
}

export default Home;
