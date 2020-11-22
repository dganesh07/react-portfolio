import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonils from "./components/Testimonils";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import useSticky from "./components/useSticky.js";
import Scroll from "./components/Scroll";

function App() {
  const { isSticky, element } = useSticky();
  return (
    <>
      <div className="" style={{ overflowX: "hidden" }}>
        <Scroll showBelow={250} />
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
