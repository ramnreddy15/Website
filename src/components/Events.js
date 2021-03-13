import "./assets/Events.scss";
import React, {Component} from "react";
import {createGlobalStyle} from 'styled-components';
import bot2 from "./assets/img/bot2.png";
import './assets/Donate.scss'
//var Diamond = require("./assets/img/0002.jpg")
import icon from "./assets/img/0002.jpg";
import icon2 from "./assets/img/0001.jpg";
import icon3 from "./assets/img/0003.jpg";
import pdf from "./assets/Python_BootCamp.pdf";


class Events extends Component {
  render() {
      return(
          <>
          <br></br>
          <div style={{marginLeft: '35%'}}>
            <img src = {icon2} width="50%" height="100%" alt="image of team member"></img>
          </div>
          
          <div style={{marginLeft: '45%'}}>
            <a href={pdf} download>Click to Download Information</a>
          </div>
          
          </>
      );
  }
}


export default Events;
