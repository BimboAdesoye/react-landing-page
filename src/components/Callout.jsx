// import React from 'react'
import { useState } from "react";
import "../styles/Callout.css";
import errorIcon from "../assets/icon-error.svg";

const Callout = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // if (email.length === 0) {
    //   setError(!error);
    //   return <> {error && <p>Please fill the input field.</p>}</>;
    // }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormatValid = emailPattern.test(email);
    if (!isFormatValid) {
      setError(!error);
    }
  }

  return (
    <div>
      <div className="callout block text-center">
        <div className="box">
          <div className="callout-heading">
            <p className="text-light text-uppercase l">
              35,000+ already joined
            </p>
            <h1 className="text-light">
              Stay up-to-date with what we're doing
            </h1>
          </div>
          <form className="form">
            <div className={error ? "form-input" : "null"}>
              <input
                type="email"
                name=""
                id=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                // {...error && <img src={errorIcon}></img>}
              />
              {error && <p>Whoops, make sure it's an email.</p>}
            </div>
            <a onClick={handleSubmit} href="#" className="btn btn-red">
              Contact Us
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Callout;
