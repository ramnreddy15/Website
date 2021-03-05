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
    font-family: Arial, Helvetica, sans-serif;
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
      <div>
        <span><br></br></span>
        <span><br></br></span>
        <h3 style={{color: '#fff', textAlign: 'center'}}>The Humanoid Robotics Club could not have happened without the support of these amazing sponsors!</h3>
        <span><br></br></span>
        <span><br></br></span>
        <Container fluid>
          <Row className = "show-container">
            <Col md = {4}>
              <h1 style={{color: '#FFD753'}} class = 'glow'><b>Gold</b></h1>
              <h2 style={{textAlign: 'center'}}>Sponsors</h2>
            </Col>
            <Col md = {4}>
              <h1 style={{color: '#C8C3C3'}} class = 'glow'><b>Silver</b></h1>
              <h2 style={{textAlign: 'center'}}>Sponsors</h2>
            </Col>
            <Col md = {4}>
              <h1 style={{color: '#E2964E'}} class = 'glow'><b>Bronze</b></h1>
              <h2 style={{textAlign: 'center'}}>Sponsors</h2>
            </Col>
          </Row>
        </Container>
      </div>
      </>
      );
  }
}

export default Sponsors;