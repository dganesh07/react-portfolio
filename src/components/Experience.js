import React from "react";
import TabComponent from "./tabs";
import styled from "styled-components";
import img from "../java.png";

// import { useSpring, animated, config } from "react-spring";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

function Experience() {
  // const props = useSpring({
  //   delay: 500,
  //   opacity: isVisible ? 1 : 0,
  // });

  const ExperienceWrapper = styled.section`
    border: 1px solid white;
    height: 670px;
  `;
  return (
    <ExperienceWrapper>
      <div className="">
        <VisibilitySensor once>
          {({ isVisible }) => (
            <Spring delay={200} to={{ opacity: isVisible ? 1 : 0 }}>
              {({ opacity }) => (
                <div style={{ opacity }}>
                  <TabComponent />
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    </ExperienceWrapper>
  );
}

export default Experience;
