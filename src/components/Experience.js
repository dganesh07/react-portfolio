import React, { useState } from "react";
import TabComponent from "./tabs";
import styled from "styled-components";
import img from "../Graphic_image.png";
import Skills from "./Skills";

import { useMediaQuery } from "react-responsive";

function Experience() {
  const ExperienceWrapper = styled.section`
    border: 1px solid white;
  `;

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const skillsBoxStyle = {
    width: "100%",
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    webkitBackgroundSize: "cover",
    mozBackgroundSize: "cover",
    oBackgroundSize: "cover",
    backgroundSize: "cover",
    top: 0,
    overflow: "hidden",
  };

  return (
    <ExperienceWrapper id="experience">
      <div
        className="row"
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          display: isTabletOrMobile ? "block" : "flex",
        }}
      >
        <div
          className={isTabletOrMobile ? "col-md-12" : "col-md-6"}
          style={{ height: 500, overflow: "scroll",  }}
        >
          <TabComponent />
        </div>
        <div
          className={isTabletOrMobile ? "col-md-12" : "col-md-6"}
          style={skillsBoxStyle}
        >
          <Skills />
        </div>
      </div>
    </ExperienceWrapper>
  );
}

export default Experience;
