import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarker,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaRegCopyright,
  FaLaptopCode,
  FaReact,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configure EmailJS
    emailjs.init("vYsUdrWvFVz2rdXXc");

    // Prepare the email template parameters
    const templateParams = {
      name,
      email,
      message,
    };

    // Send the email using EmailJS
    emailjs
      .send("service_xx8l9zr", "template_ukdosqa", templateParams)
      .then((response) => {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          setName("");
          setEmail("");
          setMessage("");
        });
      })
      .catch((error) => {
        console.error("Error occurred while sending message:", error);
        Swal.fire({
          title: "Error!",
          text: "Error occurred while sending message",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="contact" id="contact">
      <footer className="contact-footer">
        <Container>
          <Row className="justify-content-center contact-me-title">
            <h2 id="contact-me-title-text">Contact Me</h2>
            <h2 data-aos="fade-up" id="contact-me-title-text2">
              __you can send me a msg__
            </h2>
          </Row>
          <Row>
            <Col sm={6} md={4}>
              <h5 data-aos="fade-right" className="contact-heading">
                Contact Information
              </h5>
              <ul data-aos="fade-right" className="contact-info">
                <li>
                  <FaPhone /> +212623659049
                </li>
                <li>
                  <FaEnvelope /> errjem2@gmail.com
                </li>
                <li>
                  <FaMapMarker /> Mohammedia, Morocco
                </li>
              </ul>
            </Col>
            <Col sm={6} md={4}>
              <h5 data-aos="fade-up" className="contact-heading">
                Social Media
              </h5>
              <ul data-aos="fade-up" className="social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/houssame.errjem/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/houssame_errjem/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/errjem2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/houssame-errjem/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin /> Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Errjem"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Github
                  </a>
                </li>
              </ul>
            </Col>
            <Col sm={6} md={4}>
              <h5 data-aos="fade-left" className="contact-heading">
                Send a Message
              </h5>
              <Form data-aos="fade-left" onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
          <div data-aos="fade-up-right" className="copyright">
            <p>
              {" "}
              <FaLaptopCode /> Front-End Developer
            </p>
            <p>
              {" "}
              Created by <FaReact /> React.js{" "}
            </p>
            <p>
              {" "}
              <FaRegCopyright /> 2023 HOUSSAME ERRJEM , All rights reserved .
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Contact;
