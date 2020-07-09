import React from "react";
import Header from "./components/header";
import Technologies from "./components/technologies";
import "./templates/styles.scss";
import { Sidenav } from "rsuite";

import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import Hero from "./components/Hero";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Timeline />
      </div>
    </>
  );
}

export default App;
