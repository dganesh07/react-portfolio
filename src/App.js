import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonils from "./components/Testimonils";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import useSticky from "./components/useSticky.js";
import Scroll from "./components/Scroll";
import workday from "./workday.png";
import { useMediaQuery } from "react-responsive";

function App() {
  const { isSticky, element } = useSticky();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <div className="" style={{ overflowX: "hidden" }}>
        <Scroll showBelow={250} />
        <Hero isSticky={isSticky} />
        <hr />
        <About element={element} />
        <hr />
        <Experience />
        <h3 style={{ margin: 20 }}>A Typical Day</h3>
        <img src={workday} style={{ width: "96%" }} />
        {!isTabletOrMobile && <Testimonils />}
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
