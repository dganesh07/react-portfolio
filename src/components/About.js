import React from "react";

function About({ element }) {
  return (
    <div
      ref={element}
      className=""
      id="about"
      style={{
        backgroundColor: "rgb(27, 20, 100, 0.3)",
        color: "black",
        padding: "35px",
      }}
    >
      <br />
      <h1 style={{ textAlign: "center" }}>Hi!</h1>
      <br />
      <div className="row">
        <div className="col-md-6">
          <p>
            Hi, my name is Damini Ganesh (as you have probably already concluded
            from the bright, large text at the top of this page), and I am a
            full stack developer. I would like to begin my introduction by
            saying that writing an elevator pitch is harder than fixing bugs in
            Python.
          </p>
          <p>
            Following 6 years of higher education (bachelor's and master's
            degrees), which felt like a long time, and a part time job as a
            JavaScript developer, I concluded that I would never be content
            working with a single programming language. Consequently, I joined a
            startup, which gave me the opportunity to work with a wide variety
            of not just programming languages but also cloud computing
            technologies, databases and web servers, among others.
            <br /><br/>
            The title "Full Stack Developer" was thus a natural fit!
          </p>
          <p>
            In the two years I have been with cove.tool, I have never had a dull
            day. Working on new features and resolving bugs have kept me on my
            toes. I still remember my first assigned task with this company,
            which was to increase the font size of a user count. Reflecting on
            this task while I am currently working on an optimization algorithm
            for best cost/energy bundles clearly shows how far I have progressed
            and how amazing the journey has been.
          </p>
        </div>
        <div className="col-md-6">
          <p>
            If you were to ask me what task have I worked on at cove.tool that I
            am the most proud of, I would say that it is when I single handedly
            integrated React.js with Django to provide a better user interface
            and better user interaction with the tool. Since then, this approach
            has become the company's standard for new features. Moreover,
            because of our small development team, I have had the opportunity to
            work on many features from start to finish, which has given me the
            amazing opportunity to work with both backend technologies and to
            make the front end "pixel perfect".
          </p>
          <p>
            I have also had the chance to onboard new developers in terms of the
            company’s architecture and work culture. I have participated in code
            reviews and in developing features for the team, including building
            internal tools to assist the sales and research teams. Working on
            automating routine tasks to save time and energy always gives me a
            sense of accomplishment.
          </p>
          <p>
            Alright! I also thought It would be nice to tell you a bit more
            about me other than being a developer. I love MUSIC. I listen to a
            wide variety of music and am always exploring new ones. If you ever
            want a song recommendation in any kinda genre ask me!! I also enjoy
            watching anime and some traveling( NOT during a pandemic for sure )
            2020 has been a rough year but coding and music has kept me sane.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
