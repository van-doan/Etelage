import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Brand from '../../../assets/images/etelage-logo.png';
import AuthNav from "../../auth/Auth-Nav";

export default class NavBar extends React.Component {
  constructor() {
    super();
      this.state = {
        display: "flex",
        show: true,
        scrollPos: 0
      };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos
    });
  };

  render() {
    return (
        <Navbar collapseOnSelect bg="transparent" expand="lg" className={`navbar ${this.state.show ? "active" : "hidden"}`} style= {{ display: this.state.display }}>
          <Navbar.Brand href="/home" className="navbar-brand">
            <Link to='/'>
            <img 
              className="brand-logo" 
              src={Brand} 
              alt="brand logo"
            />
            </Link>
          </Navbar.Brand>
            <Navbar.Toggle className="navbar-toggler" aria-controls="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <Nav className="navbar-nav">
                  <Nav.Link 
                    className="nav-item"
                    >
                    <Link to='/home'>
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
  }