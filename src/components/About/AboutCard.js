import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Pruthvi Chalase</span>{" "}
            from <span className="purple">Jamkhandi, Karnataka</span>.
            <br />
            I have worked as an{" "}
            <span className="purple">Associate Software Developer</span> at{" "}
            <span className="purple">Finmax Technologies</span>.
            <br />I have pursued B.E Engineering in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">KLE Technologicial Univerity, Hubli</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching and Drawing
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li> */}
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
