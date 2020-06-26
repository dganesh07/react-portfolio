import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import icon from "./icon.png";
import timelineData from "../data/timelineData.json";

function Timeline() {
  return (
    <div className="row">
      <div className="col-md-5" style={{ backgroundColor: "black", height: 400, marginTop: 100, fontFamily: "Courier New", color: 'white'}}>
        <h3>Cove.tool</h3>
        <br/>
        <p>Fighting Climate Change one building at a time!</p>
        <p>Cover letter kinda thing</p>
      </div>
      <div
        className="col-md-7"
        style={{ width: 600, height: 700, overflow: "scroll" }}
      >
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
    </div>
  );
}

export default Timeline;
