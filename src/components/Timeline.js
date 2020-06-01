import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import icon from "./icon.png"
import timelineData from "../data/timelineData.json"

function Timeline() {

  return (
    <>
      <VerticalTimeline>
        {timelineData.map(item => {
          return <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={item.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '40px', height: '40px', left: "51%" }}
          >
            <h3 className="vertical-timeline-element-title">{item.header}</h3>
            <p>
              {item.description}
            </p>
          </VerticalTimelineElement>
        })}
      </VerticalTimeline>
    </>
  )

}

export default Timeline;
