import React from "react";
import Header from "./components/header";
import Technologies from "./components/technologies";
import "./templates/styles.scss";
import { Sidenav } from "rsuite";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Sidenav>
        <Sidenav.Body>Dashboard</Sidenav.Body>
        <Sidenav.Body>sdak</Sidenav.Body>
        <Sidenav.Body>Daskjdhfkjhboard</Sidenav.Body>
      </Sidenav>
      </div>
    </>
  );
}

export default App;
