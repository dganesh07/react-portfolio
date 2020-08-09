import React, { useState } from "react";
import TabComponent from "./tabs";
import styled from "styled-components";
import img from "../java.png";

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
      <div className="row">
        <div className="col-md-6" style={{ height: 500 }}>
          <TabComponent />
        </div>
        <div className="col-md-6" style={{ height: 500 }}></div>
      </div>
    </ExperienceWrapper>
  );
}

export default Experience;
