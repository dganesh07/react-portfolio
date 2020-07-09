import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import icon from "./icon.png";
import timelineData from "../data/timelineData.json";

import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

function Timeline() {
  return (
    <div className="row">
      <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
        <TabList>
          <Tab tabFor="vertical-tab-one">Cove Tool</Tab>
          <Tab tabFor="vertical-tab-two">Illinois Institute of Technology</Tab>
        </TabList>

        <TabPanel tabId="vertical-tab-one">
          <div  style={{ width: 600, height: 700, overflow: "scroll" }}>
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
                  <h4 className="vertical-timeline-element-title">
                    {item.header}
                  </h4>
                  <p>{item.description}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
          </div>
          
        </TabPanel>

        <TabPanel tabId="vertical-tab-two">
          <p>Tab content</p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Timeline;
