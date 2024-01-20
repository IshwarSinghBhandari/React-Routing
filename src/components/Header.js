
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-primary-subtle">
    <Container>
    <Link to={"/Home"}className='text-decoration-none '> <Navbar.Brand href="#home">SHOPER-RUN</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to={"/Home"} className='text-decoration-none '><Nav.Link href="#home">Home</Nav.Link></Link>
        
          <NavDropdown title="Mens" id="basic-nav-dropdown">
          <Link to={"/Showmore"} className='text-decoration-none '><NavDropdown.Item href="#action/3.1"> Men Shoes</NavDropdown.Item></Link>
          <Link to={"/Showmore"} className='text-decoration-none '><NavDropdown.Item href="#action/3.1"> Men Cloths</NavDropdown.Item></Link>
                   
          </NavDropdown>

          <NavDropdown title="Womens" id="basic-nav-dropdown">
          <Link to={"/Showmore"} className='text-decoration-none '><NavDropdown.Item href="#action/3.1"> Womens Shoes</NavDropdown.Item></Link>
          <Link to={"/Showmore"} className='text-decoration-none '><NavDropdown.Item href="#action/3.1"> Women Cloths</NavDropdown.Item></Link>
               
          </NavDropdown>

          <NavDropdown title="Login" id="basic-nav-dropdown">
            <Link to={'/Login'} className='text-decoration-none '><NavDropdown.Item href="#action/3.1"> LOGIN</NavDropdown.Item></Link>
            <Link to={'/Signup'} className='text-decoration-none '><NavDropdown.Item href="#action/3.2">SIGN-UP</NavDropdown.Item> </Link>          
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
