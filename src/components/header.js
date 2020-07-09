import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Timeline from "./Timeline";
import Hero from "./Hero";

import logo from "../dams_logo.png";

function Header() {
  var liStyle = {
    display: "inline-block",
    marginRight: "30px",
    fontSize: "18px",
  };
  return (
    <>
      <Router>
        <div>
          <p
            style={{
              display: "inline-block",
              marginRight: "10px",
              fontSize: "30px",
            }}
          >
            <Link style={{ textDecoration: "none", color: "Black" }} to="/">
              <img
                src={logo}
                style={{
                  margin: 5,
                  width: 75,
                  paddingLeft: 10,
                  paddingTop: 15,
                }}
              />
            </Link>{" "}
          </p>
          <nav style={{ float: "right" }}>
            <ul>
              <li style={liStyle}>
                <Link
                  style={{ textDecoration: "none", color: "Black" }}
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li style={liStyle}>
                <Link
                  style={{ textDecoration: "none", color: "Black" }}
                  to="/timeline"
                >
                  EXPERIENCE
                </Link>
              </li>
              <li style={liStyle}>
                <Link
                  style={{ textDecoration: "none", color: "Black" }}
                  to="/resume"
                >
                  RESUME
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <p>hello</p>
            </Route>
            <Route path="/timeline">
              
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Header;
