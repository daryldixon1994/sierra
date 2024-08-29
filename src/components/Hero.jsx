import React from "react";
import "./style.css";
function Hero() {
  return (
    <div className="hero-container">
      <div className="desc">
        <h5>Welcome To</h5>
        <h1>Sierra Natural Park</h1>
        <button className="main-btn">Learn more</button>
      </div>
      <div>
        <h1 className="arrow">⬇</h1>
      </div>
    </div>
  );
}

export default Hero;
