import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./MyNavbar.css";
export default class MyNavbar extends Component {
  render() {
    return (

    <div className="homepagenavbar">
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">ComicalFourier</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link eventKey={1} href="/">Home</Nav.Link>
            <Nav.Link eventKey={1} href="/projects">Projects</Nav.Link>
            <Nav.Link eventKey={2} href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
