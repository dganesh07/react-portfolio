import React from "react";
import TabComponent from "./tabs";
import styled from "styled-components";
import img from "../java.png";

function Experience() {
  const ExperienceWrapper = styled.section`
    border: 1px solid white;
    background-image: url(${img});
    height: 660px;
  `;
  return (
    <ExperienceWrapper>
      <div className="row">
        <div className="col-md-8">
          <TabComponent />
        </div>
      </div>
    </ExperienceWrapper>
  );
}

export default Experience;
