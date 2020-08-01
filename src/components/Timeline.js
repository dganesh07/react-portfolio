import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import icon from "./icon.png";
import timelineData from "../data/timelineData.json";

// import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
// import "react-web-tabs/dist/react-web-tabs.css";

import TabComponent from "./tabs";

function Timeline() {
  let tempStyle = {
    width: 300,
    height: 300,
    marginLeft: 30,
    marginTop: 100,
    padding: 80,
    webkitBoxShadow: "-9px 14px 25px 0px rgba(107,103,107,1)",
    mozBoxShadow: "-9px 14px 25px 0px rgba(107,103,107,1)",
    boxShadow: "-9px 14px 25px 0px rgba(107,103,107,1)",
    zIndex: 1,
  };

  let timelineBox = {
    width: 650,
    height: 650,
    overflow: "scroll",
    webkitBoxShadow: "-9px 14px 25px 0px rgba(107,103,107,1)",
    mozBoxShadow: "-9px 14px 25px 0px rgba(107,103,107,1)",
    boxShadow: "-9px 14px 25px 0px rgba(107,103,107,1)",
  };
  return (
    <div>
      <VerticalTimeline>
        {timelineData.map((item) => {
          return (
            <VerticalTimelineElement
              key={item.id}
              style={{ marginTop: "30px", marginBottom: "30px" }}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
                padding: 10,
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={item.date}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
                width: "40px",
                height: "40px",
                left: "51%",
              }}
            >
              <h4 className="vertical-timeline-element-title">{item.header}</h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      ;
    </div>
  );
}

export default Timeline;
