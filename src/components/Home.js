import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import HoussameImg from "../components/images/dev13.png";
import DownloadCv from "../components/images/CV-English.pdf";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="home" id="home">
      <Container id="Container">
        <Row id="Row">
          <Col lg={6} className="text-center" id="col-1">
            <h3 data-aos="fade-right">Hello, my name is </h3>
            <h1 data-aos="fade-right">🅷🅾🆄🆂🆂🅰🅼🅴 🅴🆁🆁🅹🅴🅼</h1>
            <h4 data-aos="fade-right">I'm a front-end developer</h4>
            <Button
              data-aos="fade-right"
              size="lg"
              className="mt-3"
              id="btn-home1"
              href={DownloadCv}
              download
            >
              <Icon.Download size={25} /> Download CV
            </Button>
            <Button
              data-aos="fade-right"
              size="lg"
              className="mt-3"
              id="btn-home2"
              href="tel:+212623659049"
            >
              <Icon.Whatsapp size={25} /> Contact Me
            </Button>
            <div className="mt-4" id="social-icons">
              <a
                className="social-icon"
                href="https://www.facebook.com/houssame.errjem/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Facebook data-aos="fade-right" size={45} />
              </a>
              <a
                className="social-icon"
                href="https://www.instagram.com/houssame_errjem/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Instagram data-aos="fade-right" size={45} />
              </a>
              <a
                className="social-icon"
                href="https://twitter.com/errjem2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Twitter data-aos="fade-right" size={45} />
              </a>
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/houssame-errjem/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Linkedin data-aos="fade-right" size={45} />
              </a>
              <a
                className="social-icon"
                href="https://github.com/Errjem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Github data-aos="fade-right" size={45} />
              </a>
            </div>
          </Col>
          <Col lg={6} className="text-center" id="col-2">
            <img
              data-aos="fade-left"
              src={HoussameImg}
              alt="Developer"
              className="HoussameImg animated-border"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
