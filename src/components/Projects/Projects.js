import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import a from "../../Assets/Projects/a.png";
import b from "../../Assets/Projects/b.png";
import c from "../../Assets/Projects/c.png";
import d from "../../Assets/Projects/d.jpg";
import e from "../../Assets/Projects/e.png";
import f from "../../Assets/Projects/f.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a}
              isBlog={false}
              title="College Voting System"
              description="• Designed a robust online voting system catering to college students, employing React.js for frontend development,
              Express.js for backend functionalities, and MySQL for database management, facilitated through a XAMPP server. Implemented user authentication via registration numbers, enabling students to either vote for candidates or
              self-nominate, while providing real-time access to live voting results, ensuring transparency and integrity throughout the electoral process."
              ghLink="https://github.com/bhanu-sri/CollegeOnlineVoting"
              demoLink="https://drive.google.com/file/d/1k96hDGMCOowOyd8JlNyaZvtDyemeoOBZ/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={b}
              isBlog={false}
              title="Chat with PDF"
              description="Developed a project that connects language processing with database management using PDF, Langchain, and AstraDB.
              This improves communication and simplifies data analysis. Additionally, the project efficiently handles queries within
              PDF documents, making information retrieval easier."
              ghLink="https://github.com/bhanu-sri/chat_with_pdf"
              demoLink="https://drive.google.com/file/d/1EIsa1clK8Lyg5Znk--evynfQ8VLkj2dz/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c}
              isBlog={false}
              title="Health Track Pro"
              description="Designed a comprehensive project gathering user data on habits, demographics, and symptoms to generate personalized
              health reports. Incorporated severity-based recommendations and actionable to-do lists to promote healthcare management."
              ghLink="https://github.com/bhanu-sri/Health-Track_Pro"
              demoLink="https://drive.google.com/file/d/1cE8K6m69p2SBlQ8AaYJlodSwODZh1-kv/view?usp=drive_link"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={d}
              isBlog={false}
              title="Face-Eye Detection"
              description="Created a live video streaming application with real-time face and eye detection capabilities using Python, Flask, and
              OpenCV’s Haarcascades XML models."
              ghLink="https://github.com/bhanu-sri/face-and-eye-detection"
              demoLink="https://drive.google.com/file/d/1Nt5CsNSmHPiQ0axG5duBB-ua3s57enaF/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={e}
              isBlog={false}
              title="EduFree"
              description="EduFree is a dynamic frontend project offering a comprehensive selection of classes spanning various subjects, interactive learning tools, and engaging quizzes. With its rich library of educational videos and HTML-based interface, users can seamlessly navigate through lessons, track their progress, and delve into a world of interactive learning experiences."
              demoLink="https://bhanu-sri.github.io/edufree/"
             ghLink="https://github.com/bhanu-sri/edufree"
          />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f}
              isBlog={false}
              title="Mental Health Fitness Tracker"
              description="A machine learning project focused on mental health fitness tracking, leveraging data analytics to monitor and improve users' emotional well-being. Utilizing cutting-edge algorithms and datasets, it offers accurate predictions and personalized insights to empower users in managing their emotional well-being effectively."
              ghLink="https://github.com/bhanu-sri/Mental_Fitness_Tracker"
               demoLink="https://github.com/bhanu-sri/Mental_Fitness_Tracker/blob/main/mental-fitness%20(1).ipynb"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
