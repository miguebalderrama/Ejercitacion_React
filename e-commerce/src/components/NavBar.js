import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Image, InputGroup, FormControl } from "react-bootstrap";
import Logo from "./tiendamia.png";

import "./NavBar.css";
import CartWidget from "./cartwidget/CartWidget";

function NavBar() {
  return (
    <Navbar className="navbarme" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={Logo} rounded />
        </Navbar.Brand>
        <InputGroup size="sm" className="formMain mb-3">
          <FormControl
            placeholder="Busca entre millones de productos"
            aria-label="Username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">Registrate</Nav.Link>
            <NavDropdown title="Mi cuenta" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tecnologia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ropa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Muebles</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Dia de la madre
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">
             
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget  tittleCart="Carrito" className="card-widget" />
      </Container>
    </Navbar>
  );
}

export default NavBar;
