import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./MyNavbar.css";
import { Link } from "react-router-dom";

export default class MyNavbar extends Component {
  render() {
    return (
      <div className="homepagenavbar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#/">ComicalFourier</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />

            <Nav>
              <Nav.Link>
                <Link to="/" className="nav-bar-link">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/projects" className="nav-bar-link">Projects</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="nav-bar-link">About</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
