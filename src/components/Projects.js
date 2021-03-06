import React from "react";
//import img1 from "../Graphic_image.png";
import img1 from "../Project_bg.png";
import "../projects.scss";
const Projects = () => {
  return (
    //TODO: Make it a map and reuse code
    <section className="content-section" id="projects">
      <div className="" style={{paddingLeft: 20, paddingRight: 20}}>
        <br/>
        <h3>Academic Projects</h3>
        <div className="row no-gutters">
          <div className="col-md-3" style={{width: '307px !important'}}>
            <a
              className="portfolio-item"
              href="https://github.com/dganesh07/BuyOrSell"
              target="_blank"
            >
              <span className="caption">
                <span className="caption-content">
                  <h2>BuyOrSell</h2>
                  <p className="mb-0">
                    An e - commerce application that is flexible, extensible and
                    reusable.
                  </p>
                  <p>
                    Used object-oriented design principles and MVC architecture.
                  </p>
                  <br />
                  Technologies Used
                  <p>
                    JSP,Servlets,HTML,CSS,JavaScript,jQuery,SAX-parser,Bootstrap
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={img1} alt="" />
            </a>
          </div>

          <div className="col-lg-3">
            <a
              className="portfolio-item"
              href="https://github.com/dganesh07/Dealer"
              target="_blank"
            >
              <span className="caption">
                <span className="caption-content">
                  <h2>Dealer</h2>
                  <p className="mb-0">My first application using MERN stack! </p>
                  <p>
                    The dealer is a simple card game which calculates <br />
                    the score based on the shuffle configuration.
                    <br />
                    Each shuffle configuration is stored and <br />
                    an average score is displayed!
                  </p>
                  <br />
                  Technologies Used
                  <p>
                    HTML,CSS,reactjs,expressjs,mongoose,
                    <br />
                    node,webpack
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={img1} alt="" />
            </a>
          </div>

          <div className="col-lg-3">
            <a
              className="portfolio-item"
              href="https://github.com/dganesh07/Object-Oriented-Design-Patterns"
              target="_blank"
            >
              <span className="caption">
                <span className="caption-content">
                  <h2>Object-Oriented Design Patterns</h2>
                  <p className="mb-0">
                    A Java Swing application to simulate an animal farm
                    following GOF Design Patterns to provide a general
                    repeatable solution to a commonly occurring problem in
                    software design.
                  </p>
                  <br />
                  Technologies Used<p>Java,Java swings,eclipse</p>
                </span>
              </span>
              <img className="img-fluid" src={img1} alt="" />
            </a>
          </div>

          <div className="col-lg-3">
            <a
              className="portfolio-item"
              href="https://github.com/dganesh07/Link-State-Routing-Algorithm"
              target="_blank"
            >
              <span className="caption">
                <span className="caption-content">
                  <h2>Link state routing algorithm</h2>
                  <p className="mb-0">
                    A link-state routing protocol using Dijkstra’s algorithm
                    which calculates the Open Shortest Path from source to
                    destination; including the number of hops in each route.
                  </p>
                  <br />
                  Technologies Used<p>Java</p>
                </span>
              </span>
              <img className="img-fluid" src={img1} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
