import React from "react";
import Header from "./components/header";
import Technologies from "./components/technologies";
import "./templates/styles.scss";

import Hero from "./components/Hero";
import About from "./components/About";
import Testimonils from "./components/Testimonils";
import Experience from "./components/Experience";
import { Hidden } from "@material-ui/core";

import Timeline from "./components/Timeline";

import styled from "styled-components";

function App() {
  return (
    <>
      <div className="" style={{ overflowX: "hidden" }}>
        <Header />
        <Hero />
        <hr />
        <About />
        <hr />
        <Experience />
        <hr />
        <Testimonils />
      </div>
    </>
  );
}

export default App;
