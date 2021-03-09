import React from "react";
import "./assets/Home.scss";
import hero from "./assets/img/olympian_hero.png";


export default function Home(props) {
  return (
    <body className="main-content">
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
      <section className="intro-wrapper">
        <div className="intro-content">
          <h1 className="intro-header">Who are we?</h1>
          <p className="intro-text">
          Potentia Robotics is the first high school team to design and build a fully-functional humanoid robot <strong>entirely from scratch</strong>. 
          It's run by students from the Thomas Jefferson High School for Science and Technology (TJHSST). <br></br><br></br>
          We're building <span class="text-blue"><strong>Olympian</strong></span>: our low-cost, 6-foot tall, bipedal humanoid robot with a human-like dynamically stable gait, limb mobility, and balance capabilities, that can be controlled effectively and efficiently from afar.</p>
        </div>
        <div className="intro-space"></div>
        <div className="mission-statement">
          <h1 className="intro-header">Our mission</h1>
          <p className="intro-text">
          At Potentia Robotics, we want to push the boundaries of what high-school students can achieve.
          Our ultimate goal is to further STEM knowledge in the K-12 community while leading by example and showing other students that age isn't a limiting factor for any project, no matter how large-scale.
          </p>
        </div>
      </section>
    </body>
  );
}
