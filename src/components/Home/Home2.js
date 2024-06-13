import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import girl from "../../Assets/girl.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCode } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I always believe in that   "If You Can Dream It, You Can Do It"...🤷‍♂️
              <br />
              <br />I am fluent in programming languages like
              <i>
                <b className="purple"> C, Java and Python. </b>
              </i>
            <br/>
             
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Machine Learning Projects </b> and
                also in areas related to{" "}
                <b className="purple">
                  Artificial Intelligence.
                </b>
              </i>
              <br />
              <br />
              My downtime is often spent engaging in hobbies such as <b className="purple">Nature Photography, Blogging,</b>  and <b className="purple">Pencil Sketching</b> showcasing my affinity for artistic expression and the wonders of nature.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={girl} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bhanu-sri"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/bhanu__sri__369"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaCode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kbhanusri"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="bhanusri.kowru@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
