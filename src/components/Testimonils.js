import React, { useState } from "react";
import "../styles.scss";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import "../test_styles.scss";

function Testimonils() {
  var content = [
    {
      title: "John Clemens",
      description:
        "Damini works very well with our staff and can handle direction from many “bosses”. She has a great personality and is a pleasure to work with every day. I also can’t say enough about her technical skills. She is able to handle a challenging workload as a student and adjusts well as the work shifts directions as happens many times during implementations",
      longDescription:
        "I have had the pleasure (and good fortune) of working with Damini during my campus-wide Enterprise IWMS implementation. She is everything that you could ask in an employee and I hope she stays with us after her student work is over. She works very well with our staff and can handle direction from many “bosses”. She has a great personality and is a pleasure to work with every day. I also can’t say enough about her technical skills. She is able to handle a challenging workload as a student and adjusts well as the work shifts directions as happens many times during implementations. Lastly, and I can’t say enough about this part, is her ability to learn on the fly and work independently. Whether it is JavaScript, CSS, Java, etc., whatever we have thrown at her, Damini has learned and perfected to keep our implementation on track. We probably can’t keep her here at IIT forever, so if you have the chance to work with Damini, please do it. You will not regret it",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
    },
    {
      title: "Terra Cooney",
      description:
        "In the short quarter that she has been a student employee with us she has been a great source for new ideas and has proven her willingness to learn. She has shown an impressive ability to adapt to departmental needs in order to quickly help develop solutions. Damini has been positive, approachable, and eager to take on new tasks and responsibilities. A dependable addition to the team, she has been working diligently with our Senior Systems Administrator and other leads in the first phases of launching a new work order system for the university.",
      longDescription:
        "Damini has been a welcomed addition to our Facilities Department at Illinois Tech. In the short quarter that she has been a student employee with us she has been a great source for new ideas and has proven her willingness to learn. She has shown an impressive ability to adapt to departmental needs in order to quickly help develop solutions. Damini has been positive, approachable, and eager to take on new tasks and responsibilities. A dependable addition to the team, she has been working diligently with our Senior Systems Administrator and other leads in the first phases of launching a new work order system for the university. She has written code to help our staff get over hurdles in developing the new system and her work is assured to help the product run more efficiently. Her work has been integral to setting the stage for a successful working program that will make a tremendous impact on the student, staff, and faculty experience in terms of our building and ground maintenance, campus-wide. As an added bonus, Damini brings her wonderful charisma and sense of humor to our office, which has helped her to built relationships quickly with others and to help foster a personable and friendly environment.",
      image: "https://i.imgur.com/DCdBXcq.jpg",
    },
    {
      title: "Dion Manly",
      description:
        "In just over 4 months, Damini has made an impact that simply can’t be overstated. Beginning with her interview, she demonstrated her aptitude for problem solving by diagnosing and addressing a technical issue for our Senior Systems Administrator. Once we hired her, she quickly got up to speed in JavaScript and has been using it to implement complex algorithms to manage billing, priorities, and a host of other system variables designed to improve our operational efficiency.",
      longDescription:
        "In just over 4 months, Damini has made an impact that simply can’t be overstated. Beginning with her interview, she demonstrated her aptitude for problem solving by diagnosing and addressing a technical issue for our Senior Systems Administrator. Once we hired her, she quickly got up to speed in JavaScript and has been using it to implement complex algorithms to manage billing, priorities, and a host of other system variables designed to improve our operational efficiency. She has successfully navigated a number of technical issues that have surfaced, and often develops creative programming solutions to achieve our objectives. The work Damini has done will positively impact the delivery of facilities services for the entire IIT community for years to come!",
      image: "https://i.imgur.com/DCdBXcq.jpg",
    },
  ];

  const readEvent = () => {
    setShowMore(!showMore);
  };
  const [showMore, setShowMore] = useState(false);
  return (
    <div id="testimonials" style={{ paddingRight: 20, paddingLeft: 20 }}>
      <br/>
      <h3>Recommendations</h3>
      <Slider classNames="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              //background: `url('${item.image}') no-repeat center center`,
              backgroundColor: "rgb(27, 20, 100, 0.3)",
            }}
          >
            <div className="center inner">
              <h1 className={showMore ? "item-more-title" : "item-title"}>
                {item.title}
              </h1>
              <p className={showMore ? "item-more-paragraph" : ""}>
                {showMore ? item.longDescription : item.description}
              </p>
              <button onClick={readEvent} className="testimonial-btn">
                {showMore ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <br />
    </div>
  );
}
export default Testimonils;
