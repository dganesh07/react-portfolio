import React from "react";
import Header from "./components/header";
import Technologies from "./components/technologies";
import "./templates/styles.scss";
import { Sidenav } from "rsuite";

import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Sidenav>
          <Sidenav.Body>
            <FaLinkedinIn />
          </Sidenav.Body>
          <Sidenav.Body>
            <AiFillGithub />
          </Sidenav.Body>
        </Sidenav>
      </div>
    </>
  );
}

export default App;
