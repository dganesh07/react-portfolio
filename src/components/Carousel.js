import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles.scss";
import { IoIosArrowForward } from "react-icons/io";

import ShowMoreText from "react-show-more-text";

export function Carousel(props) {
  const [items, setItems] = useState(props.items);
  const [direction, setDirection] = useState("");
  const [active, setActive] = useState(props.active);

  useEffect(() => {
    setItems(props.items);
  });

  const generateItems = () => {
    var local = [];
    var level;
    for (var i = active; i < active + 2; i++) {
      var index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      level = active - i;
      local.push(<Item key={index} id={items[index]} level={level} />);
    }
    return local;
  };

  const moveRight = () => {
    var newActive = active;
    setActive((newActive + 1) % items.length);
    setDirection("right");
  };

  return (
    <>
      <div style={{ backgroundColor: "rgb(27, 20, 100, 0.3)", height: 465 }}>
        <CSSTransition transitionName={direction}>
          {generateItems}
        </CSSTransition>
        <div className="arrow arrow-right" onClick={moveRight}>
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
}

const thexecuteOnClick = (isExpanded, setIsStyleClass) => {
  if (isExpanded) {
    setIsStyleClass(true)
  } else {
    setIsStyleClass(false)
  }
};

function Item({ id, level }) {
  const [isStyleClass, setIsStyleClass] = useState(false);
  const className = "item level" + level;
  return (
    <div className={isStyleClass ? "show-more " + className : className}>
      <ShowMoreText
        lines={10}
        more="Show more"
        less="Show less"
        anchorClass=""
        onClick={(isExpanded) => thexecuteOnClick(isExpanded, setIsStyleClass)}
        expanded={false}
        width={450}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: id,
          }}
        />
      </ShowMoreText>
    </div>
  );
}
