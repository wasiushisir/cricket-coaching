import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import img from '../img/images (1) (1).png'
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut=()=>
    {
        signOut(auth);
    }
    return (
        
            <Navbar   collapseOnSelect expand="lg" bg="primary " variant="dark" sticky="top "  >
                <Container>
                    <Navbar.Brand as={Link} to="/"><img height={60} width={50} src={img} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#feedbacks">Feedbacks</Nav.Link>

                        </Nav>
                        <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            {user? <button onClick={logOut} className='btn btn-danger'>SignOut</button>:
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    
    );
};

export default Header;