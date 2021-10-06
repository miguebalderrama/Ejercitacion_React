import React from 'react'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import Logo from './tiendamia.png'

import "./NavBar.css"


function NavBar() {
    return (
        <Navbar className="navbarme"  expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          <Image src={Logo} rounded />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Ofertas de la semana</Nav.Link>
              <Nav.Link href="#link">Como comprar</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tecnologia</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Ropa</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Muebles</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Dia de la madre</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )
}

export default NavBar
