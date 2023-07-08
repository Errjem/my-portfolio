import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import project1Image1 from "../components/images/landing-page.jpg";
import project1Image2 from "../components/images/login-form.jpg";
import project1Image3 from "../components/images/register-form.jpg";
import project2Image1 from "../components/images/solar-system.jpg";
import project2Image2 from "../components/images/solar-system1.jpg";
import project2Image3 from "../components/images/solar-system2.jpg";
import project2Image4 from "../components/images/solar-system3.jpg";
import project2Image5 from "../components/images/solar-system4.jpg";
import project2Image6 from "../components/images/solar-system5.jpg";
import project2Image7 from "../components/images/solar-system6.jpg";
import project2Image8 from "../components/images/solar-system7.jpg";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbWorld } from "react-icons/tb";

function Projects() {
  const projects = [
    {
      title: "Story Corner",
      description:
        "Story Corner is a modern blog application where users can create their own accounts, post their stories, like other users stories, and modify or delete their own stories",
      image: [project1Image1, project1Image2, project1Image3],
      web: "https://story-corner.netlify.app/",
      technologies:
        "HTML5 - CSS3 - JavaScript - MongoDB - Express.js - React.js - Redux - Node.js - Ant Design ...",
      repository: "https://github.com/Errjem/Story-Corner",
    },
    {
      title: "Solar System",
      description:
        "Explore the wonders of our Solar System through an interactive website showcasing the nine planets, the Sun, and Pluto, providing fascinating information about each celestial body.",
      image: [
        project2Image1,
        project2Image2,
        project2Image3,
        project2Image4,
        project2Image5,
        project2Image6,
        project2Image7,
        project2Image8,
      ],
      web: "https://solar-system-by-houssame.netlify.app/",
      technologies:
        "HTML5 - CSS3 - JavaScript - React.js - React Bootstrap - React Router ...",
      repository: "https://github.com/Errjem/solar-system",
    },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 480px)");

    if (mediaQuery.matches) {
      AOS.init({ disable: "mobile" });
    } else {
      AOS.init({ duration: 1500 });
    }
  }, []);

  return (
    <div className="projects" id="projects">
      <Container>
        <h2 className="text-center mb-5" id="project-title">
          My Projects
        </h2>
        <h2 data-aos="fade-up" className="project-title2">
          __all my works__
        </h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} md={6} className="mb-4">
              <Card
                data-aos="zoom-in-up"
                className="h-100"
                id="project-card"
        
              >
                <Carousel>
                  {project.image.map((image, imageIndex) => (
                    <Carousel.Item key={imageIndex}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={`Project ${index + 1} ${imageIndex + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Text>
                    {" "}
                    <span id="Technologies">Technologies</span> :{" "}
                    {project.technologies}
                  </Card.Text>
                  <Card.Text>
                    <a
                      href={project.web}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbWorld /> {project.web}
                    </a>
                  </Card.Text>
                  <Button
                    id="btn-projects"
                    href={project.repository}
                    target="_blank"
                  >
                    <FaGithub className="FaGithub" /> repository
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
