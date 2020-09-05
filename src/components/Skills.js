import React, { useState, useRef } from "react";
import { useTransition, useSpring, useChain, config } from "react-spring";
import { Container, Item } from "./skills_styles";
import data from "./data";

const Skills = () => {
  const [open, set] = useState(false);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "15%", background: "white" },
    to: { size: open ? "100%" : "15%", background: open ? "white" : "white" },
  });

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], (item) => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div style={{ height: 500 }}>
      <Container
        style={{ ...rest, width: size, height: size, paddingTop: 25 }}
        onClick={() => set((open) => !open)}
      >
        <p style={{fontWeight: 600, fontFamily: 'initial', fontSize: 21}}>Skills</p>
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props, background: item.css }}>
            <span
              dangerouslySetInnerHTML={{
                __html: item.data,
              }}
            ></span>
          </Item>
        ))}
      </Container>
    </div>
  );
};

export default Skills;
