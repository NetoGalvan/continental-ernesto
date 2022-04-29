import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Container fluid>
            <Nav className="me-auto">
                <Link to="/" className='navbar-brand' > Continental </Link>
                <Link to="/cupones-vigentes" className='navbar-brand' > Cupones </Link>
            </Nav>
        </Container>
    </Navbar>

  )
}

export default NavBar;
