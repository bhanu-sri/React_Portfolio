import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhanu Sri Kowru </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I am currently pursuing my final year of Engineering in the department of Information Technology at Shri Vishnu Women's College, Bhimavaram. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Pencil Sketching Arts
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography and Videography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Bhanu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
