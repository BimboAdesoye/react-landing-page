// import React from "react";
import "../styles/Features.css";
import picture from "../assets/illustration-features-tab-1.svg";

const Features = () => {
  return (
    <div className="features box block">
      <div className="features-heading text-center">
        <h1>Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="our-features text-center">
        <hr />
        <p className="first-feature">
          <a href="#">Simple Bookmarking</a>
        </p>
        <hr />
        <p>
          <a href="#">Speedy Searching</a>
        </p>
        <hr />
        <p>
          <a href="#">Easy Sharing</a>
        </p>
        <hr />
      </div>
      <div className="features-bookmark">
        <div className="features-bookmark-img">
          <img src={picture} alt="" />
          <div className="features-background"></div>
        </div>
        <div className="features-bookmark-text">
          <h1>Bookmark in one click</h1>
          <p>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          <button className="btn btn-blue">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
