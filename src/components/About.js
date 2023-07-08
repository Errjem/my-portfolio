import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import AboutMeImg from "../components/images/dev7.png";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1500, disable: "phone" });
  }, []);

  return (
    <div className="about" id="about">
      <Container>
        <Row className="justify-content-center about-me-title">
          <h2 id="about-me-title-text">About Me</h2>
          <h2 data-aos="fade-up" id="about-me-title-text2">
            __who am i__
          </h2>
        </Row>
        <Row className="mt-4">
          <Col md={4} className="text-center">
            <Card
              className="about-me-card-img"
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              <Card.Img
                data-aos="fade-right"
                src={AboutMeImg}
                className="about-me-image"
              />
            </Card>
          </Col>
          <Col md={8}>
            <Card
              className="about-me-card"
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              <Card.Body>
                <Card.Title
                  data-aos="fade-down-left"
                  className="about-me-card-title"
                >
                  I'm Houssame, 25 years old ! 
                </Card.Title>
                <Card.Text
                  data-aos="fade-up-left"
                  className="about-me-card-text"
                >
                  Passionate front-end developer specializing in React.js, with
                  a keen eye for creating intuitive and visually appealing user
                  interfaces. With a strong foundation in web development, I
                  bring creativity and problem-solving skills to every project.
                  Committed to delivering high-quality code and collaborating
                  with teams to bring ideas to life. <br />
                  I am open to job opportunities and would love to be part of
                  your team. <br /> 
                  Feel free to browse through my portfolio to explore my
                  previous projects and get a glimpse of my coding skills.{" "}
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
