// import React from "react";
import "../styles/Main.css";
import illustration from "../assets/illustration-features-tab-1.svg";

const Main = () => {
  return (
    <div className="main box block mt-5">
      <div className="main-picture">
        <div>
          <img className="main-image" src={illustration} alt="" />
          <div className="background"></div>
        </div>
      </div>
      <div className="main-text">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="buttons">
          <a href="#" className="btn btn-blue blue">
            Get it on Chrome
          </a>
          <a href="#" className="btn btn-white white">
            Get it on Firefox
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
