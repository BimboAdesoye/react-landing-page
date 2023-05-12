// import React from 'react'
import "../styles/Footer.css";
import logo from "../assets/logo-bookmark.svg";
import facebook from "../assets/icon-facebook(1).svg";
import twitter from "../assets/icon-twitter(1).svg";

const Footer = () => {
  return (
    <footer className="block footer text-center">
      <div className="box">
        <div className="footer1">
          <img className="logo bg-white" src={logo} alt="" />
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
        <div className="footer2">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
