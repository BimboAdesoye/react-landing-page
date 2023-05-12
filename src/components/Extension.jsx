// import React from 'react'
import "../styles/Extension.css";
import Chrome from "../assets/logo-chrome.svg";
import firefox from "../assets/logo-firefox.svg";
import Opera from "../assets/logo-opera.svg";
import dot from "../assets/bg-dots.svg";

const Extension = () => {
  return (
    <div className="box block">
      <div className="extension-heading text-center">
        <h1>Download the extension</h1>
        <p>
          We've got more browsers in the pipeline.Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="extension-cards">
        <div className="extension-card">
          <img className="brand" src={Chrome} alt="" />
          <div className="text-center">
            <h2>Add to Chrome</h2>
            <p>Minimum version 62</p>
          </div>
          <img className="extension-img" src={dot} alt="" />
          <a href="#" className="btn btn-accent extension-btn">
            Add & Install Extension
          </a>
        </div>
        <div className="extension-card">
          <img className="brand" src={firefox} alt="" />
          <h2>Add to Chrome</h2>
          <p>Minimum version 55</p>
          <img className="extension-img" src={dot} alt="" />
          <a href="#" className="btn btn-accent extension-btn">
            Add & Install Extension
          </a>
        </div>
        <div className="extension-card">
          <img className="brand" src={Opera} alt="" />
          <h2>Add to Chrome</h2>
          <p>Minimum version 46</p>
          <img className="extension-img" src={dot} alt="" />
          <a href="#" className="btn btn-accent extension-btn">
            Add & Install Extension
          </a>
        </div>
      </div>
    </div>
  );
};

export default Extension;
