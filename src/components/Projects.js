import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import project1Image1 from '../components/images/landing-page.jpg'
import project1Image2 from '../components/images/login-form.jpg'
import project1Image3 from '../components/images/register-form.jpg'
import project2Image1 from '../components/images/portfolio1.jpg'
import project2Image2 from '../components/images/portfolio2.jpg'
import project2Image3 from '../components/images/portfolio3.jpg'
import project2Image4 from '../components/images/portfolio4.jpg'
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TbWorld } from 'react-icons/tb';

function Projects() {
    const projects = [
        {
            title: 'Story Corner',
            description: 'Story Corner is a modern blog application where users can create their own accounts, post their stories, like other users stories, and modify or delete their own stories',
            image: [project1Image1, project1Image2, project1Image3],
            web: 'https://story-corner.netlify.app/',
            technologies: 'HTML5 - CSS3 - JavaScript - MongoDB - Express.js - React.js - Redux - Node.js - Ant Design',
            githubRepoLink: 'https://github.com/Errjem/Story-Corner',
        },
        {
            title: 'My Portfolio',
            description: "Discover the power of the MERN stack through my ReactJS-powered portfolio, where I showcase my expertise in building dynamic and robust web applications with MongoDB, Express, React, and Node.js.",
            image: [project2Image1, project2Image2, project2Image3, project2Image4],
            web: 'https://story-corner.netlify.app/',
            technologies: 'HTML5 - CSS3 - JavaScript - React.js - Bootstrap',
            repository: 'https://github.com/example/project2',
        },
    ];

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 480px)');

        if (mediaQuery.matches) {
            AOS.init({ disable: 'mobile' });
        } else {
            AOS.init({ duration: 1500 });
        }
    }, []);

    return (
        <div className='projects' id='projects'>
            <Container>
                <h2 className="text-center mb-5" id='project-title'>My Projects</h2>
                <h2 data-aos="fade-up" className="project-title2">__all my works__</h2>
                <Row className="justify-content-center">
                    {projects.map((project, index) => (
                        <Col key={index} md={6} className="mb-4">
                            <Card data-aos="zoom-in-up" className="h-100" id='project-card' style={{ border: '4px solid darkred', backgroundColor: 'transparent' }}>
                                <Carousel>
                                    {project.image.map((image, imageIndex) => (
                                        <Carousel.Item key={imageIndex}>
                                            <img className="d-block w-100" src={image} alt={`Project ${index + 1} ${imageIndex + 1}`} />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                    <Card.Text> <span id='Technologies'>Technologies</span>  : {project.technologies}</Card.Text>
                                    <Card.Text>
                                        <a href={project.web} target="_blank" rel="noopener noreferrer">
                                            <TbWorld /> {project.web}
                                        </a>
                                    </Card.Text>
                                    <Button id='btn-projects' href={project.repository} target="_blank">
                                        <FaGithub className='FaGithub' />  repository
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
