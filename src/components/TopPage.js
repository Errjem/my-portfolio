import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PortfolioLogo from '../components/images/hoho.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faGear, faFolderOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import './TopPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function TopPage() {

    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 480px)');

        if (mediaQuery.matches) {
            AOS.init({ disable: 'mobile' });
        } else {
            AOS.init({ duration: 1500 });
        }
    }, []);

    return (
        <Navbar expand="lg" className='Navbar' expanded={expanded}>
            <Container>
                <Navbar.Brand data-aos="fade-right" href="/">
                    <img data-aos="fade-right" src={PortfolioLogo} alt="Logo" id='brand-img' /> <span id='top-page-name'>Houssame Errjem</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} id='Navbar-Toggle' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav data-aos="fade-left" className="ms-auto">
                        <Nav.Link href="#home" className="TopPage-items" style={{ color: 'wheat' }} onClick={handleToggle}><FontAwesomeIcon icon={faHouse} size="lg" style={{ color: "wheat" }} /> Home</Nav.Link>
                        <Nav.Link href="#about" className="TopPage-items" style={{ color: 'wheat' }} onClick={handleToggle}><FontAwesomeIcon icon={faUser} size="lg" style={{ color: "wheat" }} /> About</Nav.Link>
                        <Nav.Link href="#skills" className="TopPage-items" style={{ color: 'wheat' }} onClick={handleToggle}><FontAwesomeIcon icon={faGear} size="lg" style={{ color: "wheat" }} /> Skills</Nav.Link>
                        <Nav.Link href="#projects" className="TopPage-items" style={{ color: 'wheat' }} onClick={handleToggle}><FontAwesomeIcon icon={faFolderOpen} size="lg" style={{ color: "wheat" }} /> Projects</Nav.Link>
                        <Nav.Link href="#contact" className="TopPage-items" style={{ color: 'wheat' }} onClick={handleToggle}><FontAwesomeIcon icon={faPhone} size="lg" style={{ color: "wheat" }} /> Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopPage;
