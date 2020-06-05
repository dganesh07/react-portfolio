import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Timeline from "./Timeline";
import Hero from "./Hero";

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
              color: "#FFC68A",
              fontSize: "30px",
            }}
          >
            <Link style={{ textDecoration: "none", color: "#FFC68A" }} to="/">
              Damini Ganesh
            </Link>{" "}
          </p>
          <nav style={{ float: "right" }}>
            <ul>
              <li style={liStyle}>
                <Link
                  style={{ textDecoration: "none", color: "#FFC68A" }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li style={liStyle}>
                <Link
                  style={{ textDecoration: "none", color: "#FFC68A" }}
                  to="/timeline"
                >
                  Cove tool timeline
                </Link>
              </li>
              <li style={liStyle}>
                <Link
                  style={{ textDecoration: "none", color: "#FFC68A" }}
                  to="/resume"
                >
                  Resume
                </Link>
              </li>
              <li style={liStyle}>
                <Link
                  style={{ textDecoration: "none", color: "#FFC68A" }}
                  to="/contact"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <p>hello</p>
            </Route>
            <Route path="/timeline">
              <Timeline />
            </Route>
            <Route path="/">
              <Hero />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Header;
