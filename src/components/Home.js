import React from "react";
import "./assets/Home.scss";
import bot1 from "./assets/img/bot1.png";
import bot2 from "./assets/img/bot2.png";

const BOT_IMAGES = [bot1, bot2];

export default function Home(props) {
  return (
    <main className="hero">
      <div className="landing-header">
        <h1 id="potentia">Potentia</h1>
        <h1 id="robotics">Robotics.</h1>
      </div>
      <div className="landing-subheader">
        <p>
          The{" "}
          <a href="https://tjhsst.fcps.edu/" target="_blank" rel="noreferrer">
            Thomas Jefferson High School for Science and Technology
          </a>{" "}
          Humanoid Robot Project
        </p>
      </div>
      <img
        className="landing-robot"
        src={BOT_IMAGES[Math.floor(Math.random() * BOT_IMAGES.length)]}
        alt=""
      />
    </main>
  );
}
