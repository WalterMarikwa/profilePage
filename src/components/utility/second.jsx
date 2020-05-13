import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function SecondNav() {
  const navStyle = {
    color: "white",
  };

  return (
    <div className="mynav">
      <ul className="nav justify-content-center">
        <Link style={navStyle} to="/">
          <li className="nav-item">
            <a className="nav-link active">HOME</a>
          </li>
        </Link>
        <Link style={navStyle} to="/projects">
          <li className="nav-item">
            <a className="nav-link active">PROJECTS</a>
          </li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li className="nav-item">
            <a className="nav-link active">CONTACT ME</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SecondNav;
