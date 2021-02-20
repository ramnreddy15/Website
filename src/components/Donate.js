import React, {Component} from "react";
import {createGlobalStyle} from 'styled-components';
import bot2 from "./assets/img/bot2.png";
import './assets/Donate.scss'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    background-color: #293241;
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

class Donate extends Component {
    render() {
        return(
            <>
            <GlobalStyle />
              {/* <div className="content-box"> hjalsdklANSDFKJASNDF</div> */}
            <div className="centered"> 
            <p>
              <h1>Donate Today</h1>
              <span><br></br></span>
              <span><br></br></span>
              <span><br></br></span>
              <span><br></br></span>
              <span><br></br></span>
              <span><br></br></span>
              <span><br></br></span>
              <span><br></br></span>
              <span><br></br></span>
              <h2>Paypal widget here</h2>
              <span><br></br></span>
              <span><br></br></span>
              <span><br></br></span>
              <span><br></br></span>
              <span><br></br></span>
              <h2>Gofundme widget here</h2>
            </p>
            </div>
            <img className="landing-robot" src={bot2}> 
              
              </img>
            </>
        );
    }
}

export default Donate;