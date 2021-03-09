import React, { Component } from "react";
import {createGlobalStyle} from 'styled-components';
import {Container, Row, Col} from "react-bootstrap"

import './assets/Sponsors.scss'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    background-color: #293241;
    font-family: Poppins, sans-serif;
    height: 100%;
    margin: 0;
    color: #555;
  }
  h2 {
    color: #fff;
  }
`;

class Sponsors extends Component {
  render() {
    return (
      <>
      <GlobalStyle/>
      <div className="sponsor-intro-wrapper">
        <h3 className="sponsor-intro" style={{color: '#fff', textAlign: 'center'}}>Our amazing sponsors help make Potentia Robotics' projects possible! <br></br> Contact us to learn more about sponsorship.</h3>
        <Container fluid className="sponsor-tier-list">
          <Col className="show-container">
            <Col md={4}>
              <h1 style={{color: '#FFD753'}} className='glow'><b>Gold</b></h1>
              <h2 style={{textAlign: 'center'}} className="tier-detail">Donation amount: $1000+<br></br>Perks: Silver + logo on Olympian</h2>
            </Col>
            <Col md={4}>
              <h1 style={{color: '#C8C3C3'}} className='glow'><b>Silver</b></h1>
              <h2 style={{textAlign: 'center'}} className="tier-detail">Donation amount: $500-$999<br></br>Perks: Bronze + logo on all Potentia merchandise</h2>
            </Col>
            <Col md={4}>
              <h1 style={{color: '#E2964E'}} className='glow'><b>Bronze</b></h1>
              <h2 style={{textAlign: 'center'}} className="tier-detail">Donation amount: $100-$499<br></br>Perks: logo on website + recognition on social media</h2>
            </Col>
          </Col>
        </Container>
      </div>
      </>
      );
  }
}

export default Sponsors;