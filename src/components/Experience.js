import React, { useState } from "react";
import TabComponent from "./tabs";
import styled from "styled-components";
import img from "../Graphic_image.png";
import Skills from "./Skills";

import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import { Container } from "@material-ui/core";

function Experience() {
  const ExperienceWrapper = styled.section`
    border: 1px solid white;
  `;

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
      <div className="row" style={{ paddingLeft: 20, paddingRight: 20 }}>
        <div className="col-md-6">
          <TabComponent />
        </div>
        <div className="col-md-6" style={skillsBoxStyle}>
          <Skills />
        </div>
      </div>
    </ExperienceWrapper>
  );
}

export default Experience;
