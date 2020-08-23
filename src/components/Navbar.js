import React from "react";
import "../navbar.scss";
import Logo from "../dams_logo.png";
import LogoBlue from "../dams_logo_blue.png";
import { Link } from "react-scroll";
import resume from "../resume.pdf";

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? null : (
        <img src={LogoBlue} alt="logo" className="navbar--logo" />
      )}
    </div>
    <ul className="navbar--link">
      <li
        className={
          sticky
            ? "navbar--link-item navbar--link-item-sticky"
            : "navbar--link-item"
        }
      >
        <a
          style={{
            textDecoration: "none",
            color: sticky ? "white" : "black",
            fontFamily: "Times New Roman, Times, serif",
            fontSize: 15,
          }}
          href={resume}
          target="_blank"
        >
          RESUME
        </a>
      </li>
      <li
        className={
          sticky
            ? "navbar--link-item navbar--link-item-sticky"
            : "navbar--link-item"
        }
      >
        <Link
          style={{
            textDecoration: "none",
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
      <li
        className={
          sticky
            ? "navbar--link-item navbar--link-item-sticky"
            : "navbar--link-item"
        }
      >
        {" "}
        <Link
          style={{
            textDecoration: "none",
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
      <li
        className={
          sticky
            ? "navbar--link-item navbar--link-item-sticky"
            : "navbar--link-item"
        }
      >
        {/* <Link
          style={{
            textDecoration: "none",
            fontFamily: " Times New Roman, Times, serif",
            fontSize: 15,
          }}
          to="testimonials"
          smooth={true}
          duration={350}
        >
          TESTIMONIALS
        </Link> */}
      </li>
    </ul>
  </nav>
);
export default Navbar;
