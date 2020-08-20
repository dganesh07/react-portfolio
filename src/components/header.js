import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Timeline from "./Timeline";
import Hero from "./Hero";

import logo from "../dams_logo_blue.png";

function Header() {
  var liStyle = {
    display: "inline-block",
    marginRight: "30px",
    fontSize: "18px",
  };
  return (
    <>
      <div>
        <p
          style={{
            display: "inline-block",
            marginRight: "10px",
            fontSize: "30px",
          }}
        >
          <a style={{ textDecoration: "none", color: "Black" }} to="/">
            <img
              src={logo}
              style={{
                margin: 5,
                marginLeft: 20,
                width: 75,
                paddingLeft: 10,
                paddingTop: 15,
              }}
            />
          </a>{" "}
        </p>
        <nav style={{ float: "right" }}>
          <ul>
            <li style={liStyle}>
              <a style={{ textDecoration: "none", color: "Black" }} to="/about">
                ABOUT
              </a>
            </li>
            <li style={liStyle}>
              <a
                style={{ textDecoration: "none", color: "Black" }}
                to="/timeline"
              >
                EXPERIENCE
              </a>
            </li>
            <li style={liStyle}>
              <a
                style={{ textDecoration: "none", color: "Black" }}
                to="/resume"
              >
                RESUME
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
