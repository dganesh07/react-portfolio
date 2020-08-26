import React, { useState } from "react";
import ShowMoreText from "react-show-more-text";
import "../styles.scss";

import img1 from "../java.png";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import "../test_styles.scss";

function Testimonils() {
  var content = [
    {
      title: "John Clemens",
      description:
        "Damini works very well with our staff and can handle direction from many “bosses”. She has a great personality and is a pleasure to work with every day. I also can’t say enough about her technical skills. She is able to handle a challenging workload as a student and adjusts well as the work shifts directions as happens many times during implementations",
      button: "Read More",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
    },
    {
      title: "Terra Cooney",
      description:
        "Damini has been a welcomed addition to our Facilities Department at Illinois Tech. In the short quarter that she has been a student employee with us she has been a great source for new ideas and has proven her willingness to learn. She has shown an impressive ability to adapt to departmental needs in order to quickly help develop solutions.",
      button: "Read More",
      image: "https://i.imgur.com/DCdBXcq.jpg",
    },
    {
      title: "Dion Manly",
      description:
        "In just over 4 months, Damini has made an impact that simply can’t be overstated. Beginning with her interview, she demonstrated her aptitude for problem solving by diagnosing and addressing a technical issue for our Senior Systems Administrator. Once we hired her, she quickly got up to speed in JavaScript and has been using it to implement complex algorithms to manage billing, priorities, and a host of other system variables designed to improve our operational efficiency.",
      button: "Read More",
      image: "https://i.imgur.com/DCdBXcq.jpg",
    },
  ];

  return (
    <div id="testimonials" style={{ paddingRight: 20, paddingLeft: 20 }}>
      <h2>Testimonils</h2>
      <Slider classNames="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="center inner">
              <h1 className="item-title">{item.title}</h1>
              <p className="item-paragraph">{item.description}</p>
              <button className="testimonial-btn">{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
      <br />
    </div>
  );
}
export default Testimonils;
