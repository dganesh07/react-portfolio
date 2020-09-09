import React from "react";
import { useMediaQuery } from "react-responsive";
import resume from "../resume.pdf";

import logo from "../dams_logo.png";
import { Link } from "react-scroll";

function Header({ element }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <section className="welcome">
     {!isTabletOrMobile && <div ref={element}>
        <img src={logo} alt="logo" className="welcome--logo" />
        <p>Even if you scroll, i will stick with you</p>
        <button className="welcome__cta-primary">Contact us</button>
      </div>}
    </section>
  );
}

export default Header;
