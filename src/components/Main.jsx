// import React from "react";
import illustration from "../assets/illustration-features-tab-1.svg";

const Main = () => {
  return (
    <div className="main box block mt-5">
      <div className="main-picture">
        <div>
          <div className="background"></div>
          <img className="main-image" src={illustration} alt="" />
        </div>
      </div>
      <div className="main-text mt-5">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="buttons">
          <a href="#" className="btn btn-blue">
            Get it on Chrome
          </a>
          <a href="#" className="btn btn-white">
            Get it on Firefox
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
