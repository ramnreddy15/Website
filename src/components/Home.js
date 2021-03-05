import React from "react";
import "./assets/Home.scss";
import hero from "./assets/img/olympian_hero.png";


export default function Home(props) {
  return (
    <body>
      <section className="hero">
      <div className="landing-header">
        <h1 id="potentia"><span className="highlight-gray">&nbsp;Potentia&nbsp;</span></h1>
        <h1 id="robotics"><span className="highlight-gray">&nbsp;Robotics&nbsp;</span></h1>
      </div>
      <div className="landing-subheader">
        <p>
        <span className="highlight-gray">&nbsp;The first high school team to design and&nbsp;<br></br>&nbsp;build a full-size bipedal humanoid robot.&nbsp;</span>
        </p>
      </div>
      <img
        className="landing-robot"
        src={hero}
        alt=""
      />    
      </section>
      {/* <section className="intro-section">
        <div className="intro-wrapper">
          <div className="intro-content">
            <h1>Who are we?</h1>
            <p>
              Content
            </p>
          </div>
          <div className="mission-statement">
            <h1>Our mission</h1>
            <p>
              Content
            </p>
          </div>
        </div>
      </section> */}
    </body>
  );
}
