import React from "react";

import Timeline from "./Timeline";
import Hero from "./Hero";

import logo from "../dams_logo_blue.png";
import { Link } from "react-scroll";
function Header() {
  var liStyle = {
    display: "inline-block",
    marginRight: "30px",
    fontSize: "18px",
    cursor: "pointer",
    fontFamily: "Cerebri,Helvetica,Arial,sans-serif",
    fontWeight: 400,
    color: "#000",
    letterSpacing: "-.018rem",
  };
  return (
    <>
      <div
        style={{
          display: "inline-block",
          marginRight: "10px",
          fontSize: "30px",
        }}
      >
        <a
          style={{
            textDecoration: "none",
            color: "Black",
          }}
          to="/"
        >
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
      </div>

      <nav style={{ float: "right", marginTop: 30 }}>
        <ul>
          <li style={liStyle}>
            <Link
              style={{
                textDecoration: "none",
                color: "Black",
                fontFamily: "Times New Roman, Times, serif",
                fontSize: 15,
              }}
              to="about"
              smooth={true}
              duration={350}
            >
              ABOUT
            </Link>
          </li>
          <li style={liStyle}>
            <Link
              style={{
                textDecoration: "none",
                color: "Black",
                fontFamily: "Times New Roman, Times, serif",
                fontSize: 15,
              }}
              to="experience"
              smooth={true}
              duration={350}
            >
              EXPERIENCE
            </Link>
          </li>
          <li style={liStyle}>
            <Link
              style={{
                textDecoration: "none",
                color: "Black",
                fontFamily: " Times New Roman, Times, serif",
                fontSize: 15,
              }}
              to="testimonials"
              smooth={true}
              duration={350}
            >
              TESTIMONIALS
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
