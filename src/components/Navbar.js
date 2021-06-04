import React from "react";
import "./assets/Navbar.scss";
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import { NavLink } from "react-router-dom";
import logo from "./assets/img/logo_tr_bg.png"



export default function NavBar(props) {
  

  var isMobileNavbarShowing = false;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  

  window.onresize = reportWindowSize;

  window.addEventListener('resize', reportWindowSize);

  return (
    <Navbar collapseOnSelect expand="xl" variant="dark" id = "navbarmain"  onToggle = {expandHamborgor}>
      <Navbar.Brand href="#home" id = "brandLogo">
        <img
          src= {logo}
          width="20px"
          height="62px"
          className="d-inline-block align-top nav-logo"
          alt="Potentia Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href = "/meet-olympian">Meet Olympian</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/sponsors">Sponsors</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    
      
  );

  function expandHamborgor(){
    var navbarmain = document.getElementById("navbarmain")

    
    if(isMobileNavbarShowing === false){
      isMobileNavbarShowing = true;
      navbarmain.style.height = "400px";
    }else{
      isMobileNavbarShowing = false;
      navbarmain.style.height = "100px";
    }


    }

  function reportWindowSize(){
    var navbarmain = document.getElementById("navbarmain")
    var navbarcollapse = document.getElementById("responsive-navbar-nav")

   
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;



    if(windowWidth > 1000){
      
      navbarmain.style.height = "100px";
    }else if(windowWidth < 1000 && isMobileNavbarShowing === true){
      navbarmain.style.height = "400px"
    }
  }

}




