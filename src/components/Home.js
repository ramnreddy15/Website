import React from "react";
import "./assets/Home.scss";
import hero from "./assets/img/olympian_hero.png";


export default function Home(props) {
  return (
    <main className="hero">
      <div className="landing-header">
        <h1 id="potentia">Potentia</h1>
        <h1 id="robotics">Robotics</h1>
      </div>
      <div className="landing-subheader">
        <p>
        The first high school team to build a full-size bipedal humanoid robot.
        </p>
      </div>
      <img
        className="landing-robot"
        src={hero}
        alt=""
      />    
      
    </main>
  );
}
