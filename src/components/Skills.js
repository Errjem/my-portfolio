import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMui,
  SiMysql,
  SiRedux,
  SiExpress,
  SiGithub,
  SiMicrosoftsqlserver,
  SiCanva,
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobephotoshop,
  SiDotnet,
  SiAntdesign,
  SiVuedotjs,
  SiAngular,
} from "react-icons/si";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="skills" id="skills">
      <h2 className="skills-heading">My Skills</h2>
      <h2 data-aos="fade-up" className="skills-heading2">
        __what i can do__
      </h2>
      <Row className="skills-row">
        <Col md={4} className="skills-column">
          <Card data-aos="fade-right" id="skills-card">
            <Card.Body>
              <Card.Title>
                <h1 className="skills-card-title">Front-end</h1>{" "}
              </Card.Title>
              <Card.Text className="skills-card-text">
                <FaHtml5 className="skills-icons" />
                <FaCss3Alt className="skills-icons" />
                <FaJs className="skills-icons" />
                <FaReact className="skills-icons" />
                <SiRedux className="skills-icons" />
                <SiVuedotjs className="skills-icons" />
                <SiAngular className="skills-icons" />
                <FaBootstrap className="skills-icons" />
                <SiMui className="skills-icons" />
                <SiAntdesign className="skills-icons" />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="skills-column">
          <Card data-aos="fade-up" id="skills-card">
            <Card.Body>
              <Card.Title>
                <h1 className="skills-card-title">Back-end</h1>{" "}
              </Card.Title>
              <Card.Text className="skills-card-text">
                <FaNodeJs className="skills-icons" />
                <SiMongodb className="skills-icons" />
                <SiExpress className="skills-icons" />
                <TbApi className="skills-icons" />
                <SiDotnet className="skills-icons" />
                <SiMicrosoftsqlserver className="skills-icons" />
                <SiMysql className="skills-icons" />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="skills-column">
          <Card data-aos="fade-left" id="skills-card">
            <Card.Body>
              <Card.Title>
                <h1 className="skills-card-title">Others</h1>{" "}
              </Card.Title>
              <Card.Text className="skills-card-text">
                <FaGitAlt className="skills-icons" />
                <SiGithub className="skills-icons" />
                <SiCanva className="skills-icons" />
                <SiAdobeillustrator className="skills-icons" />
                <SiAdobexd className="skills-icons" />
                <SiAdobephotoshop className="skills-icons" />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
