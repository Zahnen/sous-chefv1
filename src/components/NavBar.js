import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from './../img/Sous.png';



function NavBar() {

  return(
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand as={Link} to="/"><img src={Logo} alt="Sous Chef Logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
            <Nav.Link>Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default NavBar;