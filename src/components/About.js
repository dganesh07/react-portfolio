import React from "react";

function About() {
  return (
    <div
      className="container"
      id="about"
      style={{
        backgroundColor: "rgb(27, 20, 100, 0.3)",
        color: "black",
        padding: "35px",
      }}
    >
      <br />
      <h1 style={{ textAlign: "center" }}>Hi! I am a full stack developer</h1>
      <br />
      <div className="row">
        <div className="col-md-6">
          <p>
            Well as you probably already know my name, from the bright 25px
            font-size text, let me jump to my introduction. I must say, writing
            an elevator pitch is harder than solving bugs in python.
          </p>
          <p>
            After 6 years of university education, which seems like forever, and
            a part time job as a JavaScript developer, I concluded that I can
            never stick to one programming language. And joining a startup gave
            me the opportunity to explore a wide variety of not just programming
            languages but also cloud computing technologies, databases and web
            servers. <br /> The title Full Stack Developer was a treat to my
            ears !
          </p>
          <p>
            In the two years I have been with Cove.tool, I have never
            encountered a lazy day.New features and Bugs have kept me on my
            toes. I still remember my first task at this company, it was to
            increase the font-size of a user count, looking back at it now when
            I am working on optimization algorithm for best cost/energy bundles
            shows where I am and how amazing the journey has been
          </p>
        </div>
        <div className="col-md-6">
          <p>
            If you ask me what is the proudest task I have worked on at cove, I
            would say, its when I single handedly integrated React.js with
            Django for a better user interface and user interaction with the
            tool and we haven’t looked back since. With a small development
            team, I have worked on many features from start to finish which gave
            me an amazing opportunity to work on backend technologies and make
            the front end pixel perfect.
          </p>
          <p>
            I have also had the chance to train new developers about the
            companies’s architecture and work culture. Took part in code reviews
            and team features which focused on building internal tools to help
            out sales and research teams. Working on automating many routine
            tasks to save time and energy always gives a sense of
            accomplishment.
          </p>
          <p>
            Alright! I also thought It would be nice to tell you a bit more
            about me other than being a developer. I love MUSIC. I listen to a
            wide variety of music and am always exploring new ones. If you ever
            want a song recommendation in any kinda genre ask me!! I also enjoy
            watching anime and some traveling( NOT during a pandemic for sure )
            2020 has been a rough year but coding and music has kept me sane and
            I would love to increase my knowledge on both of these.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
