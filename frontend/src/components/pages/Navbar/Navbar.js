import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Brand from '../../../assets/images/etelage-logo.png';
import AuthNav from "../../auth/Auth-Nav";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect bg="transparent" expand="lg" className="navbar">
        <Navbar.Brand href="/home" className="navbar-brand">
          <img 
            className="brand-logo" 
            src={Brand} 
            alt="brand logo"  
          />
        </Navbar.Brand>
          <Navbar.Toggle className="navbar-toggler" aria-controls="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <Nav className="navbar-nav">
                <Nav.Link 
                  className="nav-item"
                  >
                  <Link to='/'>
                    HOME
                  </Link>
                </Nav.Link>
                <Nav.Link 
                  className="nav-item"
                  >
                  <Link to='/exhibit'>
                    EXHIBIT
                  </Link>
                </Nav.Link>
                <Nav.Link 
                  className="nav-item"
                  >
                  <Link to='/search'>
                    EXPLORE
                  </Link>
                </Nav.Link>
                <Nav.Link 
                  className="nav-item"
                  >
                  <Link to='/user'>
                    PROFILE
                  </Link>
                </Nav.Link>
              </Nav>
              <Nav className="auth-nav">
                <Nav.Link 
                  className="nav-item nav-item-auth">
                  <AuthNav />
                </Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  )
}

export default NavBar;