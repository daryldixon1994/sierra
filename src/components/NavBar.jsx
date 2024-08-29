import React from "react";
import "./style.css";
function NavBar() {
  return (
    <div className="navbar-container">
      <div>
        <img src="/sierra_nature_logo.svg" alt="" />
      </div>
      <div className="links-container">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <button className="main-btn">Take action</button>
      </div>
    </div>
  );
}

export default NavBar;
