import React, { useState } from "react";
import TabComponent from "./tabs";
import styled from "styled-components";
import img from "../test_img.png";
import Skills from "./Skills";

import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import { Container } from "@material-ui/core";

function Experience() {
  const ExperienceWrapper = styled.section`
    border: 1px solid white;
    height: 670px;
  `;

  return (
    <ExperienceWrapper>
      <div className="row" style={{ paddingLeft: 20, paddingRight: 20 }}>
        <div className="col-md-6" style={{ height: 500 }}>
          <TabComponent />
        </div>
        <div
          className="col-md-6"
          style={{ height: 500, backgroundImage: `url(${img})` }}
        >
          <Skills />
        </div>
      </div>
    </ExperienceWrapper>
  );
}

export default Experience;
