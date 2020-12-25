import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" exact className="navbar-brand">
          Potentia Robotics
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                activeClassName="active"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeClassName="active"
                className="nav-link"
              >
                Our Mission
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" activeClassName="active" className="nav-link">
                Devlog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                activeClassName="active"
                className="nav-link"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
