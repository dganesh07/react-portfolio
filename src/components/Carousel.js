import React, { useState, useEffect } from "react";
import { TransitionGroup } from "react-transition-group";
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
      <CSSTransition transitionName={direction}>{generateItems}</CSSTransition>
      <div className="arrow arrow-right" onClick={moveRight}>
        <IoIosArrowForward />
      </div>
    </>
  );
}

function Item({ id, level }) {
  const className = "item level" + level;
  return (
    <div className={className}>
      <ShowMoreText
        lines={3}
        more="Show more"
        less="Show less"
        anchorClass=""
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
