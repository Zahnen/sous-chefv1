import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from './../img/Sous.png';
import firebase from "firebase/app";


function NavBar() {

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return(
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand as={Link} to="/"><img src={Logo} alt="Sous Chef Logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/myrecipes">My Recipes</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
            <Nav.Link onClick={doSignOut}>Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default NavBar;