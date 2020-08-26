import React from "react";
import Header from "./components/header";
import Technologies from "./components/technologies";
import "./templates/styles.scss";

import Hero from "./components/Hero";
import About from "./components/About";
import Testimonils from "./components/Testimonils";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { Hidden } from "@material-ui/core";

import useSticky from "./components/useSticky.js";

import styled from "styled-components";

function App() {
  const { isSticky, element } = useSticky();
  return (
    <>
      <div className="" style={{ overflowX: "hidden" }}>
        <Hero isSticky={isSticky} />
        <hr />
        <About element={element} />
        <hr />
        <Experience />
        <Testimonils />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
