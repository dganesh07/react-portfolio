import { animated } from "react-spring";
import styled, { createGlobalStyle } from "styled-components";

const Container = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  background: black;
  border-radius: 5px;
  border: 0.5px solid #FFC75F;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`;

const Item = styled(animated.div)`
  width: 100%;
  background: white;
  border-radius: 5px;
  padding-top: 25px;
  will-change: transform, opacity;
  text-align: center;
`;

export { Container, Item };
