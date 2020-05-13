import React from "react";
import About from "../homeComponent/about";
import Skills from "../homeComponent/skills";
import "../../styles/styles.css";

function Home() {
  return (
    <div className="home-container">
      <div className="image-container">
        <div className="inner-container">
          <h1 className="hero-text">Samson Marikwa</h1>
          <h2 className="hero-text2">Fullstack Developer</h2>
          <a className="btn" href="/contact">
            Click Here
          </a>
        </div>
      </div>
      <About />
      <Skills />
    </div>
  );
}

export default Home;
