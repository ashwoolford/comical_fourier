import React, { Component } from "react";
import { Container, Col, Image } from "react-bootstrap";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Col xs={12} sm={8} smoffset={2}>
            <Image
              src="assets/profile.jpg"
              className="about-profile-pic"
              roundedCircle
            />
            <h3>Ashraf Hossain</h3>
            <p>
              I am a computer science student, having a Bsc degree in the
              subject and work for many years in software engineering,
              Artificial Intelligence, Signal Processing, all of which bring up
              the recurring theme of the Fourier Transform.
            </p>
            <a href="https://github.com/ashwoolford">Github</a>
          </Col>
        </Container>
      </div>
    );
  }
}
