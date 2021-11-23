import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../App.css';

const Navibar = () => {
    return (
        <Navbar className="navibar" variant="light">
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Resources">
                <Nav.Link>Resources</Nav.Link>
            </LinkContainer>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navibar;