import React from "react";
import Header from "./components/header";
import Technologies from "./components/technologies";
import "./templates/styles.scss";
import { Sidenav } from "rsuite";

import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import Hero from "./components/Hero";
import TabComponent from "./tabs/tabs"

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <div style={{width: 800, height: 800}}>
          <TabComponent />
        </div>
      </div>
    </>
  );
}

export default App;
