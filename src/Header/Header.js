import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import img from '../img/images (1) (1).png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        
            <Navbar   collapseOnSelect expand="lg" bg="primary " variant="dark" sticky="top "  >
                <Container>
                    <Navbar.Brand as={Link} to="/"><img height={60} width={50} src={img} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/login">Loign</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    
    );
};

export default Header;